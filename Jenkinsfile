pipeline {
    agent { docker { image 'node:10.23-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}
