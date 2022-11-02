export const getItem = () => {
    const galleryBodySection = document.getElementsByClassName('gallery__body-section');
    const colectionNav = document.getElementsByClassName('gallery__nav-item');

    // start active element
    colectionNav[0].classList.add('active');
    galleryBodySection[0].classList.add('active');

    window.onload = function () {
        document.addEventListener('click', documentActions);

        function documentActions(a) {
            const targetElement = a.target;

            if (targetElement.classList.contains('gallery__nav-item')) {
                removeActive();
                targetElement.classList.add('active');
                addActeveSection(targetElement);
            }
        }
    }

    function removeActive() {
        for (let item of colectionNav) {
            item.classList.remove('active');
        }
    }

    function addActeveSection(targetElement) {
        if (targetElement.classList.contains('-bedroom')) {
            for (let item of galleryBodySection) {
                (item.classList.contains('-bedroom')) ? item.classList.add('active') : item.classList.remove('active');
            }
        } else if (targetElement.classList.contains('-living')) {
            for (let item of galleryBodySection) {
                (item.classList.contains('-living')) ? item.classList.add('active') : item.classList.remove('active');
            }
        } else if (targetElement.classList.contains('-bedroom')) {
            for (let item of galleryBodySection) {
                (item.classList.contains('-office')) ? item.classList.add('active') : item.classList.remove('active');
            }
        } else if (targetElement.classList.contains('-dining')) {
            for (let item of galleryBodySection) {
                (item.classList.contains('-dining')) ? item.classList.add('active') : item.classList.remove('active');
            }
        } else if (targetElement.classList.contains('-chair')) {
            for (let item of galleryBodySection) {
                (item.classList.contains('-chair')) ? item.classList.add('active') : item.classList.remove('active');
            }
        }
    }
}

getItem();