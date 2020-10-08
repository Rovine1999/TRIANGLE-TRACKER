
function myFunction() {
    const sideA= parseInt(document.getElementById("side1").value());
    const sideB= parseInt(document.getElementById("side2").value());
    const sideC= parseInt(document.getElementById("side3").value());
   if (((sideA + sideB) > sideC) && ((sideB + sideC) > sideA) && ((sideC + sideA) > sideB)) {
   alert("This is a Triangle")
 } else if((sideA === sideB) && (sideA != sideC) || (sideA === sideC) && (sideA != sideB)) {
   alert("This is an isosceles Triangle")
 } else if((sideB === sideA) && (sideB != sideC) || (sideB === sideC) && (sideB != sideA)) {
    alert("This is an isosceles Triangle")
}else if((sideC === sideA) && (sideC != sideB) || (sideC === sideB) && (sideC != sideA)) {
    alert("This is an isosceles Triangle")
 }else if((sideA != sideB) && (sideB != sideC) && (sideC != sideA)) {
    alert("This is an scalene Triangle")
 }else if((sideA === sideB) && (sideA === sideC) (sideB === sideC)) {
     alert("This is an equilateral triangle")
 }
}