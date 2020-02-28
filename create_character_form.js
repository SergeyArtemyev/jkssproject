// Choose Race
function myRace() {
  let description = document.getElementsByClassName("race-description")[0];
  let img = document.getElementById("race-img");
  let races = document.getElementById("races");
  let traits = document.getElementsByClassName("traits")[0];
  let raceBonus = document.getElementsByClassName("race-bonus");
  let total = document.getElementsByClassName("total");
  let input = document.getElementsByClassName("ability-input");
  let plus = document.getElementsByClassName("fa-plus-square");
  let minus = document.getElementsByClassName("fa-minus-square");
  if (races.value === "Human") {
    img.src = "./img/form_img/human.jpg";
    description.innerHTML = `
    <h4>Description:</h4>
    <p>Humans are the most adaptable and ambitious people among the common races. 
      Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.</p>
    <button class="accordion">Ability Score Increase</button>
    <div class="acc-body">
      <p> Your ability scores each increase by 1.</p>
    </div>
    <button class="accordion">Age</button>
    <div class="acc-body">
      <p> Humans reach adulthood in their late teens and live less than a century.</p>
    </div>
    <button class="accordion">Alignment</button>
    <div class="acc-body">
      <p> Humans tend toward no particular alignment. The best and the worst are found among them.</p>
    </div>
    <button class="accordion">Size</button>
    <div class="acc-body">
      <p> Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.</p>
    </div>
    <button class="accordion">Speed</button>
    <div class="acc-body">
      <p> Your base walking speed is 30 feet.</p>
    </div>
    <button class="accordion">Languages</button>
    <div class="acc-body">
      <p> You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.</p>
    </div>
    `;
    traits.innerHTML = `
    <p>+1 to All Ability Scores</p>
    <label for="language">Extra Language</label>
    <select name="extra-language" id="language">
      <option value="none">- Choose a Language -</option>
      <option value="Abyssal">Abyssal</option>
      <option value="Draconic">Draconic</option>
      <option value="Elvish">Elvish</option>
      <option value="Goblin">Goblin</option>
      <option value="Hafling">Halfling</option>
      <option value="Orc">Orc</option>
    </select>
    `;
    // i could create a setDefault functioun, but i have a problem with it, i'll think about it later
    for (let i = 0; i < raceBonus.length; i++) {
      remainingPoints = 27;
      document.getElementsByClassName("remaining-points")[0].innerHTML = remainingPoints;
      minus[i].style.visibility = "hidden";
      plus[i].style.visibility = "visible";
      // plus[i].style.display = "inline-block";
      input[i].value = "8";
      let ability = document.getElementsByClassName("ability");
      if (ability[i]) {
        raceBonus[i].innerHTML = "+1";
        total[i].value = "9";
        document.getElementsByClassName("modifier")[i].value = modifier(i);
      }
    }

    getAcc();
  }
  if (races.value === "Elf") {
    img.src = "./img/form_img/elf.jpg";
    description.innerHTML = `
    <h4>Description:</h4>
    <p>Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.</p>
    <button class="accordion">Ability Score Increase</button>
    <div class="acc-body">
      <p> Your Dexterity score increases by 2.</p>
    </div>
    <button class="accordion">Age</button>
    <div class="acc-body">
      <p> Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.</p>
    </div>
    <button class="accordion">Alignment</button>
    <div class="acc-body">
      <p> Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others’ freedom as well as their own, and they are more often good than not. The drow are an exception; their exile into the Underdark has made them vicious and dangerous. Drow are more often evil than not.</p>
    </div>
    <button class="accordion">Size</button>
    <div class="acc-body">
      <p> Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.</p>
    </div>
    <button class="accordion">Speed</button>
    <div class="acc-body">
      <p> Your base walking speed is 30 feet.</p>
    </div>
    <button class="accordion">Languages</button>
    <div class="acc-body">
      <p> You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.</p>
    </div>
    `;
    traits.innerHTML = `
    <p>+2 Dexterity</p>
    <p>Darkvision</p>
    <p>Keen Senses</p>
    <p>Fey Ancestry</p>
    <p>Trance</p>
    <label for="cantrip">Cantrip</label>
    <br/>
    <select name="cantrip" id="cantrip">
      <option value="none">- Choose a Spell -</option>
      <option value="Control Flames">Control Flames</option>
      <option value="Gust">Gust</option>
      <option value="Frost Bite">Frost Bite</option>
      <option value="Light">Light</option>
      <option value="Minor Illusion">Minor Illusion</option>
      <option value="True Strike">True Strike</option>
    </select>
    <br/>
    <label for="language">Extra Language</label>
    <br/>
    <select name="extra-language" id="language">
      <option value="none">- Choose a Language -</option>
      <option value="Abyssal">Abyssal</option>
      <option value="Draconic">Draconic</option>
      <option value="Elvish">Elvish</option>
      <option value="Goblin">Goblin</option>
      <option value="Halfling">Halfling</option>
      <option value="Orc">Orc</option>
    </select>
    `;
    for (let i = 0; i < raceBonus.length; i++) {
      remainingPoints = 27;
      document.getElementsByClassName("remaining-points")[0].innerHTML = remainingPoints;
      minus[i].style.visibility = "hidden";
      plus[i].style.visibility = "visible";
      // plus[i].style.display = "inline-block";
      input[i].value = "8";
      raceBonus[i].innerHTML = "-";
      total[i].value = "8";
      document.getElementsByClassName("modifier")[i].value = modifier(i);
      if (raceBonus[i].parentElement.id === "dexterity") {
        raceBonus[i].innerHTML = "+2";
        total[i].value = "10";
        document.getElementsByClassName("modifier")[i].value = modifier(i);
      }
    }

    getAcc();
  }
  if (races.value === "Halfling") {
    img.src = "./img/form_img/orc.png";
    description.innerHTML = `
    <h4>Description:</h4>
    <p>The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense.</p>
    <button class="accordion">Ability Score Increase</button>
    <div class="acc-body">
      <p> Your Dexterity score increases by 2.</p>
    </div>
    <button class="accordion">Age</button>
    <div class="acc-body">
      <p> A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.</p>
    </div>
    <button class="accordion">Alignment</button>
    <div class="acc-body">
      <p> Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.</p>
    </div>
    <button class="accordion">Size</button>
    <div class="acc-body">
      <p> Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.</p>
    </div>
    <button class="accordion">Speed</button>
    <div class="acc-body">
      <p> Your base walking speed is 25 feet.</p>
    </div>
    <button class="accordion">Languages</button>
    <div class="acc-body">
      <p> You can speak, read, and write Common and Halfling. The Halfling language isn’t secret, but halflings are loath to share it with others. They write very little, so they don’t have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.</p>
    </div>
    `;
    traits.innerHTML = `
    <p>+2 Dexterity</p>
    <p>Lucky</p>
    <p>Brave</p>
    <p>Halfling Nimbleness</p>
    `;
    for (let i = 0; i < raceBonus.length; i++) {
      remainingPoints = 27;
      document.getElementsByClassName("remaining-points")[0].innerHTML = remainingPoints;
      minus[i].style.visibility = "hidden";
      plus[i].style.visibility = "visible";
      // plus[i].style.display = "inline-block";
      input[i].value = "8";
      raceBonus[i].innerHTML = "-";
      total[i].value = "8";
      document.getElementsByClassName("modifier")[i].value = modifier(i);
      if (raceBonus[i].parentElement.id === "dexterity") {
        raceBonus[i].innerHTML = "+2";
        total[i].value = "10";
        document.getElementsByClassName("modifier")[i].value = modifier(i);
      }
    }
    getAcc();
  }
  if (races.value === "Dwarf") {
    img.src = "./img/form_img/dwarf.jpg";
    description.innerHTML = `
    <h4>Description:</h4>
    <p>Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal.</p>
    <button class="accordion">Ability Score Increase</button>
    <div class="acc-body">
      <p> Your Constitution score increases by 2.</p>
    </div>
    <button class="accordion">Age</button>
    <div class="acc-body">
      <p> Dwarves mature at the same rate as humans, but they’re considered young until they reach the age of 50. On average, they live about 350 years.</p>
    </div>
    <button class="accordion">Alignment</button>
    <div class="acc-body">
      <p> Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.</p>
    </div>
    <button class="accordion">Size</button>
    <div class="acc-body">
      <p> Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.</p>
    </div>
    <button class="accordion">Speed</button>
    <div class="acc-body">
      <p> Your base walking speed is 25 feet. Your speed is not reduced by wearing heavy armor.</p>
    </div>
    <button class="accordion">Languages</button>
    <div class="acc-body">
      <p> You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.</p>
    </div>
    `;
    traits.innerHTML = `
    <p>+2 Constitution</p>
    <p>Darkvision</p>
    <p>Dwarven Resilience</p>
    <label for="toolProf">Tool Proficiency</label>
    <br/>
    <select name="toolProf" id="toolProf">
      <option value="none">- Choose a Dwarf Artisan's Tool -</option>
      <option value="Brewer's Supplies">Brewer's Supplies</option>
      <option value="Mason's Tools">Mason's Tools</option>
      <option value="Smith's Tools">Smith's Tools</option>
    </select>
    <p>Dwarven Combat Training</p>
    <p>Stonecunning</p>
    `;
    for (let i = 0; i < raceBonus.length; i++) {
      remainingPoints = 27;
      document.getElementsByClassName("remaining-points")[0].innerHTML = remainingPoints;
      minus[i].style.visibility = "hidden";
      plus[i].style.visibility = "visible";
      // plus[i].style.display = "inline-block";
      input[i].value = "8";
      raceBonus[i].innerHTML = "-";
      total[i].value = "8";
      document.getElementsByClassName("modifier")[i].value = modifier(i);
      if (raceBonus[i].parentElement.id === "constitution") {
        raceBonus[i].innerHTML = "+2";
        total[i].value = "10";
        document.getElementsByClassName("modifier")[i].value = modifier(i);
      }
    }

    getAcc();
  }
}

