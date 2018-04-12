## JHipster User for Microservices

This repo demonstrates an issue I've had implementing [`User` relationships for microservices](https://github.com/jhipster/generator-jhipster/pull/7424) with JHipster.

The current issue I'm experiencing is `@PreUpdate` is not firing the [`UserEntityListener`](blog/src/main/java/com/okta/developer/blog/domain/UserEntityListener.java) when you update a `Blog` entity and change the user its assigned to.

To start all the apps in this project, run the following commands in separate terminals:

**Docker Containers**

```
docker-compose -f gateway/src/main/docker/keycloak.yml up
docker-compose -f store/src/main/docker/mongodb.yml up
```

**JHipster Registry**

```
cd registry
npm install
./run.sh
```

**Gateway**

```
cd gateway
npm install
./mvnw
```

**Blog**
```
cd blog && npm install
./mvnw
```

**Store**
```
cd store && npm install
./mvnw
```


