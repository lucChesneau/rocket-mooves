import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroSearchBoxContainerComponent } from './hero-search-box-container/hero-search-box-container.component';
import { SectionMoovListComponent } from './section-moov-list/section-moov-list.component';
import { DemandeAjoutMouvComponent } from './demande-ajout-mouv/demande-ajout-mouv.component';
import { MouvementDetailComponent } from './mouvement-detail/mouvement-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroSearchBoxContainerComponent,
    SectionMoovListComponent,
    DemandeAjoutMouvComponent,
    MouvementDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
