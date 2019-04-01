#!/usr/bin/env bash

if [ $# -ne 1 ]; then
    echo "You must pass the component name"
    exit 1
fi

basedir=$(dirname $0)
sharedComponentsDir=${basedir}/../shared-components/
componentName=$1

echo "Releasing ${componentName}"

${basedir}/version/closeVersion.sh ${componentName}

(cd $sharedComponentsDir$componentName && npm publish)

if [ $? == 0 ]; then
    echo "NPM publish was OK. Increasing to next snapshot version."
    pwd
    ls
    ${basedir}/version/increaseVersion.sh ${componentName}
    git add ${sharedComponentsDir}${componentName}/package.json
    git commit -m "JENKINS: Closed release `${basedir}/version/getVersion.sh` of ${componentName}"
    git push origin HEAD:master
else
    echo "NPM build failed."
    exit 1;
fi