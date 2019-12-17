'use strict';
const fs = require('fs');

module.exports = {
    ReadFromFile : function(){
        let rawdata = fs.readFileSync('./json/StevenUserData.json');
        return JSON.parse(rawdata);
    },

    WriteToFile : function(arrayData)
    {
        let writtenData = JSON.stringify(arrayData, 0, 2);
        fs.writeFileSync('./json/StevenUserData.json', writtenData);
    },

    WriteToTestFile : function(data)
    {
        let writtenData = JSON.stringify(data, 0, 2);
        fs.writeFileSync('./json/TestStevenUserData.json', writtenData);
    }
}