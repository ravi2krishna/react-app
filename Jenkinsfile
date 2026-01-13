pipeline {
    agent any
    stages {
        // Stage For Code Analysis
        stage('Sonar Analysis') {
            steps {
                sh 'sudo docker run --rm -e SONAR_HOST_URL="http://18.119.106.139:9000" -v ".:/usr/src" sonarsource/sonar-scanner-cli -Dsonar.token="sqp_8fc0d046e09580b25c70ce208e1fbaedf3f46876" -Dsonar.projectKey=react'
            }
        }
        // Stage For Building Analysis
        stage('Build Artifact') {
            steps {
                sh 'npm install && npm run build'
            }
        }
        // Stage For Artifacts i.e Archiving Artifacts
        stage('Release Artifact') {
            steps {
               script {
                   def packageJson = readJSON file: 'package.json'
                   def packageJSONVersion = packageJson.version
                   echo "${packageJSONVersion}"
                   sh "zip react-${packageJSONVersion}.zip -r build/*"
                   sh "curl -v -u admin:Admin123* --upload-file react-${packageJSONVersion}.zip http://18.119.106.139:8081/repository/react/"
               }
           }
        }
        // Stage For Deploying 
        stage('Deploy') {
            steps {
               script {
                   def packageJson = readJSON file: 'package.json'
                   def packageJSONVersion = packageJson.version
                   echo "${packageJSONVersion}"
                   sh "curl -u admin:Admin123* -X GET \'http://18.119.106.139:8081/repository/react/react-${packageJSONVersion}.zip\' --output react-'${packageJSONVersion}'.zip"
                   sh 'sudo rm -rf /var/www/html/*'
                   sh "sudo unzip -o react-'${packageJSONVersion}'.zip"
                   sh "sudo cp -r build/* /var/www/html"
               }
           }
        }
        // Stage For Cleaning Up 
        stage('Build Artifact') {
            steps {
                cleanWs()
            }
        }
    }
}