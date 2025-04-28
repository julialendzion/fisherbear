window.addEventListener("load", StartScreen);


let points = 0;
let lives = 3;
let GameIsPaused = false;
let GameHasEnded = false;
let timeLeft = 30;

function StartScreen() {
    document.querySelector("#title_screen").classList.remove("hidden");
    document.querySelector("#start_game").addEventListener("click", start);
     document.querySelector("#start_game").addEventListener("click", buttonClick);
    
    document.querySelector("#start_game").classList.add("pulse");
    document.querySelector("#a_container1").classList.add("hidden");
    document.querySelector("#a_container2").classList.add("hidden");
    document.querySelector("#a_container3").classList.add("hidden");
    document.querySelector("#a_container4").classList.add("hidden");
}

 


function start() {
    console.log("function start the game");
    
    playBackgroundMusic();
    
    document.querySelector("#BackgroundMusic").addEventListener("ended", playBackgroundMusic);

    startTimer();
    document.querySelector("#title_screen").classList.add("hidden");

    setTimeout(function () {



        document.querySelector("#a_container1").classList.remove("hidden");
        document.querySelector("#a_container1").classList.add("position1");
        document.querySelector("#a_container1").classList.add("fade_in");
        document.querySelector("#a_container1").addEventListener("click", clickFish1);
        document.querySelector("#a_container1").addEventListener("animationend", newPosition);
    }, 2000);





    setTimeout(function () {
        document.querySelector("#a_container2").classList.remove("hidden");
        document.querySelector("#a_container2").classList.add("position2");
        document.querySelector("#a_container2").classList.add("fade_in2");
        document.querySelector("#a_container2").addEventListener("click", clickFish2);
        document.querySelector("#a_container2").addEventListener("animationend", newPosition2);
    }, 4000);

    setTimeout(function () {
        document.querySelector("#a_container3").classList.remove("hidden");
        document.querySelector("#a_container3").classList.add("position3");
        document.querySelector("#a_container3").classList.add("fade_in3");
        document.querySelector("#a_container3").addEventListener("click", clickTrash1);

        document.querySelector("#a_container3").addEventListener("animationend", newPosition3);
    }, 1);

    setTimeout(function () {
        document.querySelector("#a_container4").classList.remove("hidden");
        document.querySelector("#a_container4").classList.add("position4");
        document.querySelector("#a_container4").classList.add("fade_in4");
        document.querySelector("#a_container4").addEventListener("click", clickTrash2);

        document.querySelector("#a_container4").addEventListener("animationend", newPosition4);
    }, 1500);




    document.querySelector("#pause").addEventListener("click", PauseGame);
    document.querySelector("#play").addEventListener("click", PauseGame);
    document.querySelector("#mute").addEventListener("click", muteSound);
    document.querySelector("#unmute").addEventListener("click", muteSound);
    document.querySelector("#question_mark").addEventListener("click", instructions);
     document.querySelector("#pause").addEventListener("click", buttonClick);
    document.querySelector("#play").addEventListener("click", buttonClick);
    document.querySelector("#mute").addEventListener("click", buttonClick);
    document.querySelector("#unmute").addEventListener("click", buttonClick);
    document.querySelector("#question_mark").addEventListener("click", buttonClick);


    if (lives < 1) {
        GameOver();
    }
    if (points > 14) {
        LevelComplete();
    }

}


function startTimer() {
    if (GameIsPaused == false && GameHasEnded == false) {
        console.log("start timer");
        if (timeLeft == 0) {
            GameOver();
        } else {
            setTimeout(showTime, 1000);
        }
    }
}



function showTime() {
    if (timeLeft > 0) {
        timeLeft--;
        startTimer();
        document.querySelector("#time_left").textContent = timeLeft;
    } else {
        GameOver();
    }
}


function clickFish1() {

    console.log("function fade out()");
    document.querySelector("#happy_bear").classList.remove("hidden");

    setTimeout(function () {
        document.querySelector("#happy_bear").classList.add("hidden");

    }, 3000);
    document.querySelector("#fishSound").currentTime = 0;
    document.querySelector("#fishSound").play();


    points++;
    if (points > 14) {
        LevelComplete();
    }
    document.querySelector("#points").textContent = points;

    document.querySelector("#fish_sprite1").classList.add("fade_out");

    setTimeout(restart, 3000);



}

