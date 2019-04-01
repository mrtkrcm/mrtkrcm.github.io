#!/usr/bin/env bash

if [ $# -ne 1 ]; then
    echo "You must pass the component name"
    exit 1
fi

basedir=$(dirname $0)
sharedComponentsDir=${basedir}/../sandbox/src/shared-components/
componentName=$1

echo "Releasing ${componentName}"

${basedir}/version/closeVersion.sh ${componentName}

(cd $sharedComponentsDir$componentName && npm install && npm run build && cp package.json build/ && cd build/ && npm publish)

if [ $? == 0 ]; then
    echo "NPM publish was OK. Increasing to next snapshot version."
    ${basedir}/version/increaseVersion.sh ${componentName}
    git add ${sharedComponentsDir}${componentName}/package.json
    git commit -m "JENKINS: Closed release `${basedir}/version/getVersion.sh ${componentName}` of ${componentName}"
    git push origin HEAD:master

    echo "Cleaning generated files"
    rm -rf ${sharedComponentsDir}${componentName}/build
    rm -rf ${sharedComponentsDir}${componentName}/node-modules
    echo "Cleaning done. Contents of the folder: "
    ls -lah ${sharedComponentsDir}${componentName}
else
    echo "NPM build failed."
    exit 1;
fi