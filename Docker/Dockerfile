FROM node:12.6.0-alpine


WORKDIR /app
COPY server.js /app/

#expose a port
EXPOSE 8000

#  This is the command that will be run
# each time a container is built using this image
CMD [ "node", "server.js" ]