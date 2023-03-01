var amazon =[
    {name:"Speaker", price:5400, rating:4},
    {name:"headphones", price:3000, rating:3},
    {name:"playstation", price:20000, rating:5}
];

function allnr(amazon){
    //return amazon.name+" "+ amazon.rating;
    console.log("Name: "+amazon.name+", "+"Rating: " +amazon.rating);
}

var sum=0;
var minv=99999;
for(var i=0; i<amazon.length;i++){
    allnr(amazon[i]);
    sum += amazon[i].rating;
    if(minv > amazon[i].price){
        minv =amazon[i].price;
    }
}
var avg = sum/amazon.length;

//console.log("Ans 1. "+allnr(amazon));
console.log("Avg Rating: "+avg);
console.log("Min Price: "+minv);
