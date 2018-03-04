import { Injectable } from '@angular/core';//instead of a component decorator it has a service/injectable decorator
import { BehaviorSubject } from 'rxjs/BehaviorSubject';//share data between components rxjs library

@Injectable()
export class DataService {

	private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal'])//new property that set default array with data type any
	goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal) {
  	this.goals.next(goal);
  }

}
