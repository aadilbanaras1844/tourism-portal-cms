var express = require('express')
var router = express.Router()

const { blogDataService } = require("../services");
const { userMiddleware } = require('./middlewares');

const { ApiResponse } = require('./../helpers');
const { ResponseMessages } = require('./../config')

router.use( userMiddleware.auth );


router.get('/:id', async function (req, res, next) {
    let _id = req.params.id;
    try {
        let result= await blogDataService.findAll( {rec_id: _id} );
        result = result.map ( (obj) => {return {
            text1: obj.text1,
            text2: obj.text2,
            sequence: obj.sequence,
            section_type: obj.section_type,
            _id: obj._id
            // rec_id: obj._id
        }} )
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
    } catch (error) {
        return next(error)
    }
});

router.post('/:id', async function(req, res, next){
    let id = req.params.id;
    let params = req.body.sections;
    try {
        let result = await blogDataService.updateBlogsData( id, params );
        return ApiResponse(res, 200, true, ResponseMessages.recordUpdated, result )
    } catch (error) {
        return next(error)
    }
});

router.delete('/:id', async  function(req, res, next){
    let id = req.params.id;
    try {
        let result= await blogDataService.hardDelete( id );
        return ApiResponse(res, 200, true, ResponseMessages.recordDeleted, result )
    } catch (error) {
        return next(error)
    }
});
    
module.exports = router;