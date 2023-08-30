import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ViewUserComponent } from './pages/view-user/view-user.component';
import { FormComponent } from './components/form/form.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes:Routes=[
  {path:'', pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'user/:_id',component:ViewUserComponent},
  {path:'newuser',component:FormComponent},
  {path:'uptadeuser/:_id',component:FormComponent},
  {path:'**', component:NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
