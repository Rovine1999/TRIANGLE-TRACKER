function myFunction() {
var sideA= parseInt(document.getElementById("side1").value);
var sideB= parseInt(document.getElementById("side2").value);
var sideC= parseInt(document.getElementById("side3").value);

if((sideA === sideB) && (sideB === sideC) && (sideC === sideA)) {
    alert("this an equilateral triangle");
}
else if((sideA === sideB) || (sideB === sideC) && (sideC != sideA)) {
    alert("this is an isosceles triangle");
   }
   else if((sideA != sideB) && (sideB != sideC) && (sideC != sideA)) {
       alert("this is a scalene triangle")
   };
}

