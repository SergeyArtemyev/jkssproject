// Get all values
const words = new URLSearchParams(window.location.search);

// Vars for values
const race = words.get("race");
const language = words.get("language");
const extraLang = words.get("extra-language");
const cantrip = words.get("cantrip");
const toolProf = words.get("toolProf");
const classes = words.get("class");
const fighterSkill1 = words.get("fighter-skill-1");
const fighterSkill2 = words.get("fighter-skill-2");
const rangerSkill1 = words.get("ranger-skill-1");
const rangerSkill2 = words.get("ranger-skill-2");
const rangerSkill3 = words.get("ranger-skill-3");
const rogueSkill1 = words.get("rogue-skill-1");
const rogueSkill2 = words.get("rogue-skill-2");
const rogueSkill3 = words.get("rogue-skill-3");
const rogueSkill4 = words.get("rogue-skill-4");
const sorcereSkill1 = words.get("sorcerer-skill-1");
const sorcereSkill2 = words.get("sorcerer-skill-2");
const skillprof1 = words.get("skill-1");
const skillprof2 = words.get("skill-2");
const fighterStyle = words.get("fighter-style");
const favoredEnemy = words.get("favored-enemy");
const naturalExplorer = words.get("natural-explorer");
const expertise1 = words.get("expertise-1");
const expertise2 = words.get("expertise-2");
const charName = words.get("char-name");
const background = words.get("background");
const alignment = words.get("alignment");
const gender = words.get("gender");
const eyes = words.get("eyes");
const height = words.get("height");
const faith = words.get("faith");
const hair = words.get("gender");
const skin = words.get("skin");
const age = words.get("age");
const weight = words.get("weight");
const lifestyle = words.get("lifestyle");
const mWeapon = words.get("m-weapon");
const sWeapon = words.get("s-weapon");
const potions = words.get("potions");
const stuff = words.get("stuff");
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
const img = words.get("img");