function clickFish2() {
    document.querySelector("#happy_bear").classList.remove("hidden");

    setTimeout(function () {
        document.querySelector("#happy_bear").classList.add("hidden");

    }, 3000);

    document.querySelector("#fishSound").currentTime = 0;
    document.querySelector("#fishSound").play();
    
    points++;
    if (points > 14) {
        LevelComplete();
    }

    document.querySelector("#points").textContent = points;

    document.querySelector("#fish_sprite2").classList.add("fade_out");

    document.querySelector("#fish_sprite2").addEventListener("animationend", restart2);




}

function clickTrash1() {
    console.log("");

    document.querySelector("#sad_bear").classList.remove("hidden");

    setTimeout(function () {
        document.querySelector("#sad_bear").classList.add("hidden");

    }, 3000);

    document.querySelector("#trashSound").currentTime = 0;
    document.querySelector("#trashSound").play();


    document.querySelector("#trash_sprite1").classList.add("fade_out");
    document.querySelector("#trash_sprite1").addEventListener("animationend", restart3);

    document.querySelector("#life" + lives).classList.remove("full_heart");
    document.querySelector("#life" + lives).classList.add("empty_heart");
    lives--;
    if (lives < 1) {
        GameOver();

    }

}


function clickTrash2() {

    document.querySelector("#sad_bear").classList.remove("hidden");

    setTimeout(function () {
        document.querySelector("#sad_bear").classList.add("hidden");

    }, 3000);
    document.querySelector("#trashSound").currentTime = 0;
    document.querySelector("#trashSound").play();
    document.querySelector("#trash_sprite2").classList.add("fade_out");
    document.querySelector("#trash_sprite2").addEventListener("animationend", restart4);

    document.querySelector("#life" + lives).classList.remove("full_heart");
    document.querySelector("#life" + lives).classList.add("empty_heart");
    lives--;
    if (lives < 1) {
        GameOver();
    }
}



function restart() {

    console.log("function restart()");


    document.querySelector("#a_container1").classList.remove("fade_in");
    document.querySelector("#fish_sprite1").classList.value = "";

    this.offsetHeight;



    document.querySelector("#a_container1").classList.add("fade_in");

    let rndPos = Math.floor(Math.random() * 6) + 1;

    console.log(rndPos);

    document.querySelector("#a_container1").classList.add("position" + rndPos);


}

function restart2() {
    console.log("function restart2()");


    this.parentElement.classList.remove("fade_in2");
    this.classList.value = "";

    this.offsetHeight;

    this.parentElement.classList.add("fade_in2");

    let rndPos = Math.floor(Math.random() * 6) + 1;

    console.log(rndPos);

    this.parentElement.classList.add("position" + rndPos);


}

function restart3() {
    console.log("function restart()");



    this.parentElement.classList.remove("fade_in3");
    this.classList.value = "";

    this.offsetHeight;

    this.parentElement.classList.add("fade_in3");

    let rndPos = Math.floor(Math.random() * 6) + 1;

    console.log(rndPos);

    this.parentElement.classList.add("position" + rndPos);

}

function restart4() {
    console.log("function restart()");



    this.parentElement.classList.remove("fade_in4");
    this.classList.value = "";

    this.offsetHeight;

    this.parentElement.classList.add("fade_in4");

    let rndPos = Math.floor(Math.random() * 6) + 1;

    console.log(rndPos);

    this.parentElement.classList.add("position" + rndPos);

}



function newPosition() {

    console.log("new position after sprites disappear");
    this.classList.remove("fade_in");

    this.classList.value = "";
    this.offsetHeight;
    this.classList.add("fade_in");
    let rndPos = Math.floor(Math.random() * 6) + 1;

    console.log(rndPos);
    this.classList.add("position" + rndPos);

}


