# Docker Java Hello World

This project demonstrates a simple Java program (`HelloWorld.java`) executed inside a Docker container.

## Project Structure

```
DockerJava/
├── HelloWorld.java
└── Dockerfile
```

## Files

### HelloWorld.java

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World from Docker!");
    }
}
```

### Dockerfile

```dockerfile
# Use an official OpenJDK image
FROM openjdk:21-jdk-slim

# Set working directory
WORKDIR /app

# Copy Java file into the container
COPY HelloWorld.java .

# Compile the Java program
RUN javac HelloWorld.java

# Command to run the compiled Java program
CMD ["java", "HelloWorld"]
```

## How to Build and Run

Open a terminal inside the `DockerJava` folder.

1.  **Build the Docker Image**
    ```bash
    docker build -t java-hello-world .
    ```

2.  **Run the Docker Container**
    ```bash
    docker run --rm java-hello-world
    ```

## Expected Output

```
Hello, World from Docker!
```

## Notes

* The `--rm` flag automatically removes the container after it exits.
* Ensure Docker is installed and running on your machine.
* No need to install Java locally - everything happens inside the container.
