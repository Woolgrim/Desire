export const galleryTabs = () => {
    const tabBtn = document.querySelectorAll('.gallery__nav-item');
    const tabsItems = document.querySelectorAll('.gallery__body-section');

    tabBtn.forEach(function (item) {
        onTabClick(item);
    });

    function onTabClick(item) {
        item.onclick = () => {
            const tabId = item.getAttribute('data-gall-tab');
            const curentTabb = document.querySelector(tabId);

            if (!item.classList.contains('active')) {
                tabBtn.forEach(function (item) {
                    item.classList.remove('active');
                });

                tabsItems.forEach(function (item) {
                    item.classList.remove('active');
                });

                item.classList.add('active');
                curentTabb.classList.add('active');
            }
        }
    }

    document.querySelector('.gallery__nav-item').click();
}

galleryTabs();

export const gallNavMob = () => {
    const gallTitle = document.querySelector('.gallery__nav-title');
    const gallNav = document.querySelector('.gallery__nav');
    const body = document.querySelector('#body');
    const gallNavExit = document.querySelector('.gallery__nav-exit');

    gallTitle.onclick = () => {
        gallNav.classList.add('active');
        gallTitle.classList.add('active');
        body.classList.add('lok');
    }

    gallNavExit.onclick = function gallNavRemActive () {
        gallNav.classList.remove('active');
        gallTitle.classList.remove('active');
        body.classList.remove('lok');
    }  
}

gallNavMob();