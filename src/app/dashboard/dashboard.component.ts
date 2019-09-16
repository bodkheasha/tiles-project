import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  number:any;

  set(event:number){
    this.number=event;
    switch(this.number){
        case 0:
                this.router.navigate(['/DashboardComponent/ProductionComponent']);
                break;
        case 1:
                this.router.navigate(['/DashboardComponent/CrumbComponent']);
                break;
        case 2:this.router.navigate(['/DashboardComponent/SolutionComponent']);
                break;
        case 3:this.router.navigate(['/DashboardComponent/ModuleComponent']);
                break;
        case 4:this.router.navigate(['/DashboardComponent/ColourComponent/ColorNameComponent']);
                break;
        case 5:this.router.navigate(['/DashboardComponent/ColourComponent/ColorCodeComponent']);
                break;
        case 6:this.router.navigate(['/DashboardComponent/PayrollComponent']);
                break;
        default:alert("error");
    }
  }
  constructor(private router: Router) { }
  ngOnInit() {
        $(document).ready(function(){
               $('div.parent').click(function(e){
                       e.stopPropagation();
                       var $el = $('mat-list',this);
                       $('#child').not($el).slideUp();
                       $el.stop(true,true).slideToggle();
               });
                   $('#child').click(function(e){
                           e.stopImmediatePropagation();
               });
            });
  }
}

 