// the string that will populate the character sheet page
const headingPart = `
<div class="avatar justify-center align-items-center row col-40">
  <img class="char-avatar" src="./img/avatar.png" alt="" />
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
  if (classes === "Ranger" || classes === "Fighter") {
    s = 2;
  }
  if (classes === "Sorcerer" || classes === "Fighter") {
    c = 2;
  }
  if (classes === "Ranger" || classes === "Rogue") {
    d = 2;
  }
  if (classes === "Sorcerer") {
    ch = 2;
  }
  if (classes === "Rogue") {
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
  if (race === "Human" || race === "Elf") {
    speed = 30;
  } else {
    speed = 25;
  }
  if (classes === "Fighter" || classes === "Ranger") {
    hp = 10 + (+conMod);
  }
  if (classes === "Rogue") {
    hp = 8 + (+conMod);
  }
  if (classes === "Sorcerer") {
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

// Create the Features div
function featuresDiv() {
  let classFeatures;
  if (classes === 'Fighter') {
    classFeatures =
      `
    <h3>Class Features</h3>
    <p>Hit Points at 1st Level: 10 + your Constitution modifier</p>
    <p>Proficiency</p>
    <ul>
      <li class="profskills">${fighterSkill1}</li>
      <li class="profskills">${fighterSkill2}</li>
    </ul>
    <p>Fighting style</p>
    <p>
    You adopt a particular style of fighting as your specialty. Choose one of the following options. 
    You can’t take a Fighting Style option more than once, even if you later get to choose again.
    </p>
    <ul>
      <li>${fighterStyle}</li>
    </ul>
    <p>Second wind</p>
    <p>
      You have a limited well of stamina that you can draw on to protect yourself from harm.
      On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. 
      Once you use this feature, you must finish a short or long rest before you can use it again.
    </p>
    `;
  }
  if (classes === 'Ranger') {
    classFeatures =
      `
    <h3>Class Features</h3>
    <p>Hit Points at 1st Level: 8 + your Constitution modifier</p>
    <p>Proficiency</p>
    <ul>
      <li class="profskills">${rangerSkill1}</li>
      <li class="profskills">${rangerSkill2}</li>
      <li class="profskills">${rangerSkill3}</li>
    </ul>
    <p>Favored Enemy</p>
    <p>
    Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.
    </p>
    <ul>
      <li>${favoredEnemy}</li>
    </ul>
    <p>Language</p>
    <ul>
      <li>${language}</li>
    </ul>
    <p>Natural Explorer</p>
    <p>
    You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions.
    </p>
    <ul>
      <li>${naturalExplorer}</li>
    </ul>
    `;
  }
  if (classes === 'Rogue') {
    classFeatures =
      `
    <h3>Class Features</h3>
    <p>Hit Points at 1st Level: 8 + your Constitution modifier</p>
    <p>Proficiency</p>
    <ul>
      <li class="profskills">${rogueSkill1}</li>
      <li class="profskills">${rogueSkill2}</li>
      <li class="profskills">${rogueSkill3}</li>
      <li class="profskills">${rogueSkill4}</li>
    </ul>
    <p>Expertise</p>
    <p>
    Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.
    </p>
    <ul>
      <li>${expertise1}</li>
      <li>${expertise2}</li>
    </ul>
    
    <p>Sneak Attack</p>
    <p>
    Beginning at 1st level, you know how to strike subtly and exploit a foe’s distraction. 
    Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. 
    The attack must use a finesse or a ranged weapon.
    </p>
    <p>Thieve's Cant</p>
    <p>
    During your rogue training you learned thieves’ cant, a secret mix of dialect, jargon, 
    and code that allows you to hide messages in seemingly normal conversation. 
    Only another creature that knows thieves’ cant understands such messages. 
    It takes four times longer to convey such a message than it does to speak the same idea plainly.
    </p>
    `;
  }
  if (classes === 'Sorcerer') {
    classFeatures =
      `
    <h3>Class Features</h3>
    <p>Hit Points at 1st Level: 6 + your Constitution modifier</p>
    <p>Proficiency</p>
    <ul>
      <li class="profskills">${sorcereSkill1}</li>
      <li class="profskills">${sorcereSkill2}</li>
    </ul>
    <p>Spellcasting</p>
    <p>
    An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, 
    infusing you with arcane magic. This font of magic, whatever its origin, fuels your spells.
    </p>
    <p>Cantrips</p>
    <p>
    At 1st level, you know four cantrips of your choice from the sorcerer spell list. 
    You learn additional sorcerer cantrips of your choice at higher levels, 
    as shown in the Cantrips Known column of the Sorcerer table.
    </p>
    <p>Spell Slots</p>
    <p>
    The Sorcerer table shows how many spell slots you have to cast your sorcerer spells of 1st level and higher. 
    To cast one of these sorcerer spells, you must expend a slot of the spell’s level or higher. 
    You regain all expended spell slots when you finish a long rest.
    </p>
    <p>
    Spell save DC = 8 + your proficiency bonus + your Charisma modifier
    </p>
    <p>
    Spell attack modifier = your proficiency bonus + your Charisma modifier
    </p>
    `;
  }
  return classFeatures;
}

// Get the class features div
const classFeaturesDiv = document.getElementById("class-features");

// Populate  the class features div with classFeatures var
classFeaturesDiv.innerHTML = featuresDiv();

// Create the Traits div
function racialTraits() {
  let racialTraitsVar;
  if (race === "Human") {
    racialTraitsVar =
      `
    <h3>Racial Traits</h3>
    <p>+1 to All Ability Scores</p>
    <p>Languages</p>
    <p>You can speak, read, and write Common and one extra language.</p>
    <ul>
      <li>${extraLang}</li>
    </ul>
    `;
  }
  if (race === "Elf") {
    racialTraitsVar =
      `
    <h3>Racial Traits</h3>
    <p>+2 Dexterity</p>
    <p>Darkvision</p>
    <p>Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions</p>
    <p>Keen Senses</p>
    <p>You have proficiency in the Perception skill.</p>
    <p>Fey Ancestry</p>
    <p>You have advantage on saving throws against being charmed, and magic can’t put you to sleep.</p>
    <p>Trance</p>
    <p>Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day.</p>
    <p>Cantrip</p>
    <p>You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.</p>
    <ul>
      <li>${cantrip}</li>
    </ul>
    <p>You can speak, read, and write one extra language of your choice.</p>
    <ul>
      <li>${extraLang}</li>
    </ul>
    `;
  }
  if (race === "Halfling") {
    racialTraitsVar =
      `
    <h3>Racial Traits</h3>
    <p>+2 Dexterity</p>
    <p>Lucky</p>
    <p>When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.</p>
    <p>Brave</p>
    <p>You have advantage on saving throws against being frightened.</p>
    <p>Halfling Nimbleness</p>
    <p>You can move through the space of any creature that is of a size larger than yours.</p>
    `;
  }
  if (race === "Dwarf") {
    racialTraitsVar =
      `
    <h3>Racial Traits</h3>
    <p>+2 Constitution</p>
    <p>Darkvision</p>
    <p>Accustomed to life underground, you have superior vision in dark and dim conditions.</p>
    <p>Dwarven Resilience</p>
    <p>You have advantage on saving throws against poison, and you have resistance against poison damage</p>
    <p>Tool Proficiency</p>
    <p>You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools.</p>
    <ul>
      <li>${toolProf}</li>
    </ul>
    <p>Dwarven Combat Training</p>
    <p>You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.</p>
    <p>Stonecunning</p>
    <p>
      Whenever you make an Intelligence (History) check related to the origin of stonework, 
      you are considered proficient in the History skill and add double your proficiency bonus to the check, 
      instead of your normal proficiency bonus.
    </p>
    `;
  }
  return racialTraitsVar;
}

// Get the traits div
const racialTraitsDiv = document.getElementById("race-traits");

// Populate  the class features div with classFeatures var
racialTraitsDiv.innerHTML = racialTraits();

// Create the description div content

// Helper function for background description

function backgroundDesc() {
  let backgroundDescVar;
  let proficiencyVar;
  if (background === "Acolyte") {
    backgroundDescVar =
      `
    You have spent your life in the service of a temple to a specific god or pantheon of gods. 
    You act as an intermediary between the realm of the holy and the mortal world, 
    performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine. 
    You are not necessarily a cleric—performing sacred rites is not the same thing as channeling divine power.
    `;
    proficiencyVar =
      `
    <li class="profskills">Insight</li>
    <li class="profskills">Religion</li>
    `;
  }
  if (background === "Criminal/Spy") {
    backgroundDescVar =
      `
    You are an experienced criminal with a history of breaking the law. 
    You have spent a lot of time among other criminals and still have contacts within the criminal underworld. 
    You’re far closer than most people to the world of murder, theft, 
    and violence that pervades the underbelly of civilization, 
    and you have survived up to this point by flouting the rules and regulations of society.
    `;
    proficiencyVar =
      `
    <li class="profskills">Deception</li>
    <li class="profskills">Stealth</li>
    `;
  }
  if (background === "Folk Hero") {
    backgroundDescVar =
      `
    You come from a humble social rank, but you are destined for so much more. 
    Already the people of your home village regard you as their champion, 
    and your destiny calls you to stand against the tyrants and monsters that threaten the common folk everywhere.
    `;
    proficiencyVar =
      `
    <li class="profskills">Animal Handling</li>
    <li class="profskills">Survival</li>
    `;
  }
  if (background === "Haunted One") {
    backgroundDescVar =
      `
    You are haunted by something so terrible that you dare not speak of it. 
    You’ve tried to bury it and run away from it, to no avail. 
    Whatever this thing is that haunts you can’t be slain with a sword or banished with a spell. 
    It might come to you as a shadow on the wall, a bloodcurdling nightmare, a memory that refuses to die, 
    or a demonic whisper in the dark. The burden has taken its toll, 
    isolating you from most people and making you question your sanity. 
    You must find a way to overcome it before it destroys you.
    `;
    proficiencyVar =
      `
    <li class="profskills">${skillprof1}</li>
    <li class="profskills">${skillprof2}</li>
    `;
  }
  if (background === "Sage") {
    backgroundDescVar =
      `
    You spent years learning the lore of the multiverse. You scoured manuscripts, 
    studied scrolls, and listened to the greatest experts on the subjects that interest you. 
    Your efforts have made you a master in your fields of study.
    `;
    proficiencyVar =
      `
    <li class="profskills">Arcana</li>
    <li class="profskills">History</li>
    `;
  }
  if (background === "Soldier") {
    backgroundDescVar =
      `
    War has been your life for as long as you care to remember. You trained as a youth, 
    studied the use of weapons and armor, learned basic survival techniques, 
    including how to stay alive on the battlefield. 
    You might have been part of a standing national army or a mercenary company, 
    or perhaps a member of a local militia who rose to prominence during a recent war.
    `;
    proficiencyVar =
      `
    <li class="profskills">Athletics</li>
    <li class="profskills">Intimidation</li>
    `;
  }
  return { backgroundDescVar, proficiencyVar };
}

const description =
  `
