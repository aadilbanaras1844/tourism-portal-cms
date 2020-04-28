var express = require('express')
var router = express.Router()

const { medicalInsuranceService } = require("../../services");
const { userMiddleware } = require('../middlewares');

const { ApiResponse } = require('../../helpers');
const { ResponseMessages } = require('../../config')

router.use( userMiddleware.auth );


router.get('/', async function (req, res, next) {
    let params = req.query;
    let populate = [
        {column: 'country_id', field: 'name'}
    ]
    try {
        let result = await medicalInsuranceService.findAndPaginate( params, populate );
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
    } catch (error) {
        return next(error)
    }
});

router.get('/count', async function (req, res, next) {
    let params = req.query;
    try {
        let result = await medicalInsuranceService.getCount( params );
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
    } catch (error) {
        return next(error)
    }
});

router.get('/:id', async function (req, res, next) {
    let _id = req.params.id;
    try {
        let result= await medicalInsuranceService.get( _id );
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
    } catch (error) {
        return next(error)
    }
});

router.post('/', async function(req, res, next){
    let params = req.body;
    params.created_by = req.user._id;
    try {
        let result= await medicalInsuranceService.create( params );
        return ApiResponse(res, 200, true, ResponseMessages.recordCreated, result )
    } catch (error) {
        return next(error)
    }
});

router.post('/:id', async function(req, res, next){
    let id = req.params.id;
    let params = req.body;
    try {
        let result = await medicalInsuranceService.update( id, params );
        return ApiResponse(res, 200, true, ResponseMessages.recordUpdated, result )
    } catch (error) {
        return next(error)
    }
});

router.delete('/:id', async  function(req, res, next){
    let id = req.params.id;
    try {
        let result= await medicalInsuranceService.delete( id );
        return ApiResponse(res, 200, true, ResponseMessages.recordDeleted, result )
    } catch (error) {
        return next(error)
    }
});
    
module.exports = router;