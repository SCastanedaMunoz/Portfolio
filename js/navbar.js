$(document).ready(function() {
    const savedClicked = "clicked_dropdown";
    const navBarContents = [
        { 
            type:"page",
            link:"index.html",
            text:"About"
        },
        {
            type:"page",
            link:"gameDevProjects.html",
            text:"Resume"
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
                    path_screenshot: "",
                }, 
                {
                    title: "Weather Dashboard",
                    link_deploy: "https://scastanedamunoz.github.io/Weather-Dashboard/",
                    link_github: "https://github.com/SCastanedaMunoz/Weather-Dashboard",
                    path_screenshot: ""
                },
                {
                    title: "Work Day Scheduler",
                    link_deploy: "https://scastanedamunoz.github.io/Work-Day-Scheduler/",
                    link_github: "https://github.com/SCastanedaMunoz/Work-Day-Scheduler",
                    path_screenshot: ""
                },
                {
                    title: "Code Quiz",
                    link_deploy: "https://scastanedamunoz.github.io/Code-Quiz/",
                    link_github: "https://github.com/SCastanedaMunoz/Code-Quiz",
                    path_screenshot: ""
                },
                {
                    title: "Password Generator",
                    link_deploy: "https://scastanedamunoz.github.io/Password-Generator/",
                    link_github: "https://github.com/SCastanedaMunoz/Password-Generator",
                    path_screenshot: ""
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
                    var link = $(`<a href="${value.link}">${value.text}</a>`);
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
                        var liElement = $(`<li><a href="#!" class="dropdown-link" data-ss="${element.path_screenshot}" data-deploy="${element.link_deploy}" data-github="${element.link_github}" data-title="${element.title}">${element.title}</a></li>`);
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
            screenshot: $(this).data("ss")
        }

        localStorage.setItem(savedClicked, JSON.stringify(clicked));
        window.location.replace("webdev.html");
    });
});