<h3>Background</h3>
<p>${background}</p>
<p id="background-desc">${backgroundDesc().backgroundDescVar}</p>
<p>Proficiency</p>
<ul>${backgroundDesc().proficiencyVar}</ul>
<p>Characteristics</p>
<table>
  <tr>
    <th>Alignment</th>
    <th>Gender</th>
    <th>Eyes</th>
    <th>Lifestyle</th>
    <th>Height</th>
  </tr>
  <tr>
    <td>${alignment}</td>
    <td>${gender}</td>
    <td>${eyes}</td>
    <td>${lifestyle}</td>
    <td>${height}</td>
  </tr>
  <tr>
    <th>Faith</th>
    <th>Hair</th>
    <th>Skin</th>
    <th>Age</th>
    <th>Weight</th>
  </tr>
  <tr>
    <td>${faith}</td>
    <td>${hair}</td>
    <td>${skin}</td>
    <td>${age}</td>
    <td>${weight}</td>
  </tr>
</table>
`;

// Get the description div 
const descriptionDiv = document.getElementById("description");

// Populat the description div with description var

descriptionDiv.innerHTML = description;

// Create equipment div content
const equipmentVar =
  `
<h3>Your starting equipment</h3>
<p>Main Weapon</p>
<ul>
  <li>${mWeapon}</li>
