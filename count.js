/**
 * Created by akshaykhot on 2016-02-13.
 */


//get the handle on image
var img = document.getElementById("catImg");
//get a handle on the count div
var count = document.getElementById("count");
var number = parseInt(count.innerHTML);

//add event on image click
img.addEventListener("click", function() {
    number += 1;
    count.innerHTML = number;
    });

