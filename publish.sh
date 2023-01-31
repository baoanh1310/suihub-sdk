#!/bin/sh

echo ">> Publishing suihub-sdk"

echo ">> Clean package"
yarn clean

echo ">> Rebuild package"
yarn build

echo ">> Publish to npm"
npm publish
