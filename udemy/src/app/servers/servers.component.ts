import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowAddServer = false;
  serverName = 'amazon';
  serverCreated = 'Server is not created Yet' ;
    
  constructor() {
      setTimeout(() => {this.allowAddServer = true;},3000)
  }

  ngOnInit() {
  }
    
  updateServerName(event : Event){
      this.serverName = (<HTMLInputElement>event.target).value;
  }
    
    onCreateServer(){
        this.serverCreated = 'Server is created with name ' + this.serverName;
    }

}
