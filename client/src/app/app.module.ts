import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ComputerComponent } from './components/computer/computer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchComponent } from './components/search/search.component'
import {RouterModule} from '@angular/router';
import { FilterComponent } from './components/filter/filter.component';
import { SingleComponent } from './components/single/single.component';
import { single } from 'rxjs/operators';


@NgModule({
  declarations: [
    AppComponent,
    ComputerComponent,
    NavbarComponent,
    PaginationComponent,
    SearchComponent,
    FilterComponent,
    SingleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',redirectTo:'computer',pathMatch:'full'},
      {path:'computer',component:ComputerComponent},
      {path:'search',component:SearchComponent},
      {path:"filter",component:FilterComponent},
      {path:'single',component:SingleComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
