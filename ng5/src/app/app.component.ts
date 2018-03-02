import { Component } from '@angular/core';

@Component({//decorator that specifies different properties for our component
  selector: 'app-root',//nesting
  templateUrl: './app.component.html',//templates
  styleUrls: ['./app.component.scss']//styles
})
export class AppComponent {//where all the logic resides for our component
  title = 'app';
}
