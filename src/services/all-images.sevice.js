

const { allImagesModel, allImagesSchema } = require("../models");
const ObjectId = require('mongoose').Types.ObjectId;
const Cruds = require('./Cruds');


let myService = new Cruds( allImagesModel, allImagesSchema )


myService.updateImages = function( id, sections ){
    return new Promise(function(resolve, reject){
        let promiseArr = []
        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            section.rec_id = id;
            promiseArr.push(
                myService.createOrUpdate(section)
            )   
        }
        Promise.all(promiseArr).then(function(values) {
            return resolve(values)
        }).catch(error => { 
            console.log(error)
            return reject(error)
        });;
        
    })
}



module.exports = myService;

