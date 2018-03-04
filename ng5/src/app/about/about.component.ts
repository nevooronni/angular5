import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';//from the angualar5 route library gives access to route parameters
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	goals: any;

	//dependency injection which creates an instance of the Activatedroute module
  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
  	this.route.params.subscribe(res => console.log(res.id))//this run when the component is loaded and console logs the response from the parameter
   }

  ngOnInit() {
  	this._data.goal.subscribe(res => this.goals = res);
  }

  sendMeHOme() {
  	this.router.navigate([''])
  }

}
