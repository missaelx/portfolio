#!/usr/bin/env bash
cd ..
npm run build
currentDate=$(date +'%Y-%m-%d')
fileName="${currentDate}_missael.dev.tar.gz"
tar -czvf "$fileName" build
mv "$fileName" "deploy/$fileName"
cd deploy

scp "$fileName" missael.dev:~/builds/missael.dev
ssh missael.dev << 'ENDSSH'
cd ~/builds/missael.dev
tar xf *.tar.gz
rm -R ~/apps/missael.dev/*
mv build/* ~/apps/missael.dev
ENDSSH