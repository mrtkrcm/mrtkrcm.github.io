#!/usr/bin/env bash

if [ $# -ne 1 ]; then
    echo "You must pass the component name"
    exit 1
fi

basedir=$(dirname $0)
sharedComponentsDir=${basedir}/../shared-components/
componentName=$1

echo "Releasing ${componentName}"

${basedir}/closeVersion.sh ${componentName}

npm publish

if [ $? == 0 ]; then
    ${basedir}/increaseVersion.sh ${componentName}
    git add ${sharedComponentsDir}${componentName}/package.json
    git commit -m \"JENKINS: Closed release `${basedir}/version/getVersion.sh` of ${componentName}\"
    git push origin HEAD:master
else
    echo "NPM build failed."
    exit 1;
fi