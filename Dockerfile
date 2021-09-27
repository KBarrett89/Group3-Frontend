FROM node
COPY . .
RUN npm install dependencies
RUN npm run build
EXPOSE 3000
ENTRYPOINT ["npm", "start"]