</ul>
<p>Secondary Weapon</p>
<ul>
  <li>${sWeapon}</li>
</ul>
<p>Potions</p>
<ul>
  <li>${potions}</li>
</ul>
<p>Other Stuff</p>
<ul>
  <li>${stuff}</li>
</ul>
`;

// Get equipment div 
const equipmentDiv = document.getElementById("equipment");
// Populate the equipment div
equipmentDiv.innerHTML = equipmentVar;

// Create the proficiencies div (i could create the common function for vars related to classes, but i'm fine for now )
function profVarFunc() {
  let profVar;
  let toolProf1;
  let toolProf2;
  let vehiclesProf;

  toolProf === null ? toolProf1 = "" : toolProf1 = toolProf;
  background === "Criminal/Spy" ? toolProf2 = "Thieves' Tools" : toolProf2 = "";
  background === "Folk Hero" || "Soldier" ? vehiclesProf = "Vehicles (Land)" : vehiclesProf = "";

  if (classes === 'Fighter') {
    profVar =
      `
    <p><span class="main-color">Proficient in Armor:</span> All armor, shields</p>
    <p><span class="main-color">Proficient in Weapon:</span> Simple weapons, martial weapons</p>
    <p><span class="main-color">Proficient in Vehicles:</span> ${vehiclesProf}</p>
    <p><span class="main-color">Proficient in Tools:</span> ${toolProf1}${toolProf2}</p>
    `;
  }
  if (classes === 'Ranger') {
    profVar =
      `
    <p><span class="main-color">Proficient in Armor:</span> Light armor, medium armor, shields</p>
    <p><span class="main-color">Proficient in Weapon:</span> Simple weapons, martial weapons</p>
    <p><span class="main-color">Proficient in Vehicles:</span></p>
    <p><span class="main-color">Proficient in Tools:</span></p>
    `;
  }
  if (classes === 'Rogue') {
    profVar =
      `
    <p><span class="main-color">Proficient in Armor:</span> Light armor</p>
    <p><span class="main-color">Proficient in Weapon:</span> Simple weapons, hand crossbows, longswords, rapiers, shortswords</p>
    <p><span class="main-color">Proficient in Vehicles:</span></p>
    <p><span class="main-color">Proficient in Tools:</span> Thieves’ tools</p>
    `;
  }
  if (classes === 'Sorcerer') {
    profVar =
      `
    <p><span class="main-color">Proficient in Armor:</span> None</p>
    <p><span class="main-color">Proficient in Weapon:</span> Daggers, darts, slings, quarterstaffs, light crossbows</p>
    <p><span class="main-color">Proficient in Vehicles:</span></p>
    <p><span class="main-color">Proficient in Tools:</span></p>
    `;
  }
  return profVar;
}

// Get the prof div
const profDiv = document.getElementById("proficiencies");
// Populate the prof div with prof var
profDiv.innerHTML = profVarFunc();


// Create the skills div variable
const skillsVar =
  `
