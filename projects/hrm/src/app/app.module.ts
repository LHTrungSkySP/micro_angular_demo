import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forChild(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
