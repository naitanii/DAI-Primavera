Natalia Fernández Méndez 
SessionStorage 

La propiedad de Session Storage y Local Storage son similares, la única diferencia es que la información almacenada en Local Storage no tiene tiempo de expiración, y en Session Storage es eliminada al finalizar la sesión de la página (cuando el navegador se mantiene abierto).

//Sintaxtis para guardar información y recuperarla en JSON
sessionStorage.setItem("key","value");

//Obtiene la información almacenada desde SessionStorage 
ver data=sessionStorage.getItem("key");

//Para acceder al objeto Storage de la sesión actual del dominio y añadir un elemento utilizando Storage Item();
sessionStorage.setItem("myCat","Tom");

En conclusión, Session Storage solo asegura que la información este disponible en la duración de la sesión del browser, y borra la información cuando la ventana se cierra o se borra, sin embargo, sobrevive el refresh de las páginas.

Mientras que se usa Local Storage si se necesita que la información sobreviva más tiempo.