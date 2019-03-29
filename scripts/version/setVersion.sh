#!/usr/bin/env bash

if [ $# -ne 2 ]; then
    echo "You must pass the component name and the version to set, for example $0 hello-world 1.0.0-SNAPSHOT"
    exit 1
fi

basedir=$(dirname $0)
sharedComponentsDir=${basedir}/../../shared-components/
componentName=$1

echo "Setting version of $1 to $2 "


awk '{sub(   /"version" ?: ?".*"/    ,     "\"version\": \"'$2'\""  )}1' ${sharedComponentsDir}${componentName}/package.json > ${sharedComponentsDir}${componentName}/package.json.tmp && mv ${sharedComponentsDir}${componentName}/package.json.tmp ${sharedComponentsDir}${componentName}/package.json

