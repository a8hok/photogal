const express = require('express');
const cloudinary = require('cloudinary').v2;

const app = express();
cloudinary.config({
    cloud_name: '********', 
    api_key: '*******', 
    api_secret: '******' 
});

app.get('/', async (req, res) => {
    try {
        const response = await cloudinary.uploader.upload("image/img.png");
        res.send(response);
    }
    catch(error) {
        res.send((erro))
    }
});

app.listen(9000, () => {
    console.log('servert at 9000')
})