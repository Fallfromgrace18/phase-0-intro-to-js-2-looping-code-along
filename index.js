// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }
  const gifts = ["teddy bear", "drone", "doll"];

  function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
      debugger;
    }
  
    return gifts;
  }
  
  wrapGifts(gifts);

  const thankYouCardsFor =["name1", "name2", "name3",]
  function writeCards(thankYouCardsFor,eventName){
    const messages= []
     for (let i = 0; i < thankYouCardsFor.length; i++ ){
        console.log (`Thank you, ${thankYouCardsFor[i]} `) 
        messages.push(`Thank you, ${thankYouCardsFor[i]}, for the wonderful surprise gift!`)
    } 
    return(messages)
  }


 
  let  number = 10
  function countDown(number){
    
    while(number>=0) {
        console.log(number);
        number--
     }
  }