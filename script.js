document.addEventListener('DOMContentLoaded', () => {
    let menuButton = document.querySelector("#menu_button");
    let closeButton = document.querySelector("#close_button");
    let sidebar = document.querySelector("#sidebar");

    // Show the sidebar when the menu button is clicked
    menuButton.addEventListener("click", () => {
        sidebar.style.display = 'block';
    });

    // Hide the sidebar when the close button is clicked
    closeButton.addEventListener("click", () => {
        sidebar.style.display = 'none';
    });
});
