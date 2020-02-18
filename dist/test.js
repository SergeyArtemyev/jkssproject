function testFunc(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'test.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      if (classes === "fighter") {
        response.class.forEach(function (chClass) {
          if (chClass === "fighter") {
            const output =
              `
            <h2>${chClass}</h2>
            <p>${response.fighter.description}</p>
            `;
            document.getElementById("test-div").innerHTML = output;
          }
        });
      }

      if (classes === "rogue") {
        response.class.forEach(function (chClass) {
          if (chClass === "rogue") {
            const output =
              `
            <h2>${chClass}</h2>
            <p>${response.elf.description}</p>
            `;
            document.getElementById("test-div").innerHTML = output;
          }

        });
      }
    }
  }

  xhr.send();
}
testFunc();
