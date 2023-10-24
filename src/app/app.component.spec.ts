import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HomeComponent } from './feature/components/home/home.component';
import { AboutMeComponent } from './feature/components/about-me/about-me.component';
import { WorksComponent } from './feature/components/works/works.component';
import { ToolsComponent } from './feature/components/tools/tools.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [
      AppComponent,
      NavbarComponent,
      FooterComponent,
      HomeComponent,
      AboutMeComponent,
      WorksComponent,
      ToolsComponent
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
