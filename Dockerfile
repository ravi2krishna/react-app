# - Comment, ignored by docker
# - Docker Directives/instructions will be in UPPER CASE
# FROM -> used for specifying base image
FROM nginx

# COPY -> used for copying files from HOST to YOUR CUSTOM IMAGE
COPY . /usr/share/nginx/html