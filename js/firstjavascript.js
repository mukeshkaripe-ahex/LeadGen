var myfirstvar="anil";
function myfirstfunction(a,b){
    c=a-b;
    myfirstvar="mukesh"
    return c  + myfirstvar; 
}
console.log(myfirstfunction(5,10));
console.log(myfirstvar);

var names=["point:0","1","2","score:4","score:6"];
function cricketfunction(input , score){
if(score == 0){
    console.log("poor perfomance");
    return names[0];
}
else if(score == 1){
    console.log("poor  only 1");
    return names[1];

}
else if(score == input){
    console.log("poor  only 2");
    return names[2];
}
else if(score == input + 1){
    console.log("poor  only 3");
    return names[2] + " "+1;
}
else if(score == input +2){
    console.log("poor  only 4");
    return names[3];
}
else if(score == input+3){
    console.log("poor  only 5");
    return names[4];
}
else if(score == input +4){
    console.log("poor  only 66");
    return names[4];
}

}
console.log(cricketfunction(2,6));

function switchcase(val){
    switch(val){
        case 1:
            answer="pappa";
            break;
        case 2:
                answer="amma";
                break;
        case 3:
                    answer="pappa";
                    break;
                    case 4:
                        answer="anna";
                        break;   
                        case 5:
                answer="akka";
                break;    
                default :
                 answer="enter valid input";

    }
    return  answer;


}
console.log(switchcase(50));
//inside function console.log is not working;
function f(a){
   if(a == 0){
        return "ok";
    }
    else   if(a != 0){
        return "thants ok :: whatever it takes";
     }

}
console.log(f(11));

// function islessormore(a,b){
//     if(a>b)
//     return true;
//     else if(a == b)
//     return "midlv";
//     else
//     return false;
// }
function islessormore(a,b){
    return a>b;
}

console.log(islessormore(10,0));

var ourfam = {
    "name" : "anil", "age" : 20 , 1 : "it is one"
,   "gender" : "male", "outfit/outlook" : ["awesome!"]
};
function keyvaluepair(){
   
}
var name1 = ourfam.age;
 //name1= 35;
ourfam.age=30;
var name1 = ourfam.age;

var check = ourfam['outfit/outlook'];
var check2 = 2;
// var checkcheck = ourfam.check; doubts
// var checkcheck = ourfam[check];  
//console.log(checkcheck);
console.log(check);
console.log(name1);
console.log(ourfam.name);
ourfam.single = "unmarried";
console.log(ourfam.single);
ourfam['status'] = "focus on job everything will come at right time"
; 
console.log(ourfam['status']);
console.log(ourfam);

delete ourfam['single'] ;
console.log(ourfam);


function varresultObject(val){
    var result = "";
    var lookup = {
        "name" : "anil",
        1 : "learn work hard",
        "single" :"make time to practise",
        "go" : "lets for better life"
    }
   // lookup.val = "projects is the thing that sets yours life";

    result = lookup[val];
    return result;
}
console.log(varresultObject(1));
console.log(varresultObject("name"));

//object to check hasownproperty
var lookup = {
    "name" : "anil_hasown",
    1 : "learn work hard",
    "single" :"make time to practise",
    "go" : "lets for better life"
}
function hasownf(val){
 if(lookup.hasOwnProperty(val))  {
 return lookup[val];
}
else 
return "not found";}

