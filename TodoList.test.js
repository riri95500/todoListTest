const TodoList = require('./TodoList')
const Item = require('./Item')

test('Erreur ajout item TodoList (Plus de 10 items)', () => {
    const todoList = new TodoList();
    const item1 = new Item("Lundi", "Promener le chien");
    const item2 = new Item("Mardi", "Acheter des fruits");
    const item3 = new Item("Mercredi", "Développer mon portfolio");
    const item4 = new Item("Jeudi", "Développer mon portfolio");
    const item5 = new Item("Vendredi", "Développer mon portfolio");
    const item6 = new Item("Samedi", "Développer mon portfolio");
    const item7 = new Item("Dimanche", "Développer mon portfolio");
    const item8 = new Item("Lundi pro", "Développer mon portfolio");
    const item9 = new Item("Mardi pro", "Développer mon portfolio");
    const item10 = new Item("Mercredi pro", "Développer mon portfolio");
    todoList.addItem(item1);
    todoList.addItem(item2);
    todoList.addItem(item3);
    todoList.addItem(item4);
    todoList.addItem(item5);
    todoList.addItem(item6);
    todoList.addItem(item7);
    todoList.addItem(item8);
    todoList.addItem(item9);
    // todoList.addItem(item3);
    expect(todoList.addItem(item10)).toBe(true);
});