// Choose Class
function myClass() {
  let description = document.getElementsByClassName("class-description")[0];
  let img = document.getElementById("class-img");
  let classes = document.getElementById("classes");
  let features = document.getElementsByClassName("features")[0];
  if (classes.value === "Fighter") {
    img.src = "./img/form_img/fighter.jpeg";
    features.innerHTML = `
    <h3>Class features</h3>
    <p><span class="main-color">Hit Die:</span> d10</p>
    <p><span class="main-color">Primary Ability:</span> Strength or Dexterity</p>
    <p><span class="main-color">Saves:</span> Strength & Constitution</p>
    `;
    description.innerHTML = `
    <h4>Description:</h4>
    <p>
      A master of martial combat, skilled with a variety of weapons and armor
    </p>
    <button class="accordion">Hit Points</button>
    <div class="acc-body">
      <p><span class="main-color">Hit Dice:</span> 1d10 per fighter level</p>
      <p><span class="main-color">Hit Points at 1st Level:</span"> 10 + your Constitution modifier</p>
      <p><span class="main-color">Hit Points at Higher Levels:</span> 1d10 (or 6) + your Constitution modifier per fighter level after 1st</p>
    </div>
    <button class="accordion points">Proficiencies</button>
    <div class="acc-body">
      <p><span class="main-color">Armor:</span> All armor, shields</p>
      <p><span class="main-color">Weapons:</span"> Simple weapons, martial weapons</p>
      <p><span class="main-color">Tools:</span> None</p>
      <p><span class="main-color">Saving Throws:</span> Strength, Constitution</p>
      <p><span class="main-color">Skills:</span> Choose two skills from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival</p>
      <select name="fighter-skill-1">
        <option value="none">- Choose a Fighter Skill -</option>
        <option value="Acrobatics">Acrobatics</option>
        <option value="Animal Handling">Animal Handling</option>
        <option value="Athletics">Athletics</option>
        <option value="History">History</option>
        <option value="Insight">Insight</option>
        <option value="Intimidation">Intimidation</option>
        <option value="Perception">Perception</option>
        <option value="Survival">Survival</option>
      </select>
      <br>
      <select name="fighter-skill-2">
        <option value="none">- Choose a Fighter Skill -</option>
        <option value="Acrobatics">Acrobatics</option>
        <option value="Animal Handling">Animal Handling</option>
        <option value="Athletics">Athletics</option>
        <option value="History">History</option>
        <option value="Insight">Insight</option>
        <option value="Intimidation">Intimidation</option>
        <option value="Perception">Perception</option>
        <option value="Survival">Survival</option>
      </select>
    </div>
    <button class="accordion points">Fighting Style</button>
    <div class="acc-body">
      <p>
        You adopt a particular style of fighting as your specialty. Choose one of the following options. You can’t take a Fighting Style option more than once, even if you later get to choose again.
      </p>
      <select name="fighter-style">
        <option value="none">- Choose an Option -</option>
        <option value="Archery">Archery</option>
        <option value="Defence">Defence</option>
        <option value="Dueling">Dueling</option>
        <option value="Great Weapon Fighting">Great Weapon Fighting</option>
        <option value="Protection">Protection</option>
        <option value="Two-Weapon Fighting">Two-Weapon Fighting</option>
      </select>
    </div>
    <button class="accordion">Second Wind</button>
    <div class="acc-body">
      <p>
        You have a limited well of stamina that you can draw on to protect yourself from harm.
        On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level.
        Once you use this feature, you must finish a short or long rest before you can use it again.
      </p>
    </div>
    `;
    getAcc();
  }
  if (classes.value === "Ranger") {
    img.src = "./img/form_img/ranger.jpeg";
    features.innerHTML = `
    <h3>Class features</h3>
    <p><span class="main-color">Hit Die:</span> d10</p>
    <p><span class="main-color">Primary Ability:</span> Dexterity & Wisdom</p>
    <p><span class="main-color">Saves:</span> Strength & Dexterity</p>
    `;
    description.innerHTML = `
    <h4>Description:</h4>
    <p>
      A warrior who combats threats on the edges of civilization
    </p>
    <button class="accordion">Hit Points</button>
    <div class="acc-body">
      <p><span class="main-color">Hit Dice:</span> 1d10 per ranger level</p>
      <p><span class="main-color">Hit Points at 1st Level:</span"> 10 + your Constitution modifier</p>
      <p><span class="main-color">Hit Points at Higher Levels:</span> 1d10 (or 6) + your Constitution modifier per ranger level after 1st</p>
    </div>
    <button class="accordion points">Proficiencies</button>
    <div class="acc-body">
      <p><span class="main-color">Armor:</span> Light armor, medium armor, shields</p>
      <p><span class="main-color">Weapons:</span"> Simple weapons, martial weapons</p>
      <p><span class="main-color">Tools:</span> None</p>
      <p><span class="main-color">Saving Throws:</span> Strength, Dexterity</p>
      <p><span class="main-color">Skills:</span> Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival</p>
      <select name="ranger-skill-1">
        <option value="none">- Choose a Ranger Skill -</option>
        <option value="Animal Handling">Animal Handling</option>
        <option value="Athletics">Athletics</option>
        <option value="History">History</option>
        <option value="Insight">Insight</option>
        <option value="Investigation">Investigation</option>
        <option value="Perception">Perception</option>
        <option value="Survival">Survival</option>
        <option value="Stealth">Stealth</option>
      </select>
      <br>
      <select name="ranger-skill-2">
        <option value="none">- Choose a Ranger Skill -</option>
        <option value="Animal Handling">Animal Handling</option>
        <option value="Athletics">Athletics</option>
        <option value="History">History</option>
        <option value="Insight">Insight</option>
        <option value="Investigation">Investigation</option>
        <option value="Perception">Perception</option>
        <option value="Survival">Survival</option>
        <option value="Stealth">Stealth</option>
      </select>
      <br>
      <select name="ranger-skill-3">
        <option value="none">- Choose a Ranger Skill -</option>
        <option value="Animal Handling">Animal Handling</option>
        <option value="Athletics">Athletics</option>
        <option value="History">History</option>
        <option value="Insight">Insight</option>
        <option value="Investigation">Investigation</option>
        <option value="Perception">Perception</option>
        <option value="Survival">Survival</option>
        <option value="Stealth">Stealth</option>
      </select>
    </div>
    <button class="accordion points">Favored Enemy</button>
    <div class="acc-body">
      <p>
      Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.
      </p>
      <select name="favored-enemy">
        <option value="none">- Choose an Option -</option>
        <option value="Beasts">Beasts</option>
        <option value="Dragons">Dragons</option>
        <option value="Fey">Fey</option>
        <option value="Giants">Giants</option>
        <option value="Humanoids">Humanoids</option>
        <option value="Undead">Undead</option>
      </select>
      <br/>
      <select name="language">
        <option value="none">- Choose a Language -</option>
        <option value="Abyssal">Abyssal</option>
        <option value="Draconic">Draconic</option>
        <option value="Elvish">Elvish</option>
        <option value="Goblin">Goblin</option>
        <option value="Halfling">Halfling</option>
        <option value="Orc">Orc</option>
    </select>
    </div>
    <button class="accordion points">Natural Explorer</button>
    <div class="acc-body">
      <p>
      You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions.
      </p>
      <select name="natural-explorer">
        <option value="none">- Choose a Level 1 Option -</option>
        <option value="Arctic">Arctic</option>
        <option value="Coast">Coast</option>
        <option value="Desert">Desert</option>
        <option value="Forest">Forest</option>
        <option value="Mountain">Mountain</option>
        <option value="Swamp">Swamp</option>
      </select>
      <br/>
    </div>
    `;
    getAcc();
  }
  if (classes.value === "Rogue") {
    img.src = "./img/form_img/rogue.jpeg";
    features.innerHTML = `
    <h3>Class features</h3>
    <p><span class="main-color">Hit Die:</span> d8</p>
    <p><span class="main-color">Primary Ability:</span> Dexterity</p>
    <p><span class="main-color">Saves:</span> Dexterity & Intelligence</p>
    `;
    description.innerHTML = `
    <h4>Description:</h4>
    <p>
      A warrior who combats threats on the edges of civilization
    </p>
    <button class="accordion">Hit Points</button>
    <div class="acc-body">
      <p><span class="main-color">Hit Dice:</span> 1d8 per rogue level</p>
      <p><span class="main-color">Hit Points at 1st Level:</span">  8 + your Constitution modifier</p>
      <p><span class="main-color">Hit Points at Higher Levels:</span> 1d8 (or 5) + your Constitution modifier per rogue level after 1st</p>
    </div>
    <button class="accordion points">Proficiencies</button>
    <div class="acc-body">
      <p><span class="main-color">Armor:</span> Light armor</p>
      <p><span class="main-color">Weapons:</span"> Simple weapons, hand crossbows, longswords, rapiers, shortswords</p>
      <p><span class="main-color">Tools:</span> Thieves’ tools</p>
      <p><span class="main-color">Saving Throws:</span> Dexterity, Intelligence</p>
      <p><span class="main-color">Skills:</span> Choose four from Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, and Stealth</p>
      <select name="rogue-skill-1">
        <option value="none">- Choose a rogue Skill -</option>
        <option value="Acrobatics">Acrobatics</option>
        <option value="Athletics">Athletics</option>
        <option value="Deception">Deception</option>
        <option value="Insight">Insight</option>
        <option value="Intimidation">Intimidation</option>
        <option value="Investigation">Investigation</option>
        <option value="Perception">Perception</option>
        <option value="Performance">Performance</option>
        <option value="Persuasion">Persuasion</option>
        <option value="Slight Of Hand">Slight Of Hand</option>
        <option value="Stealth">Stealth</option>
      </select>
      <br>
      <select name="rogue-skill-2">
        <option value="none">- Choose a rogue Skill -</option>
        <option value="Acrobatics">Acrobatics</option>
        <option value="Athletics">Athletics</option>
        <option value="Deception">Deception</option>
        <option value="Insight">Insight</option>
        <option value="Intimidation">Intimidation</option>
        <option value="Investigation">Investigation</option>
        <option value="Perception">Perception</option>
        <option value="Performance">Performance</option>
        <option value="Persuasion">Persuasion</option>
        <option value="Slight Of Hand">Slight Of Hand</option>
        <option value="Stealth">Stealth</option>
      </select>
      <br>
      <select name="rogue-skill-3">
        <option value="none">- Choose a rogue Skill -</option>
        <option value="Acrobatics">Acrobatics</option>
        <option value="Athletics">Athletics</option>
        <option value="Deception">Deception</option>
        <option value="Insight">Insight</option>
        <option value="Intimidation">Intimidation</option>
        <option value="Investigation">Investigation</option>
        <option value="Perception">Perception</option>
        <option value="Performance">Performance</option>
        <option value="Persuasion">Persuasion</option>
        <option value="Slight Of Hand">Slight Of Hand</option>
        <option value="Stealth">Stealth</option>
      </select>
      <br>
      <select name="rogue-skill-4">
        <option value="none">- Choose a rogue Skill -</option>
        <option value="Acrobatics">Acrobatics</option>
        <option value="Athletics">Athletics</option>
        <option value="Deception">Deception</option>
        <option value="Insight">Insight</option>
        <option value="Intimidation">Intimidation</option>
        <option value="Investigation">Investigation</option>
        <option value="Perception">Perception</option>
        <option value="Performance">Performance</option>
        <option value="Persuasion">Persuasion</option>
        <option value="Slight Of Hand">Slight Of Hand</option>
        <option value="Stealth">Stealth</option>
      </select>
      <br>
    </div>
    <button class="accordion points">Expertise</button>
    <div class="acc-body">
      <p>
      At 1st level, choose two of your skill proficiencies, 
      or one of your skill proficiencies and your proficiency with thieves’ tools. 
      Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.
      </p>
      <p>
      At 6th level, you can choose two more of your proficiencies (in skills or with thieves’ tools) to gain this benefit.
      </p>
      <select name="expertise-1">
        <option value="none">- Choose Rouge Expertise -</option>
        <option value="Deception">Deception</option>
        <option value="Stealth">Stealth</option>
        <option value="Thieves' Tools">Thieves' Tools</option>
      </select>
      <br/>
      <select name="expertise-2">
        <option value="none">- Choose Rouge Expertise -</option>
        <option value="Deception">Deception</option>
        <option value="Stealth">Stealth</option>
        <option value="Thieves' Tools">Thieves' Tools</option>
      </select>
      <br/>
    </div>
    <button class="accordion">Sneak Attack</button>
    <div class="acc-body">
      <p>
      Beginning at 1st level, you know how to strike subtly and exploit a foe’s distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.
      </p>
      <p>
      You don’t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn’t incapacitated, and you don’t have disadvantage on the attack roll.
      </p>
      <p>
      The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table.
      </p>
    </div>
    <button class="accordion">Thieves’ Cant</button>
    <div class="acc-body">
      <p>
      During your rogue training you learned thieves’ cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves’ cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.      </p>
      <p>
      In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves’ guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.      </p>
    </div>
    `;
    getAcc();
  }
  if (classes.value === "Sorcerer") {
    img.src = "./img/form_img/sorcerer.jpeg";
    features.innerHTML = `
    <h3>Class features</h3>
    <p><span class="main-color">Hit Die:</span> d6</p>
    <p><span class="main-color">Primary Ability:</span> Charisma</p>
    <p><span class="main-color">Saves:</span> Constitution & Charisma</p>
    `;
    description.innerHTML = `
    <h4>Description:</h4>
    <p>
      A spellcaster who draws on inherent magic from a gift or bloodline
    </p>
    <button class="accordion">Hit Points</button>
    <div class="acc-body">
      <p><span class="main-color">Hit Dice:</span> 1d6 per sorcerer level</p>
      <p><span class="main-color">Hit Points at 1st Level:</span">  6 + your Constitution modifier</p>
      <p><span class="main-color">Hit Points at Higher Levels:</span> 1d6 (or 4) + your Constitution modifier per sorcerer level after 1st</p>
    </div>
    <button class="accordion points">Proficiencies</button>
    <div class="acc-body">
      <p><span class="main-color">Armor:</span> None</p>
      <p><span class="main-color">Weapons:</span"> Daggers, darts, slings, quarterstaffs, light crossbows</p>
      <p><span class="main-color">Tools:</span> None</p>
      <p><span class="main-color">Saving Throws:</span> Constitution, Charisma</p>
      <p><span class="main-color">Skills:</span> Choose two from Arcana, Deception, Insight, Intimidation, Persuasion, and Religion</p>
      <select name="sorcerer-skill-1">
        <option value="none">- Choose a Sorcerer Skill -</option>
        <option value="Arcana">Arcana</option>
        <option value="Deception">Deception</option>
        <option value="Insight">Insight</option>
        <option value="Intimidation">Intimidation</option>
        <option value="Persuasion">Persuasion</option>
        <option value="Religion">Religion</option>
      </select>
      <br>
      <select name="sorcerer-skill-2">
        <option value="none">- Choose a Sorcerer Skill -</option>
        <option value="Arcana">Arcana</option>
        <option value="Deception">Deception</option>
        <option value="Insight">Insight</option>
        <option value="Intimidation">Intimidation</option>
        <option value="Persuasion">Persuasion</option>
        <option value="Religion">Religion</option>
      </select>
    </div>
    <button class="accordion">Spellcasting</button>
    <div class="acc-body">
      <p>
      An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic. This font of magic, whatever its origin, fuels your spells.
      </p>
      <p><span class="main-color">Cantrips</span></p>
      <p>
      At 1st level, you know four cantrips of your choice from the sorcerer spell list. You learn additional sorcerer cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Sorcerer table.
      </p>
      <p><span class="main-color">Spell Slots</span></p>
      <p>
      The Sorcerer table shows how many spell slots you have to cast your sorcerer spells of 1st level and higher. To cast one of these sorcerer spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.
      </p>
      <p><span class="main-color">Spell save DC </span>= 8 + your proficiency bonus + your Charisma modifier</p>
      <p><span class="main-color">Spell attack modifier </span>= your proficiency bonus + your Charisma modifier</p>
    </div>
    `;
    getAcc();
  }
}
// Choose Description
function myDescription() {
  let description = document.getElementsByClassName("desc-description")[0];
  let background = document.getElementById("background");
  if (background.value === "none") {
    description.innerHTML = "";
  }
  if (background.value === "Acolyte") {
    description.innerHTML = `
    <hr>
    <p>
      You have spent your life in the service of a temple to a specific god or pantheon of gods. 
      You act as an intermediary between the realm of the holy and the mortal world, 
      performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine. 
      You are not necessarily a cleric—performing sacred rites is not the same thing as channeling divine power.
    </p>
    <p><span class="main-color">Skill Proficiencies:</span> Insight, Religion</p>
    <span class="main-color">Languages:</span>
    <br>
    <select name="ad-language-1">
      <option value="none">- Choose a Language -</option>
      <option value="Abyssal">Abyssal</option>
      <option value="Draconic">Draconic</option>
      <option value="Elvish">Elvish</option>
      <option value="Goblin">Goblin</option>
      <option value="Halfling">Halfling</option>
      <option value="Orc">Orc</option>
    </select>
    <br>
    <select name="ad-language-2">
      <option value="none">- Choose a Language -</option>
      <option value="Abyssal">Abyssal</option>
      <option value="Draconic">Draconic</option>
      <option value="Elvish">Elvish</option>
      <option value="Goblin">Goblin</option>
      <option value="Halfling">Halfling</option>
      <option value="Orc">Orc</option>
    </select>
    <button class="accordion back-feature">Shelter of the Faithful</button>
    <div class="acc-body">
      <p>
        As an acolyte, you command the respect of those who share your faith, 
        and you can perform the religious ceremonies of your deity. 
        You and your adventuring companions can expect to receive free healing and care at a temple, 
        shrine, or other established presence of your faith, 
        though you must provide any material components needed for spells. 
        Those who share your religion will support you (but only you) at a modest lifestyle.
      </p>
      <p>
        You might also have ties to a specific temple dedicated to your chosen deity or pantheon, 
        and you have a residence there. This could be the temple where you used to serve, 
        if you remain on good terms with it, or a temple where you have found a new home. 
        While near your temple, you can call upon the priests for assistance, 
        provided the assistance you ask for is not hazardous and you remain in good standing with your temple.
      </p>
    </div>
    `;
    getAcc();
  }
  if (background.value === "Criminal/Spy") {
    description.innerHTML = `
    <hr>
    <p>
    You are an experienced criminal with a history of breaking the law. 
    You have spent a lot of time among other criminals and still have contacts within the criminal underworld. 
    You’re far closer than most people to the world of murder, theft, and violence that pervades the underbelly of civilization, 
    and you have survived up to this point by flouting the rules and regulations of society.
    </p>
    <p><span class="main-color">Skill Proficiencies:</span> Deception, Stealth</p>
    <p><span class="main-color">Tool Proficiencies:</span> Thieves' Tools</p>
    <select name="game-set">
      <option value="none">- Choose a Gaming Set -</option>
      <option value="Dice Set">Dice Set</option>
      <option value="Dragonchess Set">Dragonchess Set</option>
      <option value="Playing Card Set">Playing Card Set</option>
      <option value="Three-Dragon Ante Set">Three-Dragon Ante Set</option>
    </select>
    <button class="accordion back-feature">Criminal Contact</button>
    <div class="acc-body">
      <p>
      You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. 
      You know how to get messages to and from your contact, even over great distances; specifically, 
      you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.
      </p>
    </div>
    `;
    getAcc();
  }
  if (background.value === "Folk Hero") {
    description.innerHTML = `
    <hr>
    <p>
    You come from a humble social rank, but you are destined for so much more. 
    Already the people of your home village regard you as their champion, 
    and your destiny calls you to stand against the tyrants and monsters that threaten the common folk everywhere.
    </p>
    <p><span class="main-color">Skill Proficiencies:</span> Animal Handling, Survival</p>
    <p><span class="main-color">Vehicle Proficiencies:</span> Vehicles (Land)</p>
    <select name="artisanTool">
      <option value="none">- Choose a Artisan's Tool -</option>
      <option value="Alchemist's Supplies">Alchemist's Supplies</option>
      <option value="Brewer's Supplies">Brewer's Supplies</option>
      <option value="Carpenter's Tools">Carpenter's Tools</option>
      <option value="Jeweler's Tools">Jeweler's Tools</option>
      <option value="Mason's Tools">Mason's Tools</option>
      <option value="Smith's Tools">Smith's Tools</option>
    </select>
    <button class="accordion back-feature">Rustic Hospitality</button>
    <div class="acc-body">
      <p>
      Since you come from the ranks of the common folk, you fit in among them with ease. 
      You can find a place to hide, rest, or recuperate among other commoners, 
      unless you have shown yourself to be a danger to them. 
      They will shield you from the law or anyone else searching for you, though they will not risk their lives for you.
      </p>
    </div>
    `;
    getAcc();
  }
  if (background.value === "Haunted One") {
    description.innerHTML = `
    <hr>
    <p>
    You are haunted by something so terrible that you dare not speak of it. 
    You’ve tried to bury it and run away from it, to no avail. 
    Whatever this thing is that haunts you can’t be slain with a sword or banished with a spell. 
    It might come to you as a shadow on the wall, a bloodcurdling nightmare, a memory that refuses to die, 
    or a demonic whisper in the dark. The burden has taken its toll, 
    isolating you from most people and making you question your sanity. 
    You must find a way to overcome it before it destroys you.
    </p>
    <p><span class="main-color">Skill Proficiencies:</span></p>
    <br/>
    <select name="skill-1">
      <option value="none">- Choose a Skill -</option>
      <option value="Arcana">Arcana</option>
      <option value="Investigation">Investigation</option>
      <option value="Religion">Religion</option>
      <option value="Survival">Survival</option>
    </select>
    <br/>
    <select name="skill-2">
      <option value="none">- Choose a Skill -</option>
      <option value="Arcana">Arcana</option>
      <option value="Investigation">Investigation</option>
      <option value="Religion">Religion</option>
      <option value="Survival">Survival</option>
    </select>
    <br>
    <span class="main-color">Languages:</span>
    <br>
    <select name="ad-language">
      <option value="none">- Choose an Extra Language -</option>
      <option value="Abyssal">Abyssal</option>
      <option value="Draconic">Draconic</option>
      <option value="Elvish">Elvish</option>
      <option value="Goblin">Goblin</option>
      <option value="Hafling">Halfling</option>
      <option value="Orc">Orc</option>
    </select>
    <button class="accordion back-feature">Heart of Darkness</button>
    <div class="acc-body">
      <p>
      Those who look into your eyes can see that you have faced unimaginable horror and that you are no stranger to darkness. 
      Though they might fear you, commoners will extend you every courtesy and do their utmost to help you. 
      Unless you have shown yourself to be a danger to them, they will even take up arms to fight alongside you, 
      should you find yourself facing an enemy alone.
      </p>
    </div>
    `;
    getAcc();
  }
  if (background.value === "Sage") {
    description.innerHTML = `
    <hr>
    <p>
    You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls, 
    and listened to the greatest experts on the subjects that interest you. Your efforts have made you a master in your fields of study.
    </p>
    <p><span class="main-color">Skill Proficiencies:</span> Arcana, History</p>
    <br>
    <span class="main-color">Languages:</span>
    <br>
    <select name="ad-language-1">
      <option value="none">- Choose an Extra Language -</option>
      <option value="Abyssal">Abyssal</option>
      <option value="Draconic">Draconic</option>
      <option value="Elvish">Elvish</option>
      <option value="Goblin">Goblin</option>
      <option value="Hafling">Halfling</option>
      <option value="Orc">Orc</option>
    </select>
    <br>
    <select name="ad-language-2">
      <option value="none">- Choose an Extra Language -</option>
      <option value="Abyssal">Abyssal</option>
      <option value="Draconic">Draconic</option>
      <option value="Elvish">Elvish</option>
      <option value="Goblin">Goblin</option>
      <option value="Hafling">Halfling</option>
      <option value="Orc">Orc</option>
    </select>
    <button class="accordion back-feature">Researcher</button>
    <div class="acc-body">
      <p>
      When you attempt to learn or recall a piece of lore, if you do not know that information, 
      you often know where and from whom you can obtain it. Usually, this information comes from a library, 
      scriptorium, university, or a sage or other learned person or creature. 
      Your DM might rule that the knowledge you seek is secreted away in an almost inaccessible place, 
      or that it simply cannot be found. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign.
      </p>
    </div>
    `;
    getAcc();
  }
  if (background.value === "Soldier") {
    description.innerHTML = `
    <hr>
    <p>
    War has been your life for as long as you care to remember. You trained as a youth, 
    studied the use of weapons and armor, learned basic survival techniques, including how to stay alive on the battlefield. 
    You might have been part of a standing national army or a mercenary company, 
    or perhaps a member of a local militia who rose to prominence during a recent war.
    </p>
    <p>
    When you choose this background, work with your DM to determine which military organization you were a part of, 
    how far through its ranks you progressed, and what kind of experiences you had during your military career. 
    Was it a standing army, a town guard, or a village militia? Or it might have been a noble’s or merchant’s private army, 
    or a mercenary company.
    </p>
    <p><span class="main-color">Skill Proficiencies:</span> Athletics, Intimidation</p>
    <p><span class="main-color">Vehicles Proficiencies:</span> Vehicles (Land)</p>
    <br>
    <select name="game-set">
      <option value="none">- Choose a Gaming Set -</option>
      <option value="Dice Set">Dice Set</option>
      <option value="Dragonchess Set">Dragonchess Set</option>
      <option value="Playing Card Set">Playing Card Set</option>
      <option value="Three-Dragon Ante Set">Three-Dragon Ante Set</option>
    </select>
    <button class="accordion back-feature">Military Rank</button>
    <div class="acc-body">
      <p>
      You have a military rank from your career as a soldier. 
      Soldiers loyal to your former military organization still recognize your authority and influence, 
      and they defer to you if they are of a lower rank. 
      You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. 
      You can also usually gain access to friendly military encampments and fortresses where your rank is recognized.
      </p>
    </div>
    `;
    getAcc();
  }
}
// Helper Function to prevent overriding eventlisteners
const accListener = function (e) {
  e.preventDefault();
  this.classList.toggle("active");
  let accBody = this.nextElementSibling;
  if (accBody.style.maxHeight) {
    accBody.style.maxHeight = null;
  } else {
    accBody.style.maxHeight = accBody.scrollHeight + "px";
  }
};
// Accordion.
function getAcc() {
  let acc = document.getElementsByClassName("accordion");
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", accListener);
  }
}

