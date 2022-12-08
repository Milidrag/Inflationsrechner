##build stage

FROM maven:3.8.6-eclipse-temurin-17-alpine AS build
COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml install -DskipTests package

##package stage

FROM openjdk:17-jdk-alpine
VOLUME /tmp
ARG JAVA_OPTS
ENV JAVA_OPTS=$JAVA_OPTS
COPY --from=build /home/app/target/pbc-0.0.1-SNAPSHOT.jar inflationsrechner.jar
COPY sql sql
EXPOSE 8080
#ENTRYPOINT exec java $JAVA_OPTS -jar inflationsrechner.jar
# For Spring-Boot project, use the entrypoint below to reduce Tomcat startup time
ENTRYPOINT exec java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar inflationsrechner.jar
