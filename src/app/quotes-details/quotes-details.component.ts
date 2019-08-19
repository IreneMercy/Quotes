import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  @Input() quotes:Quotes;
  @Output () quoteDelete = new EventEmitter<boolean>();
  @Output () vote = new EventEmitter <boolean>();
  @Output () dVote = new EventEmitter <boolean>();

  upVote(add:boolean){
    this.vote.emit(add);
  }
  downVote(add:boolean){
    this.dVote.emit(add);
  }
  completeQuote(complete:boolean){
    this.quoteDelete.emit(complete);

  }

  constructor() { }
  ngOnInit() {
  }

}
