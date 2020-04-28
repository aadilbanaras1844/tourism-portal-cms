
var express = require('express')
var router = express.Router()
const { ApiResponse } = require('./../helpers');
const { ResponseMessages } = require('./../config')

let { userService } = require("./../services")

const { userMiddleware } = require('./middlewares');

router.post('/register', async function (req, res, next) {
    let params = req.body;
    try {
        const output = await userService.createUser( params );
        return res.status(200).json({status: true, output: {stauts: true, _id: output._id}})    
    } catch (error) {
        return next( error )
    }
    
});

router.post('/login', async function (req, res, next) {
    const {email, password} = req.body;
    try {
        let user = await userService.loginUser(email, password)
        return res.json({status: 'login', data: user})    
    } catch (error) {
        return next( error )
    }
});

router.post('/admin-login', async function (req, res, next) {
    const {email, password} = req.body;
    try {
        let user = await userService.loginAdmin(email, password);
        if( !user ){
            return ApiResponse(res, 400, false, ResponseMessages.invalidLoginCredentials, {} )
        }
        return ApiResponse(res, 200, true, ResponseMessages.loginSuccess, user )
    } catch (error) {
        return next( error )
    }
});

router.get('/role', userMiddleware.auth, function (req, res) {
    let {
        is_admin,
        is_manager,
        is_traveller,
        is_organiser,
        is_super_admin
    } = req.user;
    let roles = [];
    if(is_admin && is_admin == true)
        roles.push( 'is_admin' );
    if(is_manager && is_manager == true)
        roles.push( 'is_manager' );
    if(is_traveller && is_traveller == true)
        roles.push( 'is_traveller' );
    if(is_organiser && is_organiser == true)
        roles.push( 'is_organiser' );
    if(is_super_admin && is_super_admin == true)
        roles.push( 'is_super_admin' )
    return ApiResponse(res, 200, true, ResponseMessages.dataFetched, roles )

});

router.get('/users', userMiddleware.auth, function (req, res) {
    
});



module.exports = router