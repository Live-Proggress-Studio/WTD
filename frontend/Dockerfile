# Dev mode
# Use official Node.js image for building
FROM node:16 AS frontend-builder

# Set the working directory
WORKDIR /WTD/frontend

# Copy package.json and package-lock.json
COPY ./frontend /WTD/frontend/

# Install dependencies
RUN npm install
# RUN yarn

# Copy the rest of the application
COPY frontend ./

# Build the React app
# RUN npm run dev

# Use a lightweight Node.js image for serving the app
# FROM node:14-alpine

# Set the working directory
WORKDIR /WTD/frontend

# Copy the built React app from the builder stage
# COPY --from=frontend-builder /app/frontend/build /WTD/frontend/build

# Install a simple HTTP server
# RUN npm install -g serve

# Expose port 8080
# EXPOSE 8080

# Start the app
CMD ["npm", "run", "dev"]

# =================================================================
# static mode
# # Build stage
# FROM node:16 AS frontend-builder

# # Set the working directory
# WORKDIR /WTD/frontend

# # Copy package.json and package-lock.json
# COPY ./frontend ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application
# COPY ./frontend .

# # Build the React app
# RUN npm run build

# # Runtime stage
# FROM node:16-alpine

# # Set the working directory
# WORKDIR /app

# # Copy the built React app from the builder stage
# COPY --from=frontend-builder /WTD/frontend/build /app

# # Install a simple HTTP server
# RUN npm install -g serve

# # Expose port 8080
# EXPOSE 8080

# # Start the app
# CMD ["serve", "-s", "."]