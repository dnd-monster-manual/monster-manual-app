import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { AllMonstersComponent } from './views/all-monsters/all-monsters.component';
import { ViewMonsterComponent } from './views/view-monster/view-monster.component';
import { NewMonsterComponent } from './views/new-monster/new-monster.component';
import { MonsterFormComponent } from './components/monster-form/monster-form.component';
import { EditMonsterComponent } from './views/edit-monster/edit-monster.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    AllMonstersComponent,
    ViewMonsterComponent,
    NewMonsterComponent,
    MonsterFormComponent,
    EditMonsterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
