import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.scss']
})
export class PortfoliosComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;
  
  constructor() { }

  ngOnInit() {
  }

}
