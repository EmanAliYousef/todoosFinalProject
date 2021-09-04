import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todoos/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todoos/todo-list-item/todo-list-item.component';
// import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// import { BarsComponent } from './components/bars/bars.component';


// import { IsLoggedInComponent } from './guards/is-Logged-In/is-logged-in.component';
// import { IsLoggedOutComponent } from './guards/is-logged-out/is-logged-out.component';
// import { IsLoggedIn } from './guards/is-logged-in.ts/is-logged-in.ts.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { SigninComponent } from './views/auth/signin/signin.component';
import { SignupComponent } from './views/auth/signup/signup.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { TodoosFormComponent } from './views/todoos-form/todoos-form.component';
// import { ActionsBarComponent } from './bars/actions-bar/actions-bar.component';
import { DefaultBarComponent } from './components/bars/default-bar/default-bar.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent,
    // IsLoggedInComponent,
    // IsLoggedOutComponent,
    // IsLoggedIn.TsComponent,
    HomeComponent,
    AboutComponent,
    SigninComponent,
    SignupComponent,
    NotFoundComponent,
    TodoosFormComponent,
    // ActionsBarComponent,
    DefaultBarComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
