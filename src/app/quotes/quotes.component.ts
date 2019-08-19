import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title:Quotes;
  quotes:Quotes[]=[
  new Quotes(1, 'Do not cry because it is over,smile because it happened.', 'Dr.Seuss', new Date(2019,7,16)),
  new Quotes(2, 'To live is the rarest thing in the world. Most people exist, that is all.', 'Oscar Wilde', new Date(2019,6,30)),
  new Quotes(3, 'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.',  'Albert Einstein', new Date(2019,5,30)),
  new Quotes(4, 'Life is what happens to us while we are making other plans.', 'Allen Saunders', new Date(2019,6,30)),








];
  quoteCompleted(quoteDelete, index){
    if(quoteDelete){
      let confirmdelete = confirm(`Are you sure you want to delete ${this.quotes[index].author}?`)
      if (confirmdelete){
        this.quotes.splice(index, 1);
      }
    }

  }
  addNewQuote(quotes){
    let quotesLength = this.quotes.length;
    quotes.id = quotesLength;
    quotes.datePublished = new Date();
    this.quotes.push(quotes)
  }

  constructor() {

  }
  ngOnInit(){

  }

}
