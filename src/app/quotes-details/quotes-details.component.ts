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
  numberOfLikes:number = 0;
  numberOfDislike:number = 0;
  upVote(){
    this.numberOfLikes++;
  }
  downVote(){
    this.numberOfDislike++;
  }
  completeQuote(complete:boolean){
    this.quoteDelete.emit(complete);

  }
  constructor() { }

  ngOnInit() {
  }

}
