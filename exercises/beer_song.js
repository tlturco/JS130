//generate the lurics of the 99 bottles of beer song

class BeerSong {
  verse(numBottles) {
    let firstLine = `${numBottles === 0 ? 'No more' : numBottles} ${numBottles === 1 ? 'bottle' : 'bottles'} of beer on the wall, ${numBottles === 0 ? 'no more' : numBottles} ${numBottles === 1 ? 'bottle' : 'bottles'} of beer.\n`;

    let secondLine;
    if (numBottles - 1 < 0) {
      secondLine = `Go to the store and buy some more, 99 bottles of beer on the wall.\n`;
    } else {
      secondLine = `Take ${numBottles === 1 ? 'it' : 'one'} down and pass it around, ${numBottles - 1 === 0 ? 'no more' : numBottles - 1} ${numBottles - 1  === 1 ? 'bottle' : 'bottles'} of beer on the wall.\n\n`;
    }
    return firstLine + secondLine;
  }

  verses(start, end) {
    let result = '';
    for (let count = start; count >= end; count -= 1) {
      result += this.verse(count);
    }
    return result;
  }
  lyrics() {
    return this.verses(99, 0);
  }
}


let test = new BeerSong();
console.log(test.verses(2, 0));

console.log(test.lyrics());