import { Component, OnInit } from '@angular/core';
import items from '../../../assets/curriculum.json';
 

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  public itemList:{item:string}[] = items;
  constructor() { }

  ngOnInit(): void {
  }

}
