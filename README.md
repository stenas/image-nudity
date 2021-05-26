# image-nudity

Service in  Node JS to classify images.

## Required 

Windows

Install Visual Studio Community to compile package @tensorflow/tfjs-node and @tensorflow/tfjs-node-gpu

## Installation
```bash
npm install
```
## Usage
To classify image with extension JPG, PNG, GIF, BMP
```
Endpoint : http://[HOST]:[PORT]/image/?url=[IMAGE_URL]
```
To classify GIF Animated frame by frame
```
Endpoint : http://[HOST]:[PORT]/imagegif/?url=[IMAGE_URL]
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)