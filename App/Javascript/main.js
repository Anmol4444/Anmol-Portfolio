//--------TypeJS-----------------//
var typed = new Typed(".typing-2", {
  strings: [
    "A Web Designer",
    "A React-Native Developer",
    "A UI/UX Designer",
    "A VueJs Developer",
    "A Product Designer",
  ],
  typeSpeed: 70,
  backSpeed: 20,
  loop: true,
});

//---------------Hamburger-menu------------------//
function hamburgerOpen() {
  document.getElementById("mySidenav").style.width = "90%";
  // document.body.classList.toggle("noscroll");
  document.body.classList.toggle("sidenav-active");
  document.body.style.overflow = "hidden";
}

function hamburgerClose() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.overflow = "auto";
}

//-----------PaginationJs---------------//

const pageNumbers = document.querySelector(".pageNumbers");
const paginationList = document.getElementById("paginationList");
const listItems = paginationList.querySelectorAll("li");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const contentLimit = 3;
const pageCount = Math.ceil(listItems.length / contentLimit);
let currentPage = 1;

const displayPageNumbers = (index) => {
  const pageNumber = document.createElement("a");
  pageNumber.innerText = index;
  pageNumber.setAttribute("href", "#portfolio");
  nextButton.setAttribute("href", "#portfolio");

  pageNumber.setAttribute("index", index);
  pageNumbers.appendChild(pageNumber);
};

const getPageNumbers = () => {
  for (let i = 1; i <= pageCount; i++) {
    displayPageNumbers(i);
  }
};

const disableButton = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
};

const enableButton = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
};

const controlButtonsStatus = () => {
  if (currentPage == 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }
  if (pageCount == currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};

const handleActivePageNumber = () => {
  document.querySelectorAll("a").forEach((button) => {
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute("index"));
    if (pageIndex == currentPage) {
      button.classList.add("active");
    }
  });
};

const setCurrentPage = (pageNum) => {
  currentPage = pageNum;

  handleActivePageNumber();
  controlButtonsStatus();

  const prevRange = (pageNum - 1) * contentLimit;
  const currRange = pageNum * contentLimit;

  listItems.forEach((item, index) => {
    item.classList.add("hidden");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("hidden");
    }
  });
};

window.addEventListener("load", () => {
  getPageNumbers();
  setCurrentPage(1);

  prevButton.addEventListener("click", () => {
    setCurrentPage(currentPage - 1);
  });

  nextButton.addEventListener("click", () => {
    setCurrentPage(currentPage + 1);
  });

  document.querySelectorAll("a").forEach((button) => {
    const pageIndex = Number(button.getAttribute("index"));

    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }
  });
});

//-------navbar-scroll------//
$(window).scroll(function () {
  if ($(this).scrollTop() > 150) {
    $(".arrow").show();
    $(".navbar").addClass("fixed");
  } else {
    $(".arrow").hide();
    $(".navbar").removeClass("fixed");
  }
});

//---navbar-scroll-onto-top-----//

//----cursor-pointer------//
if ($(".mouse-cursor")) {
  const e = document.querySelector(".cursor-inner"),
    t = document.querySelector(".cursor-outer");
  let n,
    i = 0,
    o = !1;
  (window.onmousemove = function (s) {
    o ||
      (t.style.transform =
        "translate(" + s.clientX + "px, " + s.clientY + "px)"),
      (e.style.transform =
        "translate(" + s.clientX + "px, " + s.clientY + "px)"),
      (n = s.clientY),
      (i = s.clientX);
  }),
    $("body").on(
      "mouseenter",
      "a,.know_tm_topbar .trigger, .cursor-pointer",
      function () {
        e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
      }
    ),
    $("body").on(
      "mouseleave",
      "a,.know_tm_topbar .trigger, .cursor-pointer",
      function () {
        ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
          (e.classList.remove("cursor-hover"),
          t.classList.remove("cursor-hover"));
      }
    ),
    (e.style.visibility = "visible"),
    (t.style.visibility = "visible");
}

//-----counter-Js----//
var a = 0;
$(window).scroll(function () {
  var oTop = $(".counter").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".counter-value").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 2000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          },
        }
      );
    });
    a = 1;
  }
});

//-photograph-modal----//

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("gallery__img")) {
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    const myModal = new bootstrap.Modal(
      document.getElementById("gallery-modal")
    );
    myModal.show();
  }
});

//--------pre-loader-------//

window.onload = function () {
  setTimeout(function () {
    var loader = document.querySelector(".preloader-container");
    loader.classList.add("active_new");
    //  $('.preloader').addClass('active');
    // Display your page content after preloader animation completes
    // document.body.style.overflow = 'auto'; // Restore scrolling
  }, 4000); // Adjust the duration as needed

  // Apply animations to each span element with a delay
  const spans = document.querySelectorAll(".preloader-text span");
  spans.forEach((span, index) => {
    setTimeout(() => {
      span.style.opacity = "1";
      span.style.animation = " expandWidth 10s forwards, fadeOut 5s forwards"; // Add fade-out animation
    }, index * 200); // Adjust the delay between each letter's animation
  });
};

//----fade-anmiations----//
AOS.init();
