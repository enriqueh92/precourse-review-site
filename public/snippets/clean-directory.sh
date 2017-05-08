rm bundle.js
mkdir sampleTree
mv client sampleTree
mv package.json sampleTree
mv server sampleTree
mv index.js sampleTree
cd sampleTree
mkdir public
cd client
mkdir js
mv app.js js
cd js
mkdir test
mv multiplier.js test
cd ..
cd..
mv index.html public
cd public
mkdir css
mv styles.css css
mkdir js
mv bundle.js js


