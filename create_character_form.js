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
    <p>Extra Language</p>
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
    <p>Dwarven Combat Training</p>
    <p>Stonecunning</p>
    `;
    getAcc();
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
