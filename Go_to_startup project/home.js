let hamburger = document.getElementById("hamburger");
let right_navbar_list = document.getElementById("right_navbar_list");
let list1 = document.getElementById('list1');
let list2 = document.getElementById('list2');
let dropdown = document.getElementById("dropdown");
hamburger.addEventListener("click", function (){
    if (right_navbar_list.style.display == 'none') {
        right_navbar_list.style.display = 'block';
    }


    else {
        right_navbar_list.style.display = 'none';

    }
});
dropdown.addEventListener("click", function () {
    if (list2.style.display == 'none') {
        list2.style.display = 'block';
    }
    else {
        list2.style.display = 'none';
    }
});
