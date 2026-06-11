rm -r docs
mv build docs
node after-build.js
git add .