var fs = require('fs'),
    iconv = require('iconv-lite');

fs.createReadStream('../kv-2016/source/cvs.xml')
    .pipe(iconv.decodeStream('win1250'))
    .pipe(iconv.encodeStream('utf8'))
    .pipe(fs.createWriteStream('../kv-2016/source/cvs-utf8.xml'));
