function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const buttonsNavbarToggler = document.getElementsByClassName("navibar__toggler");
    const sidebarTogglerArrow = document.getElementById("sidebarTogglerArrow");
    const navbarBackdrop = document.getElementById("navbarBackdrop");

    const toggleBackdrop = () => navbarBackdrop.classList.toggle("backdrop-show");
    const toggleSidebar = () => {
        toggleBackdrop();
        sidebar.classList.toggle("sidebar-close");
        sidebarTogglerArrow.classList.toggle("rotate-toggler-arrow");
    }
    const toggleHeaderNavbar = toggleBackdrop;

    for (const buttonToggler of buttonsNavbarToggler) {
        switch (buttonToggler.id) {
            case "buttonSidebarToggler":
                buttonToggler.addEventListener("click", toggleSidebar);
                break;
            case "buttonHeaderNavbarToggler":
                buttonToggler.addEventListener("click", toggleSidebar);
                break;
        }
    }
}

toggleSidebar();

