//Este archivo sera el que contenga nuestras pruebas
//Para poder inicar una prueba necesitamos darle un nombre
//en este caso describe para darle un titulo

/*  global cy  */

describe("Mi primera prueba con cypress", () => {
    //dentro del arrrow function se va escribir las pruebas que haremos
    it("prueba home", ()=>{
        //ver si el home funciona o no funciona
        cy.visit("https://react-projecyt.vercel.app/");

        cy.contains("Pokedex");
        cy.contains("Detalle del pokemon").click();
        cy.contains("Habilidades");
        cy.contains("Cerrar").click();
    });

    //vamos a crear para banderas
    it("pruebas para banderas", ()=>{
        cy.visit("https://react-projecyt.vercel.app/flags")
        //vamos a ver com escribir en un input
        cy.wait(5000).then(() => {
            cy.get("input:first").type("peru");
            cy.contains("Republic of Peru").click();
            cy.contains("Lima")
        })
    });

    //youtube > verificar si existe un titulo NAME
    it("prueba de youtbe", () => {
        cy.visit("https://react-projecyt.vercel.app/youtube")
        // if(cy.contains("NAME")){

        // }
        cy.contains("marvel1")
    })
    // it("prueba de login", () => {
    //     cy.visit("http://localhost:3000/login");
    //     // ahora vamos a ver de que otra podemos acceder a los inputs
    //     // usando el name del inputs podemos encontrar uno especifico y
    //     // poder escribir en el
    //     cy.get('[name="email"]').type("pepe@gmail.com");
    //     cy.get('[name="password"]').type("123456");
    //     cy.contains("Iniciar Session").click();
    //     cy.url().should("include", "/youtube/administrador");
    //     // primero deben abrir el modal y luego hacer que escriba en cada input
    //     // finalmente darle click al boton Crear
    //     cy.contains("Crear Pelicula").click();
    //     cy.get('[name="name"]').type("Hombre araña 2");
    //     cy.get('[name="director"]').type("Julio Araujo");
    //     cy.get('[name="gender"]').type("dc");
    //     cy.get('[name="video_link"]').type("www.google.com");
    //     cy.get('[name="wallpaper"]').type("www.google.com");
    //     cy.get(".btn-crear-movie").click();
    //     cy.contains("Hombre araña 2");
    //     // Eliminar la ultima pelicula que hemos agregado
    //     // recurden que estamos accediente al ultimo boton porque estamos usando .last()
    //     cy.get(".delete-button").last().click();
    //     cy.contains("OK").click();
    //   });
});



