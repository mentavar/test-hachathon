class HomePage
{
    getCucumberInput(){
       return cy.get('input[value="1"]').eq(1)
    }
    
}

export default HomePage