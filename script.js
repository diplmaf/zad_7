
const book = new Object();

book.title = "Мастер и Маргарита";
book.author = "Михаил Булгаков";
book.year = 1967;

book.displayInfo = function() {
  const infoString = `Название: ${this.title}, Автор: ${this.author}, Год: ${this.year}`; 
  console.log(infoString); 
};


book.displayInfo()