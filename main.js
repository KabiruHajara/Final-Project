document.getElementById("menuButton").addEventListener("click", function () {
  location.href = "./our_menu.html";
});

document.getElementById("reservePage").addEventListener("click", function () {
  location.href = "./reserva.html";
});

document.getElementById("blogNext").addEventListener("click", function () {
  location.href = "./Blog_single.html";
});

document.getElementById("homePage").addEventListener("click", function () {
  location.href = "./homepage.html";
});

// select all element with the same ID
// const buttons = document.querySelectorAll('[menuButton]');

// buttons.forEach(button => {
//   const page = button.dataset.link;
//     location.href = "./our_menu.html";
// })

// const buttons = document.querySelectorAll('menubutton');
// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     console.log('Button clicked!');
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.menubutton').forEach(button => {
    button.addEventListener('click', () => {
      console.log('Button clicked!');
    });
  });
});
