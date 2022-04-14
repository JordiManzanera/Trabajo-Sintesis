var menu_icon = document.getElementById('menu-icon');

console.log(menu_icon);

menu_icon.addEventListener("click", toogleMenu);

function toogleMenu() {
  var menu_ul = document.getElementById('menu-ul')


  if (document.getElementById('home-li').classList.contains('show')) {
  menu_ul.querySelectorAll( 'li' ).forEach( el => el.classList.remove( 'show' ));
  } else {

  menu_ul.querySelectorAll( 'li' ).forEach( el => el.classList.add( 'show' ));

  }
}
