/**
 * Created by akshaykhot on 2016-02-13.
 */

/*model cats contains our data. In this case, it's an array of cat objects*/
var model = {
    currentCat: null,
    isVisible: false,
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
};


//==============================================================================================================================

var controller = {

    //initialize the application
    init: function() {
        //set the current cat to the first cat
        model.currentCat = model.cats[0];

        view1.render();
        view2.render();
        view3.render();
    },

    //tell model to get all the cats
    getCats: function() {
        return model.cats;
    },

    //tell model to get the current cat
    getCurrent: function() {
        return model.currentCat;
    },

    setCurrentCat: function(cat) {
      model.currentCat = cat;
    },

    //update the counter for the clicked cat
    increment: function() {
        model.currentCat.count++;
        view2.render();
        view3.render();
    },

    //hide or show the user input area after user clicks on 'admin' button
    toggleView: function() {

        //if the view is visible, hide it, else show it
        if(model.isVisible) {
            model.isVisible = false;
            view1.hide();
        }
        else {
            model.isVisible = true;
            view1.show();
        }
    },

    //update the current cat's data after admin fills the form and clicks 'save'
    updateAdminCat: function(cat) {
        model.currentCat.name = cat.name;
        model.currentCat.url = cat.url;
        model.currentCat.count = cat.count;
    }

};

//==============================================================================================================================

/* Display the list and the first cat*/
var view1 = {

    render: function() {

        var listOfCats = document.getElementById("catList");
        //ask the controller to get all the cats
        var cats = controller.getCats();
        //create a string having all the cats html
        var catHTML = "";
        view1.hide();

        //loop over the cats
        for(var i=0; i<cats.length; i++) {
            var cat = cats[i];
            //create a list element for that cat
            var catNode = document.createElement("li");
            catNode.className = "cat";
            catNode.id = "cat" + i;
            catNode.textContent = cat.name;
            catNode.addEventListener("click", (function(catCopy) {
                return function() {
                    controller.setCurrentCat(catCopy);
                    //after updating the current cat, render view2 and view3 to display its information
                    view2.render();
                    view3.render();
                };
            })(cat));

            //add the cat in the list
            listOfCats.appendChild(catNode);
        }

        var imgNode = document.getElementById("catImg");
        imgNode.addEventListener("click", function(){
            controller.increment();
        });

        var adminNode = document.getElementById("admin");

        adminNode.addEventListener("click", function() {
            controller.toggleView();
        });

        //clicking cancel will hide the user input area
        document.getElementById("cancel").addEventListener("click", function() {
           view1.hide();
        });
        //clicking save will update the current cat's data with the form data
        //and also hide the input area
        document.getElementById("save").addEventListener("click", function() {
            var cat = {
                name: document.getElementById("catAdminName").value,
                url: document.getElementById("catAdminImg").value,
                count: document.getElementById("catAdminClk").value
            };
            controller.updateAdminCat(cat);
            view1.hide();
        });
    },

    show: function() {
        var input = document.getElementById("inputArea");
        //show the input area
        input.style.display = "block";
        //fill out the values for the current cat
        var currentCat = controller.getCurrent();
        document.getElementById("catAdminName").value = currentCat.name;
        document.getElementById("catAdminImg").value = currentCat.url;
        document.getElementById("catAdminClk").value = currentCat.count;
    },

    hide: function() {
        var input = document.getElementById("inputArea");
        input.style.display = "none";
    }
};

/*Display the cat name, image*/
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





