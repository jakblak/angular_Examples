import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './shared/results.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'search', component: ResultsComponent }
            { path: '**', redirectTo: '', pathMatch: 'full' }
        ] , { preloadingStrategy: PreloadAllModules }) // ,  {enableTracing: true} )
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }