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

# RUN npm build

# Install a simple HTTP server
# RUN npm install -g serve

EXPOSE 80

# Start the app
# CMD ["cp", "-rf", "./dist/*", "/var/www/wtd/publicj_html"]
CMD ["npm", "run", "prod"]