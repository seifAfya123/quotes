var quotes_list = [
  {
    quote: "Be yourself; everyone else is already taken.",
    said_by: "Oscar Wilde",
  },
  {
    quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    said_by: "Marilyn Monroe",
  },
  {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    said_by: "Albert Einstein",
  },
  {
    quote: "So many books, so little time.",
    said_by: "Frank Zappa",
  },
];

function find_random_quote(){
    var _ = Math.floor(Math.random()*quotes_list.length)
    console.log(quotes_list[_].quote)
    console.log(quotes_list[_].said_by)
    document.getElementById("quote").innerHTML=quotes_list[_].quote
    document.getElementById("sayer").innerHTML=quotes_list[_].said_by
}
find_random_quote()