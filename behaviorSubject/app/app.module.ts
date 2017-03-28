import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './nav/nav.component';
import { SearchBarComponent } from './nav/search-bar.component';
import { ResultsComponent } from './shared/results.component';

import { NavService } from './nav/nav.service';
import { TvMazeService } from './shared/tvmaze.service';

@NgModule({
  imports: [ BrowserModule,
                   FormsModule,
                   AppRoutingModule,
                   HttpModule
                   ],
  declarations: [ AppComponent,
                          HomeComponent,
                          NavbarComponent,
                          SearchBarComponent,
                          ResultsComponent
                          ],
  providers: [ NavService, TvMazeService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }