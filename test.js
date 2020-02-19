function testFunc(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'test.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      const output =
        `
        <h2>${classes} Features</h2>
        <p>${response[classes].description}</p>
        `;
      document.getElementById("test-div").innerHTML = output;
    }
  }

  xhr.send();
}
testFunc();
