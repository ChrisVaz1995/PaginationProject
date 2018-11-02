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




// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 students, the last page will only display four

const showPage = (list, page) => {
    let min = pageNumber * 11 - 10;
    let max = pageNumber * 10;
    for (let i = 0; i < list.length; i++) {
        if (i >= min && i <= max) {
            list[i].style.display = 'block';
        } else {
            list[i].style.display = 'none';
        }
    }
}

showPage(studentList, page);
// Create and append the pagination links - Creating a function that can do this is a good approach

const appendPageLinks = () => {
    let divide = Math.ceil(studentList.length / 10);
    let div = document.createElement('div');
    div.className = 'pagination';
    for (let i = 0; i < page; i++) {
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.innerHTML = 'href', '#';
        ul.appendChild(div);
        ul.appendChild(li);
        li.appendChild(a);
    }
}




pagination.addEventListener('click', (e) => {
    for (let i = 0; i < divide; i++) {
        let active = document.querySelector('active');
        active[i].classList.remove('active');
        if (document.querySelector('.pagination') !== null) {
            let removePag = document.querySelector('.pagination');
            let div = document.querySelector('.pagination');
            removePag.removeChild(div);
        }
    }
    if (e.target.tagName === 'A') {
        showPage(studentList, 1);
    }
});

appendPageLinks(studentList);
showPage(studentList, 1);

// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here