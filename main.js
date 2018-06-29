/*
Author: Austin Hale
*/

var answers = document.getElementsByName("choices");

function refresh() {
    var styleElem = document.head.appendChild(document.createElement("style"));
    document.getElementById('questions').innerHTML = questions_arr[question_number-1];
    
    for (var i=1; i<=4;i++) {
        document.getElementById('answer'+i).innerHTML = getAnswerChoices();
        document.getElementById('ans'+i).checked = false;
    }
    styleElem.innerHTML = "h3 {text-align: center;}";
}

var questions_arr = 
["Which age range best describes you?", "What is your preferred method of listening to music?",
"What is your favorite flow style?", "What's your favorite movie genre?", "What do you like to do on the weekends?",
"How do you feel about the presence of social issues in music?", "What's your take on autotune?",
"Who's one of your favorite mainstream artists?", "Pick a region that best describes your taste:", 
"Which do you prefer: hooks or choruses?"];

var answers_arr = [
    ["0-17", "Earbuds", "Fast", "Action", "Go out and party", "I'm with it", "T-Pain is my idol", "J. Cole", "East Coast", "Hooks make the song"],
    ["18-24", "Over-the-ear headphones", "Medium paced", "Horror", "Chill with some friends", "Keep it out of music", "I think it's great", "Drake", "West Coast", "Little to no hooks. I like it old school."],
    ["25-39", "Small speakers", "Smooth and slow", "Comedy", "Stay home alone", "As long as it isn't overbearing, it's good", "Not a huge fan", "Kendrick Lamar", "Southern Rap", "Both"],
    ["40+", "Huge speakers", "Other/Unique", "Thriller", "Play video games", "Not a huge fan, but I'll listen sometimes", "I hate autotune. I'm old", "I don't listen to mainstream artists", "Area doesn't matter", "Neither. I like production."]
];

var question_number = 1;
var idx = 0;
var first_question = false;

function getAnswerChoices() {
    if (first_question) { idx++ };

    while (idx < answers.length) {
        switch (answers[idx].value) {
            case 'a':
                first_question = true;
                return answers_arr[idx][question_number - 1];
            case 'b':
                return answers_arr[idx][question_number - 1];
            case 'c':
                return answers_arr[idx][question_number - 1];
            case 'd':
                first_question = false;
                return answers_arr[idx][question_number - 1];
            default:
                return;
        }
    }
}

// List of all possible artist results
var amir_obe = 0
var sir = 0
var jalen_santoy = 0; 
var the88glam = 0;
var derek_pope = 0;
var cunninlynguists = 0;
var joyner_lucas = 0
var royce_da_59 = 0 
var flatbush_zombies = 0; 
var kirk_knight = 0;
var nyck_caution = 0;

function submitAnswer() {
    var i = 0, options = answers.length;
    var checked = false;
    var user_choice;

    for (; i < options; i++) {
        if (answers[i].checked) {
            user_choice = answers[i].value;
            checked = true;
        }
    }

    if (!checked) {
        // alert("answer not checked");
        return;
    }

    switch (user_choice) {
        case 'a':
            incrAArtists();
            break;
        case 'b':
            incrBArtists();
            break;
        case 'c':
            incrCArtists();
            break;
        case 'd':
            incrDArtists();
            break;
        default:
            return;
    }

    question_number++;
    idx = 0;
    refresh();
    if (question_number==10) {
        document.getElementById('button').innerHTML="Submit Quiz";
    }
    if (question_number>10) {
        getResults();
    }
}

function getResults() {
    
    removeElements();
    document.getElementById('reset').style.display='block';
    document.getElementById('wrapper').style.display='block';

    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = "#reset {margin: 0 auto;}";

    var artist_picks = {"Amir Obe": amir_obe, "SiR": sir, "Jalen Santoy": jalen_santoy, 
    "Derek Pope": derek_pope, "88GLAM": the88glam, "Cunninlynguists": cunninlynguists, 
    "Joyner Lucas": joyner_lucas, "Royce da 5'9\"": royce_da_59, "Flatbush Zombies": flatbush_zombies, 
    "Kirk Knight": kirk_knight, "Nyck Caution": nyck_caution};

    var artist_perc = [amir_obe,sir,jalen_santoy,derek_pope,the88glam,
    cunninlynguists,joyner_lucas,flatbush_zombies,kirk_knight,nyck_caution];

    var keysSorted = Object.keys(artist_picks).sort(function(a,b){return artist_picks[b]-artist_picks[a]});
    
    artist_perc.sort(function(a,b){return b-a});

    displayCustomResults(keysSorted, artist_perc);
}

