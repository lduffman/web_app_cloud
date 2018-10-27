import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { FoldersComponent }     from './folders/folders.component';
import { FolderDetailComponent } from './folder-detail/folder-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id/:id_parent', component: FolderDetailComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'folders', component: FoldersComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}