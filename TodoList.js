class ToDoList {
    constructor() {
      this.items = [];
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
        if (item instanceof Item) {
          if (this.items.length >= 10) {
            return false; // Ne peut pas ajouter plus de 10 items.
          }
    
          const lastItem = this.items[this.items.length - 1];
          const timeDifference = item.creationDate - lastItem.creationDate;
          const minutesBetweenItems = Math.floor(timeDifference / (1000 * 60));
    
          return minutesBetweenItems >= 30;
        }
    
        return false;
      }
  }
  
  module.exports = ToDoList;