function newPosition2() {

    console.log("new position after sprites disappear");
    this.classList.remove("fade_in2");
    this.classList.value = "";
    this.offsetHeight;
    this.classList.add("fade_in2");
    let rndPos = Math.floor(Math.random() * 6) + 1;

    console.log(rndPos);

    this.classList.add("position" + rndPos);
}

function newPosition3() {

    console.log("new position after sprites disappear");


    this.classList.remove("fade_in3");
    this.classList.value = "";
    this.offsetHeight;
    this.classList.add("fade_in3");
    let rndPos = Math.floor(Math.random() * 6) + 1;

    console.log(rndPos);

    this.classList.add("position" + rndPos);

}

function newPosition4() {
    console.log("new position after sprites disappear");


    this.classList.remove("fade_in4");
    this.classList.value = "";
    this.offsetHeight;
    this.classList.add("fade_in4");
    let rndPos = Math.floor(Math.random() * 6) + 1;

    console.log(rndPos);

    this.classList.add("position" + rndPos);

}



function PauseGame() {
    if (GameIsPaused == false) {
        console.log("game is paused");
        document.querySelector("#play").classList.remove("hidden");
        document.querySelector("#a_container1").classList.add("paused");
        document.querySelector("#a_container2").classList.add("paused");
        document.querySelector("#a_container3").classList.add("paused");
        document.querySelector("#a_container4").classList.add("paused");
        document.querySelector("#a_container1").removeEventListener("click", clickFish1);
        document.querySelector("#a_container1").removeEventListener("animationend", newPosition);
        document.querySelector("#a_container2").removeEventListener("click", clickFish2);
        document.querySelector("#a_container2").removeEventListener("animationend", newPosition2);
        document.querySelector("#a_container3").removeEventListener("click", clickTrash1);
        document.querySelector("#a_container3").removeEventListener("animationend", newPosition3);
        document.querySelector("#a_container4").removeEventListener("click", clickTrash2);
        document.querySelector("#a_container4").removeEventListener("animationend", newPosition4);
        

        GameIsPaused = true;
    } else {
        console.log("game is NOT paused");
        document.querySelector("#play").classList.add("hidden");
        document.querySelector("#instructions").classList.add("hidden");
        document.querySelector("#a_container1").classList.remove("paused");
        document.querySelector("#a_container2").classList.remove("paused");
        document.querySelector("#a_container3").classList.remove("paused");
        document.querySelector("#a_container4").classList.remove("paused");

        document.querySelector("#a_container1").addEventListener("click", clickFish1);
        document.querySelector("#a_container1").addEventListener("animationend", newPosition);
        document.querySelector("#a_container2").addEventListener("click", clickFish2);
        document.querySelector("#a_container2").addEventListener("animationend", newPosition2);
        document.querySelector("#a_container3").addEventListener("click", clickTrash1);
        document.querySelector("#a_container3").addEventListener("animationend", newPosition3);
        document.querySelector("#a_container4").addEventListener("click", clickTrash2);
        document.querySelector("#a_container4").addEventListener("animationend", newPosition4);

        GameIsPaused = false;
        startTimer();
    }
}

