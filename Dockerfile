FROM node
COPY . .
RUN npm install dependencies
ENTRYPOINT ["npm", "run", "build"]

