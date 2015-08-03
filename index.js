var buildtools = require('npm-build-tools');

module.exports = function() {
    if (process.platform === 'win32') {
        removeApostrophesFromParameters();
    }

    function removeApostrophesFromParameters() {
        console.log("RUNNING");
        var args = process.argv;
        for (var i = 0, len = args.length; i < len; ++i) {
            arg = args[ i ];
            process.argv[i] = arg.replace(/'/g, '');
        }
    }

    buildtools.copy();
};