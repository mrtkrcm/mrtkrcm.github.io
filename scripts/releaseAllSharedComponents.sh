#!/usr/bin/env bash

basedir=$(dirname $0)
sharedComponentsDir=${basedir}/../shared-components/

allComponents=$(cd ${sharedComponentsDir} && ls -d1 */ | cut -d\/ -f1 )

for component in $allComponents; do
    echo "Processing component ${component}"
    componentCheckSum=$(cd ${sharedComponentsDir} &&  tar -cf - ${component} | md5sum  | cut -d\  -f1)
    echo "Checksum for component ${component} is $componentCheckSum"
    checksumFileContents="<empty>"
    checksumFile=${sharedComponentsDir}${component}.checksum
    if [ -f ${checksumFile} ]; then
        checksumFileContents=$(cat ${checksumFile})
        echo "Checksum in file ${checksumFile} is $checksumFileContents"
    fi
    if [[ "${checksumFileContents}" != "${componentCheckSum}" ]]; then
        echo "Checksum mismatch: Recorded ${checksumFileContents}, current ${componentCheckSum}."
        ${basedir}/releaseSharedComponent.sh ${component}
        if [ $? == 0 ]; then
            componentCheckSum=$(cd ${sharedComponentsDir} &&  tar -cf - ${component} | md5sum  | cut -d\  -f1)
            echo "$componentCheckSum" > ${checksumFile}
            git add -f ${checksumFile}
            git commit -m "JENKINS: Added checksum file for ${component}"
            git push origin HEAD:master
        else
            echo "Release of ${component} failed."
            exit 1;
        fi
    else
        echo "Checksum matches. Skipping ${component}."
    fi
done

