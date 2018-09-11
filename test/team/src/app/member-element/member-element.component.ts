import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '.app-member-element',
  templateUrl: './member-element.component.html',
  styleUrls: ['./member-element.component.css']
})
export class MemberElementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    
    @Input() member:{name:string,destination:string}

}
