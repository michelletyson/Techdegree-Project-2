/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Michelle Tyson
******************************************/
   


//global variables that store elements that will be manipulated

const listOfStudents = document.querySelectorAll('.student-item');
const studentsOnPage = 10;

const showPage = (listOfStudents,pageNumber) => {
  let startIndex = (pageNumber * studentsOnPage) - studentsOnPage;
  let endIndex = pageNumber * studentsOnPage;

  for (let i = 0; i < listOfStudents.length; i++) {
    if (i >= startIndex && i < endIndex) {
      listOfStudents[i].style.display = "block";   //showing
    } else {
      listOfStudents[i].style.display = "none";    //hiding
    }
  }
};

const appendPageLinks = listOfStudents => {
   let div = document.createElement("div");
   let ul = document.createElement("ul");
   let page = document.querySelector('.page');

   /** determining pages needed for list by dividing total # 
    of list items by max # of items per page.*/

   let eachPageCount = Math.ceil(listOfStudents.length / studentsOnPage);

   page.appendChild(div);
   div.className = "pagination";
   div.appendChild(ul);


   /** Loop to iterate that many times to 
      create the correct # of LI elements */

  for (let j = 0; j < eachPageCount; j++) {      
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.textContent = `${j + 1}`;

    if (j === 0) {
      a.className = "active";
    }
    ul.appendChild(li);
    li.appendChild(a);
  }

  ul.addEventListener("click", e => {              // show different student list on each page
    const link = e.target;
    if (link.tagName === "A") {
      pageNumber = e.target.textContent;
      const clicked = document.querySelectorAll(".pagination a");

      for (let k = 0; k < clicked.length; k++) {
        clicked[k].classList.remove("active");      // removes active class name from unclicked links 
      }
      link.className = "active";
    }
    showPage(listOfStudents, pageNumber);     // show different student list on each page
  });
};

appendPageLinks(listOfStudents);

showPage(listOfStudents, 1);       // calls showPage