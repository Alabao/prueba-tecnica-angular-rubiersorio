import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {provideRouter, RouterOutlet} from "@angular/router";
import {HttpClientModule, provideHttpClient} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {routes} from "./app.routes";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterOutlet, HttpClientTestingModule],
      providers: [provideRouter(routes), provideHttpClient()]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render image', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div')?.querySelector('div')).toHaveClass('bg-image');
  });
});
