/**
 * Created by akshaykhot on 2016-02-13.
 */

/*model cats contains our data. In this case, it's an array of cat objects*/
var model = {
    cats: [
        {
            name: "Fossie",
            url: "http://www.catchannel.com/images/hamilton-hipster-cat-movember.jpg",
            count: 0
        },
        {
            name: "Bootsie",
            url: "https://pixabay.com/static/uploads/photo/2015/10/25/09/30/cat-1005489_960_720.jpg",
            count: 0
        },
        {
            name: "Meow",
            url: "http://superbpix.com/files/funzug/imgs/walls/big/cute_cats_wal_03.jpg",
            count: 0
        },
        {
            name: "Ruby",
            url: "http://breadedcat.com/wp-content/uploads/2012/02/cat-breading-tutorial-004.jpg",
            count: 0
        },
        {
            name: "Genie",
            url: "http://images4.fanpop.com/image/photos/16000000/Beautiful-Cat-cats-16096437-1280-800.jpg",
            count: 0
        }
    ],

    //return all the cats
    getCats: function() {
        return this.cats;
    }

};
//it also contains information about the current cat
model.currentCat = model.cats[0];

//==============================================================================================================================

var controller = {
    //initialize the application
    init: function() {
        view1.render();
    },
    //tell model to get all the cats
    getCats: function() {
        return model.getCats();
    },
    //tell model to get the current cat
    getCurrent: function() {
        return model.currentCat;
    }

};

//==============================================================================================================================

/* Display the list and the first cat*/
var view1 = {

    render: function() {
        //ask the controller to get all the cats
        var cats = controller.getCats();
        //get a handle on catlist
        var listOfCats = document.getElementById("catList");
        //create a string having all the cats html
        var catHTML = "";
        for (var cat in cats) {
            var id = parseInt(cat)+1;
            catHTML += "<li id='cat" + id + "' class='cat'>" + cats[cat].name + "</li>\n";
        }
        console.log(catHTML);
        listOfCats.innerHTML = catHTML;

        view2.render();
    }
};

/*Display the cat name, image and count*/
var view2 = {
    render: function() {
        //ask the controller to get the current cat
        var currentCat = controller.getCurrent();

        //get a handle on name, image, and count nodes
        var nameNode = document.getElementById("name");
        var imgNode = document.getElementById("catImg");
        var countNode = document.getElementById("count");

        nameNode.innerHTML = currentCat.name;
        imgNode.setAttribute("src", currentCat.url);
        countNode.innerHTML = currentCat.count;
    }
};

//==============================================================================================================================

controller.init();

/*
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
*/




