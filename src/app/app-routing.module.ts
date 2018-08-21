import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'podium', component: PodiumComponent },
  { path: 'championnat', component: ChampionnatComponent },
  { path: 'popup-championnat', component: PopupChampionnatComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'detail/:id', component: DetailsChampionnatComponent },
  { path: 'type-championnat', component: TypeChampionnatComponent },
  { path: 'popup-type-championnat', component: PopupTypeChampionnatComponent },
  { path: 'danse', component: DanseComponent },
  { path: 'popup-danse', component: PopupDanseComponent },
  { path: 'categorie', component: CategorieComponent },
  { path: 'popup-categorie', component: PopupCategorieComponent },
  { path: 'epoque', component: EpoqueComponent },
  { path: 'popup-epoque', component: PopupEpoqueComponent },
  { path: 'level', component: LevelComponent },
  { path: 'popup-level', component: PopupLevelComponent },
  { path: 'choregraphe', component: ChoregrapheComponent },
  { path: 'popup-choregraphe', component: PopupChoregrapheComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
