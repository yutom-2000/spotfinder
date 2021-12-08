const model = require("./image-model");

const findImageById = (id) => 
    model.findById(id);


const createImage = (image) => 
    model.create(image);


const updateImage = (image) => 
    model.updateOne({_id: image._id}, {
        $set: image
    });


const deleteImage = (id) => 
    model.deleteOne({_id: id});  

module.exports = {
    findImageById,
    createImage,
    updateImage,
    deleteImage,
}