// Multiple steps functionality
let currentTab = 0; // Current tab is set to be the first tab

showTab(currentTab); // Display the current tab

// This function will display the specified tab of the form
function showTab(n) {
  let tab = document.getElementsByClassName("tab");
  tab[n].style.display = "block";
  getAcc();
  // fix the previous and next button
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline-block";
  }
  if (n == tab.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Create";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
}

// This function will figure out which  tab to display
function nextPrev(n) {
  let tab = document.getElementsByClassName("tab");
  // Hide the current tab
  tab[currentTab].style.display = "none";
  // increace or decrease the current tab by 1
  currentTab += n;
  // if you have reached the end of the form...
  if (currentTab >= tab.length) {
    // .. submit the form
    document.getElementById("ch-form").submit();
    return false;
  }
  // Otherwise, display the correct tab
  showTab(currentTab);
}

// Ability section
let checkfortotal; // Helper variable
let remainingPoints = 27;

document.getElementsByClassName("remaining-points")[0].innerHTML = remainingPoints;

let ability = document.getElementsByClassName("ability");
for (let i = 0; i < ability.length; i++) {
  ability[i].addEventListener("click", function (e) {
    let description = document.getElementsByClassName("ability-description")[0];
    if (e.target.parentElement.id == "strength") {
      description.innerHTML = `
      <h3>Strength</h3>
      <p>Strength measures bodily power, athletic training, and
        the extent to which you can exert raw physical force.</p>
      `;
    }
    if (e.target.parentElement.id == "dexterity") {
      description.innerHTML = `
      <h3>Dexterity</h3>
      <p>Dexterity measures agility, reflexes, and balance.</p>
      `;
    }
    if (e.target.parentElement.id == "constitution") {
      description.innerHTML = `
      <h3>Constitution</h3>
      <p>Constitution measures health, stamina, and vital force.
      </p>
      `;
    }
    if (e.target.parentElement.id == "intelligence") {
      description.innerHTML = `
      <h3>Intelligence</h3>
      <p>Intelligence measures mental acuity, accuracy of recall,
      and the ability to reason.</p>
      `;
    }
    if (e.target.parentElement.id == "wisdom") {
      description.innerHTML = `
      <h3>Wisdom</h3>
      <p>Wisdom reflects how attuned you are to the world around
      you and represents perceptiveness and intuition. 
      </p>
      `;
    }
    if (e.target.parentElement.id == "charisma") {
      description.innerHTML = `
      <h3>Charisma</h3>
      <p>Charisma measures your ability to interact effectively
      with others. It includes such factors as confidence and
      eloquence, and it can represent a charming or commanding personality.</p>
      `;
    }
    let plusBtn = document.getElementsByClassName("plus")[i];
    let minusBtn = document.getElementsByClassName("minus")[i];
    if (e.target.parentElement == plusBtn) {
      plusAbility(i);
    }
    if (e.target.parentElement == minusBtn) {
      minusAbility(i);
    }
  });
}
// function for a + button
function plusAbility(i) {
  let input = document.getElementsByClassName("ability-input")[i];
  let plus = document.getElementsByClassName("fa-plus-square")[i];
  let minus = document.getElementsByClassName("fa-minus-square")[i];
  checkfortotal = true;
  minus.style.visibility = "visible";
  input.value++;
  if (input.value >= 14) {
    remainingPoints -= 2;
  } else {
    remainingPoints--;
  }
  document.getElementsByClassName("remaining-points")[0].innerHTML = remainingPoints;
  document.getElementsByClassName("total")[i].value = totalPoints(i);
  document.getElementsByClassName("modifier")[i].value = modifier(i);
  if (input.value == 15) {
    plus.style.visibility = "hidden";
  }
  if (remainingPoints == 1) {
    getInput();
  }
  if (remainingPoints == 0) {
    for (let j = 0; j < document.getElementsByClassName("fa-plus-square").length; j++) {
      document.getElementsByClassName("fa-plus-square")[j].style.visibility = "hidden";
    }
  }
}
// Hide plus buttons
function getInput() {
  let input = document.getElementsByClassName("ability-input");
  let plus = document.getElementsByClassName("fa-plus-square");
  for (let i = 0; i < input.length; i++) {
    if (input[i].value >= 13) {
      plus[i].style.visibility = "hidden";
    }
  }
}
// Get total points
function totalPoints(i) {
  let total = document.getElementsByClassName("total")[i].value;
  total = parseInt(total);
  if (checkfortotal === true) {
    total++;
  } else {
    total--;
  }

  return total;
}

