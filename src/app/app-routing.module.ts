import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './views/admin/admin.component';
import { LoginComponent } from './views/login/login.component';
import { PainelComponent } from './views/painel/painel.component';

const routes: Routes = [{
  path: "",
  component: PainelComponent
},
{
  path: "admin",
  component: LoginComponent
},
{
  path: "admin/acesso",
  component: AdminComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
