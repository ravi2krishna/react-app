# - Comment, ignored by docker
# - Docker Directives/instructions will be in UPPER CASE

# FROM - Set Base Image
FROM node:20 AS builder

# LABEL - add custom data, just some key values
LABEL maintainer="Frontend API Maintainers <ravi2krishna@gmail.com>"

# ENV - Environment Variable
ENV APP_PATH /frontend

# RUN - execute commands
RUN mkdir $APP_PATH

# WORKDIR - working directory
WORKDIR $APP_PATH

# COPY - copy files to above image
COPY . .

# RUN - build related commands
RUN npm install
RUN npm run build

# FROM - To Deploy
FROM nginx

# COPY - copy files to Nginx
COPY --from=builder /frontend/dist /usr/share/nginx/html
