# Dev mode
FROM node

# Set the working directory
WORKDIR /WTD/frontend

# Copy package.json and package-lock.json
# COPY ./frontend /WTD/frontend/

COPY ./ ./

# Install dependencies
RUN npm install
# RUN yarn

# Install a simple HTTP server
# RUN npm install -g serve

EXPOSE 80

# Start the app
CMD ["npm", "run", "prod"]