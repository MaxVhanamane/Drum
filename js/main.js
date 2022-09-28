/*
getElementsByClassName/querySelectorAll doesnt return an array, but a
HTMLCollection in most, or a NodeList is some browsers
(Mozilla ref). Both of these types are Array-Like,
(meaning that they have a length property and the
objects can be accessed via their index), but are not
strictly an Array or inherited from an Array. (meaning
other methods that can be performed on an Array cannot
be performed on these types)
*/

totalDrums = document.querySelectorAll("button").length
// Adding event listener when user clicks on a button

for (var i = 0; i < totalDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonValue = this.innerHTML 
        
        drumSound(buttonValue)
       addAnimation(buttonValue)

    })

}

// Adding event listener when the user press the keys.
document.addEventListener("keypress", function (event) {
   
// event will give as an object with bunch of properties we can then use event.key to get the current key.
    drumSound(event.key)
    addAnimation(event.key)
})

// Function to add a drum sound.
function drumSound(key) {

    switch (key) {
        // The play() method starts playing the current audio or video.
        case "w":
            tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play()
            break;
        case "a":
            tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play()
            break;
        case "s":
            tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play()
            break;
        case "d":
            tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play()
            break;
        case "j":
            crash = new Audio("sounds/crash.mp3")
            crash.play()
            break;
        case "k":
            snare = new Audio("sounds/snare.mp3")
            snare.play()
            break;
        case "l":
            kickBass = new Audio("sounds/kick-bass.mp3")
            kickBass.play()
            break;
        default:
            console.log("default")
    }
}

// Adding button animation using javascript and css.

function addAnimation(key){
    // As we are using keypress as an eventListener when we use document.querySelector("."+key) [here . is representing class eg .w] for keypress event
    // It will try to grab an element for all the keys available on keyboard if that class name eg. document.querySelector(z) is not available then it will return null
    // as it is null we can not add any class to it so it will throw an error to avoid that we use if condition. you can check these errors in console.
    if (document.querySelector("."+key) != null) {
        document.querySelector("."+key).classList.add("pressed")
        setTimeout(() => {
            document.querySelector("."+key).classList.remove("pressed")
        }, 100);
    }
}

