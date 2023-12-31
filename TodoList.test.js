const TodoList = require('./TodoList')
const Item = require('./Item')
const User = require("./User");
const EmailService = require("./EmailService");
jest.useFakeTimers();

describe('Tests pour la classe TodoList', () => {

    test('Erreur utilisateur non valide', () => {
        const user = new User("r.benchouche@test.com", "Test", "Riad", "2001-06-30", "Password");
        emailService = new EmailService();
        const todoList = new TodoList(user, emailService);
        expect(todoList.addItem(new Item("Lundi", "Promener le chien"))).toBe(false);
    });
    let user, todoList, emailService;
    beforeEach(() => {
        user = new User("r.benchouche@test.com", "Test", "Riad", "2001-06-30", "Password123");
        emailService = new EmailService();
        todoList = new TodoList(user, emailService);
    });

    test('Success ajout item TodoList', () => {
        const item1 = new Item("Lundi", "Promener le chien");
        expect(todoList.addItem(item1)).toBe(true);
    });

    test('Erreur ajout item TodoList (Plus de 10 items)', () => {
        todoList.sender.sendEmail = jest.fn(
            (user, content) => {
                console.log("Email sent to " + user.email + " with content : " + content);
            }
        );
        for (let i = 0; i < 10; i++) {
            jest.advanceTimersByTime(1000 * 60 * 30);
            todoList.addItem(new Item("Jour " + i, "Description " + i));
        }

        jest.advanceTimersByTime(1000 * 60 * 30);
        const item = new Item("Jour 10", "Description 10");
        expect(todoList.addItem(item)).toBe(false);
    });

    test('Erreur ajout item TodoList (Moins de 30 minutes entre deux items)', () => {
        const item1 = new Item("Lundi", "Promener le chien");
        const item2 = new Item("Mardi", "Acheter des fruits");
        todoList.addItem(item1);
        expect(todoList.addItem(item2)).toBe(false);
    });

    test('Erreur ajout item TodoList (Moins de 30 minutes entre deux items - Cas réussi)', () => {
        const item1 = new Item("Lundi", "Promener le chien");
        jest.advanceTimersByTime(1000 * 60 * 30);
        const item2 = new Item("Mardi", "Acheter des fruits");
        todoList.addItem(item1);
        expect(todoList.addItem(item2)).toBe(true);
    });

    test('Erreur ajout item TodoList (Nom vide)', () => {
        const item1 = new Item("", "Promener le chien");
        expect(todoList.addItem(item1)).toBe(false);
    });

    test('Erreur ajout item TodoList (Description vide)', () => {
        const item1 = new Item("Lundi", "");
        expect(todoList.addItem(item1)).toBe(false);
    });

    test('Erreur ajout item TodoList (Nom déjà existant)', () => {
        const item1 = new Item("Lundi", "Promener le chien");
        jest.advanceTimersByTime(1000 * 60 * 31);
        const item2 = new Item("Lundi", "Acheter des fruits");
        todoList.addItem(item1);
        expect(todoList.addItem(item2)).toBe(false);
    });

    test('Erreur ajout item TodoList (Description trop longue)', () => {
        const item = new Item("Mardi", "Acheter des fruits".repeat(1000));
        expect(todoList.addItem(item)).toBe(false);
    });

    test('Test envoi de mail (8 items) avec comme résultat attendu un appel à la méthode sendEmail', () => {
        todoList.sender.sendEmail = jest.fn(
            (user, content) => {
                console.log("Email sent to " + user.email + " with content : " + content);
            }
        );
        for (let i = 0; i < 8; i++) {
            jest.advanceTimersByTime(1000 * 60 * 30);
            todoList.addItem(new Item("Jour " + i, "Description " + i));
        }

        expect(todoList.sender.sendEmail).toHaveBeenCalledWith(user, "Vous avez atteint 8 items dans votre liste de tâches");
    });
});

