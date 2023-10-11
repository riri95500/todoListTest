const Item = require("./Item");
const EmailService = require("./EmailService");

class ToDoList {
    constructor(user, sender) {
        this.items = [];
        this.user = user;
        this.sender = sender || new EmailService();
    }

    addItem(item) {
        if (item instanceof Item) {
            if (this.itemValid(item)) {
                this.items.push(item);
                if (this.items.length === 8) {
                    this.sender.sendEmail(this.user, "Vous avez atteint 8 items dans votre liste de tâches");
                }
                return true;
            }
        }
        return false;
    }

    itemValid(item) {
        if (
            this.user.isValid() === false ||
            !(item instanceof Item) ||
            item.name === "" ||
            item.content === "" ||
            item.content.length > 1000 ||
            this.items.length >= 10
        ) {
            return false;
        }

        const lastItem = this.items[this.items.length - 1];

        if (!lastItem) {
            return true;
        }

        const timeDifference = item.creationDate - lastItem.creationDate;
        const minutesBetweenItems = Math.floor(timeDifference / (1000 * 60));

        return minutesBetweenItems >= 30 && !this.items.some(itemInList => itemInList.name === item.name);
    }
}

module.exports = ToDoList;
