const User = require('./User');
const TodoList = require('./TodoList')
const Item = require('./Item')

test('User non validé (age inférieur à 13)', () => {
    const user = new User("riad.ahmedyahia@yahoo.fr", "Test", "Riad", new Date("2021-06-30"), "Password123");
    expect(user.isValid()).toBe(false);
});


test('User validé', () => {
    const user = new User("riad.ahmedyahia@yahoo.fr", "Test", "Riad", new Date("2001-06-30"), "Password123");
    expect(user.isValid()).toBe(true);
});


test('User non validé (nom non renseigné)', () => {
    const user = new User("riad.ahmedyahia@yahoo.fr", "", "Riad", new Date("2001-06-30"), "Password123");
    expect(user.isValid()).toBe(false);
});

test('User non validé (password mauvais format)', () => {
    const user = new User("riad.ahmedyahia@yahoo.fr", "Test", "Riad", new Date("2001-06-30"), "Password123");
    expect(user.isValid()).toBe(false);
});

test('Echec création todo list (user non valid)', () => {
    const user = new User("riad.ahmedyahia@yahoo.fr", "Test", "Riad", new Date("2001-06-30"), "password123");
    expect(user.createToDoList()).toBe(false);
});

// test('Erreur TodoList (Plus de 10 items)', () => {
//     const user = new User("riad.ahmedyahia@yahoo.fr", "Test", "Riad", new Date("2001-06-30"), "Password123");
//     const todoList = new TodoList();
//     const item1 = new Item("Lundi", "Promener le chien");
//     const item2 = new Item("Mardi", "Acheter des fruits");
//     const item3 = new Item("Mercredi", "Développer mon portfolio");
//     todoList.addItem(item1);
//     todoList.addItem(item2);
//     todoList.addItem(item3);
//     expect(user.isValid()).toBe(false);
// });
