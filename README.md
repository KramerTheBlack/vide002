# Text Editor Application

A simple text editor with both Java Swing desktop interface and web interface served by nginx.

## Project Structure

```
vide002/
├── src/
│   └── main/java/
│       └── TextEditor.java      # Java Swing GUI application
├── web/
│   ├── index.html               # Web interface
│   ├── style.css                # Styling
│   └── script.js                # JavaScript functionality
├── nginx/
│   └── Dockerfile               # Nginx container for web interface
├── docker-compose/
│   └── docker-compose.yml       # Docker Compose configuration
├── Dockerfile                   # Java application container
└── pom.xml                      # Maven configuration
```

## Features

### Desktop Application (Java)
- Menu: New, Open, Save, Save As, Exit
- Text editing area with scroll
- File filtering for .txt files

### Web Interface (Nginx)
- Clean, responsive design
- Buttons: New, Open, Save
- Status notifications

## Running with Docker Compose

```bash
cd docker-compose
docker-compose up -d
```

This will start:
- Java app on port 8080
- Nginx web interface on port 80

## Running Locally

### Java Application
```bash
mvn clean package
java -jar target/text-editor-1.0-SNAPSHOT.jar
```

### Web Interface
Simply open `web/index.html` in a browser.

## Requirements

- Java 11+
- Maven 3.6+
- Docker & Docker Compose
