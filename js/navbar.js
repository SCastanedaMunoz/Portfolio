$(document).ready(function(){
    const navBarContents = {
        index : { 
            type:"page",
            link:"index.html",
            text:"About"
        },
        webDevProjects : {
            type:"page",
            link:"webProjects.html",
            text:"Web Dev"
        },
        gameDevProjects : {
            type:"page",
            link:"gameDevProjects.html",
            text:"Game Dev"
        },
        gitHub : {
            type:"icon",
            icon:"assets/icons/GitHub.png",
            link:"https://github.com/SCastanedaMunoz",
            text:"GitHub"
        },
        linkedIn : {
            type:"icon",
            icon:"assets/icons/LinkedIn.png",
            link:"https://www.linkedin.com/in/santiagocastanedamunoz",
            text:"LinkedIn"
        }
    }

    var navHolder = $("<nav>");
    var navWrapper = $("<div>");

    $(navWrapper).addClass("nav-wrapper");

    var brandLogo = $("<a>");
    $(brandLogo).attr("href", "#!");
    $(brandLogo).addClass("brand-logo");
    $(brandLogo).text("Santiago Castaneda Munoz");
    
    var sideNavTarget = $("<a>");
    $(sideNavTarget).attr("href", "#");
    $(sideNavTarget).attr("data-target", "mobile-sidenav");
    $(sideNavTarget).addClass("sidenav-trigger");

    var hamburgerIcon = $("<i>");
    $(hamburgerIcon).addClass("material-icons");
    $(hamburgerIcon).text("menu");

    $(sideNavTarget).append(hamburgerIcon);

    var navBarContentsList = $("<ul>");
    $(navBarContentsList).addClass("right hide-on-med-and-down");

    var sideBarContentsList = $("<ul>");
    $(sideBarContentsList).addClass("sidenav");
    $(sideBarContentsList).attr("id", "mobile-sidenav");

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
                    var link = $("<a>");
                    $(link).attr("href", value.link);
                    $(link).text(value.text);
                    if(value.link == currentPage)
                        $(contentItem).addClass("active");
                    $(contentItem).append(link);
                    break;
                case "icon":
                    var link = $("<a>");
                    $(link).attr("href", value.link);
                    $(link).attr("target", "_blank");
                    var icon = $("<img>");
                    $(icon).attr("src", value.icon);
                    $(icon).attr("alt", `${value.text} Social`);
                    $(icon).addClass(`social-icon-${location}`);
                    $(link).append(icon);
                    $(contentItem).append(link);
                    break;
            }
            $(toAppend).append(contentItem);
        });
    }

    $('.sidenav').sidenav();
});