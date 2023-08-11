function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const toggleSidebarButton = document.getElementById("hamburger-menu-button");

    toggleSidebarButton.addEventListener("click", () => {
        sidebar.classList.toggle("sidebar-close");
    })
}

toggleSidebar();

