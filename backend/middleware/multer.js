const multer = require('multer');

const storage = multer.diskStorage({
    filename:function(req,file,callback){
        callback(null,file.originalname);
    }
})

const upload = multer({storage});

module.exports = upload;

// const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: function(req, file, callback) {
//         // Specify the folder where you want to store the files
//         callback(null, 'uploads/');
//     },
//     filename: function(req, file, callback) {
//         // Use the original file name
//         callback(null, file.originalname);
//     }
// });

// // Pass the storage configuration to multer
// const upload = multer({ storage: storage });

// module.exports = upload;