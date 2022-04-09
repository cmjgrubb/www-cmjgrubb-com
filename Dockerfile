FROM node
WORKDIR /
COPY package*.json ./
RUN npm install
RUN npm install ejs
RUN npm install http-errors
COPY . .
EXPOSE 3000
CMD ["npm", "start"]