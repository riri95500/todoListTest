const User = require('./User');
const TodoList = require('./TodoList')
const Item = require('./Item')

test('User non validé (age inférieur à 13)', () => {
    const user = new User("riad.ahmedyahia@yahoo.fr", "Test", "Riad", "2021-06-30", "Password123");
    expect(user.isValid()).toBe(false);
});


test('User validé', () => {
    const user = new User("riad.ahmedyahia@yahoo.fr", "Test", "Riad", "2001-06-30", "Password123");
    expect(user.isValid()).toBe(true);
});


test('User non validé (nom non renseigné)', () => {
    const user = new User("riad.ahmedyahia@yahoo.fr", "", "Riad", "2001-06-30", "Password123");
    expect(user.isValid()).toBe(false);
});

test('User non validé (password mauvais format)', () => {
    const user = new User("riad.ahmedyahia@yahoo.fr", "Test", "Riad", "2001-06-30", "password123");
    expect(user.isValid()).toBe(false);
});

test('Echec création todo list (user non valide)', () => {
    const user = new User("riad.ahmedyahia@yahoo.fr", "Test", "Riad", "2001-06-30", "password123");
    expect(user.createToDoList()).toBe(false);
});

test('Echec création todo list (todolist existe déjà)', () => {
    const user = new User("riad.ahmedyahia@yahoo.fr", "Test", "Riad", "2001-06-30", "Password123");
    user.createToDoList();
    expect(user.createToDoList()).toBe(false);
});

test('Succès création todo list', () => {
    const user = new User("riad.ahmedyahia@yahoo.fr", "Test", "Riad", "2001-06-30", "Password123");
    expect(user.createToDoList()).toBe(true);
});
