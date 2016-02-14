/**
 * Created by akshaykhot on 2016-02-13.
 */

var cats = {
    "Fossie": "https://www.petfinder.com/wp-content/uploads/2012/11/140272627-grooming-needs-senior-cat-632x475.jpg",
    "Bootsie": "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg",
    "Meow": "https://www.petfinder.com/wp-content/uploads/2012/11/99233806-bringing-home-new-cat-632x475.jpg",
    "Ruby": "http://breadedcat.com/wp-content/uploads/2012/02/cat-breading-tutorial-004.jpg",
    "Genie": "http://i3.mirror.co.uk/incoming/article99763.ece/ALTERNATES/s615/a-bengal-cat-935179217.jpg"
}

var catNodes = document.getElementsByClassName("cat");
for(var i=0; i<catNodes.length; i++) {
    catNodes[i].addEventListener("click", function() {
        //set the name for the cat
        var catName = this.innerHTML;
        document.getElementById("name").innerHTML = catName;

        //set the image
        var catImg = document.getElementById("catImg");
        catImg.setAttribute("src", cats[catName]);
    })
}



