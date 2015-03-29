var path = require('path');

function pattern(file) {
    return {
        pattern: file,
        included: true,
        served: true,
        watched: false
    };
}

function framework(files) {
    var unexpectedPath = path.resolve(require.resolve('unexpected'), '../../');

    console.log( unexpectedPath + '/unexpected.js');
    files.unshift(pattern(unexpectedPath + '/unexpected.js'));
}

framework.$inject = ['config.files'];

module.exports = {
    'framework:unexpected': ['factory', framework]
};




