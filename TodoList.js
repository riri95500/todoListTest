const Item = require("./Item");
const User = require("./User");

class ToDoList {
    constructor(user) {
        this.items = [];
        this.user = user;
    }

    addItem(item) {
        if (item instanceof Item) {
            if (this.itemValid(item)) {
                this.items.push(item);
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
