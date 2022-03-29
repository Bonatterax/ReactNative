const csv = require('csv-parser')
const fs = require('fs')
const results = [];
let _ = require('lodash');



fs.createReadStream('input.csv')
    .pipe(csv({}))
    .on('data', (data) => results.push(data))
    .on('end', () => {

          var newArray=[];

            results.forEach(obj => {
                 newArray.push(obj)
            })

            console.log(_.merge(results, newArray))

          
     
   
         data = JSON.stringify(results);
        
    fs.writeFileSync('output.json', data);
    })

  