// Get modifiers
function modifier(i) {
  let total = document.getElementsByClassName("total")[i].value;
  let modifier = document.getElementsByClassName("modifier")[i].value;
  total = parseInt(total);
  modifier = parseInt(modifier);
  if (total == 8 || total == 9) {
    modifier = -1;
  } else if (total == 10 || total == 11) {
    modifier = +0;
  } else if (total == 12 || total == 13) {
    modifier = +1;
  } else if (total == 14 || total == 15) {
    modifier = +2;
  } else if (total == 16 || total == 17) {
    modifier = +3;
  } else if (total == 18 || total == 19) {
    modifier = +4;
  } else if (total == 20 || total == 21) {
    modifier = +5;
  }
  return modifier;
}

// Function for - button
function minusAbility(i) {
  let input = document.getElementsByClassName("ability-input")[i];
  let plus = document.getElementsByClassName("fa-plus-square")[i];
  let minus = document.getElementsByClassName("fa-minus-square")[i];
  checkfortotal = false;
  plus.style.visibility = "visible";
  input.value--;
  if (input.value > 12) {
    remainingPoints += 2;
  } else {
    remainingPoints++;
  }

  if (remainingPoints > 0) {
    for (let j = 0; j < document.getElementsByClassName("fa-plus-square").length; j++) {
      if (document.getElementsByClassName("ability-input")[j].value == 15) {
        document.getElementsByClassName("fa-plus-square")[j].style.visibility = "hidden";
      } else {
        document.getElementsByClassName("fa-plus-square")[j].style.visibility = "visible";
      }
    }
    if (remainingPoints == 1) {
      getInput();
    }
  }
  document.getElementsByClassName("remaining-points")[0].innerHTML = remainingPoints;
  document.getElementsByClassName("total")[i].value = totalPoints(i);
  document.getElementsByClassName("modifier")[i].value = modifier(i);

  if (input.value <= 8) {
    minus.style.visibility = "hidden";
  }
}

