# Step 1: Use Node.js as the base image
FROM node:18-alpine as build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and yarn.lock to the container
COPY package.json package-lock.json ./

# Step 4: Install dependencies using Yarn
RUN npm install

# Step 5: Copy the rest of the app code into the container
COPY . .

# Step 6: Build the app for production
RUN npm run build

# Step 7: Use a smaller image to serve the app (Nginx)
FROM nginx:alpine

# Step 8: Copy the build output to Nginx's public directory
COPY --from=build /app/dist /usr/share/nginx/html

# Step 9: Expose port 80
EXPOSE 80

# Step 10: Run the Nginx server
CMD ["nginx", "-g", "daemon off;"]
