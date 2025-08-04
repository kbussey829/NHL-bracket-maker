const atlanticTeams = ["Boston Bruins", "Buffalo Sabres", "Detroit Red Wings", "Florida Panthers", "Montreal Canadiens", "Ottawa Senators", "Tampa Bay Lightning", "Toronto Maple Leafs"];
const metroTeams = ["Carolina Hurricanes", "Columbus Blue Jackets", "New Jersey Devils", "New York Islanders", "New York Rangers", "Philadelphia Flyers", "Pittsburgh Penguins", "Washington Capitals"];
const centralTeams = ["Chicago Blackhawks", "Colorado Avalanche", "Dallas Stars", "Minnesota Wild", "Nashville Predators", "St Louis Blues", "Utah Hockey Club", "Winnipeg Jets"];
const pacificTeams = ["Anaheim Ducks", "Calgary Flames", "Edmonton Oilers", "Los Angeles Kings", "San Jose Sharks", "Seattle Kraken", "Vancouver Canucks", "Vegas Golden Knights"];

//all rounds update function
function updateTeams(game, gameNumber, id1, id2){
    let team1;
    let team2;
    let index = gameNumber;
    if (game.childElementCount < 3){
        team1 = document.createElement("option");
        team1.setAttribute("id", `team1${index}`);
        team2 = document.createElement("option");
        team2.setAttribute("id", `team2${index}`);
        game.appendChild(team1);
        game.appendChild(team2);
    } else {
        team1 = document.getElementById(`team1${index}`);
        team2 = document.getElementById(`team2${index}`);
    }
    team1.textContent = document.getElementById(id1).value;
    team2.textContent = document.getElementById(id2).value;
}

//round one teams updating

const game1 = document.getElementById("2-3-atlantic");
game1.addEventListener("click", () => updateTeams(game1, 1, "2-a", "3-a"));

const game2 = document.getElementById("2-3-metro");
game2.addEventListener("click", () => updateTeams(game2, 2, "2-m", "3-m"));

const game3 = document.getElementById("2-3-central");
game3.addEventListener("click", () => updateTeams(game3, 3, "2-c", "3-c"));

const game4 = document.getElementById("2-3-pacific");
game4.addEventListener("click", () => updateTeams(game4, 4, "2-p", "3-p"));

const game5 = document.getElementById("1-WC-western");
game5.addEventListener("click", () => updateTeams(game5, 5, "1-w", "wc2-w"));

const game6 = document.getElementById("2-WC-western");
game6.addEventListener("click", () => updateTeams(game6, 6, "2-w", "wc1-w"));

const game7 = document.getElementById("1-WC-eastern");
game7.addEventListener("click", () => updateTeams(game7, 7, "1-e", "wc2-e"));

const game8 = document.getElementById("2-WC-eastern");
game8.addEventListener("click", () => updateTeams(game8, 8, "2-e", "wc1-e"));

//round two teams updating - NOTE this is where code will change depending on the year (who gets first seed per conference, wild card, etc)
let aDivFinal = ["2-3-atlantic", "2-WC-eastern"];
let mDivFinal = ["2-3-metro", "1-WC-eastern"];
let cDivFinal = ["2-3-central", "1-WC-western"];
let pDivFinal = ["2-3-pacific", "2-WC-western"];

const game9 = document.getElementById("atlantic");
game9.addEventListener("click", () => updateTeams(game9, 9, aDivFinal[0], aDivFinal[1]));

const game10 = document.getElementById("metro");
game10.addEventListener("click", () => updateTeams(game10, 10, mDivFinal[0], mDivFinal[1]));

const game11 = document.getElementById("central");
game11.addEventListener("click", () => updateTeams(game11, 11, cDivFinal[0], cDivFinal[1]));

const game12 = document.getElementById("pacific");
game12.addEventListener("click", () => updateTeams(game12, 12, pDivFinal[0], pDivFinal[1]));

//conference finals teams updating

const game13 = document.getElementById("eastern");
game13.addEventListener("click", () => updateTeams(game13, 13, "atlantic", "metro"));

const game14 = document.getElementById("western");
game14.addEventListener("click", () => updateTeams(game14, 14, "central", "pacific"));

//stanley cup champion updating

const stanley = document.getElementById("stanley");
stanley.addEventListener("click", () => updateTeams(stanley, stanley, "eastern", "western"));

//function to add options to select on startup
function addTeamOptions(selectId, division){
    const options = [];
    for (let i = 0; i < 8; i++){
        options[i] = document.createElement("option");
    }

    if (division == "atlantic"){
        for (let i = 0; i < 8; i++){
            options[i].value = atlanticTeams[i];
            options[i].textContent = atlanticTeams[i];
        }
    } else if (division == "metro"){
        for (let i = 0; i < 8; i++){
            options[i].value = metroTeams[i];
            options[i].textContent = metroTeams[i];
        }
    } else if (division == "central"){
        for (let i = 0; i < 8; i++){
            options[i].value = centralTeams[i];
            options[i].textContent = centralTeams[i];
        }
    } else if (division == "pacific"){
        for (let i = 0; i < 8; i++){
            options[i].value = pacificTeams[i];
            options[i].textContent = pacificTeams[i];
        }
    }

    const selectElement = document.getElementById(selectId);
    for (let i = 0; i < 8; i++){
        selectElement.appendChild(options[i]);
    }
}

addTeamOptions("2-a", "atlantic");
addTeamOptions("3-a", "atlantic");

addTeamOptions("2-m", "metro");
addTeamOptions("3-m", "metro");

addTeamOptions("2-c", "central");
addTeamOptions("3-c", "central");

addTeamOptions("2-p", "pacific");
addTeamOptions("3-p", "pacific");

addTeamOptions("1-e", "atlantic");
addTeamOptions("1-e", "metro");
addTeamOptions("wc2-e", "atlantic");
addTeamOptions("wc2-e", "metro");

addTeamOptions("2-e", "atlantic");
addTeamOptions("2-e", "metro");
addTeamOptions("wc1-e", "atlantic");
addTeamOptions("wc1-e", "metro");

addTeamOptions("1-w", "central");
addTeamOptions("1-w", "pacific");
addTeamOptions("wc2-w", "central");
addTeamOptions("wc2-w", "pacific");

addTeamOptions("2-w", "central");
addTeamOptions("2-w", "pacific");
addTeamOptions("wc1-w", "central");
addTeamOptions("wc1-w", "pacific");

//LAST necessary function: a check to see if the conference winners are set to be in the correct division final