// Starting Equipment
let checkboxes = document.getElementsByClassName("ch-equipment")[0].getElementsByTagName("input");
let main = document.getElementsByClassName("main-weapon")[0];
let secondary = document.getElementsByClassName("secondary-weapon")[0];
let potions = document.getElementsByClassName("potions")[0];
let stuff = document.getElementsByClassName("other-stuff")[0];
for (let i = 0; i < checkboxes.length; i++) {
  if (checkboxes[i].parentElement.parentElement == main) {
    checkboxes[i].addEventListener("change", chooseEq);
  }
  if (checkboxes[i].parentElement.parentElement == secondary) {
    checkboxes[i].addEventListener("change", chooseEq);
  }
  if (checkboxes[i].parentElement.parentElement == potions) {
    checkboxes[i].addEventListener("change", chooseEq);
  }
  if (checkboxes[i].parentElement.parentElement == stuff) {
    checkboxes[i].addEventListener("change", chooseEq);
  }
}

function chooseEq() {
  if (this.checked) {
    let label = this.parentElement.parentElement.getElementsByTagName("label");
    let input = this.parentElement.parentElement.getElementsByTagName("input");
    for (let j = 0; j < label.length; j++) {
      if (!input[j].checked) {
        input[j].disabled = "true";
        label[j].style.textDecoration = "line-through";
      }
    }
  } else {
    let label = this.parentElement.parentElement.getElementsByTagName("label");
    let input = this.parentElement.parentElement.getElementsByTagName("input");
    for (let j = 0; j < label.length; j++) {
      if (!input[j].checked) {
        input[j].disabled = "";
        label[j].style.textDecoration = "unset";
      }
    }
  }
}

// IMAGE MODAL FUNCTIONALITY
// Get the modal
let modal = document.getElementById("img-modal");
// Get the div that opens the modal
let openModal = document.getElementById("modal-img-open");
// Get the span element that closes the modal
let closeModal = document.getElementsByClassName("close")[0];
// When the user clicks on the avatar open the modal
openModal.onclick = function () {
  modal.style.display = "block";
}
// When the user clicks the X buttom close the modal
closeModal.onclick = function () {
  modal.style.display = "none";
}

// Choose the picture and set it as an avatar
// Get the imgs
let avatarImgs = document.getElementsByClassName("avatar-img");

for (let i = 0; i < avatarImgs.length; i++) {
  avatarImgs[i].addEventListener("click", function chooseImg() {
    let plusIcon = document.getElementsByClassName("img-icon")[0];
    let mainAvatar = document.getElementsByClassName("main-avatar")[0];
    let hidInput = document.getElementById("hidden-input");
    plusIcon.style.display = "none";
    mainAvatar.style.filter = "unset";
    mainAvatar.src = avatarImgs[i].src;
    hidInput.value = avatarImgs[i].src;
    modal.style.display = "none";
  });
}
