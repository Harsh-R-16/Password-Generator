a = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
A = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
no = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
sym = ["!", "@", "#", "$", "%", "^", "&", "*", "*", "(", ")"];

let input = document.querySelector("form");
input.addEventListener("change", function () {
  textPass = "";
  let inp = document.querySelectorAll("input");
  for (i of inp) {
    var _a = document.getElementById("1").value;
    var _A = document.getElementById("2").value;
    var _sym = document.getElementById("3").value;
    var _no = document.getElementById("4").value;
    textPass = ranChar(_a, a);
    textPass += ranChar(_A, A);
    textPass += ranChar(_sym, sym);
    textPass += ranChar(_no, no);
    let spanU = document.getElementById("_1");
    let spanL = document.getElementById("_2");
    let spanS = document.getElementById("_3");
    let spanN = document.getElementById("_4");
    spanU.innerText = _a;
    spanL.innerText = _A;
    spanN.innerHTML = _no;
    spanS.innerHTML = _sym;
  }

  document.getElementById("output").innerText = shuffleArray(textPass).join("");
  //   console.log(shuffleArray(textPass).join(""));
});

function ranChar(a, b) {
  res = "";

  for (i = 0; i < a; i++) {
    let randInt = Math.floor(Math.random() * (b.length - 1)) + 1;
    res += b[randInt];
  }
  return res;
}

function shuffleArray(res) {
  arr = res.split("");
  return arr.sort(() => Math.random() - 0.5);
}
