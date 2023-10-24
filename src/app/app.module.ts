import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { AboutMeComponent } from './feature/components/about-me/about-me.component';
import { WorksComponent } from './feature/components/works/works.component';
import { HomeComponent } from './feature/components/home/home.component';
import { ToolsComponent } from './feature/components/tools/tools.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutMeComponent,
    WorksComponent,
    HomeComponent,
    ToolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
