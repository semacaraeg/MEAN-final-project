import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { MovieSearchService } from './search-form/movie-search.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieApiServiceService } from './movie-api-service.service';
import { MovieListComponent } from './movie-list/movie-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './user.service';
import { PagerComponent } from './pager/pager.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        DashboardComponent,
        SearchFormComponent,
        MovieListComponent,
        LoginComponent,
        RegisterComponent,
        PagerComponent,
        MoviedetailsComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        ROUTING,
        HttpClientModule
    ],
    providers: [MovieSearchService, MovieApiServiceService, UserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
