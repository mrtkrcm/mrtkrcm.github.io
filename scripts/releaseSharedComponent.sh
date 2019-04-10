#!/usr/bin/env bash

if [ $# -ne 1 ]; then
    echo "You must pass the component name"
    exit 1
fi

basedir=$(dirname $0)
sharedComponentsDir=${basedir}/../sandbox/src/shared-components/
componentName=$1
temporaryDirectory=$(mktemp -d -t "tmp-mfp-fe-modules-$componentName"-XXXXX)

echo "Releasing ${componentName}"

${basedir}/version/closeVersion.sh ${componentName}

cp -R $sharedComponentsDir$componentName $temporaryDirectory
(cd $temporaryDirectory/$componentName && npm install && npm run build && cp package.json dist/ && cd dist/ && npm publish && rm -rf $temporaryDirectory)

if [ $? == 0 ]; then
    echo "NPM publish was OK. Increasing to next snapshot version."
    ${basedir}/version/increaseVersion.sh ${componentName}
    git add ${sharedComponentsDir}${componentName}/package.json
    git commit -m "JENKINS: Closed release `${basedir}/version/getVersion.sh ${componentName}` of ${componentName}"
    git push origin HEAD:master
else
    echo "NPM build failed."
    exit 1;
fi