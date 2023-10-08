function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const buttonSidebarToggler = document.getElementById("buttonSidebarToggler");
    const sidebarTogglerArrow = document.getElementById("sidebarTogglerArrow");

    buttonSidebarToggler.addEventListener("click", () => {
        sidebar.classList.toggle("sidebar-close");
        sidebarTogglerArrow.classList.toggle("rotateTogglerArrow");
    })
}

toggleSidebar();

