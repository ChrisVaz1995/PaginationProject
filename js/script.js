/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate

const studentList = document.querySelectorAll('.student-item');
const page = document.querySelector('.page');
const pagination = document.querySelector('.pagination');
const divide = Math.ceil(studentList.length / 10);
const pageNumber = 1;
const arrayOfLinks = document.querySelectorAll('div', 'li', 'a');




// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 students, the last page will only display four

const showPage = (list, pageNumber) => {
    let min = pageNumber * 10 - 10;
    let max = pageNumber * 10 - 1;
    for (let i = 0; i < list.length; i++) {
        if (i >= min && i <= max) {
            list[i].style.display = 'block';
        } else {
            list[i].style.display = 'none';
        }
    }
}

showPage(studentList, 1);
// Create and append the pagination links - Creating a function that can do this is a good approach

const appendPageLinks = (list) => {
    let div = document.createElement('div');
    div.className = 'pagination';
    for (let i = 0; i < page; i++) {
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.innerHTML = 'href', '#';
        ul.appendChild(li);
        li.appendChild(a);
    }

    const removeActive = document.querySelector('arrayOfLinks');
    pagination.addEventListener('click', (e) => {
        showPage(studentList, e.target.innerHTML);
        e.preventDefault();
        for (let i = 0; i < page; i++) {
            removeActive[i].classList.remove('active');
        }
    });

}



appendPageLinks(studentList);

// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here