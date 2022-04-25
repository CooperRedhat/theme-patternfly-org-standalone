const path = require('path');
console.log(require.main);
require.resolve.paths
const testPath = path.join(require.resolve('@patternfly/react-styles/package.json', {
    paths: [
        // "./",
        ...require.main.paths
    ]
}), '../');

console.log(testPath);