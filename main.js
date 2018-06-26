/*
Author: Austin Hale
*/

var answers = document.getElementsByName("questions");
// what

function refresh() {
    document.getElementById('answerA').innerHTML = getAnswerChoices();
    document.getElementById('answerB').innerHTML = getAnswerChoices();
    document.getElementById('answerC').innerHTML = getAnswerChoices();
    document.getElementById('answerD').innerHTML = getAnswerChoices();
   
    // Uncheck the radio buttons for each question
    document.getElementById('ansA').checked = false;
    document.getElementById('ansB').checked = false;
    document.getElementById('ansC').checked = false;
    document.getElementById('ansD').checked = false;
}

var answer_q_and_a = [
    ["0-17", "Earbuds", "Fast", "Action", "Go out and party", "I'm with it", "something", "something", "East Coast", "Hooks make the song"],
    ["18-24", "Over-the-ear headphones", "Medium paced", "Chill with some friends", "Keep it out of music", "somethingb", "somethingb", "West Coast", "Little to no hooks. I like it old school."],
    ["25-39", "Small speakers", "Smooth and slow", "Comedy", "Stay home alone", "As long as it isn't overbearing, it's good", "somC", "somCC", "Southern Rap", "Both"],
    ["40+", "Huge speakers", "Other/Unique", "Thriller", "Play video games", "Not a huge fan, but I'll listen sometimes", "sD1", "sD2", "Area doesn't matter", "Neither. I like production."]
];

var question_number = 1;
var idx = 0;
var first_question = false;

function getAnswerChoices() {
    if (first_question) { idx++ };

    var answer_ind = "";
    while (idx < answers.length) {
        switch (answers[idx].value) {
            case 'a':
                first_question = true;
                return answer_q_and_a[idx][question_number - 1];
            case 'b':
                return answer_q_and_a[idx][question_number - 1];
            case 'c':
                return answer_q_and_a[idx][question_number - 1];
            case 'd':
                first_question = false;
                return answer_q_and_a[idx][question_number - 1];
            default:
                return;
        }
    }
}

// List of all possible artist results
var amir_obe, sir, jalen_santoy = 0;
var the88glam, derek_pope = 0;
var cunninlynguists, joyner_lucas, royce_da_59 = 0;
var flatbush_zombies, kirk_knight, nyck_caution = 0;

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
        alert("answer 1 not checked");
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

}

function incrAArtists() {
    switch (question_number) {
        case 1:
            derek_pope++ , the88glam++ , nyck_caution++; break;
        case 2:
            ; break;
        case 3:
            ; break;
        // case 4:
        //     ; break;
        case 5:
            ; break;
        case 6:
            ; break;
        case 7:
            ; break;
        case 8:
            ; break;
        case 9:
            ; break;
        case 10:
            ; break;
        default:
            return;
    }
}

function incrBArtists() {
    switch (question_number) {
        case 1:
            flatbush_zombies++ , kirk_knight++ , nyck_caution++;
            break;
        case 2:
            ;
            break;
        case 3:
            ;
            break;
        case 4:
            ;
            break;
        case 5:
            ;
            break;
        case 6:
            ;
            break;
        case 7:
            ;
            break;
        case 8:
            ;
            break;
        case 9:
            ;
            break;
        case 10:
            ;
            break;
        default:
            return;
    }
}

function incrCArtists() {
    switch (question_number) {
        case 1:
            jalen_santoy++ , sir++;
            break;
        case 2:
            ;
            break;
        case 3:
            ;
            break;
        case 4:
            ;
            break;
        case 5:
            ;
            break;
        case 6:
            ;
            break;
        case 7:
            ;
            break;
        case 8:
            ;
            break;
        case 9:
            ;
            break;
        case 10:
            ;
            break;
        default:
            return;
    }
}

function incrDArtists() {
    switch (question_number) {
        case 1:
            cunninlynguists++ , joyner_lucas++ , royce_da_59++; break;
        case 2:
            ;
            break;
        case 3:
            ;
            break;
        case 4:
            ;
            break;
        case 5:
            ;
            break;
        case 6:
            ;
            break;
        case 7:
            ;
            break;
        case 8:
            ;
            break;
        case 9:
            ;
            break;
        case 10:
            ;
            break;
        default:
            return;
    }
}