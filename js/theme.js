/* THEME MANAGER */
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