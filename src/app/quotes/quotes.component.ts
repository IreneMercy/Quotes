import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[]=[
    {id:1, quote:'Don not cry because it is over, smile because it happened.', author:'Dr. Seuss'},
    {id:2, quote:'To live is the rarest thing in the world. Most people exist, that is all.', author:'Oscar Wilde'},

  ];

  constructor() { }

  ngOnInit() {
  }

}