function instructions() {
    if (GameIsPaused == false) {
        console.log("game is paused");
        document.querySelector("#play").classList.remove("hidden");
        document.querySelector("#instructions").classList.remove("hidden");
        document.querySelector("#a_container1").classList.add("paused");
        document.querySelector("#a_container2").classList.add("paused");
        document.querySelector("#a_container3").classList.add("paused");
        document.querySelector("#a_container4").classList.add("paused");
        document.querySelector("#a_container1").removeEventListener("click", clickFish1);
        document.querySelector("#a_container1").removeEventListener("animationend", newPosition);
        document.querySelector("#a_container2").removeEventListener("click", clickFish2);
        document.querySelector("#a_container2").removeEventListener("animationend", newPosition2);
        document.querySelector("#a_container3").removeEventListener("click", clickTrash1);
        document.querySelector("#a_container3").removeEventListener("animationend", newPosition3);
        document.querySelector("#a_container4").removeEventListener("click", clickTrash2);
        document.querySelector("#a_container4").removeEventListener("animationend", newPosition4);
        document.querySelector("#back_to_start").addEventListener("click", BackToStart);
         document.querySelector("#back_to_start").addEventListener("click", buttonClick);
        document.querySelector("#back_to_start").classList.add("pulse");

        GameIsPaused = true;
    } else {
        console.log("game is NOT paused");
        document.querySelector("#play").classList.add("hidden");
        document.querySelector("#instructions").classList.add("hidden");
        document.querySelector("#a_container1").classList.remove("paused");
        document.querySelector("#a_container2").classList.remove("paused");
        document.querySelector("#a_container3").classList.remove("paused");
        document.querySelector("#a_container4").classList.remove("paused");

        document.querySelector("#a_container1").addEventListener("click", clickFish1);
        document.querySelector("#a_container1").addEventListener("animationend", newPosition);
        document.querySelector("#a_container2").addEventListener("click", clickFish2);
        document.querySelector("#a_container2").addEventListener("animationend", newPosition2);
        document.querySelector("#a_container3").addEventListener("click", clickTrash1);
        document.querySelector("#a_container3").addEventListener("animationend", newPosition3);
        document.querySelector("#a_container4").addEventListener("click", clickTrash2);
        document.querySelector("#a_container4").addEventListener("animationend", newPosition4);
        document.querySelector("#back_to_start").removeEventListener("click", BackToStart);
        GameIsPaused = false;
        startTimer();
    }
}

function RestartGame() {
    console.log("restart game");
    stopSounds();
    playBackgroundMusic();
    
    GameIsPaused = false;
    document.querySelector("#game_over").classList.add("hidden");
    document.querySelector("#level_complete").classList.add("hidden");


    document.querySelector("#life3").classList.remove("empty_heart");
    document.querySelector("#life2").classList.remove("empty_heart");
    document.querySelector("#life1").classList.remove("empty_heart");
    document.querySelector("#life3").classList.add("full_heart");
    document.querySelector("#life2").classList.add("full_heart");
    document.querySelector("#life1").classList.add("full_heart");

    document.querySelector("#a_container1").removeEventListener("click", clickFish1);
    document.querySelector("#a_container1").removeEventListener("animationend", newPosition);
    document.querySelector("#a_container2").removeEventListener("click", clickFish2);
    document.querySelector("#a_container2").removeEventListener("animationend", newPosition2);
    document.querySelector("#a_container3").removeEventListener("click", clickTrash1);
    document.querySelector("#a_container3").removeEventListener("animationend", newPosition3);
    document.querySelector("#a_container4").removeEventListener("click", clickTrash2);
    document.querySelector("#a_container4").removeEventListener("animationend", newPosition4);

    document.querySelector("#a_container1").classList.remove("paused");
    document.querySelector("#a_container2").classList.remove("paused");
    document.querySelector("#a_container3").classList.remove("paused");
    document.querySelector("#a_container4").classList.remove("paused");
    document.querySelector("#fish_sprite1").classList.remove("paused");
    document.querySelector("#fish_sprite2").classList.remove("paused");
    document.querySelector("#trash_sprite1").classList.remove("paused");
    document.querySelector("#trash_sprite2").classList.remove("paused");

    lives = 3;
    points = 0;
    timeLeft = 30
    document.querySelector("#points").textContent = points;
    document.querySelector("#time_left").textContent = timeLeft;

    GameHasEnded = false;
    start();
}

