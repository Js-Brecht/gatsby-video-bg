/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const fs = require('fs');
var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)|[^(\S]*([^()=]*)[\s)]*\=\>/m;
var FN_ARG_SPLIT = /,/;
var FN_ARG = /^\s*(_?)(\S+?)\1\s*$/;
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;

function formalParameterList(fn) {
    var fnText, argDecl;
    var args = [];
    fnText = fn.toString().replace(STRIP_COMMENTS, '');
    argDecl = fnText.match(FN_ARGS);

    if (!argDecl) return []
    var r = (argDecl[1] || argDecl[2] || "").split(FN_ARG_SPLIT);
    for (var a in r) {
        var arg = r[a];
        arg.replace(FN_ARG, function (all, underscore, name) {
            args.push(name);
        });
    }
    return args;
}

exports.onCreateWebpackConfig = ({ actions, getConfig, stage }) => {
    if (stage !== 'build-html') return;
    fs.writeFileSync('./webpack.config', JSON.stringify(
        getConfig(),
        (key, val) => val instanceof RegExp ? val.source : typeof val === 'function' ? `function ${val.name}(${formalParameterList(val).join(', ')})` : val,
        3
    ))
    process.exit(0)
}