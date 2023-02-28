var e_commerce = [
    {products:"earphone", quantity: 4, price:700},
    {products:"headphone", quantity: 3, price:800},
    {products:"earpods", quantity: 2, price:1000}
];
var store=1;
var total_price=0;
for(var i=0;i<e_commerce.length;i++){
 store = e_commerce[i].quantity * e_commerce[i].price;
 total_price +=store;
}
console.log(total_price);
    
