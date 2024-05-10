document.addEventListener("DOMContentLoaded", function() {
    const homeLinks = document.querySelectorAll('.home-links a');
    const allContainers = document.querySelectorAll('.home-img-container');
    const homeContainer = document.querySelector('.bg-home-app');

    console.log("links is --> ", homeLinks);
    homeLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            const targetContainer = document.getElementById(targetId);

            allContainers.forEach(container => {
                container.style.display = 'none';
            });

            if (targetContainer) {
                targetContainer.style.display = 'block';
            }

            const colors = ["#c5cea7", "#eaceba", "#f4b9af", "#c6d1a5", "#f4b8ae"];
            homeContainer.style.backgroundColor = colors[index];
            console.log("Colors is", colors[index]);
        });
    });

    const tvLinks = document.querySelectorAll('.tv-links a');
    const allTvContainers = document.querySelectorAll('.tv-img-container');
    const tvContainer = document.querySelector('.bg-tvs');
    
    tvLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            const targetContainer = document.getElementById(targetId);

            allTvContainers.forEach(container => {
                container.style.display = 'none';
            });

            if (targetContainer) {
                targetContainer.style.display = 'block';
            }

            const colors = ["#eaceba", "#c6d1a5", "#f4b9af", "#c5cea7", "#f4b8ae"];
            tvContainer.style.backgroundColor = colors[index];
            console.log("Colors is", colors[index]);

        });
    });


    const mobileLinks = document.querySelectorAll('.mobile-links a');
    const allMobileContainers = document.querySelectorAll('.mobile-img-container');
    const mobilesContainer = document.querySelector('.bg-mobiles');

    console.log("links is --> ", homeLinks);
    mobileLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            const targetContainer = document.getElementById(targetId);

            allMobileContainers.forEach(container => {
                container.style.display = 'none';
            });

            if (targetContainer) {
                targetContainer.style.display = 'block';
            }

            const colors = ["#c5cea7", "#eaceba", "#f4b9af", "#c6d1a5", "#f4b8ae"];
            mobilesContainer.style.backgroundColor = colors[index];
            console.log("Colors is", colors[index]);
        });
    });

});
