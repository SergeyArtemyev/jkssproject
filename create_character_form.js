// Choose Race
getAcc();
function myRace() {
  let description = document.getElementsByClassName("race-description")[0];
  let img = document.getElementById("race-img");
  let races = document.getElementById("races");
  let traits = document.getElementsByClassName("traits")[0];
  if (races.value === "human") {
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
    <select name="language" id="language">
      <option value="none">- Choose a Language -</option>
      <option value="none">Abyssal</option>
      <option value="none">Draconic</option>
      <option value="none">Elvish</option>
      <option value="none">Goblin</option>
      <option value="none">Halfling</option>
      <option value="none">Orc</option>
    </select>
    `;
    getAcc();
  }
  if (races.value === "elf") {
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
      <option value="ctrlFlames">Control Flames</option>
      <option value="gust">Gust</option>
      <option value="frostBite">Frost Bite</option>
      <option value="light">Light</option>
      <option value="mirIllusion">Minor Illusion</option>
      <option value="trueStrike">True Strike</option>
    </select>
    <br/>
    <label for="language">Extra Language</label>
    <br/>
    <select name="language" id="language">
      <option value="none">- Choose a Language -</option>
      <option value="abyssal">Abyssal</option>
      <option value="draconic">Draconic</option>
      <option value="elvish">Elvish</option>
      <option value="goblin">Goblin</option>
      <option value="halfling">Halfling</option>
      <option value="orc">Orc</option>
    </select>
    `;
    getAcc();
  }
  if (races.value === "halfling") {
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
    getAcc();
  }
  if (races.value === "dwarf") {
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
      <option value="brewer">Brewer's Supplies</option>
      <option value="mason">Mason's Tools</option>
      <option value="smith">Smith's Tools</option>
    </select>
    <p>Dwarven Combat Training</p>
    <p>Stonecunning</p>
    `;
    getAcc();
  }
}

// Choose Class
function myClass() {
  let description = document.getElementsByClassName("class-description")[0];
  let img = document.getElementById("class-img");
  let classes = document.getElementById("classes");
  let features = document.getElementsByClassName("features")[0];
  if (classes.value === "fighter") {
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
      <select name="fighter-skill" id="fighter-skill">
        <option value="none">- Choose a Fighter Skill -</option>
        <option value="acrobatics">Acrobatics</option>
        <option value="animalHandling">Animal Handling</option>
        <option value="athletics">Athletics</option>
        <option value="history">History</option>
        <option value="insight">Insight</option>
        <option value="intimidation">Intimidation</option>
        <option value="perception">Perception</option>
        <option value="survival">Survival</option>
      </select>
      <br>
      <select name="fighter-skill" id="fighter-skill">
        <option value="none">- Choose a Fighter Skill -</option>
        <option value="acrobatics">Acrobatics</option>
        <option value="animalHandling">Animal Handling</option>
        <option value="athletics">Athletics</option>
        <option value="history">History</option>
        <option value="insight">Insight</option>
        <option value="intimidation">Intimidation</option>
        <option value="perception">Perception</option>
        <option value="survival">Survival</option>
      </select>
    </div>
    <button class="accordion points">Fighting Style</button>
    <div class="acc-body">
      <p>
        You adopt a particular style of fighting as your specialty. Choose one of the following options. You can’t take a Fighting Style option more than once, even if you later get to choose again.
      </p>
      <select name="fighter-style" id="fighter-style">
        <option value="none">- Choose an Option -</option>
        <option value="archery">Archery</option>
        <option value="defence">Defence</option>
        <option value="dueling">Dueling</option>
        <option value="greatWeapon">Great Weapon Fighting</option>
        <option value="protection">Protection</option>
        <option value="twoWeapon">Two-Weapon Fighting</option>
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
  }
  if (classes.value === "ranger") {
    img.src = "./img/form_img/ranger.jpeg";
  }
  if (classes.value === "rogue") {
    img.src = "./img/form_img/rogue.jpeg";
  }
  if (classes.value === "sorcerer") {
    img.src = "./img/form_img/sorcerer.jpeg";
  }
}
// Accordion

function getAcc() {
  let acc = document.querySelectorAll(".accordion");
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(e) {
      e.preventDefault();
      this.classList.toggle("active");
      let accBody = this.nextElementSibling;
      if (accBody.style.maxHeight) {
        accBody.style.maxHeight = null;
      } else {
        accBody.style.maxHeight = accBody.scrollHeight + "px";
      }
    });
  }
}

// Multiple steps functionality
let currentTab = 0; // Current tab is set to be the first tab
showTab(currentTab); // Display the current tab

// This function will display the specified tab of the form
function showTab(n) {
  let tab = document.getElementsByClassName("tab");
  tab[n].style.display = "block";
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
