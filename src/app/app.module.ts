import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PodiumComponent } from './podium/podium.component';
import { SettingComponent } from './setting/setting.component';
import { ChampionnatComponent } from './setting/championnat/championnat.component';
import { PopupChampionnatComponent } from './setting/championnat/popup-championnat/popup-championnat.component';
import { DetailsChampionnatComponent } from './setting/championnat/details-championnat/details-championnat.component';
import { TypeChampionnatComponent } from './setting/type-championnat/type-championnat.component';
import { PopupTypeChampionnatComponent } from './setting/type-championnat/popup-type-championnat/popup-type-championnat.component';
import { DanseComponent } from './setting/danse/danse.component'
import { PopupDanseComponent } from './setting/danse/popup-danse/popup-danse.component'
import { CategorieComponent } from './setting/categorie/categorie.component'
import { PopupCategorieComponent } from './setting/categorie/popup-categorie/popup-categorie.component'
import { EpoqueComponent } from './setting/epoque/epoque.component'
import { PopupEpoqueComponent } from './setting/epoque/popup-epoque/popup-epoque.component'
import { LevelComponent } from './setting/level/level.component'
import { PopupLevelComponent } from './setting/level/popup-level/popup-level.component'
import { ChoregrapheComponent } from './setting/choregraphe/choregraphe.component'
import { PopupChoregrapheComponent } from './setting/choregraphe/popup-choregraphe/popup-choregraphe.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PodiumComponent,
    SettingComponent,
    ChampionnatComponent,
    PopupChampionnatComponent,
    DetailsChampionnatComponent,
    TypeChampionnatComponent,
    PopupTypeChampionnatComponent,
    DanseComponent,
    PopupDanseComponent,
    CategorieComponent,
    PopupCategorieComponent,
    EpoqueComponent,
    PopupEpoqueComponent,
    LevelComponent,
    PopupLevelComponent,
    ChoregrapheComponent,
    PopupChoregrapheComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
