import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import items from '../../../assets/proposals.json';
@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.css']
})
export class ProposalsComponent implements OnInit {
  page: string;
  public itemList: { item: string }[];
  public matContent: { item: string };
  public matContent1: { item: string };
  public matContent2: { item: string };
  public matFooter: { item: string };
  public matHeader: { item: string };
  public listHeader: { item: string };
  constructor(private _Activatedroute: ActivatedRoute) {
  }



  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => {
      this.page = params.get('page');
      this.itemList = items[this.page]['listItems'];
      this.matContent = items[this.page]['matContent'];
      this.matContent1 = items[this.page]['matContent1'];
      this.matContent2 = items[this.page]['matContent2'];
      this.matFooter = items[this.page]['matFooter'];
      this.matHeader = items[this.page]['matHeader'];
      this.listHeader = items[this.page]['matListHeader'];
    });
  }

}
