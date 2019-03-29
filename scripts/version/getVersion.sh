#!/usr/bin/env bash
if [ $# -ne 1 ]; then
    echo "You must pass the component name"
    exit 1
fi

basedir=$(dirname $0)
sharedComponentsDir=${basedir}/../../shared-components/
componentName=$1

cat ${sharedComponentsDir}${componentName}/package.json | grep version | cut -d\: -f2 | tr -d \" | tr -d \  | tr -d \,
