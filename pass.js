const a = "abcdefghijklmnopqrstuvwxyz";
const A = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const no = "1234567890";
const sym = "!@#$%^&*()_-+=|/";

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
