var fs = require('fs');

function notDone(callback){
  fs.readFile('numbers.txt','utf-8', function(err, fileContents){
    // console.log(fileContents);
    if(err){
      console.log(err);
    }
    var numArray = fileContents.split(',');
    for (var i = 0; i < numArray.length; i++) {
      numArray[i] = parseInt(numArray[i]);
    }
    var totalAmount = 0;
    // console.log(numArray);
    for (var i = 0; i < numArray.length; i++) {
      totalAmount += numArray[i];
      var average = Math.round(totalAmount/numArray.length);
    }
      var max = Math.max.apply(null, numArray);
      var min = Math.min.apply(null, numArray);
    callback(min, max, average)
    // console.log(totalAmount);
  })
};

  function done(min, max, average){
    console.log('Average :', average);
    console.log('Highest :', max);
    console.log('Lowest :', min);
}

notDone(done);
