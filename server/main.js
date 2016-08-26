import { Meteor } from 'meteor/meteor';
import fs from 'fs';

Meteor.startup(() => {
    Meteor.methods({
        'parseCsv'(text) {

            fs.readFile(process.env.PWD + '/sample.csv', 'utf8', function(err, data) {
                if(err) {
                    console.log(err);
                }
                else {
                    var results = Papa.parse(data);
                    console.log(results);
                }
            });

        }
    });
});