function BackToStart() {
    GameIsPaused = false;
    stopSounds();
  
    
    document.querySelector("#game_over").classList.add("hidden");
    document.querySelector("#level_complete").classList.add("hidden");
    document.querySelector("#instructions").classList.add("hidden");
    document.querySelector("#play").classList.add("hidden");

    document.querySelector("#fish_sprite1").classList.value = "";
    document.querySelector("#fish_sprite2").classList.value = "";
    document.querySelector("#trash_sprite2").classList.value = "";
    document.querySelector("#trash_sprite1").classList.value = "";

    document.querySelector("#a_container1").classList.value = "";
    document.querySelector("#a_container2").classList.value = "";
    document.querySelector("#a_container3").classList.value = "";
    document.querySelector("#a_container4").classList.value = "";


    document.querySelector("#a_container1").removeEventListener("click", clickFish1);
    document.querySelector("#a_container1").removeEventListener("animationend", newPosition);
    document.querySelector("#a_container2").removeEventListener("click", clickFish2);
    document.querySelector("#a_container2").removeEventListener("animationend", newPosition2);
    document.querySelector("#a_container3").removeEventListener("click", clickTrash1);
    document.querySelector("#a_container3").removeEventListener("animationend", newPosition3);
    document.querySelector("#a_container4").removeEventListener("click", clickTrash2);
    document.querySelector("#a_container4").removeEventListener("animationend", newPosition4);

    document.querySelector("#a_container1").classList.add("hidden");
    document.querySelector("#a_container2").classList.add("hidden");
    document.querySelector("#a_container3").classList.add("hidden");
    document.querySelector("#a_container4").classList.add("hidden");

    document.querySelector("#life3").classList.remove("empty_heart");
    document.querySelector("#life2").classList.remove("empty_heart");
    document.querySelector("#life1").classList.remove("empty_heart");
    document.querySelector("#life3").classList.add("full_heart");
    document.querySelector("#life2").classList.add("full_heart");
    document.querySelector("#life1").classList.add("full_heart");

    document.querySelector("#a_container1").classList.remove("paused");
    document.querySelector("#a_container2").classList.remove("paused");
    document.querySelector("#a_container3").classList.remove("paused");
    document.querySelector("#a_container4").classList.remove("paused");
    document.querySelector("#fish_sprite1").classList.remove("paused");
    document.querySelector("#fish_sprite2").classList.remove("paused");
    document.querySelector("#trash_sprite1").classList.remove("paused");
    document.querySelector("#trash_sprite2").classList.remove("paused");

    lives = 3;
    points = 0;
    timeLeft = 30

    document.querySelector("#points").textContent = points;
    document.querySelector("#time_left").textContent = timeLeft;

    GameHasEnded = false;
    StartScreen();
}

function GameOver() {
    console.log("game over");
    if (GameHasEnded == false) {

        stopSounds();

        document.querySelector("#GameOverSound").currentTime = 0;
        document.querySelector("#GameOverSound").play();

        document.querySelector("#game_over").classList.remove("hidden");
        document.querySelector("#sad_bear").classList.add("hidden");
        document.querySelector("#happy_bear").classList.add("hidden");


        document.querySelector("#fish_sprite1").classList.value = "";
        document.querySelector("#fish_sprite2").classList.value = "";
        document.querySelector("#trash_sprite2").classList.value = "";
        document.querySelector("#trash_sprite1").classList.value = "";

        document.querySelector("#a_container1").classList.value = "";
        document.querySelector("#a_container2").classList.value = "";
        document.querySelector("#a_container3").classList.value = "";
        document.querySelector("#a_container4").classList.value = "";


        document.querySelector("#a_container1").removeEventListener("click", clickFish1);
        document.querySelector("#a_container1").removeEventListener("animationend", newPosition);
        document.querySelector("#a_container2").removeEventListener("click", clickFish2);
        document.querySelector("#a_container2").removeEventListener("animationend", newPosition2);
        document.querySelector("#a_container3").removeEventListener("click", clickTrash1);
        document.querySelector("#a_container3").removeEventListener("animationend", newPosition3);
        document.querySelector("#a_container4").removeEventListener("click", clickTrash2);
        document.querySelector("#a_container4").removeEventListener("animationend", newPosition4);

        document.querySelector("#a_container1").classList.add("hidden");
        document.querySelector("#a_container2").classList.add("hidden");
        document.querySelector("#a_container3").classList.add("hidden");
        document.querySelector("#a_container4").classList.add("hidden");

        document.querySelector("#play_again").addEventListener("click", RestartGame);
        document.querySelector("#play_again").addEventListener("click", buttonClick);
        document.querySelector("#play_again").classList.add("pulse");
        
         document.querySelector("#back_to_start2").addEventListener("click", BackToStart);
         document.querySelector("#back_to_start2").addEventListener("click", buttonClick);
        document.querySelector("#back_to_start2").classList.add("pulse");

        GameHasEnded = true;

    }
}

