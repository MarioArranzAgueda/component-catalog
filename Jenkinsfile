pipeline {
    agent { docker { image 'node:14.15.0' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}
