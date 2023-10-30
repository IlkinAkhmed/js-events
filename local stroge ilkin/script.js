// localStorage.setItem('ad','ilkin')
// localStorage.setItem('soyad','ehmedov')
// let ad = localStorage.getItem('ad')
// localStorage.setItem('surname','Ilkin')
// localStorage.removeItem('use')

// console.log(localStorage.key('ilkin'));
// let folder = document.querySelector('#file')
// folder.addEventListener('change',(e)=>{
//     let file = e.target.files
//     for (let i = 0; i < file.length; i++) {
//         if (file[i].name==='index.css') {
//             console.log(file[i]);
//         }

//     }
// })

// let text = document.querySelector('#text')
// let obj={surname:'Akhmedov',username:'IlkinAkhmed',password:'ilkin123!'}
// localStorage.setItem('user',JSON.stringify(obj))
// let user=JSON.parse(localStorage.getItem('user'))

// text.innerHTML = `Surname: ${user.surname}</br> Username: ${user.username}</br> Password: ${user.password}`

let input = document.querySelector("#text");
let submit = document.querySelector("#submit");
let ul = document.querySelector("#form");

let arr = [];
submit.addEventListener("click", (event) => {
  if (input.value === "") {
    alert("input must not be empty!!!");
    return -1;
  }
  event.preventDefault();
  arr.push(input.value);
  localStorage.setItem("item", JSON.stringify(arr));

    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    let divcheck = document.createElement("div");
    let divtext = document.createElement("div");
    checkbox.type = "checkbox";
    divcheck.append(checkbox);
    divtext.append(input.value);
    li.append(divtext, divcheck);
    li.style.display = "flex";
    ul.append(li);
    checkbox.addEventListener("change", (e) => {
      e.preventDefault();
      divtext.classList.toggle("line");
    });
});
window.onload = () => {
user = JSON.parse(localStorage.getItem("item"))
  if (user) {
    for (let i = 0; i < user.length; i++) {
      let li = document.createElement("li");
      let checkbox = document.createElement("input");
      let divcheck = document.createElement("div");
      let divtext = document.createElement("div");
      checkbox.type = "checkbox";
      divcheck.append(checkbox);
      divtext.textContent = (user[i]);
      li.append(divtext, divcheck);
      li.style.display = "flex";
      ul.append(li);
      arr.push(input.value);
      checkbox.addEventListener("change", (e) => {
        e.preventDefault();
        divtext.classList.toggle("line");
      });
    }
  }
};
// let usernameinp = document.querySelector("#username");
// let passwordinp = document.querySelector("#password");

// let submit = document.querySelector("#submit");
// let obj = {};
// submit.addEventListener("click", (e) => {
//   e.preventDefault();
//   obj.username = usernameinp.value;
//   obj.password = passwordinp.value;
//   localStorage.setItem("user", JSON.stringify(obj));
// });
// const user = JSON.parse(localStorage.getItem("user"));
// if (user) {
//   usernameinp.value = user.username;
//   passwordinp.value = user.password;
// }
