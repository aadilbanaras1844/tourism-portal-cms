
const ObjectId = require('mongoose').Types.ObjectId;

var Cruds = function(Table,Columns){
    this._model = Table ;
    this._keys = Object.keys(Columns);
    this._attributes = Columns ;  
}

Cruds.prototype.create = function( data ){
    var scope = this;
    return new Promise(async function(resolve, reject){
        try {
            let createObject = new scope._model( data );
            const result = await createObject.save();
            return resolve(result);
        } catch (error) {
            return reject(error);
        }
    })
}

Cruds.prototype.update = function(id, params){
    var scope = this;
    return new Promise(async function(resolve, reject){
        try {
            let result = await scope._model.updateOne({_id: ObjectId(id)}, {$set: params});
            return resolve(result);
        } catch (error) {
            return reject( error );
        }
    })
}

Cruds.prototype.get = function( id ){
    var scope = this;
    return new Promise(async function(resolve, reject){
        try {
            let result = await scope._model.findById(ObjectId(id));
            return resolve( result );    
        } catch (error) {
            return reject( error )
        }
    })
}

Cruds.prototype.delete = function( id ){
    var scope = this;
    return new Promise(async function(resolve, reject){
        try {
            let result = await scope._model.updateOne({_id: ObjectId(id)}, {$set: {is_deleted: true}});
            return resolve(result);
        } catch (error) {
            return reject( error );
        }
    })
}

Cruds.prototype.hardDelete = function( id ){
    var scope = this;
    return new Promise(async function(resolve, reject){
        try {
            let result = await scope._model.remove({_id: ObjectId(id)});
            return resolve(result);
        } catch (error) {
            return reject( error );
        }
    })
}

Cruds.prototype.findAll = function( params= {} ){
    var scope = this;
    return new Promise(async function(resolve, reject){
        try {
            let { cond, sort } = scope.convertParams( params );
            let result = await scope._model
                .find( cond )
                .sort(sort);
            return resolve(result );    
        } catch (error) {
            return reject( error )
        }
    })
}

Cruds.prototype.findOne = function( condition= {}){
    var scope = this;
    return new Promise(async function(resolve, reject){
        try {
            let { cond } = scope.convertParams( params );
            let result = await scope._model.findOne( cond );
            return resolve(result );    
        } catch (error) {
            return reject( error )
        }
    })
}

Cruds.prototype.findAndPaginate = function( params, populate=[] ){
    var scope = this;
    return new Promise(async function(resolve, reject){
        try {
            let { cond, limit, skip, sort, page } = scope.convertParams( params );
            let {pages, count} = await scope.makePages(cond, limit);
            let _query = scope._model.find( cond );
            if(populate.length > 0){
                for (let ind = 0; ind < populate.length; ind++) {
                    const pop = populate[ind];
                    _query.populate(pop.column, pop.field)
                }
            }
                // .populate(populate.column, populate.field)
                let result = await _query.sort(sort)
                .skip(skip)
                .limit(limit);
                
            return resolve({
                records: result,
                pages: pages,
                count: count,
                currentPage: page
            });    
        } catch (error) {
            return reject( error )
        }
    })
}

Cruds.prototype.textSearchWithPagination = function( params, populate=[] ){
    var scope = this;
    return new Promise(async function(resolve, reject){
        try {
            let { cond, limit, skip, sort, page } = scope.convertParams( params );
            let {pages, count} = await scope.makePages(cond, limit);
            let _query = scope._model.find( cond );
            if(populate.length > 0){
                for (let ind = 0; ind < populate.length; ind++) {
                    const pop = populate[ind];
                    _query.populate(pop.column, pop.field)
                }
            }
                // .populate(populate.column, populate.field)
                let result = await _query.sort(sort)
                .skip(skip)
                .limit(limit);
                
            return resolve({
                records: result,
                pages: pages,
                count: count,
                currentPage: page
            });    
        } catch (error) {
            return reject( error )
        }
    })
}

Cruds.prototype.getCount = function( condition ){
    var scope = this;
    return new Promise(async function(resolve, reject){
        let { cond } = scope.convertParams( condition );
        let count = await scope._model
                .find( cond )
                .count();
        return resolve( count );
    })
}

Cruds.prototype.createOrUpdate = async function(params){
    let scope = this;
    return new Promise(async function(resolve, reject){
        try {
            if(!params._id || params._id == ''){
                delete params._id;
                let data = await scope.create( params );
                return resolve(data)
            }
            else {
                let data = await scope.update(params._id, params)
                return resolve(data)
            }
        } catch (error) {
            return reject(error)
        }
        
    })
    

}





// helper functions 

Cruds.prototype.convertParams = function( params ){
    let page=1, limit=10, skip=0, sort={'created_at':-1};
    let cond = params;

    cond.is_deleted = false;
    
    if(params.limit && params.limit != '')
        limit = parseInt( params.limit );
    if(params.page  && params.page != ''){
        skip = (parseInt(params.page) - 1) * limit;
        page = parseInt( params.page )
    }
    delete cond.limit;
    delete cond.page;

    Object.keys(params).forEach(element => {
        if( typeof(params[element]) == 'string' && params[element] == '')
            delete params[element]
    });

    if(cond.query){
        cond [ '$text' ] = {$search: cond.query};
        delete cond['query']
    }
    return {
        cond, limit, skip, sort, page
    }
}

Cruds.prototype.makePages = function(cond, limit){
    let scope = this;
    let count = 0;
    return new Promise(async function(resolve, reject){
        try {
            count = await scope.getCount(cond);
            if(count == 0)
                return resolve({ pages: [], count: count })
            let pageNum = count / limit ;
            if( count % limit != 0 )
                pageNum = pageNum + 1;
                let pagesArr = []
                for (let i = 1; i <= pageNum; i++) {
                    pagesArr.push( i )
                }
                return resolve({ pages: pagesArr, count: count })
            
        } catch (error) {
            return resolve({ pages: [], count: count })
        }
    })
}

module.exports= Cruds;

