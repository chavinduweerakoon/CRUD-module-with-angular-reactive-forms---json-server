import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { ApiService } from './shared/api.service';

@NgModule({
  declarations: [AppComponent, EmployeeDashboardComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, ApiService],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
