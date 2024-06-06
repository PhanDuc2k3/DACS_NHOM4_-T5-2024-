function selectTab(index) {
    var tabs = document.querySelectorAll('.link_content_header');
    tabs.forEach(function(tab, i) {
        if (i === index) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

function changeImage(mainImageId, imageSrc) {
    document.getElementById(mainImageId).src = imageSrc;
}

function resetImage(mainImageId, originalSrc) {
    document.getElementById(mainImageId).src = originalSrc;
}