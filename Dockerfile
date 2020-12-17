FROM node:10-alpine

# Create app directory
RUN mkdir -p /home/app
WORKDIR /home/app

# Install app dependencies
COPY package.json /home/app
COPY package-lock.json /home/app
RUN npm install;
# Bundle app source
COPY . /home/app
RUN npm run build;
EXPOSE 3000
CMD npm run server