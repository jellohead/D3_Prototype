var rawData,
sortedData;

function init () {
  console.log("Entering update function");
  d3.csv("data/market-study3.csv",function (error, data){
    if(error){
      console.log(error);
      console.log("Didn't load csv file correctly.");
    } else {
      rawData = data;
      console.log("CSV loaded successfully.");
      console.log(rawData[98]);
      console.log("Exiting update function.");
      processData(rawData);
    }
  });
}


// Sort and tabulate the dataset
function processData (data){
  console.log("Entering the processData function");
  eliminateDuplicates(data);
  //console.log(sortedData);


}

function eliminateDuplicates(arr){
  console.log("Entering eliminateDuplicates function");
  var i,
  len=arr.length,
  sortedData=[],
  obj={};

  for (i=0;i<len;i++){
    //console.log(arr[i]["Support Region"]);
    obj[arr[i]]=0;
    console.log(obj);
  }
  /*for (i in obj){
    sortedData.push(i);
  }*/
  console.log(sortedData);
  return sortedData;
}

init();