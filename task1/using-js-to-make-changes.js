// 1) Change the title of the page (in the HEAD) to "Task 1 by Josh Nicol"
// 2) Change the <h1> tag in the header to say "TASK 1"
// 3) Underneath the h1, change the text to say a description of you.
// 4) change the title of the list to be "List of things I like"
// 5) Write CSS (in the blank styles.css file) to change all the elements in the list to be your favourite colour
// 6) Write CSS (in the styles.css file) that changes the header to have background colour
document.title = "Task 1 by Josh Nicol";
document.querySelector("h1").innerHTML = "Task 1";
document.getElementById("intro").innerHTML = "30 years old, long brown hair, blue jeans, two hair ties on right wrist";
document.getElementById("list-of-things-i-like").firstElementChild.innerHTML = "List of things I like";
// class = "list-item"