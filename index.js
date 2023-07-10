let result;
function scuberGreetingForFeet(ride){
  if (ride <= 400) {
    result =("This one is on me!")
  } else if (ride>2000 && ride<=2500) {
    result=("I will gladly take your thirty bucks.")
  } else if (ride > 2500) {
    result="No can do."
  }
  return result
}



let city= "NYC";
function ternaryCheckCity(city){
  // Write your code here!
  let say= (city==="NYC")? "Ok, sounds good." :"No go.";
  return say;
}



let respond;
function switchOnCharmFromTip(tip){
  // Write your code here!
switch (tip) {
  case "generous":
    respond=("Thank you so much.")
    break;
  case "not as generous":
    respond =("Thank you.")
    break;
  default:
    respond = ("Bye.")
    break;
}
return respond;
}