console.log(hasownf("single"));
//manupulating complex objects
var mutobj1st = [{1 : "obj1's key value pais","lets go" : "complete the work"},{
    2 :"second obj first value along with key" ,"name" : "2nd object key as an value please enter"
}];
var mutobj = {inside : {
    1 : "hi" ,
    "2nd  " : "value of 2nd  pair" ,
    "3rd key arrays list" : ["1st list index =0","index1", "[2]",2]

}, 
outside :
{
    1 : "2nd obj first value of pair ",
    2 : " great work to do now" ,
    "array-2nd obj" : [1 , "idex=1" , "index:2","length-1"]
    
}
};
console.log(mutobj.inside[1]);
console.log(mutobj1st[mutobj1st.length-1]);

  var collection = {
    "2548" : {
        "album  " : "slippery when wet"  ,
        "artist" : "bon jovi",
        "tracks" : ["let it rock" , "you give love abad name"
  ]  },
  "2456":{
    "album" : "good vibe" ,
    "artist" : "vij" ,
     "tracks" : []
             } ,
  "4532" :{ 
    "album" : "moonlight" ,
    "artist" : "tentacion" ,
    "tracks" : ["kill my vibe" , "dream walk"]

  } , 
  "5001" : {
    "album" : "all" , 
    "artist" : "anil" , 
    "tracks" : ["kill my vibe" , "simplify"]
  }
  };
   //code for javascript
   var collectioncopy = JSON.parse(JSON.stringify(collection));
    //function to update the code of Object pair values
     
    function updateobj(obj,prop,value){
        if(obj === "" || value === ""){
            return delete collection[obj] [prop];
        }
        else if(prop ==="tracks"){
          collection [obj][prop] = collection[obj][prop] || [] ;
          collection[obj] [prop] = collection [obj][prop].push(value);
        }
        else{
              collection[obj][prop] = value;
        }

        return collection;

    }
    console.log(updateobj("5001","artist", "albumsongs"));



    //changing obj values
    var collectionrecords = {
        "2548" : {
            "album  " : "slippery when wet"  ,
            "artist" : "bon jovi",
            "tracks" : ["let it rock" , "you give love abad name"
      ]  },
      "2456":{
        "album" : "good vibe" ,
        "artist" : "vij" ,
         "tracks" : []
                 } ,
      "4532" :{ 
        "album" : "moonlight" ,
        "artist" : "tentacion" ,
        "tracks" : ["kill my vibe" , "dream walk"]
    
      } , 
      "5001" : {
        "album" : "all" , 
        "artist" : "anil" , 
        "tracks" : ["kill my vibe" , "simplify"]
      }
      };
       

      //taking copy for reference
      var recordcopy = JSON.parse(JSON.stringify(collectionrecords));

      function updaterecords(objectname,keyname,values){
        if(values === ""){
          return  delete collectionrecords[objectname][keyname];
        }
        else if(keyname === "tracks"){
            collectionrecords[objectname][keyname] = collectionrecords[objectname][keyname] || [];
            collectionrecords[objectname][keyname].push(values);

        }
        else{
            collectionrecords[objectname][keyname] = values;
        }
        return collectionrecords;
      }
      console.log(updaterecords("5001","tracks","yfaad"));
      //iterate with loops
//while loop
var myarr=[];
var i=0;
// while(i<10){
//     myarr.push(i);
//     i++;
// }

//for loop
for(var i=0;i<6;i++){
    myarr.push(i);
}
//console.log(myarr);
var oddarr=[];
for(var i=1;i<=10;i=i+2){
    oddarr.push(i);
}
//console.log(oddarr);
var evenarr=[]
for(var i=2; i<=10;i++){
    // i=i/2;
//evenarr.push(i);

}
//console.log(evenarr);
//backward loop
var back = [];
for(var i=10 ; i>=0;i-=2){
    back.push(i);
}
//console.log(back);

var oddback = [];
    for(var i=9;i>0 ; i-=2 ){
    oddback.push(i);
}
console.log(oddback);

var arr = [1,3,4,5,67,80,99];


//finding some of arr total value by adding

var arr = [20,3,6,9,100,"hey",50,20]//38
var total=0;
for(var i=0;i<arr.length;i++){
    total += arr[i];
}
console.log(total);
//mutiply all values of nested array
function mutiplyAll(arr){
    var producte = 1;
    for(var i = 0; i<arr.length; i++){
        for(var j=0;j < arrr[i].length; j++){
            producte *= arr[i][j];
        }
    }

return producte;
}
//var producte = mutiplyAll([[1,2],[2,3],[3,4]]);
//console.log(producte);


//do while loop
var p=0;
do{
    p++;
}while(p<2)
console.log(p);
var objectfind = [{"h":"e",1:"3","hello":[1,"l"]},{"yup " : "8"

}];
var objj = {"hel": {"l" : "ok"},"90" : {"he" : "4"

}};
//object  using name find properties

