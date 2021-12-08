const dao = require("./image-dao");
const storage = require("./storage");
const multer = require('multer');

module.exports = (app) => {
    const findImageById = (req, res) => {
        dao.findImageById(req.imageId)
        .then(image => {
            console.log(image);
            res.send(image)
        });
    }

    const createImage = (req, res) => {
        let upload = multer({storage: storage}).single('profile-picture');

        upload(req, res, (err) => {
            console.log(err);
        });

        dao.createImage(req, res)
        .then(image => res.json(image));
    };

    app.get('/api/images/:imageId', findImageById);
    app.post('/api/images',  createImage);
}

