#!/usr/bin/env bash

if [ $# -ne 1 ]; then
    echo "You must pass the component name"
    exit 1
fi

basedir=$(dirname $0)
currentVersion=$(${basedir}/getVersion.sh $1)
versionMinor=$(echo ${currentVersion} | rev | cut -d\. -f1 | rev)
versionMajor=${currentVersion: 0: -${#versionMinor} }
newVersion=${versionMajor}$((versionMinor+1))-SNAPSHOT
${basedir}/setVersion.sh $1 ${newVersion}
