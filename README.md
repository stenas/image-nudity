# image-nudity
Service in  Node JS to classify images.
## Usage
```
docker build . -t image-nudity -f Dockerfile
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