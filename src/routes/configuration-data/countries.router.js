var express = require('express')
var router = express.Router()

const { countriesService } = require("../../services");
const { userMiddleware } = require('../middlewares');

const { ApiResponse } = require('../../helpers');
const { ResponseMessages } = require('../../config')


router.use( userMiddleware.auth );

// get Countrues
router.get('/', async function (req, res, next) {
    let params = req.query;
    try {
        let result = await countriesService.findAndPaginate( params );
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
    } catch (error) {
        return next(error)
    }
});

// get All countries without limit
router.get('/all', async function (req, res, next) {
    let params = req.query;
    try {
        let result = await countriesService.findAll( params );
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
    } catch (error) {
        return next(error)
    }
});

// get count of countriess
router.get('/count', async function (req, res, next) {
    let params = req.query;
    try {
        let result = await countriesService.getCount( params );
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
       
    } catch (error) {
        return next(error)
    }
});

// get Country Object
router.get('/:id', async function (req, res, next) {
    let _id = req.params.id;
    try {
        let result= await countriesService.get( _id );
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
    } catch (error) {
        return next(error)
    }
});

// add Country
router.post('/', async function(req, res, next){
    let params = req.body;
    params.created_by = req.user._id;
    try {
        let result= await countriesService.createNew( params );
        return ApiResponse(res, 200, true, ResponseMessages.recordCreated, result )
    } catch (error) {
        return next(error)
    }
});

// Update a Country
router.post('/:id', async function(req, res, next){
    let id = req.params.id;
    let params = req.body;
    try {
        let result = await countriesService.updateNew( id, params );
        return ApiResponse(res, 200, true, ResponseMessages.recordUpdated, result )
    } catch (error) {
        return next(error)
    }
});

// // Delete Country
router.delete('/:id', async  function(req, res, next){
    let id = req.params.id;
    try {
        let result= await countriesService.delete( id );
        return ApiResponse(res, 200, true, ResponseMessages.recordDeleted, result )
    } catch (error) {
        return next(error)
    }
});
    
module.exports = router;