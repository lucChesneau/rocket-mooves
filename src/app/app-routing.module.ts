import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MouvementDetailComponent } from "./mouvement-detail/mouvement-detail.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: 'movement-details/:id', component: MouvementDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
