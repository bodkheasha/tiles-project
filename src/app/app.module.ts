import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatGridListModule} from '@angular/material';
import { MaterialModule} from './material/material.module';
import { MatFormFieldModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavModule,MatIconModule,MatListModule} from '@angular/material';
import{  MatToolbarModule} from '@angular/material';
import { CrumbComponent } from './crumb/crumb.component';
import { SolutionComponent } from './solution/solution.component';
import { ModuleComponent } from './module/module.component';
import { ColourComponent } from './colour/colour.component';
import { ProductionComponent } from './production/production.component';
import { PayrollComponent } from './payroll/payroll.component';
import { DashboarddefaultComponent } from './dashboarddefault/dashboarddefault.component';
import { ColorCodeComponent } from './color-code/color-code.component';
import { ColorNameComponent } from './color-name/color-name.component';
  

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CrumbComponent,
    SolutionComponent,
    ModuleComponent,
    ColourComponent,
    ProductionComponent,
    PayrollComponent,
    DashboarddefaultComponent,
    ColorCodeComponent,
    ColorNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MaterialModule,
    MatFormFieldModule,
    FormsModule,
    MatGridListModule,
    MatSidenavModule,MatIconModule,MatListModule,MatToolbarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }







