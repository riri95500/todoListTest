class Item {
    name = ""
    content = ""
    creationDate = null

    constructor(name, content) {
        this.name = name
        this.content = content
        this.creationDate = new Date()
    }
}

module.exports = Item;
