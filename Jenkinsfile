pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'uname'
            }
        }
        stage('Test') {
            steps {
                sh 'free -m'
            }
        }
        stage('Deploy') {
            steps {
                sh 'df -h'
                sh 'npm -v'
                sh 'sudo docker container ls'
                sh 'kubectl'
            }
        }
    }
}