// Get all values
const words = new URLSearchParams(window.location.search);

// Vars for values
const race = words.get("race");
const extraLang = words.get("extra-language");
const classes = words.get("class");
const fighterSkill1 = words.get("fighter-skill-1");
const fighterSkill2 = words.get("fighter-skill-2");
const fighterStyle = words.get("fighter-style");
const charName = words.get("char-name");
const background = words.get("background");
const alignment = words.get("alignment");
const str = words.get('strength-points');
const dex = words.get('dexterity-points');
const con = words.get('constitution-points');
const int = words.get('intelligence-points');
const wis = words.get('wisdom-points');
const char = words.get('charisma-points');
const strMod = words.get('str-mod');
const dexMod = words.get('dex-mod');
const conMod = words.get('con-mod');
const intMod = words.get('int-mod');
const wisMod = words.get('wis-mod');
const charMod = words.get('char-mod');

// the string that will populate the character sheet page
const headingPart = `
<div class="avatar justify-center align-items-center row col-40">
  <img src="./img/avatar.png" alt="" />
  <span class="name">${charName}</span>
</div>
<div class="info col-60">
  <table>
    <tr>
      <th>${classes}</th>
      <th>${background}</th>
      <th>Name</th>
    </tr>
    <tr>
      <td>class</td>
      <td>background</td>
      <td>player name</td>
    </tr>
    <tr>
      <th>${race}</th>
      <th>${alignment}</th>
      <th>1</th>
    </tr>
    <tr>
      <td>race</td>
      <td>alignment</td>
      <td>level</td>
    </tr>
  </table>
</div>
`;

// Grab the heading part
const headingPartVar = document.getElementById("heading-part");
// populate the heading part with charSheet var
headingPartVar.innerHTML = headingPart;

// Populate ability points section
const abilityPoints =
  `
<div class="ab-point border">
  <p>str</p>
  <p class="f-modifier">${strMod}</p>
  <p class="ab-border f-total">${str}</p>
</div>
<div class="ab-point border">
  <p>dex</p>
  <p class="f-modifier">${dexMod}</p>
  <p class="ab-border f-total">${dex}</p>
</div>
<div class="ab-point border">
  <p>con</p>
  <p class="f-modifier">${conMod}</p>
  <p class="ab-border f-total">${con}</p>
</div>
<div class="ab-point border">
  <p>int</p>
  <p class="f-modifier">${intMod}</p>
  <p class="ab-border f-total">${int}</p>
</div>
<div class="ab-point border">
  <p>wis</p>
  <p class="f-modifier">${wisMod}</p>
  <p class="ab-border f-total">${wis}</p>
</div>
<div class="ab-point border">
  <p>char</p>
  <p class="f-modifier">${charMod}</p>
  <p class="ab-border f-total">${char}</p>
</div>
`;
// Grab the ability points div
const abilityPointsDiv = document.getElementById("ab-div");
// populate the heading part with charSheet var
abilityPointsDiv.innerHTML = abilityPoints;

// Create helper function ti get saving throws
function getSaving(s = 0, d = 0, c = 0, i = 0, w = 0, ch = 0) {
  if (classes === "ranger" || classes === "fighter") {
    s = 2;
  }
  if (classes === "sorcerer" || classes === "fighter") {
    c = 2;
  }
  if (classes === "ranger" || classes === "rogue") {
    d = 2;
  }
  if (classes === "sorcerer") {
    ch = 2;
  }
  if (classes === "rogue") {
    i = 2;
  }

  return { s, d, c, i, w, ch };
}

// Populate the savings throws section 
const savingThrows =
  `
<p> ${+strMod + getSaving().s} Strength</p>
<p> ${+dexMod + getSaving().d} Dexterity</p>
<p> ${+conMod + getSaving().c} Constitution</p>
<p> ${+intMod + getSaving().i} Intelligence</p>
<p> ${+wisMod + getSaving().w} Wisdom</p>
<p> ${+charMod + getSaving().ch} Charisma</p>
<p>saving throws</p>
`;

// Grab the savings throws div
const savingsThrowsDiv = document.getElementById("savings");
// Populate the saving div with var
savingsThrowsDiv.innerHTML = savingThrows;

// Get ac init speed hp
function getAcInSpHp() {
  let ac, init, speed, hp;
  if (race === "human" || race === "elf") {
    speed = 30;
  } else {
    speed = 25;
  }
  if (classes === "fighter" || classes === "ranger") {
    hp = 10 + (+conMod);
  }
  if (classes === "rogue") {
    hp = 8 + (+conMod);
  }
  if (classes === "sorcerer") {
    hp = 6 + (+conMod);
  }
  return { speed, hp }
}
// Populate ac-init-speed-hp div
const acInSpHp =
  `
<div class="col-25 ac border text-align-center">
  <p>15</p>
  <p>ac</p>
</div>
<div class="col-25 init border text-align-center">
  <p>${dexMod}</p>
  <p>init</p>
</div>
<div class="col-25 speed border text-align-center">
  <p>${getAcInSpHp().speed} ft</p>
  <p>speed</p>
</div>
<div class="col-25 hp border text-align-center">
  <p>${getAcInSpHp().hp}</p>
  <p>current hit points</p>
</div>
`;

// Grab the ac-in-sp-hp div
const acInSpHpDiv = document.getElementById("ac-in-sp-hp");
// Populate the div
acInSpHpDiv.innerHTML = acInSpHp;

// THE DESCRIPTION PART WITH TABS

// Tab Functionality
function openTab(e, tabName) {
  // Declare variables
  let i, tabcontent, btnTab;
  // Get all elements with class -tabcontent and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class btnTab and remove class active
  btnTab = document.getElementsByClassName("btn-tab");
  for (i = 0; i < btnTab.length; i++) {
    btnTab[i].className = btnTab[i].className.replace(" active", "");
  }
  // Show the current tab and add active class to the button that opened tab
  document.getElementById(tabName).style.display = "block";
  e.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

// 