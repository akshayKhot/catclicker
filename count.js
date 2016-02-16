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
    },
    //update the current cat whenever user clicks on a cat name
    update: function(catName) {
        //traverse through the cats array in model to find the cat object having catName as its name
        var catsArr = model.cats;
        var currentCat;
        for(var i=0; i<catsArr.length; i++) {
            if(catsArr[i].name == catName)
                model.currentCat = catsArr[i];
        }
        //console.log("Current Cat: " + model.currentCat.name);
        //after updating the current cat, render view2 to display its information
        view2.render();
        view3.render();
    },
    //update the counter for the clicked cat
    increment: function() {
        //get the current cat which was clicked
        console.log(model.currentCat.name);
        var catsArr = model.cats;
        var currentCat;
        for(var i=0; i<catsArr.length; i++) {
            if(catsArr[i].name == model.currentCat.name)
                model.currentCat.count++;
        }
        view2.render();
        view3.render();
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
        view3.render();

        //whenever someone clicks on a cat name in the list,
        //tell the controller to update the model
        var catNames = document.getElementsByClassName("cat");
        for(var i=0; i<catNames.length; i++) {
            catNames[i].addEventListener("click", function() {
                controller.update(this.innerHTML);
            });
        }
        //Whenever someone clicks on the image of a cat
        //tell the controller to increment the counter of that cat
        var imgNode = document.getElementById("catImg");
        imgNode.addEventListener("click", function(){
            controller.increment();
        });
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

        nameNode.innerHTML = currentCat.name;
        imgNode.setAttribute("src", currentCat.url);

    }
};

/*Display the count*/
var view3 = {
    render: function() {
        //ask the controller to get the current cat
        var currentCat = controller.getCurrent();
        var countNode = document.getElementById("count");
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




