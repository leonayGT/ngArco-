import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-bootstrap/carousel'
import { NavbarComponent } from './navbar/navbar.component';
import { JogosComponent } from './jogos/jogos.component';
import { SorteioComponent } from './sorteio/sorteio.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JogosComponent,
    SorteioComponent,

  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot(),
    AccordionModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
