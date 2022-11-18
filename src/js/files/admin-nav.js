const adminNav = document.querySelector('.admin-nav');
if (adminNav) {
    const adminContainer = document.querySelector('.admin-container')
    console.log(adminNav);
    adminNav.addEventListener('click', (e) => {
        let currentPage;
        if (e.target.classList.contains('admin-nav-js')) {
            currentPage = e.target.parentElement.getAttribute("href");
            for (let i = 0; i < adminContainer.children.length; i++) {
                adminContainer.children[i].style.display = 'none';
                adminContainer.children[currentPage].style.display = 'block'
            }
        }
    })
}