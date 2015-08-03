var test = require('tap').test,
    sbgcopy = require('../');

test("apostrophes are stripped from windows platform", function (t) {
    process.platform = 'win32';
    process.argv[2] = "'foo'";
    sbgcopy();
    t.equal('foo', process.argv[2])
    t.end()
});

test("apostrophes are not stripped from *nix platform", function (t) {
    process.platform = 'darwin';
    process.argv[2] = "'foo'";
    sbgcopy();
    t.equal("'foo'", process.argv[2])
    t.end()
});