<p><span class="circle"></span><span class="dex">${dexMod}</span> <span class="skill">Acrobatics</span> <span class="ab-skill">(Dex)</span>
</p>
<p><span class="circle"></span><span class="wis">${wisMod}</span> <span class="skill">Animal Handling</span> <span
    class="ab-skill">(Wis)</span></p>
<p><span class="circle"></span><span class="int">${intMod}</span> <span class="skill">Arcana</span> <span class="ab-skill">(Int)</span></p>
<p><span class="circle"></span><span class="str">${strMod}</span> <span class="skill">Athletics</span> <span class="ab-skill">(Str)</span></p>
<p><span class="circle"></span><span class="cha">${charMod}</span> <span class="skill">Deception</span> <span class="ab-skill">(Cha)</span></p>
<p><span class="circle"></span><span class="int">${intMod}</span> <span class="skill">History</span> <span class="ab-skill">(Int)</span></p>
<p><span class="circle"></span><span class="wis">${wisMod}</span> <span class="skill">Insight</span> <span class="ab-skill">(Wis)</span></p>
<p><span class="circle"></span><span class="cha">${charMod}</span> <span class="skill">Intimidation</span> <span class="ab-skill">(Cha)</span>
</p>
<p><span class="circle"></span><span class="int">${intMod}</span> <span class="skill">Investigation</span> <span class="ab-skill">(Int)</span>
</p>
<p><span class="circle"></span><span class="wis">${wisMod}</span> <span class="skill">Medicine</span> <span class="ab-skill">(Wis)</span></p>
<p><span class="circle"></span><span class="int">${intMod}</span> <span class="skill">Nature</span> <span class="ab-skill">(Int)</span></p>
<p><span class="circle"></span><span class="wis">${wisMod}</span> <span class="skill">Perception</span> <span class="ab-skill">(Wis)</span>
</p>
<p><span class="circle"></span><span class="cha">${charMod}</span> <span class="skill">Perfomance</span> <span class="ab-skill">(Cha)</span>
</p>
<p><span class="circle"></span><span class="cha">${charMod}</span> <span class="skill">Persuasion</span> <span class="ab-skill">(Cha)</span>
</p>
<p><span class="circle"></span><span class="int">${intMod}</span> <span class="skill">Religion</span> <span class="ab-skill">(Int)</span></p>
<p><span class="circle"></span><span class="dex">${dexMod}</span> <span class="skill">Sleight of Hand</span> <span
    class="ab-skill">(Dex)</span></p>
<p><span class="circle"></span><span class="dex">${dexMod}</span> <span class="skill">Stealth</span> <span class="ab-skill">(Dex)</span></p>
<p><span class="circle"></span><span class="wis">${wisMod}</span> <span class="skill">Survival</span> <span class="ab-skill">(Wis)</span></p>

`;

// Get the skill div
const skillsDiv = document.getElementById("skills");
// Populate the skill div with skill variable
skillsDiv.innerHTML = skillsVar;

// Add Proficiency to skill list
const prof = document.getElementsByClassName("profskills");
const skill = document.getElementsByClassName("skill");
let profBonus;
for (let i = 0; i < skill.length; i++) {
  for (let j = 0; j < prof.length; j++) {
    if (skill[i].innerHTML === prof[j].innerHTML) {
      skill[i].previousElementSibling.innerHTML = parseInt(skill[i].previousElementSibling.innerHTML) + 2;
      skill[i].previousElementSibling.previousElementSibling.classList.add("prof-y");
    }
  }
}

document.getElementsByClassName("char-avatar")[0].src = img;