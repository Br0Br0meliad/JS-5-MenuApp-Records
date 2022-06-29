class Record {
    constructor(title, artist, year) {
        this.title = title;
        this.artist = artist;
        this.year = year;
    }

    describe() {
        return "${this.title} by ${this.artist} was released in ${this.year}";
    }
}

class Genre {
    constructor(name) {
        this.name = name;
        this.record = [];
    }

    addRecord(record) {
        if (record instanceof Record) {
            this.record.push(record);
        } else {
            throw new Error("You can only add real music records.");
        }
    }

    describe() {
        return "The ${this.name} collection has ${this.records.length} records.";
    }
        
}

class Menu {
    constructor() {
        this.record = [];
        this.selectedGenre = null;
    }

    start() {
        let selection = this.ShowMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case "1" :
                    this.createGenre();
                    break;
                case "2" :
                    this.viewGenre();
                    break;
                case "3" :
                    this.deleteGenre();
                    break;
                case "4" :
                    this.displayGenre();
                    break;
                default :
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert("Goodbye!");
    }
}