var contact = [{
    "fname" : "anil",
    "laname" : "k"
,   "work" :"developer"
},{
    "fname" : "manil",
    "laname" : "m"
,   "work" :"rr"
},{
    "fname" : "sanil",
    "laname" : "s"
,   "work" :"engineer"
}];

function lookupdate(name,prop){
    for(var i=0;i<contact.length;i++){
        if(contact[i].fname === name){
        return contact[i][prop] || "no such name";
      }
      

    }
    return "no";
}
var work = lookupdate("manil","work");
console.log(work);

//randam values

function randomval(val){
    return Math.random();
}
console.log(randomval(1));

//random whole numbers
//math.random() for 0 to 1 values range
//math.floor(math.random())
function randomrange(ourmin,max){
    return Math.floor(Math.random() * (max - ourmin + 1)) + ourmin;

}
var r = randomrange(1,8);
console.log(r);
//parseInt function
function convertToInteger(str){
    return parseInt(str);
}
var i = convertToInteger("50");
console.log(i + 5);
//radix = binary number to understand computer
function covertto(str){
    return parseInt(str,2)
}
var u = convertToInteger("10101");
console.log(u);

//ternary operation
// condition ? statement-if-true : statement-if-false;
function checkttt(a,b){
    // if(a === b){
    //     return true;
    // }
    // else{
    //     return false;
    // }
    //ternary
    return a === b ? "ok" : "no"; 
    return a === b ;
}
console.log(checkttt(2,4));

//mutiple ternary 
 function multernary(val){
    return val > 0 ? "positive" : val < 0 ? "negative" : "zero"
 }
 console.log(multernary(-10));

 //difference between var or let 
 //var is global //let is available only within the block{}
   function checkletvar(   ){
//    let i= "functionscope";
//    var i= "functionscope";

    if(true){
        //  let   i = "blockscope"

         //i = "blockscope" 
        var  i = "blockscope"

        console.log("blockscope is "+i);
    }
    console.log("outside block is \"function scope\": "+ i);
   }
   checkletvar();
   //read only varaible with const keyword
 const a = 10;
//  a++; //const recomended to mention refernce name in captial letters
 console.log(a);
 //mutate (change) of array using const
 const constarr = [1,2,3,4];
 constarr[0]=4;
 constarr[1]=4;
 constarr[2]=6;
 constarr[3]=1;
 constarr[4]=1;//increase in size of array .

 console.log(constarr);
 //to prevent data mutation using freezeobject keyword
 function freezeobbbb(){
 const freezeobj = {
    pi : 3.14 
 }
 Object.freeze(freezeobj);
 try{
     freezeobj.pi = 99;
 }
 catch(ex){
    console.log(ex);

 }
 return freezeobj.pi;
}
// const pi = freezeob();
console.log(freezeobbbb());

//use arrow functions to write concise anonymous functions
let ii = (arr1, arr2) => { arr1.concat (arr2)};

console.log(ii([1,3],[2,3,4]));
//arrow allows function as argument 
var arr0=[1,.4,-20,2,6,8];
const squaredIntergers= (arr0) => {
    const squaredlistintegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
 return squaredlistintegers;
}
const squaredlistintegers = squaredIntergers(arr0);
console.log(squaredlistintegers);
//

const functionwithinarrow = () =>
{
    let a= "hey".concat(5);
    return a;
};
console.log(functionwithinarrow);

//rest operator...

function restoperator(args){
   // const argsss = [x,y,z];
    let elements=0;
    for(var i=0;i<args.length;i++){
          elements +=args[i];
    }
    return elements;

    
}
console.log(restoperator([1,2,3]));
//rest operator ...
const sum = (function(){
    return function sum(...args){
        return args.reduce((a,b) => a + b , 0);

    };
})();
console.log(sum(1,2,3,4));
//rest ...
const restope = (function(){
    return function aa(...args){
        return args.reduce((a,b,c) => a + b + c,0);
    }
})();
console.log(restope(1,2,3,4));

//spread operator is sam to rest but...
const arr1=['jan','f','m','a','m','j','jl','a','s'];
let arr2;
(function (){
    arr2=[...arr1];
    arr1[0]='hi';
    
})();
console.log(arr2);