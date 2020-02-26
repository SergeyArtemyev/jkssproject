function testFunc(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', '../api/db.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      const output = response.src[response.src.length - 1].imgsrc;

      document.getElementsByClassName("char-avatar")[0].src = output;
    }
  }

  xhr.send();
}
testFunc();
