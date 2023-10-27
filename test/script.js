      let addbtn = document.querySelector("#addBtn");
      let submit = document.querySelector("#submit");
      let form = document.querySelector("#form");
      let inpimg = document.querySelector("#imageLink");
      let inpname = document.querySelector("#filmName");
      let inpimdb = document.querySelector("#filmimdb");
      let inpcat = document.querySelector("#filmcategory");
      let inpdirctr = document.querySelector("#filmdirector");
      let tbody = document.querySelector("#tbody");
      let input = document.querySelector(".input");
      let srcinp = document.querySelector('.srcinp')
      let srcglass = document.querySelector('.fa-magnifying-glass')
      srcglass.addEventListener('click',()=>{
        srcinp.style.opacity='1'
      })
      let memoElem;
      addbtn.addEventListener("click", (event) => {
        submit.textContent = "Submit";
        event.preventDefault();
        form.style.opacity = "1";
        form.style.transition = "0.5s";
      });
      submit.addEventListener("click", (event) => {
        event.preventDefault();
        if (submit.textContent === "Edit") {
          memoElem.children[0].src = inpimg.value;
          memoElem.children[1].textContent = inpname.value;
          memoElem.children[2].textContent = inpcat.value;
          memoElem.children[3].textContent = inpdirctr.value;
          memoElem.children[4].innerHTML = `${inpimdb.value} <i class="fa-solid fa-star"></i>`;
          submit.textContent = "Submit";

          inpimg.value = "";
          inpname.value = "";
          inpimdb.value = "";
          inpcat.value = "";
          inpdirctr.value = "";
          return;
        } else if (
          inpimg.value === "" ||
          inpname.value === "" ||
          inpimdb.value === "" ||
          inpcat.value === "" ||
          inpdirctr.value === ""
        ) {
          alert("Input must not be empty!!!");
          inpimg.value = "";
          inpname.value = "";
          inpimdb.value = "";
          inpcat.value = "";
          inpdirctr.value = "";
          return -1;
        } else {
          let trow = document.createElement("tr");
          let image = document.createElement("img");
          let name = document.createElement("td");
          let imdb = document.createElement("td");
          let category = document.createElement("td");
          let director = document.createElement("td");
          let editdelete = document.createElement("td");
          let edit = document.createElement("button");
          let delbtn = document.createElement("button");
          edit.innerHTML = `<i class="fa-solid fa-pen"></i>`;
          delbtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

          image.src = inpimg.value.trim();
          name.textContent = inpname.value.trim();
          imdb.innerHTML = `${inpimdb.value} <i class="fa-solid fa-star"></i>`;
          category.textContent = inpcat.value.trim();
          director.textContent = inpdirctr.value.trim();

          editdelete.append(edit, delbtn);
          trow.append(image, name, category, director, imdb, editdelete);
          tbody.append(trow);

          delbtn.addEventListener("click", () => {
            trow.remove();
          });

          edit.addEventListener("click", () => {
            submit.textContent = "Edit";
            inpimg.value = image.src;
            inpname.value = name.textContent;
            inpimdb.value = +imdb.textContent;
            inpcat.value = category.textContent;
            inpdirctr.value = director.textContent;
            memoElem = trow;
          });

          inpimg.value = "";
          inpname.value = "";
          inpimdb.value = "";
          inpcat.value = "";
          inpdirctr.value = "";
        }
      });
      // srcinp.addEventListener('input',(event)=>{
      //   event.preventDefault()
      //   for (let i = 0; i < tbody.children[1].length; i++) {
      //     const element = array[i];
          
      //   }
      // })
      console.log(tbody.children[1]);