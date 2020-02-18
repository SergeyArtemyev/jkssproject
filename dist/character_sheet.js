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
// Grab the ability points dib
const abilityPointsDiv = document.getElementById("ab-div");
// populate the heading part with charSheet var
abilityPointsDiv.innerHTML = abilityPoints;

