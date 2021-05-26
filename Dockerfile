FROM node:lts
WORKDIR /var/www/html
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install pm2 -g
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
COPY . .

EXPOSE 8089
CMD ["pm2-runtime", "app.js"]