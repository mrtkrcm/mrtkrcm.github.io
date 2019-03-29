pipeline {
    agent any
    stages {
        stage('Hello') {
            steps {
                sh "scripts/releaseAllSharedComponents.sh"
            }
        }
    }
}