# Use Node 16 alpine as parent image
FROM node:16-alpine

# Change the working directory on the Docker image to /app
WORKDIR /app

# Copy package.json and package-lock.json to the /app directory
COPY package*.json .

# generated prisma files
COPY prisma ./prisma/

# COPY ENV variable
COPY .env .

# Install dependencies
RUN npm install

# generate prisma client
RUN npx prisma generate

# Copy the rest of project files into this image
COPY . .

# Start the application
CMD npm start
