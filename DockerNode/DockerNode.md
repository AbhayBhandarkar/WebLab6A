# Docker Node.js Simple Webpage

This project demonstrates a simple static website (HTML + JS) served by Node.js and Express inside a Docker container.

## Project Structure

```
DockerNode/
├── server.js
├── package.json
├── public/
│   ├── index.html
│   └── script.js
└── Dockerfile
```

## Files

### server.js

```javascript
const express = require('express');
const app = express();
const port = 8081;

// Serve static files from "public" folder
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

### `public/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hello from Node and Docker</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p id="demo"></p>
    <script src="script.js"></script>
</body>
</html>
```

### `public/script.js`

```javascript
document.getElementById("demo").innerText = "This text is added by script.js!";
```

### Dockerfile

```dockerfile
# Use official Node.js image
FROM node:21-slim

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
# Copy package-lock.json* if it exists for faster installs
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port 3000
EXPOSE 8081

# Run the application using npm start script (defined in package.json)
CMD ["npm", "start"]
```

## How to Build and Run

Open a terminal inside the `DockerNode` folder.

1.  **Initialize npm (if not already done)**
    * Ensure you have a `package.json`. If not, run:
        ```bash
        npm init -y
        ```
    * Make sure your `package.json` includes a `start` script, e.g.:
        ```json
        {
          "scripts": {
            "start": "node server.js"
          }
        }
        ```

2.  **Install Express Dependency**
    ```bash
    npm install express
    ```

3.  **Build the Docker Image**
    ```bash
    docker build -t node-simple-webpage .
    ```

4.  **Run the Docker Container**
    ```bash
    docker run --rm -p 3000:3000 node-simple-webpage
    ```

## Access the Webpage

Open your browser and visit: `http://localhost:8081`

You should see:
* Heading: `Hello, World!`
* Paragraph text updated dynamically by `script.js`.

## Notes

* `-p 8081:8081` binds container port 3000 to your machine's port 3000.
* `--rm` automatically cleans up the container when it stops.
* Make sure Docker is installed and running on your system.
* No need to install Node.js locally – it's all inside the container.
