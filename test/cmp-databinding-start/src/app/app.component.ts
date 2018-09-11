import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server',name: 'adarsh', content:'adarsh is online'}];
    
     onServerCreated(serverDetail:{serverName:string,serverContent:string}) {
        this.serverElements.push({
          type: 'server',
          name: serverDetail.serverName,
          content: serverDetail.serverContent
        });
      }

    onBlueprintCreated(serverDetail:{serverName:string,serverContent:string}) {
     this.serverElements.push({
          type: 'blueprint',
          name: serverDetail.serverName,
          content: serverDetail.serverContent
        });
    }
}
