describe('Тестирование Staya', function () {
   it('Проверка авторизации по логину и паролю', function () {
        cy.visit('https://staya.dog');
        cy.get('.header-bottom__right--link').click();
        cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(1)').type('vir-mihail-fadjushin@qa.studio').click();
        cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(2)').type('123456789').click();
        cy.get('#__layout > div > main > div > div > div > section > div > form > button > span').click();
        cy.contains('Мои заказы');
        cy.get('button.profile__nav-link').click();
        cy.get('#__layout > div > div > section > div > div > div > button.box__button.box__button_ok.s-button.s-button_theme-dark > span').click();
       
    })

   it('Проверка авторизации по логину и неверному паролю', function () {
        cy.visit('https://staya.dog');
        cy.get('.header-bottom__right--link').click();
        cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(1)').type('vir-mihail-fadjushin@qa.studio').click();
        cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(2)').type('123456788').click();
        cy.get('#__layout > div > main > div > div > div > section > div > form > button > span').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
        
    })
   
})