function displayCustomResults(sortedArtists, sortedPercentage) {
    for(var i=0; i<4; i++) {

        var styleElem = document.head.appendChild(document.createElement("style"));
        styleElem.innerHTML = ".line::after {content: '';} .line" + (i+1) +
        "::after {max-width: " + sortedPercentage[i] + "0%;}";
        
        document.getElementById('perc' + (i+1)).style.display = 'block';
        document.getElementById('perc' + (i+1)).innerHTML = sortedPercentage[i] + "0%";

        document.getElementById('result'+(i+1)).innerHTML = sortedArtists[i];
    }
        
        document.getElementById(''+sortedArtists[0]+'').style.display = 'block';
}

function removeElements() {
    document.getElementById('button').style.display = "none";

    for (var i=1; i<=4;i++) {
        document.getElementById('answer'+i).style.display = "none";
        document.getElementById('ans'+i).style.display = "none";
    }

    document.getElementById('questions').style.display = "none";
    document.getElementById('form').style.display = "none";
}

function incrAArtists() {
    switch (question_number) {
        case 1:
            derek_pope++, the88glam++ , nyck_caution++; break;
        case 2:
            sir++, derek_pope++, cunninlynguists++; break;
        case 3:
            joyner_lucas++, nyck_caution++, flatbush_zombies++; break;
        case 4:
            nyck_caution++, royce_da_59++, jalen_santoy++; break;
        case 5:
            flatbush_zombies++, the88glam++, jalen_santoy++; break;
        case 6:
            cunninlynguists++, joyner_lucas++, royce_da_59++; break;
        case 7:
            amir_obe++, derek_pope++, the88glam++; break;
        case 8:
            jalen_santoy++, sir++, royce_da_59++; break;
        case 9:
            joyner_lucas++, flatbush_zombies++, kirk_knight++, nyck_caution++; break;
        case 10:
            sir++, kirk_knight++; break;
        default:
            return;
    }
}

function incrBArtists() {
    switch (question_number) {
        case 1:
            flatbush_zombies++, kirk_knight++, nyck_caution++; break;
        case 2:
            the88glam++, royce_da_59++, nyck_caution++; break;
        case 3:
            kirk_knight++, cunninlynguists++, royce_da_59++; break;
        case 4:
            amir_obe++, derek_pope++, joyner_lucas++; break;
        case 5:
            amir_obe++, sir++; break;
        case 6:
            the88glam++, sir++, amir_obe++; break;
        case 7:
            flatbush_zombies++, kirk_knight++; break;
        case 8:
            amir_obe++, derek_pope++, the88glam++; break;
        case 9:
            derek_pope++, amir_obe++, sir++; break;
        case 10:
            cunninlynguists++, royce_da_59++, nyck_caution++; break;
        default:
            return;
    }
}

function incrCArtists() {
    switch (question_number) {
        case 1:
            jalen_santoy++, sir++; break;
        case 2:
            jalen_santoy++, joyner_lucas++, kirk_knight++; break;
        case 3:
            sir++, the88glam++; break;
        case 4:
            cunninlynguists++, flatbush_zombies++; break;
        case 5:
            amir_obe++, sir++; break;
        case 6:
            jalen_santoy++, flatbush_zombies++, kirk_knight++; break;
        case 7:
            sir++, nyck_caution++, jalen_santoy++, joyner_lucas++; break;
        case 8:
            flatbush_zombies++, joyner_lucas++; break;
        case 9:
            jalen_santoy++, cunninlynguists++; break;
        case 10:
            flatbush_zombies++, joyner_lucas++, jalen_santoy++; break;
        default:
            return;
    }
}

function incrDArtists() {
    switch (question_number) {
        case 1:
            cunninlynguists++, joyner_lucas++, royce_da_59++; break;
        case 2:
            amir_obe++, flatbush_zombies++; break;
        case 3:
            sir++, the88glam++; break;
        case 4:
            amir_obe++, derek_pope++, jalen_santoy++; break;
        case 5:
            derek_pope++, joyner_lucas++, nyck_caution++; break;
        case 6:
            derek_pope++, nyck_caution++; break;
        case 7:
            cunninlynguists++, royce_da_59++; break;
        case 8:
            cunninlynguists++, kirk_knight++, nyck_caution++; break;
        case 9:
            the88glam++, royce_da_59++; break;
        case 10:
            amir_obe++, derek_pope++, the88glam++; break;
        default:
            return;
    }
}