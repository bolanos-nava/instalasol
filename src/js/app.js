function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const navbarHeader = document.getElementById("navbarHeader");
  const buttonsNavbarTogglers =
    document.getElementsByClassName("navibar__toggler");
  const togglerSidebarArrow = document.getElementById("togglerSidebarArrow");
  const navbarBackdrop = document.getElementById("navbarBackdrop");

  const toggleSidebar = () => {
    navbarBackdrop.classList.toggle("backdrop-show");
    sidebar.classList.toggle("sidebar-close");
    togglerSidebarArrow.classList.toggle("rotate-toggler-arrow");

    const { classList } = navbarHeader;
    const classListArray = Array.from(classList);
    const doesIncludeShow = classListArray.includes("show");
    const doesIncludeCollapse = classListArray.includes("collapse");
    if (doesIncludeShow) classList.remove("show");
    if (doesIncludeCollapse && !doesIncludeShow) classList.add("show");
  };

  for (const toggler of buttonsNavbarTogglers) {
    toggler.addEventListener("click", toggleSidebar);
  }
}

toggleSidebar();
