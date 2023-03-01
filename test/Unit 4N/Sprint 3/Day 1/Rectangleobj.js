var rectangle =[
    { length: 8, width: 10},
    {length: 7, width: 11},
    {length: 9, width: 14},
    {length: 18, width: 13},
    {length: 28, width: 15},
    {length: 6, width: 19},
];

//var area=1, perimeter=1;
for(var i=0; i<rectangle.length; i++){
    // area = rectangle[i].length * rectangle[i].width; 
    // perimeter = 2 * (rectangle[i].length +rectangle[i].width);
    // console
    console.log("area - "+area(rectangle[i]));
    console.log("rectangle - "+perimeter(rectangle[i]));
}
function area(rectangle){
    return rectangle.length * rectangle.width;
    
}
function perimeter(rectangle){
    return 2 * (rectangle.length +rectangle.width);
}