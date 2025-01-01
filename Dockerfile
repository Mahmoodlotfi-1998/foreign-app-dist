# Use the official Nginx image
FROM nginx:alpine

# Remove the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/

# Copy static files to the Nginx HTML directory
COPY ./dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80
