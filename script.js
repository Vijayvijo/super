$(document).ready(function () {
  $(".counter").each(function () {
    var $this = $(this),
      countTo = parseInt($this.attr("data-count")); // Ensure it's an integer

    $({ countNum: 0 }).animate(
      { countNum: countTo },
      {
        duration: countTo < 1000 ? 1500 : 6000, // Set minimum duration for small numbers
        easing: "linear",
        step: function () {
          $this.text(commaSeparateNumber(Math.floor(this.countNum)));
        },
        complete: function () {
          $this.text(commaSeparateNumber(this.countNum));
        },
      }
    );
  });

  function commaSeparateNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
});


// function commaSeparateNumber(val) {
//   while (/(\d+)(\d{3})/.test(val.toString())) {
//     val = val.toString().replace(/(\d+)(\d{3})/, "$1" + "," + "$2");
//   }
//   return val;
// }

document.querySelectorAll('.list-group-item').forEach(item => {
  item.addEventListener('click', function() {
      document.querySelectorAll('.list-group-item').forEach(i => i.classList.remove('active'));
      this.classList.add('active');
      
      document.querySelectorAll('.content-section').forEach(section => {
          section.classList.remove('active');
      });
      
      document.getElementById(this.getAttribute('data-target')).classList.add('active');
  });
});





document.addEventListener("DOMContentLoaded", function () {
  let carousel = document.querySelector("#carouselExampleIndicators");

  document.querySelector(".carousel-control-prev").addEventListener("click", function () {
      new bootstrap.Carousel(carousel).prev();
  });

  document.querySelector(".carousel-control-next").addEventListener("click", function () {
      new bootstrap.Carousel(carousel).next();
  });
});
