#
# Build stage
#docker pull maven:3.9.2-eclipse-temurin-17
FROM gradle:7.6-jdk17 AS build
COPY . /home/gradle/src
WORKDIR /home/gradle/src
RUN gradle build --no-daemon

#
# Package stage
#
#FROM openjdk:17-slim
FROM eclipse-temurin:17-jdk-alpine
COPY --from=build /home/gradle/src/build/libs/electronicstore-0.0.1-SNAPSHOT.jar electronicstore-0.0.1-SNAPSHOT.jar
#COPY --from=build /target/electronicstore-0.0.1-SNAPSHOT.jar electronicstore-0.0.1-SNAPSHOT.jar
# ENV PORT=8080
EXPOSE 8080
ENTRYPOINT ["java","-jar","electronicstore-0.0.1-SNAPSHOT.jar"]

#FROM eclipse-temurin:17-jdk-alpine
#WORKDIR /server
#ADD target/electronicstore-0.0.1-SNAPSHOT.jar electronicstore-0.0.1-SNAPSHOT.jar
#EXPOSE 8080
#ENTRYPOINT ["java", "-jar","electronicstore-0.0.1-SNAPSHOT.jar"]
