# ARG BUILDER_IMAGE=maven:3.8.5-eclipse-temurin-17-alpine
# ARG PRODUCTION_IMAGE=eclipse-temurin:17-jre

# # Download dependencies & build the application
# FROM ${BUILDER_IMAGE} AS builder
# WORKDIR /home/app
# COPY . .
# RUN mvn clean package -Pproduction

# # Build a small image for production
# FROM ${PRODUCTION_IMAGE} AS production
# WORKDIR /home/app
# ENV TZ=America/Bogota

# COPY --from=builder /home/app/target/*.jar app.jar

# EXPOSE 8080
# ENTRYPOINT ["java", "-jar", "/home/app/app.jar"]


FROM eclipse-temurin:17-jre
COPY target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]
