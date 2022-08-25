const btnBerger=document.getElementById('berger');
const navigation=document.querySelector('nav');

btnBerger.addEventListener('click', function () {
    console.log('click');
    if (navigation.classList.contains('active')) {
        closeMenu();
    } else {
        navigation.classList.remove('disabled');
        navigation.classList.add('active');
        navigation.style.display='flex';

    }

});



const closeNavByLinkInit=() => {
    addEventCloseNav(getAllLinkNavigation());
}


/* GET ALL LINK NAVIGATION */
const getAllLinkNavigation=() => {
    const navigation=document.querySelector('nav');
    const links=navigation.querySelectorAll('a');
    return links;
}

/* ADD EVENT CLICK FOR CLOSE NAV */
const addEventCloseNav=(links) => {
    links.forEach(function (link) {
        link.addEventListener('click', function () {
            closeMenu();
        });
    });
}

/* CLOSE NAVIGATION */
const closeMenu=() => {
    const navigation=document.querySelector('nav');
    navigation.classList.remove('active');
    navigation.classList.add('disabled');
    setTimeout(function () {
        navigation.style.display='';
    }, 200);
}
