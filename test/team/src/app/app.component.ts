import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
  teammembers = [{name:'adarsh',designation:'developer'}];
    
    addtolist(memberdata:{name:string,designation:string}){
        console.log(memberdata);
        this.teammembers.push({
            name:memberdata.name,
            designation:memberdata.designation
        });
    }
}
