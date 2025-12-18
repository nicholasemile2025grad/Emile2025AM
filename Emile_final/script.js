function goTo(page) {
  window.location.href = page;
}

function choose(choice) {
  localStorage.setItem("mainChoice", choice);

  if (choice === "donut") {
    goTo("donut.html");
  } else if (choice === "night") {
    goTo("night.html");
  } else {
    localStorage.setItem("subChoice", "none");
    goTo("ending.html");
  }
}

function subChoose(sub) {
  localStorage.setItem("subChoice", sub);
  goTo("ending.html");
}

// ENDING TEXT
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("endingText");
  if (!el) return;

  const main = localStorage.getItem("mainChoice");
  const sub = localStorage.getItem("subChoice");

  const endings = {
    downtown_none: "Downtown overwhelmed you — but reminded you why NYC never sleeps.",
    uptown_none: "Uptown gave you space to breathe and think.",
    donut_classic: "You chased classic donuts all day. Simple happiness.",
    donut_trendy: "The donuts looked almost too good to eat.",
    donut_latenight: "Late-night donuts were the highlight of your day.",
    night_alone: "Walking alone at night felt calm and cinematic.",
    night_friends: "The night turned chaotic in the best way.",
    night_subway: "The subway showed you NYC from every angle."
  };

  el.textContent = endings[`${main}_${sub}`] || "Every NYC day becomes a story.";
});
