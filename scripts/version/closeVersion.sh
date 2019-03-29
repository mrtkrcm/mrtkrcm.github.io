#!/usr/bin/env bash

if [ $# -ne 1 ]; then
    echo "You must pass the component name"
    exit 1
fi

basedir=$(dirname $0)
currentVersion=$(${basedir}/getVersion.sh $1)

if [[ "${currentVersion}" == *-SNAPSHOT ]]
then
    newVersion=$(echo ${currentVersion} | cut -d\- -f1)
    ${basedir}/setVersion.sh $1 ${newVersion}
else
    echo "Current version is not a snapshot, it can't be closed"
    exit 1
fi
