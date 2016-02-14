/**
 * Created by akshaykhot on 2016-02-13.
 */

var cats = {
    "Fossie": {
        name: "Fossie",
        url: "http://www.catchannel.com/images/hamilton-hipster-cat-movember.jpg",
        count: 0
    },
    "Bootsie": {
        name: "Bootsie",
        url: "https://pixabay.com/static/uploads/photo/2015/10/25/09/30/cat-1005489_960_720.jpg",
        count: 0
    },
    "Meow": {
        name: "Meow",
        url: "http://superbpix.com/files/funzug/imgs/walls/big/cute_cats_wal_03.jpg",
        count: 0
    },
    "Ruby": {
        name: "Ruby",
        url: "http://breadedcat.com/wp-content/uploads/2012/02/cat-breading-tutorial-004.jpg",
        count: 0
    },
    "Genie": {
        name: "Genie",
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





