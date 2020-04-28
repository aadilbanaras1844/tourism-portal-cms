var express = require('express')
var router = express.Router()

const { allImagesService } = require("../services");
const { userMiddleware } = require('./middlewares');

const { ApiResponse } = require('./../helpers');
const { ResponseMessages } = require('./../config')

router.use( userMiddleware.auth );


router.get('/:id', async function (req, res, next) {
    let _id = req.params.id;
    try {
        let result= await allImagesService.findAll( {rec_id: _id} );
        result = result.map ( (obj) => {return {
            image: obj.image,
            image_type: obj.image_type,
            sequence: obj.sequence,
            _id: obj._id
        }} )
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
    } catch (error) {
        return next(error)
    }
});

router.post('/:id', async function(req, res, next){
    let id = req.params.id;
    let params = req.body.images;
    try {
        let result = await allImagesService.updateImages( id, params );
        return ApiResponse(res, 200, true, ResponseMessages.recordUpdated, result )
    } catch (error) {
        return next(error)
    }
});

router.delete('/:id', async  function(req, res, next){
    let id = req.params.id;
    try {
        let result= await allImagesService.hardDelete( id );
        return ApiResponse(res, 200, true, ResponseMessages.recordDeleted, result )
    } catch (error) {
        return next(error)
    }
});
    
module.exports = router;