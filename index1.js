const api_url = 
"https://docs.google.com/spreadsheets/d/e/2PACX-1vQOZ5pT8riOQkdZwIAGNirQb26Lgvrffoq4MzXjUerfMJtwXFCSYemXkX-yd9o2zyD9Yksv2hqFPpsL/pub?output=csv";
  var data;
  var arr = [] ;
  var arr1 = [];
  // Defining async function
  function include(arr1, obj) {
    return arr.indexOf(obj);
  }
    async function getapi(url) {     
        // Storing response
        const response = await fetch(url);
        // Storing data in form of JSON
        data = await response.text();
        let data1 = data.split("\n");
        for(let i =0;i<data1.length;i++){
        arr[i] = data1[i].split(",")[0];
        arr1[i] = data1[i].split(",")[1];
        }     
    var x = document.getElementsByClassName("cursor leaderboard-hackername rg_5");
    var x1,x2;
    // for(let i =0;i<x.length;i++){
    //     var x1 = x[i].href.split("/");
    //     console.log(include(arr,x1[x1["length"]-1]));
    //     }
    // console.log(arr1);
    const val = []
    for(let i =0;i<x.length;i++)
    {
    x1 = x[i].href;
    x2 = x1.split("/")
    // console.log(typeof(x2[x2["length"]-1]))
    // console.log(x2[x2["length"]-1],x2);
    // x[i].classList.remove("rg_5");
    var f = include(arr1,x2[x2["length"]-1]);
    console.log(f);
    val[i] = x2[x2["length"]-1];
    if(f!=-1){
        x[i].style.color = "green ";
        x[i].text =  arr1[f]  ;
    }
    else{   
        x[i].style.color = "red ";
        x[i].text = "...........";
    }
    // if(i%2==0){
    //   element = document.createElement("div");
    //   element.textContent = x2[x2["length"]-1]; 
    //   v11[i/2].appendChild(element);
    // }
    // else{
    //   element = document.createElement("div");
    //   element.textContent = x2[x2["length"]-1]; 
    //   v12[i/2].appendChild(element);
    // }
    }
    var v1 = document.getElementsByClassName("row padding-small top bottom leaderboard-row");

    for(let i=0;i<v1.length;i++)
    {
      element = document.createElement("div");
      element.textContent = val[i]; 
      v1[i].appendChild(element);
    }
      const n = x.length;
      while(x.length>0)
      {
          // console.log(x);
          x[0].classList.remove("rg_5");
      }
  }   
  getapi(api_url);
  let currentPage = location.href;

// listen for changes
setInterval(function()
{
    if (currentPage != location.href)
    {
        // page has changed, set new page as 'current'
        currentPage = location.href;
        getapi(api_url);
        // do your thing..
    }
}, 500);
// var v2 = document.getElementsByClassName("row padding-small top bottom leaderboard-row")
// for(let i=0;i<v2.length;i++){ element = document.createElement("div");element.textContent = "abbc"; v2[i].appendChild(element);}