function LevelComplete() {
    console.log("level complete");
    if (GameHasEnded == false) {

        stopSounds();
        document.querySelector("#LevelCompleteSound").play();
        document.querySelector("#LevelCompleteSound").currentTime = 0;



        document.querySelector("#level_complete").classList.remove("hidden");
        document.querySelector("#sad_bear").classList.add("hidden");
        document.querySelector("#happy_bear").classList.add("hidden");

        document.querySelector("#fish_sprite1").classList.value = "";
        document.querySelector("#fish_sprite2").classList.value = "";
        document.querySelector("#trash_sprite2").classList.value = "";
        document.querySelector("#trash_sprite1").classList.value = "";

        document.querySelector("#a_container1").classList.value = "";
        document.querySelector("#a_container2").classList.value = "";
        document.querySelector("#a_container3").classList.value = "";
        document.querySelector("#a_container4").classList.value = "";


        document.querySelector("#a_container1").removeEventListener("click", clickFish1);
        document.querySelector("#a_container1").removeEventListener("animationend", newPosition);

        document.querySelector("#a_container2").removeEventListener("click", clickFish2);
        document.querySelector("#a_container2").removeEventListener("animationend", newPosition2);
        document.querySelector("#a_container3").removeEventListener("click", clickTrash1);
        document.querySelector("#a_container3").removeEventListener("animationend", newPosition3);
        document.querySelector("#a_container4").removeEventListener("click", clickTrash2);
        document.querySelector("#a_container4").removeEventListener("animationend", newPosition4);

        document.querySelector("#a_container1").classList.add("hidden");
        document.querySelector("#a_container2").classList.add("hidden");
        document.querySelector("#a_container3").classList.add("hidden");
        document.querySelector("#a_container4").classList.add("hidden");

        document.querySelector("#play_again2").addEventListener("click", RestartGame);
        document.querySelector("#play_again2").addEventListener("click", buttonClick);
        

        document.querySelector("#play_again2").classList.add("pulse");
        document.querySelector("#fish_won_game").classList.add("shake");
        
         document.querySelector("#back_to_start3").addEventListener("click", BackToStart);
         document.querySelector("#back_to_start3").addEventListener("click", buttonClick);
        document.querySelector("#back_to_start3").classList.add("pulse");

        GameHasEnded = true;

    }

}

function playBackgroundMusic() {
    console.log("function playBackgroundMusic()");
    document.querySelector("#BackgroundMusic").play();
}



function playLevelCompleteSound() {
    console.log("function playLevelCompleteSound()");

    document.querySelector("#LevelCompleteSound").play();
}

function buttonClick() {document.querySelector("#buttonClick").currentTime = 0;
    document.querySelector("#buttonClick").play();
    
}

function muteSound() {
    console.log("function muteSound()");

    if (document.querySelector("#BackgroundMusic").muted == false) {
        document.querySelector("#BackgroundMusic").muted = true;
        document.querySelector("#GameOverSound").muted = true;
        document.querySelector("#LevelCompleteSound").muted = true;
        document.querySelector("#unmute").classList.remove("hidden");
        document.querySelector("#fishSound").muted = true;
        document.querySelector("#trashSound").muted = true;
        document.querySelector("#buttonClick").muted = true;

    } else {
        document.querySelector("#BackgroundMusic").muted = false;
        document.querySelector("#GameOverSound").muted = false;
        document.querySelector("#LevelCompleteSound").muted = false;
        document.querySelector("#unmute").classList.add("hidden");
        document.querySelector("#fishSound").muted = false;
        document.querySelector("#trashSound").muted = false;
        document.querySelector("#buttonClick").muted = false;
    }

}


function stopSounds() {

    document.querySelector("#fishSound").pause();
    document.querySelector("#trashSound").pause();
    document.querySelector("#BackgroundMusic").pause();
    document.querySelector("#BackgroundMusic").currentTime = 0;
    document.querySelector("#BackgroundMusic").removeEventListener("ended", playBackgroundMusic);

    document.querySelector("#GameOverSound").pause();

    document.querySelector("#LevelCompleteSound").pause();

}
