// const formElement = document.getElementById("form");

// if (formElement) {
//   formElement.addEventListener("submit", function (e) {
//     const form = e.target;
//     const data = new FormData(form);
//     const action = form.action;

//     const xhr = new XMLHttpRequest();
//     xhr.open("POST", action, true);

//     xhr.onload = function () {
//       if (xhr.status === 200) {
//         try {
//           const result = JSON.parse(xhr.responseText);
//           if (result.result === "Success") {
//             const currentPath = window.location.pathname;
//             if (currentPath === "/" || currentPath === "/index.html") {
//               window.location.href = "https://prt.mn/TEY37tjI2";
//             } else if (currentPath === "/tai_chi.html") {
//               window.location.href = "https://prt.mn/DC82FfqAwSt";
//             }
//           } else {
//             alert("Error sending data.");
//           }
//         } catch (err) {
//           console.error("Unable to make out the answer:", err);
//         }
//       } else {
//         console.error("HTTP Error:", xhr.status);
//       }
//     };

//     xhr.onerror = function () {
//       console.error("Error while requesting");
//     };

//     xhr.send(data);
//   });
// }

const burger = document.querySelector(".burger");
const navMob = document.querySelector(".nav_mob");

if (burger && navMob) {
  burger.addEventListener("click", () => {
    navMob.classList.toggle("active");
    burger.classList.toggle("active");
  });
}

document.querySelectorAll(".nav_mob a").forEach((link) => {
  link.addEventListener("click", () => {
    navMob.classList.remove("active");
    burger.classList.remove("active");
  });
});

// Перехват форми на сповіщення

const formInfo = document.getElementById("formInfo");

if (formInfo) {
  formInfo.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(formInfo);

    try {
      await fetch(formInfo.action, {
        method: "POST",
        body: formData,
      });

      alert("Дякуємо за реєстрацію! Ми напишемо вам у найближчий час.");
      formInfo.reset();
    } catch (error) {
      alert("Сталася помилка. Спробуйте ще раз.");
    }
  });
}

const form = document.getElementById("form");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      console.log("Server response:", result);

      if (result.result === "Success") {
        // редирект на сторінку оплати
        window.location.href = "https://prt.mn/TEY37tjI2";
      } else {
        alert("Сталася помилка при відправці форми");
      }
    } catch (err) {
      console.error("Помилка при відправці:", err);
      alert("Помилка при відправці форми. Спробуйте ще раз.");
    }
  });
}

const form2 = document.getElementById("form2");

if (form2) {
  form2.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form2);

    try {
      const res = await fetch(form2.action, {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      console.log("Server response:", result);

      if (result.result === "Success") {
        // редирект на сторінку оплати
        window.location.href = "https://prt.mn/DC82FfqAwSt";
      } else {
        alert("Сталася помилка при відправці форми");
      }
    } catch (err) {
      console.error("Помилка при відправці:", err);
      alert("Помилка при відправці форми. Спробуйте ще раз.");
    }
  });
}

$(".buy_course_btn").on("click", function (e) {
  e.preventDefault();

  const target = $($(this).attr("href"));
  if (target.length) {
    const offset = $(window).height() / 2 - target.outerHeight() / 2;
    const scrollToPosition = target.offset().top - offset;

    $("html, body").animate(
      {
        scrollTop: scrollToPosition,
      },
      800
    );
  }
});

//show course block
// $("#btn_course").on("click", function () {
//   $(".drop_list").fadeToggle("fast");
// });

// $(window).on("pageshow", function (event) {
//   $(".drop_list").hide();
// });

$(".select_course .btn_cours").on("click", function () {
  let dropList = $(this).siblings(".drop_list");

  // закрыть другие
  $(".drop_list").not(dropList).fadeOut("fast").removeClass("flex");

  // открыть текущее
  if (dropList.is(":visible")) {
    dropList.fadeOut("fast").removeClass("flex");
  } else {
    dropList.addClass("flex").hide().fadeIn("fast");
  }
});

$("#offerta").on("click", function () {
  $("#offerta_visib").fadeIn("fast");
  $(".overlay").fadeIn("fast");
});
$(".overlay").on("click", function () {
  $("#offerta_visib").fadeOut("fast");
  $(".overlay").fadeOut("fast");
});
$("#close_modal_policy").on("click", function () {
  $("#offerta_visib").fadeOut("fast");
  $(".overlay").fadeOut("fast");
});
$("#close_modal_policy2").on("click", function () {
  $("#offerta_visib").fadeOut("fast");
  $(".overlay").fadeOut("fast");
});

