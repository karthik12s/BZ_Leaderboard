const api_url = 
"https://docs.google.com/spreadsheets/d/e/2PACX-1vQOZ5pT8riOQkdZwIAGNirQb26Lgvrffoq4MzXjUerfMJtwXFCSYemXkX-yd9o2zyD9Yksv2hqFPpsL/pub?output=csv";
  var data;
  var arr = [] ;
  // Defining async function
  async function getapi(url) {
      
      // Storing response
      const response = await fetch(url);
      
      // Storing data in form of JSON
      data = await response.text();
      // console.log(data);
      let data1 = data.split("\n");
  for(let i =0;i<data1.length;i++){
//   console.log(data1[i].split(",")[0]);
  arr[i] = data1[i].split(",")[0];
  // console.log(arr[i]);
  }    
  }
  // Calling that async function
  getapi(api_url);
  console.log(arr.length);
  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  function include(arr1, obj) {
    //   console.log(obj,obj.localeCompare(arr[0]));
    console.log(arr1.indexOf(obj),arr1);
    if(arr.indexOf(obj)!=-1){
      return true;
    }
    // for (let j = 0; j < arr.length; j++) {
        
    //   if (!obj.localeCompare(arr[j])) 
    //   {
    //       console.log(j);
    //       return true;
    //   }
    // }
    return false;
  }
  sleep(2000);
  const arr1 = Object.values(arr);
var x = document.getElementsByClassName("cursor leaderboard-hackername rg_5");
var x1,x2;
// for(let i =0;i<x.length;i++){
//     var x1 = x[i].href.split("/");
//     console.log(include(arr,x1[x1["length"]-1]));
//     }
console.log(arr1);
for(let i =0;i<x.length;i++){
 x1 = x[i].href;
 x2 = x1.split("/")
console.log(typeof(x2[x2["length"]-1]))
// console.log(x2[x2["length"]-1],x2);
// x[i].classList.remove("rg_5");
var f = include(arr1,x2[x2["length"]-1]);
console.log(f);
if(f){
    x[i].style.color = "green ";
    console.log("abc",i);
}
else{   
    x[i].style.color = "red ";
    console.log("def");
}
}
for(let i =0;i<100;){
    x[i].classList.remove("rg_5");
}
