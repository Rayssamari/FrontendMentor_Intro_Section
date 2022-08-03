//IIFE - Immediately invoked function Expression

(() => {
    const openNavMenu = document.querySelector('.open-nav-menu');
    const navMenu = document.querySelector('.nav-menu');
    const closeNavMenu = document.querySelector('.close-nav-menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const mediaSize = 830;

    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav)
    menuOverlay.addEventListener("click",toggleNav);

    function toggleNav(){
        navMenu.classList.toggle("open");
        menuOverlay.classList.toggle("active");
        document.body.classList.toggle('hidden-scrolling');
    }

    navMenu.addEventListener("click", (event) =>{
        if(event.target.hasAttribute("data-toggle") && window.innerWidth <= mediaSize){
            event.preventDefault();
            const menuItemHasChildren = event.target.parentElement;
            if (menuItemHasChildren.classList.contains("active")){
                collapseSubMenu();
            } else {
                if(navMenu.querySelector('.menu-item-has-children.active')){
                    collapseSubMenu();
                }
                menuItemHasChildren.classList.add("active");
                const submenu = menuItemHasChildren.querySelector('.sub-menu');
                submenu.style.maxHeight = submenu.scrollHeight + "px";
            }
        }
    });

    function collapseSubMenu(){
        navMenu.querySelector('.menu-item-has-children.active .sub-menu').removeAttribute("style");
        navMenu.querySelector('.menu-item-has-children.active').classList.remove("active");

    }
})();