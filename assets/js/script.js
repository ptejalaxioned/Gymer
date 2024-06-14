let hamburger = document.querySelector(".hamburger");
let nav_list = document.querySelector(".nav-list");

let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let line3 = document.querySelector(".line3");
let line = document.querySelector(".line");

let count_up = document.querySelectorAll(".count-up");

let previous = document.querySelector(".previous");
let next = document.querySelector(".next");
let next_previous = document.querySelector(".next-previous");
let slider = document.querySelector(".classes-list");

console.log(next_previous.children);

let count = -1241;

next.addEventListener("click", () => {
  slider.style.transform = `translateX(${count}px)`;
  count = count - 100;
  if (count <= -1241) {
    next.style.visibility = "hidden";
    previous.style.display = "visible";
  } else if (count > -1241) {
    next.style.display = "visible";
  }
});

previous.addEventListener("click", () => {
  slider.style.transform = `translateX(${count}px)`;
  count = count + 100;

  if (count >= 0) {
    previous.style.visibility = "hidden";
    next.style.display = "visible";
  } else if (count < 0) {
    previous.style.visibility = "visible";
  }
});

//Counter
let count_members = 0;
let members_count = parseInt(count_up[0].innerHTML.replace(/,/g, ""));

function incrementCount_members() {
  count_members++;
  count_up[0].innerHTML = count_members;
  if (count_members >= members_count) {
    clearInterval(intervalId);
  }
}
var intervalId = setInterval(incrementCount_members, 1);

let count_visitors = 0;
let visitors_count = parseInt(count_up[1].innerHTML.replace(/,/g, ""));

function incrementCount_visitors() {
  count_visitors++;
  count_up[1].innerHTML = count_visitors;
  if (count_visitors >= visitors_count) {
    clearInterval(intervalId_visitors);
  }
}
var intervalId_visitors = setInterval(incrementCount_visitors, 42.2);

let count_program = 0;
let program_count = parseInt(count_up[2].innerHTML.replace(/,/g, ""));

function incrementCount_program() {
  count_program++;
  count_up[2].innerHTML = count_program;
  if (count_program >= program_count) {
    clearInterval(intervalId_program);
  }
}
var intervalId_program = setInterval(incrementCount_program, 10.5);

let count_heart = 0;
let heart_count = parseInt(count_up[3].innerHTML.replace(/,/g, ""));

function incrementCount_heart() {
  count_heart++;
  count_up[3].innerHTML = count_heart;
  if (count_heart >= heart_count) {
    clearInterval(intervalId_heart);
  }
  `1`;
}
var intervalId_heart = setInterval(incrementCount_heart, 1.04);

//Hamburger
hamburger.addEventListener("click", () => {
  nav_list.classList.toggle("nav-list-onclick");
  line1.classList.toggle("line1-onclick");
  line2.classList.toggle("line2-onclick");
  line3.classList.toggle("line3-onclick");
  hamburger.classList.toggle("hamburger-onclick");
  document.childNodes[1].classList.toggle("body-onclick");
});

//form validation

let fname = document.querySelector("#first-name");
let lname = document.querySelector("#last-name");
let email = document.querySelector("#email");
let subject = document.querySelector("#subject");
let textarea = document.querySelector("#textarea");

let fname_div = document.querySelector(".first-name");
let lname_div = document.querySelector(".last-name");
let email_div = document.querySelector(".email");
let subject_div = document.querySelector(".subject");
let textarea_div = document.querySelector(".textarea");
let form = document.querySelector("form");
let button = document.querySelector("#button");
form.addEventListener("submit", (e) => {
  let regx_name = /^[a-zA-Z]{2,20}$/;
  let regx_Sname = /^[a-zA-Z]{4,25}$/;
  let regx_email = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  span_content_name = "min-2 max-20 charachters with A-Z";
  span_content_subject = "min-4 max-25 charachters with A-Z";
  span_content_email = "please enter valid email";

  //For first name
  if (fname_div.children.length == 1) {
    let span_fname = document.createElement("span");
    span_fname.classList.toggle("div-span");
    fname_div.appendChild(span_fname);
    addSpan(span_fname, fname, e, regx_name, span_content_name);
  } else {
    let span_fname = fname_div.children[1];
    addSpan(span_fname, fname, e, regx_name, span_content_name);
  }
  //For last name
  if (lname_div.children.length == 1) {
    let span_lname = document.createElement("span");
    span_lname.classList.toggle("div-span");
    lname_div.appendChild(span_lname);
    addSpan(span_lname, lname, e, regx_name, span_content_name);
  } else {
    let span_lname = lname_div.children[1];
    addSpan(span_lname, lname, e, regx_name, span_content_name);
  }

  //For subject
  if (subject_div.children.length == 1) {
    let span_subject = document.createElement("span");
    span_subject.classList.toggle("div-span");
    subject_div.appendChild(span_subject);
    addSpan(span_subject, subject, e, regx_Sname, span_content_subject);
  } else {
    let span_subject = subject_div.children[1];
    addSpan(span_subject, subject, e, regx_Sname, span_content_subject);
  }

  // For email
  if (email_div.children.length == 1) {
    let span_email = document.createElement("span");
    span_email.classList.toggle("div-span");
    email_div.appendChild(span_email);
    addSpan(span_email, email, e, regx_email, span_content_email);
  } else {
    let span_email = email_div.children[1];
    addSpan(span_email, email, e, regx_email, span_content_email);
  }

  //For textarea
  if (textarea_div.children.length == 1) {
    let span_textarea = document.createElement("span");
    span_textarea.classList.toggle("div-span");
    textarea_div.appendChild(span_textarea);
    addSpanForTextarea(span_textarea, textarea, e);
  } else {
    let span_textarea = textarea_div.children[1];
    addSpanForTextarea(span_textarea, textarea, e);
  }

  // For validation
  function addSpan(span, input, e, regx, spanContent) {
    if (input.value === "") {
      span.innerHTML = "*This field is required";
      input.classList.add("input-border");
      e.preventDefault();
    } else if (regx.test(input.value)) {
      span.innerHTML = "";
      input.classList.remove("input-border");
    } else {
      span.innerHTML = spanContent;
      input.classList.add("input-border");
      e.preventDefault();
    }
  }
});
function addSpanForTextarea(span, input, e) {
  if (input.value == "") {
    span.innerHTML = "This field is required";
    input.classList.add("input-border");
    e.preventDefault();
  } else {
    span.innerHTML = "";
    input.classList.remove("input-border");
  }
}
