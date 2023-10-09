function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const buttonSidebarToggler = document.getElementById("buttonSidebarToggler");
    const sidebarTogglerArrow = document.getElementById("sidebarTogglerArrow");
    const sidebarBackdrop = document.getElementById("sidebarBackdrop");

    buttonSidebarToggler.addEventListener("click", () => {
        sidebarBackdrop.classList.toggle("backdrop");
        sidebar.classList.toggle("sidebar-close");
        sidebarTogglerArrow.classList.toggle("rotateTogglerArrow");
    })
}

toggleSidebar();

