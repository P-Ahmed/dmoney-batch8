const newman = require('newman');
 
newman.run({
    //collection: require("./collection/dMoney-collection.json"),
    collection:'https://api.postman.com/collections/14809453-80ca7810-b728-4c68-867f-797ff4fd048f?access_key=PMAT-01H89TY2P9YTE1A8TDJ9W8D8TY',
    // environment:require('./collection/environment.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});