$("#polyci").on("click", function () {
  $("#visib_policy_two").fadeIn("fast");
  $("#overlay_two").fadeIn("fast");
});
$("#overlay_two").on("click", function () {
  $("#visib_policy_two").fadeOut("fast");
  $("#overlay_two").fadeOut("fast");
});
$(".close_modal_policy").on("click", function () {
  $("#visib_policy_two").fadeOut("fast");
  $("#overlay_two").fadeOut("fast");
});
$(".close_modal_policy2").on("click", function () {
  $("#visib_policy_two").fadeOut("fast");
  $("#overlay_two").fadeOut("fast");
});

// Слайдер на відгуки
const slider = document.querySelector(".wrapp_feedback_item");

if (slider) {
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });
}

// Заборона на копіювання тексту в відгуках
if (slider) {
  slider.addEventListener("copy", (e) => {
    e.preventDefault();
  });
}

// Анімований список
// let consumerList = document.querySelector(".consumer_list");
const consumerList = document.querySelectorAll(".consumer_list");
let blockYinTop = document.querySelectorAll(".block_yin_top");
let blockYin = document.querySelectorAll(".second_list");
let aboutBtn = document.querySelectorAll(".about_btn");
let resultBtn = document.querySelectorAll(".result_btn");
let feedbackList = document.querySelector(".wrapp_feedback_items");

function isInViewport(element) {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  const visibleHeight =
    Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);

  if (windowWidth >= 1280) {
    return visibleHeight >= 100;
  } else {
    return visibleHeight >= 50;
  }
}

function handleFadeIn(element, extraElements = []) {
  if (isInViewport(element)) {
    element.classList.add("anim-fade-in");
    extraElements.forEach((el) => el.classList.add("btn-anim"));
  }
}

if (consumerList) {
  // handleFadeIn(consumerList);
  // window.addEventListener("scroll", () => handleFadeIn(consumerList));
  consumerList.forEach((list) => {
    handleFadeIn(list);
    window.addEventListener("scroll", () => handleFadeIn(list));
  });
}

if (feedbackList) {
  handleFadeIn(feedbackList);
  window.addEventListener("scroll", () => handleFadeIn(feedbackList));
}

blockYin.forEach((blockYinItem) => {
  handleFadeIn(blockYinItem, resultBtn);
});
window.addEventListener("scroll", () => {
  blockYin.forEach((blockYinItem) => {
    handleFadeIn(blockYinItem, resultBtn);
  });
});

blockYinTop.forEach((blockYinTopItem) => {
  handleFadeIn(blockYinTopItem, aboutBtn);
});
window.addEventListener("scroll", () => {
  blockYinTop.forEach((blockYinTopItem) => {
    handleFadeIn(blockYinTopItem, aboutBtn);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".tai_info_time li");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          items.forEach((item, index) => {
            if (!item.classList.contains("show")) {
              setTimeout(() => {
                item.classList.add("show");
              }, index * 500);
            }
          });
          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  items.forEach((item) => observer.observe(item));
});

// Відкладене завантаження відео для ортимізації

document.querySelectorAll(".lazy-video").forEach((video) => {
  video.addEventListener("click", () => {
    const videoId = video.dataset.videoId;
    const iframe = document.createElement("iframe");
    iframe.setAttribute(
      "src",
      `https://www.youtube.com/embed/${videoId}?autoplay=1`
    );
    iframe.setAttribute("allowfullscreen", "");
    iframe.className = "video_placeholder video_iframe";
    iframe.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    );
    video.innerHTML = "";
    video.appendChild(iframe);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".psycholog_contact");
  const listItems = document.querySelectorAll(".psychology_list li");
  const button = document.querySelector(".telegram_btn");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          listItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("show");
            }, index * 600);
          });
          setTimeout(() => {
            button.classList.add("show");
          }, listItems.length * 600 + 400);

          observer.unobserve(section);
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(section);
});

const btnCourse = document.getElementById("btn_course");

function handleKeydown(event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    btnCourse.click();
    btnCourse.removeEventListener("keydown", handleKeydown);
  }
}

if (btnCourse) {
  btnCourse.addEventListener("keydown", handleKeydown);
}

// Плавне переміщення за посиланням по сторінці
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    this.blur();
  });
});
