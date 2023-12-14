class ListContacts
{
    getNewContactUrl(){
       return cy.get("#newContact")
    }

    GetContactListTitle(){
        return cy.get("h3")
    }

    VerifyEmailExists(email){
        return cy.get('table').contains('td', email)
    }

    
    
}

export default ListContacts