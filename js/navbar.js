$(document).ready(function() {

    const navBarContents = {
        index: { 
            type:"page",
            link:"index.html",
            text:"About"
        },
        webDevProjects: {
            type:"page",
            link:"webProjects.html",
            text:"Web Dev"
        },
        gameDevProjects: {
            type:"page",
            link:"gameDevProjects.html",
            text:"Game Dev"
        },
        resume: {
            type:"page",
            link:"gameDevProjects.html",
            text:"Resume"
        },
        gitHub: {
            type:"icon",
            icon:"assets/icons/GitHub.png",
            link:"https://github.com/SCastanedaMunoz",
            text:"GitHub"
        },
        linkedIn: {
            type:"icon",
            icon:"assets/icons/LinkedIn.png",
            link:"https://www.linkedin.com/in/santiagocastanedamunoz",
            text:"LinkedIn"
        }
    }

    const navBarTitle = "SCastanedaMunoz";
    var navHolder = $("<nav>");
    var navWrapper = $("<div>");

    $(navWrapper).addClass("nav-wrapper");

    var brandLogo = $(`<a href="#!" class="brand-logo">${navBarTitle}</a>`);
    var sideNavTarget = $(`<a href="#" data-target="mobile-sidenav" class="sidenav-trigger" </a>`);
    var hamburgerIcon = $(`<i class="material-icons">menu</i>`);

    $(sideNavTarget).append(hamburgerIcon);

    var navBarContentsList = $(`<ul class="right hide-on-med-and-down"></ul>`);
    var sideBarContentsList = $(`<ul class="sidenav" id="mobile-sidenav"></ul>`);

    fillNavElement(navBarContentsList, "nav");
    fillNavElement(sideBarContentsList, "side");

    $(navWrapper).append(brandLogo, sideNavTarget, navBarContentsList);
    $(navHolder).append(navWrapper, sideBarContentsList);

    $("body").prepend(navHolder);

    function fillNavElement(toAppend, location) {
        var path = window.location.pathname;
        var currentPage = path.split("/").pop();
        $.each(navBarContents, function( key, value ) {
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
            }
            $(toAppend).append(contentItem);
        });
    }

    $('.sidenav').sidenav();
});