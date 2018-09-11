import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.css']
})
export class FormElementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    
    @Output() onMemberAdded = new EventEmitter<{name:string,designation:string}>();

    member_name = "";
    member_designation = "";
    
    onAddMember(){
        this.onMemberAdded.emit({
            name: this.member_name,
            designation: this.member_designation
        });
        this.member_name = "";
        this.member_designation = "";
    }
}
