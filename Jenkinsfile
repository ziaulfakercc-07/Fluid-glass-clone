pipeline {
    agent any

    environment {
        CONTAINER_NAME = 'Glass-app'
        IMAGE_NAME = 'glass-app-image'
        PORT = "3000"
    }

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning repository...'
                git branch: 'main', url: 'https://github.com/ziaulfakercc-07/Fluid-glass-clone.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }
        stage('Stop and Remove Previous Container') {
            steps {
                echo 'Stopping and removing previous container...'
                sh "docker stop ${CONTAINER_NAME} || true"
                sh "docker rm ${CONTAINER_NAME} || true"
            }
        }
        stage('Run Docker Container') {
            steps {
                echo 'Running Docker container...'
                sh "docker run -d -p ${PORT}:${PORT} --name ${CONTAINER_NAME} ${IMAGE_NAME}"
            }
        }
    }

    post {
        success {
            echo "✅ Deployment successful! App running at http://3.110.37.157:${PORT}/"
        }
        failure {
            echo "❌ Deployment failed. Check the logs above."
        }
    }
}