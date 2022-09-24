

let input__field = document.getElementById("input__field");
let input__label = document.getElementById("input__label");

input__field.addEventListener("focusin", () => {
  input__label.classList.add("active");
});

input__field.addEventListener("focusout", () => {
  if (input__field.value == "") {
    input__label.classList.remove("active");
  }
});

input__label.addEventListener("click", () => {
  input__label.classList.add("active");
  input__field.focus();
});

//modal show and hide
let modal = document.getElementById("modal");
let addTask__btn = document.getElementById("addTask__btn");
let body = document.getElementById("body");

modal.style.display = "none";

addTask__btn.addEventListener("click", () => {
  modal.style.display = "block";
  body.classList.add("blur");
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    body.classList.remove("blur");
    input__field.value = "";
    input__label.classList.remove("active");
  }
};

//add items in todo list
let add = document.getElementById("add_btn");
let cancel = document.getElementById("cancel_btn");
let todo_container = document.getElementById("todo_cont");
let item_count = 0;
let Alert = document.getElementById("alert");

Alert.style.display = "none";

add.onclick = function () {
  let item = input__field.value;

  if (input__field.value == "") {
    Alert.style.display = "block";
  } else {
    Alert.style.display = "none";

    let p = document.createElement("p");
    let closeBtn = document.createElement("input");
    closeBtn.setAttribute("type", "checkbox");
    let item_cont = document.createElement('div');
    item_cont.classList.add('item-cont');

    item_count++; 
    p.classList.add("item");
    p.innerHTML = item_count + "." + " " + item;
    closeBtn.innerHTML = "x"
    closeBtn.classList.add("close-btn");

   
    todo_container.appendChild(item_cont);
    item_cont.appendChild(p);
    item_cont.appendChild(closeBtn);
    

    
    input__field.value = "";
    input__label.classList.remove("active");

  //gsap main start

  document.querySelector(".circle").classList.add("visible");
  document.querySelector(".added-animation-cont").classList.add("visible");


  //gsap
  gsap.from(".circle", {duration: 1, scale: 1.2});
  gsap.from(".arrow", {duration:1, rotationY: 180});
  gsap.from(".animate-heading", {duration: .5, translateY: 150})

  setTimeout(() => {
    document.querySelector(".circle").classList.remove("visible");
  document.querySelector(".added-animation-cont").classList.remove("visible");
  modal.style.display = "none";
    body.classList.remove("blur");
  }, 1000);


    //close btn click
    closeBtn.onclick = function(){
      setTimeout(() => {
        item_cont.removeChild(p);
        item_cont.removeChild(closeBtn);
      }, 400);
      item_count--;
      if(item_count > 0){
        document.getElementById("heading").innerHTML = "Hurray you have added";
      }else{
        document.getElementById("heading").innerHTML = "Your list is empty";
      }
    }

    if(item_count > 0){
      document.getElementById("heading").innerHTML = "Hurray you have added";
    }else{
      document.getElementById("heading").innerHTML = "Your list is empty";
    }
  }
};


cancel.onclick = function () {
  modal.style.display = "none";
  body.classList.remove("blur");
  Alert.style.display = "none";
  input__label.classList.remove("active");
  input__field.value = "";
};


