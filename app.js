var age = 18;
var is_subscribed = true;

if ((age < 18) && (is_subscribed == false)){
    console.log("The User is under 18 and is not subscribed");
}
else if ((age >= 18) && (is_subscribed == false)){
    console.log("The User is older than 18 and not subscribed");
}
else if ((age >= 18) && (is_subscribed == true)) {
    console.log ("the User is older than 18 and is_subscribed");
}
else if ((age < 18) && (is_subscribed == true)) {
    console.log("the User is under than 18 and is_subscribed");
}
else {
    console.log ("error");
}

