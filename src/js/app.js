function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const buttonSidebarToggler = document.getElementById("buttonSidebarToggler");
    const sidebarTogglerArrow = document.getElementById("sidebarTogglerArrow");

    buttonSidebarToggler.addEventListener("click", () => {
        sidebar.classList.toggle("sidebar-close");
        // for (const arrow of sidebarTogglerArrows) {
        //     arrow.classList.toggle("visually-hidden");
        // }
        sidebarTogglerArrow.classList.toggle("rotateTogglerArrow");
        // sidebarTogglerArrow.classList.replace("fa-arrow-left", "fa-arrow-right");
        // console.log({ classList: sidebarTogglerArrow.classList });

    })
}

toggleSidebar();

