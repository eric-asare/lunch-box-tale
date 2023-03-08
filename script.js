sounds_alarm = document.getElementById("sounds_x5F_1");
sounds_alarm.style.display = "none";

document.getElementById("button_x5F_1").addEventListener("click", () => {
  console.log("mouse over");
  beep = document.getElementById("beep");
  beep.play();
  if (beep.duration > 0 && !beep.paused) {
    sounds_alarm.style.display = "block";
    sounds_alarm.classList.add("bounce2");
  }
});

document.getElementById("beep").addEventListener("ended", () => {
  sounds_alarm.style.display = "none";
  sounds_alarm.classList.remove("bounce2");
});

// scene2
// hide awake scene
awake = document.getElementById("awake_x5F_2");
awake.style.display = "none";
// make snoring happen
document.getElementById("bubbles_x5F_2").addEventListener("click", () => {
  snore = document.getElementById("snore");
  snore.play();
});

document.getElementById("button_x5F_2").addEventListener("click", () => {
  // snoring stops, awake scene appears, bubles disappear
  snore = document.getElementById("snore");
  snore.pause();
  awake.style.display = "block";

  document.getElementById("bubbles_x5F_2").style.display = "none";
  document.getElementById("button_x5F_2").style.display = "none";
});

// scene 3
// hide honk bubble
document.getElementById("bubbles_x5F_3").style.display = "none";

// listen for honk button click, then play honk sound
document.getElementById("button_x5F_3").addEventListener("click", () => {
  honk = document.getElementById("horn");
  honk.play();
  document.getElementById("bubbles_x5F_3").style.display = "block";

  // add bounce animation to honk bubble
  document.getElementById("bubbles_x5F_3").classList.add("bounce2");
});

// listen for honk sound to end, then remove bubble
document.getElementById("horn").addEventListener("ended", () => {
  document.getElementById("bubbles_x5F_3").style.display = "none";
  document.getElementById("bubbles_x5F_3").classList.remove("bounce2");
});

//scene 4 - nothing happens

// scene 5
// hide marble and thought bubble
document.getElementById("marble_x5F_5").style.display = "none";

// listen for run button click, then slide in marble and thought bubble
document.getElementById("button_x5F_5").addEventListener("click", () => {
  marble_and_bubble = document.getElementById("marble_x5F_5");
  marble_and_bubble.classList.add("ride-in");
  document.getElementById("marble_x5F_5").style.display = "block";

  // hide run button
  document.getElementById("button_x5F_5").style.display = "none";
});

// scene 6
// hide lunchbox, scream and speech bubble
document.getElementById("lunchbox_x5F_6").style.display = "none";
document.getElementById("bubbles_x5F_6").style.display = "none";
document.getElementById("scream_x5F_6").style.display = "none";

//listen for reveal button click then show lunchbox, scream and speech bubble and hide normal expression.
document.getElementById("button_x5F_6").addEventListener("click", () => {
  document.getElementById("lunchbox_x5F_6").style.display = "block";
  document.getElementById("bubbles_x5F_6").style.display = "block";
  document.getElementById("scream_x5F_6").style.display = "block";
  document.getElementById("normal_x5F_6").style.display = "none";

  // hide reveal button
  document.getElementById("button_x5F_6").style.display = "none";
});

// scene 7
// hide hungry expression and bubbles
document.getElementById("hungry_x5F_7").style.display = "none";
document.getElementById("bubbles_x5F_7").style.display = "none";

// listen for hungry button click, then show hungry expression and bubbles
document.getElementById("button_x5F_7").addEventListener("click", () => {
  document.getElementById("hungry_x5F_7").style.display = "block";
  document.getElementById("bubbles_x5F_7").style.display = "block";

  // hide hungry button
  document.getElementById("button_x5F_7").style.display = "none";
  // hide concerned expression
  document.getElementById("concerned_x5F_7").style.display = "none";

  // play hungry stomach sound
  stomach = document.getElementById("stomach");
  stomach.play();

  // add bounce animation to bubbles
  document.getElementById("bubbles_x5F_7").classList.add("bounce2");
});

// scene 8

// base state

function state1() {
  // hide middle and final button
  document.getElementById("middlebtn_x5F_8").style.display = "none";
  document.getElementById("finalbtn_x5F_8").style.display = "none";

  // hide expression and bubbles

  document.getElementById("exp2_x5F_8").style.display = "none";
  document.getElementById("exp3_x5F_8").style.display = "none";
  document.getElementById("bubbles1_x5F_8").style.display = "none";
  document.getElementById("bubbles2_x5F_8").style.display = "none";
}

function state2() {
  // middle button on
  // expression2 and bubbles1 on
  document.getElementById("middlebtn_x5F_8").style.display = "none";
  document.getElementById("exp2_x5F_8").style.display = "block";
  document.getElementById("bubbles1_x5F_8").style.display = "block";

  // show next layer which is the middle button
  document.getElementById("startbtn_x5F_8").style.display = "none";
  document.getElementById("middlebtn_x5F_8").style.display = "block";

  // expression1 off
  document.getElementById("exp1_x5F_8").style.display = "none";
}

function state3() {
  // final button on
  // expression3 and bubbles2 on
  document.getElementById("finalbtn_x5F_8").style.display = "block";
  document.getElementById("exp3_x5F_8").style.display = "block";
  document.getElementById("bubbles2_x5F_8").style.display = "block";

  // expression2 off
  document.getElementById("exp2_x5F_8").style.display = "none";
  document.getElementById("bubbles1_x5F_8").style.display = "none";

  // turn off middle button
  document.getElementById("middlebtn_x5F_8").style.display = "none";
}

