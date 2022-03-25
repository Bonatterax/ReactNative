const csv = require('csv-parser');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'output.csv',
    header: [
        {id: 'fullname', title: 'fullname'}
    ]
})

var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');




const results = [];





fs.createReadStream('input.csv')
    .pipe(csv({}))
    .on('data', (data) => results.push(data))
    .on('end', async () => {
       _.forEach(results, function(o){
           console.log(o.fullname)
       })
    });