
  /* Modo Oscuro */
    const boton = document.querySelector('#boton');
    const configUser = window.matchMedia('(prefers-color-scheme: dark)');
    /*  const localConfig = localStorage.getItem('tema');  */

    /*  if (localConfig === 'dark') {
        document.body.classList.toggle('dark-theme')
    } else if (localConfig === 'light') {
        document.body.classList.toggle('light-theme')
    } */
    
    boton.addEventListener('click', () => {
        let colorTema;
        if (configUser.matches) {
            // Entramos con modo oscuro
            document.body.classList.toggle('light-theme')
            /*  colorTema = document.body.classList.contains('light-theme') ? 'light' : 'dark' */

        } else {
            document.body.classList.toggle('dark-theme')
            /*  colorTema = document.body.classList.contains('dark-theme') ? 'dark' : 'light' */
        }
        localStorage.setItem('tema', colorTema)
    })
 



    function btn_access() {
      var x = document.getElementById("access_fonts_");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }

    var fontSize = 1; 
    function zoomIn() {
        fontSize += 0.05; 
        const x = document.querySelectorAll("p");   
        
        for (var i = 0; i < x.length; i++) {
          x[i].style.fontSize = fontSize + "em";
          }

        document.body.style.fontSize = fontSize + "em"; 
            
    }

    function zoomOut() {
        fontSize -= 0.05;
        document.body.style.fontSize = fontSize + "em"; 

        const x = document.querySelectorAll("p");  
        for (var i = 0; i < x.length; i++) {
          x[i].style.fontSize = fontSize + "em";
          }

        document.body.style.fontSize = fontSize + "em"; 


    } 
      function reset() { 
        document.body.style.fontSize = "16px"; 
        const x = document.querySelectorAll("p");  

          for (var i = 0; i < x.length; i++) {
          x[i].style.fontSize="16px";
          } 
    } 
        