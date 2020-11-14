pipeline {
    agent { docker { image 'node:14.15.0' } }
    stages {
        stage('install') {
            steps {
                sh 'npm ci'
            }
        }
        stage('test') {
            steps { 
                sh 'npm run test:ci'
            }
        }
        stage('build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
