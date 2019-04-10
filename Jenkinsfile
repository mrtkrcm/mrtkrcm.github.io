pipeline {
    agent any
    stages {
        stage('Releasing all shared components') {
            steps {
                sh "scripts/releaseAllSharedComponents.sh"
            }
        }
    }
}