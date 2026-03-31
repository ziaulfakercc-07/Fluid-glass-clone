pipeline {
    agent any

    environment {
        // Define any environment variables here
        CONTAINER_NAME = 'Glass-app'
        IMAGE_NAME = 'glass-app-image'
        EMAIL = "ziaulfakercc@gmail.com"
        PORT = "3000"
    }

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning repository...'
                // Add your clone commands here
                git branch: 'main', url: 'https://github.com/ziaulfakercc-07/Fluid-glass-clone.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                // Add your Docker build commands here
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }
        stage('Stop and Remove Previous Container') {
            steps {
                echo 'Stopping and removing previous container...'
                // Add your stop and remove commands here
                sh "docker stop ${CONTAINER_NAME} || true"
                sh "docker rm ${CONTAINER_NAME} || true"
            }
        }
        stage('Run Docker Container') {
            steps {
                echo 'Running Docker container...'
                // Add your Docker run commands here
                sh "docker run -d -p ${PORT}:${PORT} --name ${CONTAINER_NAME} ${IMAGE_NAME}"
            }
        }
        stage('Send Email Notification') {
            steps {
                echo 'Sending email notification...'
                // Add your email sending commands here
                mail to: "${EMAIL}",
                     subject: "Deployment Successful",
                     body: "The Docker container for ${IMAGE_NAME} has been successfully deployed and is running now on this URL: http://13.204.88.103:${PORT}/.",
            }
        }
    }
}