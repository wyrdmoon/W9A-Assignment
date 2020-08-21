var age = [ 18, 17, 16, 15, 14, 13 ]
var is_subscribed = [ true, false, true, false]

console.log(userAge = 18);
console.log(is_subscribed);

for (index = 0; index < 6; index++) {

if ((age [index] <= 18) && (is_subscribed [index] == false)){
    console.log("The User is under 18 and is not subscribed");
}
else if ((age [index] >= 18) && (is_subscribed [index] == false)){
    console.log("The User is older than 18 and not subscribed");
}
else if ((age [index]>= 18) && (is_subscribed [index] == true)) {
    console.log ("the User is older than 18 and is_subscribed");
}
else if ((age [index] <= 18) && (is_subscribed [index] == true)) {
    console.log("the User is under than 18 and is_subscribed");
}
else {
    console.log ("error");
}
console.log(index);
}
