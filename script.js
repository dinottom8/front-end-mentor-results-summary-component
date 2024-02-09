fetch("data.json").then((response) => {
    response.json().then((data) => {
        console.log(data)
        insertIconsOnCategories(data)
        insertReachedValues(data)
        outputsCategoryNames(data)
        averageScores(data)
    })
})

// Creates a function that changes the sources attributes in images

    function insertIconsOnCategories(data) {
        let category_icons = [...document.querySelectorAll(".categoryIcon")];
        for ( let i = 0 ; i < data.length ; i++ ) {
                category_icons[i].src = data[i].icon
        }
    }

// Creates a function that capture the reached score 

    function insertReachedValues(data) {
        let category_values = [...document.querySelectorAll(".categoryValue")];
        for ( let i = 0 ; i < data.length ; i++ ) {
            category_values[i].innerHTML = data[i].score;
        }
    }

// Creates a function that outputs the category's name

    function outputsCategoryNames(data) {
        let caterory_names = [...document.querySelectorAll(".categoryName")];
        for ( let i = 0 ; i < data.length ; i++ ) {
            caterory_names[i].innerHTML = data[i].category;
        }
    }

// Creates a function that calculates the average of the scores

    function averageScores(data) {
        let scoreElement = document.querySelector("#score");
        let averageSc = 0;

        for ( let i = 0 ; i < data.length ; i++ ) {
            averageSc += data[i].score;
        }

        averageSc = averageSc/data.length;
        averageSc = averageSc.toFixed(0);

        scoreElement.innerHTML = averageSc;

        writeClassification(averageSc)
    }

// Creates a function that write awesome, great, ok or bad

    function writeClassification(averageSc) {

        let adverb = document.querySelector(".adverb")

        if (averageSc > 90) {
            adverb.innerHTML = "Awesome!"
        } else if (averageSc < 90 && averageSc > 70) {
            adverb.innerHTML = "Great!"
        } else if (averageSc < 70 && averageSc > 50) {
            adverb.innerHTML = "Ok"
        } else {
            adverb.innerHTML = "Bad"
        }
    }