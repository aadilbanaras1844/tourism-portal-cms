
const userRouter = require('./user.router');
const fileUploadRouter = require('./fileupload.router');
const blogsDataRouter = require('./blog-data.router');
const allImagesRouter = require('./all-images.router');

const configurationDataRoutes = require('./configuration-data');
const accessDataRoutes = require('./access-data');

module.exports = function(app){
    

    configurationDataRoutes(app);
    accessDataRoutes(app);

    app.use('/api/user', userRouter);
    app.use('/api', fileUploadRouter);
    app.use('/api/blogs-data', blogsDataRouter);
    app.use('/api/all-images', allImagesRouter);
    
    // Error 404 Catch
    // app.use(function(req, res, next) {
    //     return res.status(404).send({ message: 'Route'+req.url+' Not found.' });
    // });
}

