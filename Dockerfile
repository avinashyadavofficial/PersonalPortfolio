# Use official OpenJDK image
FROM openjdk:17-jdk-slim

# Set working directory
WORKDIR /app

# Copy all project files into the container
COPY . .

# Make the Maven Wrapper executable
RUN chmod +x mvnw

# Build the project without running tests
RUN ./mvnw clean package -DskipTests

# Run the Spring Boot JAR file
CMD ["java", "-jar", "target/portfolio-0.0.1-SNAPSHOT.jar"]
