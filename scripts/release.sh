#!/usr/bin/env bash

basedir=$(dirname $0)

$basedir/version/closeVersion.sh
$basedir/docker-build-image.sh
$basedir/docker-push-image.sh


echo "artifactVersion=$(cat version)" > $basedir/../buildprops.properties
echo "artifactName=$(cat $basedir/instance_name)" >> $basedir/../buildprops.properties


git add $basedir/../version
git commit -m "JENKINS: Closed release `$basedir/version/getVersion.sh`"
git push --set-upstream origin master

$basedir/version/increaseVersion.sh
git add $basedir/../version
git commit -m "JENKINS: Created new snapshot version `$basedir/version/getVersion.sh`"
git push --set-upstream origin master
