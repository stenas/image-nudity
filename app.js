const express = require('express')
const axios = require('axios') //you can use any http client
const tf = require('@tensorflow/tfjs-node')
const nsfw = require('nsfwjs')

const app = express()
const port = 8089

// check url is valid
function checkIsUrl (value){
    let pattern = new RegExp('^(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})');
    return pattern.test(value);
}

app.get('/', (req, res) => {
    res.send("<h1>Image Nudity App</h1>")
});

//endpoint JPG, PNG, GIF, BMP
app.get('/image', (req, res) => {
    // function classify image (jpg,png)
    async function nudityImage(url) {
        const pic = await axios.get(url, {
            responseType: 'arraybuffer',
        })
        const model = await nsfw.load() // To load a local model, nsfw.load('file://./path/to/model/')
        // Image must be in tf.tensor3d format
        // you can convert image to tf.tensor3d with tf.node.decodeImage(Uint8Array,channels)
        const image = await tf.node.decodeImage(pic.data,3)
        const predictions = await model.classify(image)
        image.dispose() // Tensor memory must be managed explicitly (it is not sufficient to let a tf.Tensor go out of scope for its memory to be released).
        // json response
        res.send(JSON.stringify({error:false,message:'image score',data:predictions}))
    }

    //validate url
    if(checkIsUrl(req.query.url)){
        //load function
        nudityImage(req.query.url);
    }
    else{
        res.send(JSON.stringify({error:true,message:'Invalid parameter',data:[]}));
    }
})

//endpoint GIF Animated
app.get('/imagegif', (req, res) => {

    // function classify image only GIF
    async function nudityImageGIF(url) {
        const pic = await axios.get(url, {
            responseType: 'arraybuffer',
        })
        const model = await nsfw.load() // To load a local model, nsfw.load('file://./path/to/model/')
        const predictions = await model.classifyGif(pic.data)
        //image.dispose() // Tensor memory must be managed explicitly (it is not sufficient to let a tf.Tensor go out of scope for its memory to be released).
        // json response
        res.send(JSON.stringify({error:false,message:'image score',data:predictions}))
    }

    //validate url
    if(checkIsUrl(req.query.url)){
        //load function
        nudityImageGIF(req.query.url);
    }
    else{
        res.send(JSON.stringify({error:true,message:'Invalid parameter',data:[]}));
    }
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})