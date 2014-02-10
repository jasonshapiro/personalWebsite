connect = require('connect');
connect.createServer(
    connect.static('/home/jason/Projects/website/')
).listen(8080);
