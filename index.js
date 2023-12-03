const tilesContainer = document.getElementById("menu-tiles")
const tilesData = [
    {name: "Day 1", title: "Countdown to Christmas"},
    {name: "Day 2", title: "Style a Colorful Button"},
]

console.log(tilesData)

function renderTiles() {
    const tiles = tilesData.map((tile, index) => (
        `
        <div class="day">
            <a href="./day-${index+1}/index.html">
                <img src="./img/day-${index+1}.jpg" alt="${tile.name}: ${tile.title}">
            </a>
            <p class="project-day">${tile.name}</p>
            <p class="project-title">${tile.title}</p>
            <div class="buttons">
                <a href="https://github.com/vishalicious213/javascriptmas-2023/tree/main/day-1">
                    <button class="view-code">View Code</button>
                </a>
                <a href="https://scrimba.com/learn/javascriptmas/-day-1-countdown-to-christmas-co80c4e67af8077afdabe0297">
                    <button class="view-scrim">View Scrim</button>
                </a>
            </div>
        </div>
        `
    ))

    tilesContainer.innerHTML = tiles
}

renderTiles()