FROM mysql:5.7.25

EXPOSE 3306
COPY ./docker/db/init/* /docker-entrypoint-initdb.d/
COPY ./docker/db/my.cnf /etc/db/conf.d/my.cnf

CMD ["mysqld"]
