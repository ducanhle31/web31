const getGameDetail = function (id) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1eb8f9b989mshe5d203394bd7b40p10b6f1jsn0c02c9cdfe1e",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  return fetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}",
    options
  ).then((response) => response.json());
};
const screenshots= function(images){
  return images.map(function(screenshot){
    return `<div><img src="${screenshot.image}" alt=""/></div>`;
  });
};

window.onload = function () {
  const url = new URL(location.href);
  const game = url.searchParams.get("game");
  const container = document.querySelector(".main.container");
 getGameDetail(game).then(function(data){
    container.innerHTML = `  <div class="left">
        <h1>free to play game</h1>
       <div class="game-thumbnail" > <img src="${data.thumbnail}" alt="data.title" /></div>
      </div>
      <div class="right">
        <div><h1>Information</h1></div>
        <div class="heading1">
          <div class="heading2">
            <div>
              <div>
                
                Title
              </div>
              <div>
               ${data.title}
              </div>
            </div>
            <div>
              <div>
                
                Developer
              </div>
              <div>
               ${data.developer}
              </div>
            </div>
            <div>
              <div>
                Publisher
              </div>
              <div>
              ${data.publisher}
              </div>
            </div>
          </div>
          <div class="heading2">
            <div>
              <div>
                Release Date
              </div>
              <div>
              ${data.release_date}
              </div>
            </div>
            <div>
              <div>
            Genre
              </div>
              <div>
               ${data.genre}
              </div>
            </div>
            <div>
              <div>
                Platform
              </div>
              <div>
                ${data.platform}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1>Diablo Immortal Screenshots</h1>
          <div>
          ${screenshots(data.screenshots)}
          </div>
        </div>
        <div>
          <h1>About Diablo Immortal</h1>
          <div>
            The demon fighting doesn’t have to stop when you walk away from the
            computer thanks to Blizzard Entertainment’s Diablo Immortal. Built
            for mobile and also released on PC, the game fills in the gaps
            between Diablo II and III in an MMOARPG environment.
          </div>
          <div>
            Diablo Immortal picks up following the presumed death of the
            Archangel Tyrael, during which time mankind must deal with the
            fallout. One of the many problems are the fragments of the shattered
            Worldstone spread across the land, waiting for Diablo’s underlings
            to collect them in an attempt to bring about his return.
          </div>
        </div>
        <div>
          <h1>Minimum System Requirements</h1>
          <div class="heading2">
            <div>
              OS
              <div>
                Windows 7 / Windows 8 / Windows 10 / Windows 11 (64-bit)
              </div>
            </div>
            <div>
              Processor
              <div>Intel Core i3 or AMD FX-8100</div>
            </div>
          </div>
        </div>
      </div>`;
 });
};
