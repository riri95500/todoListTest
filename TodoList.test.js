const TodoList = require('./TodoList')
const Item = require('./Item')

test('Erreur ajout item TodoList (Plus de 10 items)', () => {
    const todoList = new TodoList();
    const item1 = new Item("Lundi", "Promener le chien");
    expect(todoList.addItem(item1)).toBe(true);
});

test('Erreur ajout item TodoList (Plus de 10 items)', () => {
    const todoList = new TodoList();
    const item1 = new Item("Lundi", "Promener le chien");
    const item2 = new Item("Mardi", "Acheter des fruits");
    todoList.addItem(item1);
    todoList.addItem(item2);
    expect(todoList.addItem(item2)).toBe(false);
});
