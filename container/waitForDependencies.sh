#!/usr/bin/env bash

basedir=$(dirname $0)

if [ "${waitForAddressesTimeout}" == "" ]; then
    waitForAddressesTimeout=60
fi

waitForServer() {
    ${basedir}/wait-for-it.sh $1 --timeout=${waitForAddressesTimeout}
    if [ $? != 0 ]; then
        echo "$1 did not respond in time, exiting."
        exit 1;
    fi;
}

if [ "${waitForSeconds}" != "" ]; then
    echo "Waiting ${waitForSeconds} seconds..."
    sleep ${waitForSeconds}
fi

if [ "${waitForAddresses}" != "" ]; then
    for address in ${waitForAddresses}
    do
        waitForServer ${address}
    done
fi



