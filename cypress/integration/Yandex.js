describe('Тестирование главной Yandex', function () {
   it('Проверка, что при поиске котята в выдаче есть слова Картинки по запросу Котята', function () {
        cy.visit('https://yandex.ru');
        cy.get('#text').type('котята');
        cy.get('.search2__button > .button').click();
        cy.contains('Картинки по запросу «котята»');
    })
})