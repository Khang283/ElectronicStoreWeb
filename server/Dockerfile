#
# Build stage
#docker pull maven:3.9.2-eclipse-temurin-17
FROM maven:3.9.2-eclipse-temurin-17 AS build
COPY . .
RUN mvn clean package 

#
# Package stage
#
FROM eclipse-temurin:17-jdk-alpine
COPY --from=build /target/demo-0.0.1-SNAPSHOT.jar demo.jar
# ENV PORT=8080
EXPOSE 8080
ENTRYPOINT ["java","-jar","demo.jar"]