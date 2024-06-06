# Use the official Node.js image as a base
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Strapi dependencies
RUN npm install

# Copy the rest of your Strapi application
COPY . .

# Build the Strapi admin panel
RUN npm run build

# Expose the port that Strapi runs on
EXPOSE 1337

# Command to run Strapi
CMD ["npm", "run", "develop"]













































































