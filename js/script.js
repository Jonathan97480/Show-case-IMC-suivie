document.addEventListener('DOMContentLoaded', function () {
    const btnBerger=document.getElementById('berger');
    const navigation=document.querySelector('nav');

    btnBerger.addEventListener('click', function () {
        console.log('click');
        if (navigation.classList.contains('active')) {
            navigation.classList.remove('active');
            navigation.classList.add('disabled');
            setTimeout(function () {
                navigation.style.display='';
            }, 200);
        } else {
            navigation.classList.remove('disabled');
            navigation.classList.add('active');
            navigation.style.display='flex';

        }

    });

    const body=document.querySelector('body');

    const toggleTheme=document.getElementById('toggle-theme');



    const defaultThemeUser=window.matchMedia('(prefers-color-scheme: dark)');


    let newColorScheme='light';

    newColorScheme=defaultThemeUser.matches? "dark":"light";
    body.className=newColorScheme;

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        newColorScheme=e.matches? "dark":"light";

        body.className=newColorScheme;
    });




    if (newColorScheme==='dark') {
        toggleTheme.className='fa-solid fa-toggle-on';

    }

    toggleTheme.addEventListener('click', () => {

        if (newColorScheme==="dark") {
            newColorScheme='light';
            toggleTheme.className='fa-solid fa-toggle-off';
        } else {
            newColorScheme='dark';
            toggleTheme.className='fa-solid fa-toggle-on';
        }
        body.className=newColorScheme;

    })

})
