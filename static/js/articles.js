function showBlogMenu() {
  document.getElementById('blogDropdown').classList.toggle('show');
}

document.getElementById('blogMenu').addEventListener('click', showBlogMenu);

// Closes menu when clicking anywhere on the screen
window.onclick = function (event) {
  if (!event.target.matches('.blogMenu')) {
    const dropdowns = document.getElementById('blogDropdown');
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
