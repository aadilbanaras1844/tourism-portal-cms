
var express = require('express')
var router = express.Router()

var multer  = require('multer');
const multerGoogleStorage = require("multer-google-storage");


var upload = multer({
    // dest: 'uploads/',
    storage: multerGoogleStorage.storageEngine()
})
const { generateRandomImageName, ApiResponse } = require('./../helpers')
var fs =  require("fs");
const { ResponseMessages } = require('./../config');

const { allImagesService }  = require('./../services')

router.post('/image/upload', upload.single('image'), async function(req, res, next){
    return res.json({
        data: req.file
    })
})
router.post('/images/upload', upload.array('images', 2), function(req, res, next){
    return res.json({
        data: req.files
    })
})
router.post('/video/upload', upload.single('video'), function(req, res, next){
    return res.json({
        data: req.file
    })
})


router.post('/imageb64/upload', async function(req, res, next){
    try {
     let b64 = req.body.b64;
     if(!b64)
        return ApiResponse(res, 400, false, 'missing b64', {status: false} )
     var base64Data = b64.split(',')[1]
     var filename = generateRandomImageName();
     fs.writeFile('uploads/'+filename, base64Data, 'base64', (err) => {
         if (err){
             return next(rrr);
         } 
         return ApiResponse(res, 200, true, ResponseMessages.recordCreated, {filename} )
     });
 
    } catch (error) {
        console.log('ddd ', error)
       return next(error)
    }
     
 })


module.exports = router