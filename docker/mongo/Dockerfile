FROM mongo:latest

ENV MONGO_INITDB_ROOT_USERNAME root
ENV MONGO_INITDB_ROOT_PASSWORD admin
ENV MONGO_INITDB_DATABASE review_system

COPY mongo-init.js /docker-entrypoint-initdb.d/

WORKDIR /home/mongodb

RUN touch /home/mongodb/.dbshell
RUN chmod 0777 /home/mongodb/.dbshell
RUN chown root:root /home/mongodb/.dbshell

CMD ["mongod", "--auth"]
