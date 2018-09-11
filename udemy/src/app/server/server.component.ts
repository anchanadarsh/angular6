import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId = 1;
  serverStatus = 'Pending';
    clickCount = 0;
    clickCountLog = [];
    showDetail = false;
    username = '';
    password = '';
    
  constructor() { }
    
    showDetails(){
        this.clickCount++;
        this.clickCountLog.push(this.clickCount);
    }
    
    resetDetails(){
        this.username = '';
        this.password = '';
    }

  ngOnInit() {
  }

}
