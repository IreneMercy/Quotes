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
  new Quotes(1, 'Do not cry because it is over,smile because it happened.', 'Dr.Seuss', new Date()),
  new Quotes(2, 'To live is the rarest thing in the world. Most people exist, that is all.', 'Oscar Wilde', new Date()),






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
    quotes.id = quotesLength + 1;
    quotes.completeQuote = new Date(quotes.completeQuote);
    this.quotes.push(quotes)
  }

  constructor() {

  }
  ngOnInit(){

  }

}
