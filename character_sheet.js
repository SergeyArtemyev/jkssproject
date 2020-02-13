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
