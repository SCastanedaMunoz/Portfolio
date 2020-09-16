$(document).ready(function() {
    const savedClicked = "clicked_dropdown";
    const navBarContents = [
        { 
            type:"page",
            link:"index.html",
            text:"About",
            target:"",
        },
        {
            type:"page",
            link:"https://drive.google.com/file/d/1DIu1QnKc5ktXcB2X-qkiC7vsH7hq-8le/view",
            text:"Resume",
            target:"_blank",
        },
        {
            type:"dropdown",
            link:"webDevDropdown",
            text:"Web Dev",
            drop_content : [
                {
                    title: "Falcon Finder",
                    link_deploy: "https://scastanedamunoz.github.io/Project-1/",
                    link_github: "https://github.com/SCastanedaMunoz/Project-1",
                    path_screenshot: "assets/images/web_projects/falcon_finder.png",
                    summary: "For this project, the initial idea was to create a restaurant finder app where we could easily filter out restaurants by area and user information. To achieve this end result, we utilized Google Maps and Zomato Rest API."
                }, 
                {
                    title: "Weather Dashboard",
                    link_deploy: "https://scastanedamunoz.github.io/Weather-Dashboard/",
                    link_github: "https://github.com/SCastanedaMunoz/Weather-Dashboard",
                    path_screenshot: "assets/images/web_projects/weather_dashboard.png",
                    summary: "For this project, I took the approach of building in HTML the minimally required elements neeeded to build the layout for the application. As such, I used Javascript and JQuery to dinamically fill up the layout with the corresponding content for each city and weather."
                },
                {
                    title: "Work Day Scheduler",
                    link_deploy: "https://scastanedamunoz.github.io/Work-Day-Scheduler/",
                    link_github: "https://github.com/SCastanedaMunoz/Work-Day-Scheduler",
                    path_screenshot: "assets/images/web_projects/work_day_scheduler.png",
                    summary: "For this project, I decided to write as little HTML elements as possible and do everything utilizing only JQuery, Javascript and the Moment.js library. This project main challenge wastaking into consideration that I needed to specifically try to utilize Moment.js as much as possible as my API for date and hour management."
                },
                {
                    title: "Code Quiz",
                    link_deploy: "https://scastanedamunoz.github.io/Code-Quiz/",
                    link_github: "https://github.com/SCastanedaMunoz/Code-Quiz",
                    path_screenshot: "assets/images/web_projects/code_quiz.png",
                    summary: "For this Code Quiz Game, I decided to use as little hard coded HTML elements as possible, and start only by having an empty bootstrap container where I would be able to add all content. My goal was to create the whole application in just 1 HTML file while using JQuery as much as possible to take full advantage of its capabilities. For this I brokew down in different states, Initial, Questioning, Submitting Score, and Leaderboard, which represent every single section the user can encounter in the app. Each state has its own function to reset the page to an empty state and create the corresponding elements for such app state. This also allowed me to have proper tracking when knowing which was the last user state in the app and have a proper app cycle."
                },
                {
                    title: "Password Generator",
                    link_deploy: "https://scastanedamunoz.github.io/Password-Generator/",
                    link_github: "https://github.com/SCastanedaMunoz/Password-Generator",
                    path_screenshot: "assets/images/web_projects/password_generator.png",
                    summary: "Password Generator utilizing basic understanding of Javascript and how to manage arrays and other data types as well as communicating data from Javascript into the HTML pages."
                },
            ]
        },
        // gameDevProjects: {
        //     type:"page",
        //     link:"gameDevProjects.html",
        //     text:"Game Dev"
        // },
        {
            type:"icon",
            icon:"assets/icons/GitHub.png",
            link:"https://github.com/SCastanedaMunoz",
            text:"GitHub"
        },
        {
            type:"icon",
            icon:"assets/icons/LinkedIn.png",
            link:"https://www.linkedin.com/in/santiagocastanedamunoz",
            text:"LinkedIn"
        }
    ]

    const navBarTitle = "SCastanedaMunoz";
    var navHolder = $("<nav>");
    var navWrapper = $("<div>");

    $(navWrapper).addClass("nav-wrapper");

    var brandLogo = $(`<a href="index.html" class="brand-logo">${navBarTitle}</a>`);
    var sideNavTarget = $(`<a href="#" data-target="mobile-sidenav" class="sidenav-trigger" </a>`);
    var hamburgerIcon = $(`<i class="material-icons">menu</i>`);

    $(sideNavTarget).append(hamburgerIcon);

    var navBarContentsList = $(`<ul class="right hide-on-med-and-down"></ul>`);
    var sideBarContentsList = $(`<ul class="sidenav" id="mobile-sidenav"></ul>`);

    fillNavElement(sideBarContentsList, "side");
    fillNavElement(navBarContentsList, "nav");

    $(navWrapper).append(brandLogo, sideNavTarget, navBarContentsList);
    $(navHolder).append(navWrapper, sideBarContentsList);

    $("body").prepend(navHolder);

    function fillNavElement(toAppend, location) {
        var path = window.location.pathname;
        var currentPage = path.split("/").pop();

        navBarContents.forEach(value => {
            var contentItem = $("<li>");
            switch(value.type) {
                case "page":
                    var link = $(`<a href="${value.link}" target="${value.target}">${value.text}</a>`);
                    if(value.link == currentPage)
                        $(contentItem).addClass("active");
                    $(contentItem).append(link);
                    break;
                case "icon":
                    var link = $(`<a href="${value.link}" target="_blank"><img src="${value.icon}" alt="${value.text} Social" class="social-icon-${location}"></a>`);
                    $(contentItem).append(link);
                    break;
                case "dropdown":
                    var link = $(`<a class="dropdown-trigger" href="#!" data-target="${value.link}-${location}"><i class="material-icons right">arrow_drop_down</i>${value.text}</a>`);

                    var dropDownStructure = $(`<ul id="${value.link}-${location}" class="dropdown-content"></ul>`);
                    value.drop_content.forEach(element => {
                        var liElement = $(`<li><a href="#!" class="dropdown-link" data-summary="${element.summary}" data-ss="${element.path_screenshot}" data-deploy="${element.link_deploy}" data-github="${element.link_github}" data-title="${element.title}">${element.title}</a></li>`);
                        $(dropDownStructure).append(liElement);
                    });
        
                    $("body").prepend(dropDownStructure);
                    $(contentItem).append(link);
                    break;
            }
            $(toAppend).append(contentItem);
        });
    }

    $('.sidenav').sidenav();
    $('.dropdown-trigger').dropdown({hover:false});
    $(".dropdown-link").on("click", function() {
        var clicked = {
            title: $(this).data("title"),
            link_deploy: $(this).data("deploy"),
            link_github: $(this).data("github"),
            screenshot: $(this).data("ss"),
            summary: $(this).data("summary")
        }

        localStorage.setItem(savedClicked, JSON.stringify(clicked));
        window.location.replace("webdev.html");
    });
});