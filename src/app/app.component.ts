import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  myContext = {$implicit: 'World', localSk: 'Svet'};
  localSk = 'a';
  
}
