const countdownDisplay = document.getElementById("countdown-display")
const countdownDetails = document.getElementById("countdown-details")

function renderCountdown(){
    const christmas = new Date("Dec 25, 2023 00:00:00")
    const date = new Date()

    let day = christmas.getDate() - date.getDate()
    countdownDisplay.innerText = day
}

function updateCountdown() {
    const now = new Date()

    if (now.getMonth() >= 11 && now.getDate() >= 25) {
        countdownDetails.innerText = "2023 Christmas is done!"
    } else {
        countdownDetails.innerHTML = `
            <section>
                <div>
                    <div class="time-detail">${now.getHours()}</div>
                    <div>Hours</div>
                </div>
                :
                <div>
                    <div class="time-detail">${now.getMinutes()}</div>
                    <div>Minutes</div>
                </div>
                :
                <div>
                    <div class="time-detail">${now.getSeconds()}</div>
                    <div>Seconds</div>
                </div>
            </section>
        `
    }
}

renderCountdown()
setInterval(updateCountdown, 1000)

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2023.