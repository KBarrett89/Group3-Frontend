FROM node
COPY . .
RUN npm install dependencies
RUN npm run build
ENTRYPOINT ["npm", "start"]

