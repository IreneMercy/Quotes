import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  @Input() quotes:Quotes;
  numberOfLikes:number = 0;
  numberOfDislike:number = 0;
  upVote(){
    this.numberOfLikes++;
  }
  downVote(){
    this.numberOfDislike++;
  }
  constructor() { }

  ngOnInit() {
  }

}
