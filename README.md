# image-nudity

Service in  Node JS to classify images.

## Required 

Windows

Install Visual Studio Community to compile package @tensorflow/tfjs-node and @tensorflow/tfjs-node-gpu

## Installation
```bash
npm install
```
## Command line

First time when you run, after than put the file on .gitignore
```
pm2 ecosystem init (first time, when you run)
```
Start service
```
pm2 start app
```
Restart service
```
pm2 restart app
```
Stop service
```
pm2 stop app
```
## Endpoints

Classify image with extension JPG, PNG, GIF, BMP
```
http://[HOST]:[PORT]/image/?url=[IMAGE_URL]
```
Classify GIF Animated frame by frame
```
http://[HOST]:[PORT]/imagegif/?url=[IMAGE_URL]
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)