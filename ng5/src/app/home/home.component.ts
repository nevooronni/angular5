import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

    trigger('goals', [//animations specific functions will reside here
         transition('* => *', [//means from any to any we initialize the query function
             query(':enter', style({ opacity: 0 }), {optional: true}),//when anything enters the dom apply that style sometimes the styles can fail when you fail to put the optional true 
           
             query(':enter', stagger('300ms', [
               animate('.6s ease-in', keyframes([
                  style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
                  style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
                  style({opacity: 1, transform: 'translateY(0)', offset: 1}),
                 ]))]), {optional: true}), //stagger let you set a delay on each element animations time 

             query(':leave', stagger('300ms', [
               animate('.6s ease-in', keyframes([
                  style({opacity: 1, transform: 'translateY(0)', offset: 0}),
                  style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
                  style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
                 ]))]), {optional: true})
           ]),
      ])
  ]
})
export class HomeComponent implements OnInit {
	
	itemCount: number = 4;//interpolation
	btnText: string = 'Add an item';
	goalText: string = 'My first life goal';
  goals = []

  //create an instance of the dataservice service module by dependency injection into the constructor in our component class
  constructor(private _data: DataService) { }

  ngOnInit() {//hook initiated when the app loads
    this._data.goal.subscribe(res => this.goals = res);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  addItem() {
  	this.goals.push(this.goalText);
  	this.goalText = '';
  	this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  removeItem(i) {
    this.goals.splice(i, 1);
    this._data.changeGoal(this.goals);
  }

}
