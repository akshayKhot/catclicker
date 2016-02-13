/**
 * Created by akshaykhot on 2016-02-13.
 */

var name1 = "Fossie";
var name2 = "Bootsie";

//set the names for the cats
document.getElementById("name1").innerHTML = name1;
document.getElementById("name2").innerHTML = name2;


//get the handle on images
var cat1 = document.getElementById("catImg1");
var cat2 = document.getElementById("catImg2");

//get a handle on the count divs
var count1 = document.getElementById("count1");
var count2 = document.getElementById("count2");

var number1 = parseInt(count1.innerHTML);
var number2 = parseInt(count2.innerHTML);

//add event on image clicks
cat1.addEventListener("click", function() {
    number1 += 1;
    count1.innerHTML = number1;
    });
cat2.addEventListener("click", function() {
    number2 += 1;
    count2.innerHTML = number2;
});


