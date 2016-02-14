/**
 * Created by akshaykhot on 2016-02-13.
 */

var cats = {
    "Fossie": {
        name: "Fossie",
        url: "https://www.petfinder.com/wp-content/uploads/2012/11/140272627-grooming-needs-senior-cat-632x475.jpg",
        count: 0
    },
    "Bootsie": {
        name: "Fossie",
        url: "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg",
        count: 0
    },
    "Meow": {
        name: "Fossie",
        url: "https://www.petfinder.com/wp-content/uploads/2012/11/99233806-bringing-home-new-cat-632x475.jpg",
        count: 0
    },
    "Ruby": {
        name: "Fossie",
        url: "http://breadedcat.com/wp-content/uploads/2012/02/cat-breading-tutorial-004.jpg",
        count: 0
    },
    "Genie": {
        name: "Fossie",
        url: "http://images4.fanpop.com/image/photos/16000000/Beautiful-Cat-cats-16096437-1280-800.jpg",
        count: 0
    },
}

var catNodes = document.getElementsByClassName("cat");
var countNode = document.getElementById("count");
var catImg = document.getElementById("catImg");;

for(var i=0; i<catNodes.length; i++) {
    catNodes[i].addEventListener("click", function() {
        //set the name for the cat
        var catName = this.innerHTML;
        document.getElementById("name").innerHTML = catName;

        //set the image
        catImg.setAttribute("src", cats[catName].url);

        //reset counter to 0
        countNode.textContent = cats[catName].count;
    });
}

catImg.addEventListener("click", function() {
    //Get the text from the name tag
    if(document.getElementById("name").textContent !== ""){
        var catName = document.getElementById("name").textContent;
        countNode.textContent = ++cats[catName].count;
    }
});