state1();

// if start button is clicked, then toggle to next state
document.getElementById("startbtn_x5F_8").addEventListener("click", () => {
  // state1
  // middle button on
  // expression2 and bubbles1 on
  document.getElementById("middlebtn_x5F_8").style.display = "none";
  document.getElementById("exp2_x5F_8").style.display = "block";
  document.getElementById("bubbles1_x5F_8").style.display = "block";

  // show next layer which is the middle button
  document.getElementById("startbtn_x5F_8").style.display = "none";
  document.getElementById("middlebtn_x5F_8").style.display = "block";

  // expression1 off
  document.getElementById("exp1_x5F_8").style.display = "none";
});

// if previous button 1 is clicked, then toggle to previous state
document.getElementById("previousbtn1_x5F_8").addEventListener("click", () => {
  // state1
  // middle button on
  // expression2 and bubbles1 on
  document.getElementById("middlebtn_x5F_8").style.display = "none";
  document.getElementById("exp2_x5F_8").style.display = "block";
  document.getElementById("bubbles1_x5F_8").style.display = "block";

  // show next layer which is the middle button
  document.getElementById("startbtn_x5F_8").style.display = "block";
  document.getElementById("middlebtn_x5F_8").style.display = "none";

  // turn on expression1
  document.getElementById("exp1_x5F_8").style.display = "block";

  state1();
});

// if next button 2 on layer 2 is clicked, then toggle to next state
document.getElementById("nextbtn2_x5F_8").addEventListener("click", () => {
  state3();
});

// if previous button 2 on layer 3 is clicked, then toggle to previous state
document.getElementById("previousbtn2_x5F_8").addEventListener("click", () => {
  // state 2
  state2();

  // remove layer 3 and show layer 2
  document.getElementById("finalbtn_x5F_8").style.display = "none";

  // remove bubbles2 and expression3
  document.getElementById("bubbles2_x5F_8").style.display = "none";
  document.getElementById("exp3_x5F_8").style.display = "none";
});

// scene 9

// hide bubbles
document.getElementById("bubbles1_x5F_9").style.display = "none";

// hide sandwiches
document.getElementById("sandwich1_x5F_9").style.display = "none";
document.getElementById("sandwich2_x5F_9").style.display = "none";
document.getElementById("sandwich3_x5F_9").style.display = "none";
document.getElementById("sandwich4_x5F_9").style.display = "none";

// hide no food
document.getElementById("nofood_x5F_9").style.display = "none";

// hide arms
document.getElementById("arms_x5F_9").style.display = "none";

// if eat button then eating step by step
eating_stages = [1, 2, 3, 4];
stage = 0;

document.getElementById("button_x5F_9").addEventListener("click", () => {
  // show arms
  document.getElementById("arms_x5F_9").style.display = "block";

  // show eating bubbles
  document.getElementById("bubbles1_x5F_9").style.display = "block";

  if (stage == 0) {
    // hide no food
    document.getElementById("nofood_x5F_9").style.display = "none";

    // show eating
    document.getElementById("eating_x5F_9").style.display = "block";

    // show first sandwich
    document.getElementById("sandwich1_x5F_9").style.display = "block";
    stage += 1;
  } else if (stage == 1) {
    // show second sandwich
    document.getElementById("sandwich1_x5F_9").style.display = "none";
    document.getElementById("sandwich2_x5F_9").style.display = "block";
    stage += 1;
  } else if (stage == 2) {
    // show third sandwich
    document.getElementById("sandwich2_x5F_9").style.display = "none";
    document.getElementById("sandwich3_x5F_9").style.display = "block";
    stage += 1;
  } else if (stage == 3) {
    // show fourth sandwich
    document.getElementById("sandwich3_x5F_9").style.display = "none";
    document.getElementById("sandwich4_x5F_9").style.display = "block";
    stage += 1;
  } else if (stage == 4) {
    // show no food
    document.getElementById("sandwich4_x5F_9").style.display = "none";
    document.getElementById("nofood_x5F_9").style.display = "block";

    // remove eating drawing
    document.getElementById("eating_x5F_9").style.display = "none";
    stage = 0;

    // hide eating bubbles
    document.getElementById("bubbles1_x5F_9").style.display = "none";

    // scene 10

    // add pulse animation to the bubbles
    setTimeout(() => {
      document.getElementById("bubbles_x5F_10").classList.add("pulse");
    }, 2000);

    // remove pulse animation to the bubbles
    document.getElementById("bubbles_x5F_10").classList.remove("pulse");
  }
});

// scene 11
// change the color of the eyes
colors = ["#D864A2", "#EA5E5E", "#D80F16"];

// set the initial eye color
inside = 0;
middle = 1;
outside = 2;

// for every second, change the color of the eyes
setInterval(() => {
  // change the color of the eyes
  document.getElementById("left_inside_11").style.fill = colors[inside];
  document.getElementById("left_middle_11").style.fill = colors[middle];
  document.getElementById("left_out_11").style.fill = colors[outside];

  document.getElementById("right_inside_11").style.fill = colors[inside];
  document.getElementById("right_middle_11").style.fill = colors[middle];
  document.getElementById("right_out_11").style.fill = colors[outside];

  console.log("hellooo");

  // change the color of the eyes
  inside = (inside + 1) % colors.length;
  middle = (middle + 1) % colors.length;
  outside = (outside + 1) % colors.length;
}, 1000);

// restart
document.getElementById("restart").addEventListener("click", () => {
  // reload page and move to the first scene
  location.reload();
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
