function myRace() {
  let description = document.getElementsByClassName("race-description")[0];
  let img = document.getElementById("race-img");
  let races = document.getElementById("races");
  if (races.value === "human") {
    img.src = "./img/form_img/human.jpg";
    description.innerHTML = `<h4>Description:</h4><p>In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene
      and short-lived in comparison to dwarves, elves, and
      dragons. Perhaps it is because of their shorter lives that
      they strive to achieve as much as they can in the years
      they are given. Or maybe they feel they have something
      to prove to the elder races, and that’s why they build their
      mighty empires on the foundation of conquest and trade.
      Whatever drives them, humans are the innovators, the
      achievers, and the pioneers of the worlds.</p>`;
  }
  if (races.value === "elf") {
    img.src = "./img/form_img/elf.jpg";
    description.innerHTML = `<h4>Description:</h4><p>Elves are a magical people of otherworldly grace, living
      in the world but not entirely part of it. They live in places
      of ethereal beauty, in the midst of ancient forests or in
      silvery spires glittering with faerie light, where soft music
      drifts through the air and gentle fragrances waft on the
      breeze. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world.</p>`;
  }
  if (races.value === "halfling") {
    img.src = "./img/form_img/orc.png";
    description.innerHTML = `<h4>Description:</h4><p>The comforts of home are the goals of most halflings’
      lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies; a blazing fire
      and a generous meal; fine drink and fine conversation.
      Though some halflings live out their days in remote agricultural communities, others form nomadic bands that
      travel constantly, lured by the open road and the wide
      horizon to discover the wonders of new lands and peoples. But even these wanderers love peace, food, hearth,
      and home, though home might be a wagon jostling along
      an dirt road or a raft floating downriver.</p>`;
  }
  if (races.value === "dwarf") {
    img.src = "./img/form_img/dwarf.jpg";
    description.innerHTML = `
    <h4>Description:</h4><p>Kingdoms rich in ancient grandeur, halls carved into the
    roots of mountains, the echoing of picks and hammers
    in deep mines and blazing forges, a commitment to clan
    and tradition, and a burning hatred of goblins and orcs—
    these common threads unite all dwarves.</p>
    `;
  }
}
