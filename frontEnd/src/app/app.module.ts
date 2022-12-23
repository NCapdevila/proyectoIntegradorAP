import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { IconsNavComponent } from './components/icons-nav/icons-nav.component';
import { BannerComponent } from './components/banner/banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExpComponent } from './components/exp/exp.component';
import { EducationComponent } from './components/education/education.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HardAndSoftComponent } from './components/hard-and-soft/hard-and-soft.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    IconsNavComponent,
    BannerComponent,
    AcercaDeComponent,
    ExpComponent,
    EducationComponent,
    HardAndSoftComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
