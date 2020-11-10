$(document).ready(function() {
    const savedClicked = "clicked_dropdown";
    var clicked = localStorage.getItem(savedClicked);

    if(!clicked) {
        window.location.replace("index.html");
    }

    var webProject = JSON.parse(clicked);

    $("#web-project").html(`
        <header><h2>${webProject.title}</h2></header>
        <div class="image-container"> 
            <img src="${webProject.screenshot}" alt="${webProject.title} Screenshot" class="responsive-img screenshot">
        </div>

        <p>${webProject.summary}</p>

        <div class="row button-row">
            <div class="col s6 see-more">
                <a href="${webProject.link_deploy}" target="_blank" class="proj-btn waves-effect waves-dark btn"><i class="material-icons right">web</i>See App!</a>
            </div>
            <div class="col s6 see-more">
                <a href="${webProject.link_github}" target="_blank" class="proj-btn waves-effect waves-dark btn"><i class="material-icons right">code</i>See Code!</a>
            </div>
        </div>
    `);
});