const tabs = [
    {
        tabImg: "./images/illustration-features-tab-1.svg",
        tabHeader: "Bookmark in one click",
        tabText: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
    },
    {
        tabImg: "./images/illustration-features-tab-2.svg",
        tabHeader: "Intelligent search",
        tabText: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
    },
    {
        tabImg: "./images/illustration-features-tab-3.svg",
        tabHeader: "Share your bookmarks",
        tabText: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
    }
];

const scroller_header = document.querySelector(".scroller-header");
const tabs_body = document.querySelector(".tabs-body");
const all_Tabs_elements = document.querySelectorAll(".tab");
const all_questions = document.querySelectorAll(".question");
const email_input = document.querySelector(".email-input");

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

/*This function change the tab*/
const changeTab = (tab_index) => {
    let active_tab = document.querySelector(".active");
    active_tab.classList.remove("active");
    all_Tabs_elements[tab_index].classList.add("active");
    tabs_body.innerHTML = '<div class="body-l"><img src=' + tabs[tab_index].tabImg + ' alt="illustration1" class="illustration"><div class="bubble"></div></div><div class="body-r"><h1 class="heading">' + tabs[tab_index].tabHeader + '</h1><p class="paragraph">' + tabs[tab_index].tabText + '</p><button class="btn btn-blue more-info">More Info</button></div>';
};

const submitEmail = () => {
    console.log(email_input.value);
    if(!validateEmail(email_input.value))
        email_input.parentNode.classList.add("invalid-email");
    else
        email_input.parentNode.classList.remove("invalid-email");
};

all_questions.forEach(question => {
    question.addEventListener("click", () => {question.classList.toggle("open-question")});
});

