const multer = require('multer')
const fs = require('fs')
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        if(!fs.existsSync(__dirname +'/../../../tmp')){
            fs.mkdirSync(__dirname+'/../../../tmp')
        }
        cb(null, './tmp')
    },
    filename: function(req, file, cb){
        cb(null, Date.now()+'-'+file.originalname);
    }
})
var upload = multer({
    storage,
    fileFilter: function(req, file, cb){
        if( file.mimetype !== 'image/jpeg' 
         && file.mimetype !== 'image/png' 
         && file.mimetype !== 'image/jpg' 
         && file.mimetype !== 'image/gif' 
         && file.mimetype !== 'image/svg+xml'){
                return cb(new Error('Only images are allowed'));
         }
        cb(null, true);
    }
})

module.exports = upload