const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSongs();

    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}




/*  const buttons = document.querySelectorAll(".btn");
 let current = null;
 buttons.forEach(function(button){
    button.addEventListener("click", function(){
        const audio = document.querySelector(button.dataset.target);
        if( current && current != audio){
            current.pause();
            current.currentTime=0;

        }
        if ( audio.paused){
            audio.play();

        }else{
            audio.pause();

        }
        current =audio;
    });
 }); */