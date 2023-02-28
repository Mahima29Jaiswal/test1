var data =[
    {name:"Rice",quantity:2,price:60},
    {name:"Dal",quantity:3,price:50},
    {name:"salt",quantity:1,price:20}
];

//console.log(data);

var store= 1;
var total=0;
for(var i=0; i<data.length; i++){
    store = data[i].quantity * data[i].price;
    total +=store;
}
console.log(total);