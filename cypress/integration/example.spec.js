//Este archivo sera el que contenga nuestras pruebas
//Para poder inicar una prueba necesitamos darle un nombre
//en este caso describe para darle un titulo

/*  global cy  */

describe("Mi primera prueba con cypress", () => {
    //dentro del arrrow function se va escribir las pruebas que haremos
    it("prueba home", ()=>{
        //ver si el home funciona o no funciona
        cy.visit("http://localhost:3000/");

        cy.contains("Pokedex");
        cy.contains("Detalle del pokemon").click();
        cy.contains("Habilidades");
        cy.contains("Cerrar").click();
    });

    //vamos a crear para banderas
    it("pruebas para banderas", ()=>{
        cy.visit("http://localhost:3000/flags")
        //vamos a ver com escribir en un input
        cy.wait(5000).then(() => {
            cy.get("input:first").type("peru");
            cy.contains("Republic of Peru").click();
            cy.contains("Lima")
        })
    });

    //youtube > verificar si existe un titulo NAME
    it("prueba de banderas", () => {
        cy.visit("http://localhost:3000/youtube")
        // if(cy.contains("NAME")){

        // }
        cy.contains("marvel1")
    })
});



