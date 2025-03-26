# Use official Node.js image
FROM node:18-alpine

# Create and set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the app port
EXPOSE 8080
EXPOSE 9464

# Start the app
CMD ["node", "dist/server.js"]
