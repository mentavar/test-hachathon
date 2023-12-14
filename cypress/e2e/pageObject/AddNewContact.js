class AddNewContact
{
    getName(){
       return cy.get('input[name="name"]')
    }

    getEmail(){
        return cy.get('input[name="email"]')
     }

     getPhone(){
        return cy.get('input[name="phone"]')
     }

     getSaveBtn(){
        return cy.get('.btn')
     }

     getNewContactTitle(){
        return cy.get('h3')
     }
    
     verifyEmailExists(){
        return cy.get('body').contains('div', 'Email already exists')
    }


}

export default AddNewContact