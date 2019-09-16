import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
 import { DashboardComponent} from './dashboard/dashboard.component';
 import{ProductionComponent} from './production/production.component';
import {CrumbComponent}from './crumb/crumb.component';
import {SolutionComponent} from './solution/solution.component';
import {ModuleComponent}from './module/module.component';
import {ColourComponent}from './colour/colour.component';
import{PayrollComponent}from './payroll/payroll.component';
import{ColorCodeComponent}from './color-code/color-code.component';
import{ColorNameComponent}from './color-name/color-name.component';
import { from } from 'rxjs';
import { DashboarddefaultComponent } from './dashboarddefault/dashboarddefault.component';

const routes: Routes = [];

@NgModule({
 
  imports: [RouterModule.forRoot(
    [                 
      {path:'',component:LoginComponent},
      {path : 'LoginComponent',component : LoginComponent} ,
      {path : 'DashboardComponent',component : DashboardComponent,
        children:
        [
          {path:'',component:DashboarddefaultComponent},
          {path: 'CrumbComponent',component : CrumbComponent},
          {path: 'SolutionComponent',component : SolutionComponent},
          {path: 'ModuleComponent',component : ModuleComponent},
          {path: 'ColourComponent',component : ColourComponent,
           children:[
            {path: 'ColorNameComponent',component :ColorNameComponent},
            {path: 'ColorCodeComponent',component :ColorCodeComponent}
           ] 
        },
          {path:'ProductionComponent',component:ProductionComponent},
          {path:'PayrollComponent',component:PayrollComponent}
        ]
      },
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents={LoginComponent,DashboardComponent,ProductionComponent,CrumbComponent,SolutionComponent,
                                ModuleComponent,ColourComponent,PayrollComponent,ColorNameComponent,ColorCodeComponent}
