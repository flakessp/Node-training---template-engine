FROM node:6.9
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app


RUN node app.js

EXPOSE 8080

CMD [ "node", "app.js" ]
