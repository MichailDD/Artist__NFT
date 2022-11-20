const adminNav = document.querySelector('.admin-nav');
if (adminNav) {
    const adminContainer = document.querySelector('.admin-container')
    adminNav.addEventListener('click', (e) => {
        let currentPage;
        if (e.target.classList.contains('admin-nav-js')) {
            currentPage = e.target.parentElement.getAttribute("href");
            for (let i = 0; i < adminContainer.children.length; i++) {
                adminContainer.children[i].style.display = 'none';
                adminContainer.children[currentPage].style.display = 'block';
                adminNav.children[i].firstChild.classList.remove('active');
                adminNav.children[currentPage].firstChild.classList.add('active');
            }
        }
    })
}

const adminMenuIcon = document.querySelector(".admin-menu-icon");
const modalMenuAdmin = document.querySelector(".modal-menu-admin");
const adminForOwner = document.querySelector(".admin-for-everyone")

if (adminMenuIcon) {
    adminMenuIcon.addEventListener('click', () => {
        modalMenuAdmin.classList.toggle('modal-menu-admin-open');
        if (modalMenuAdmin.classList.contains('modal-menu-admin-open')) {
            adminForOwner.classList.add('myClass-blur');
        }
        else {
            adminForOwner.classList.remove("myClass-blur");
        }
    })
}