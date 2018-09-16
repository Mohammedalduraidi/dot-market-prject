import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import angular routing
import { RouterModule, Routes } from '@angular/router';

//import components
import { AppComponent } from './app.component';
import { AdminEmployeeComponent, addEmployeeModal, updateEmployeeModal } from './admin-employee/admin-employee.component';
import { AdminEquipmentComponent, addModal, updateModal } from './admin-equipment/admin-equipment.component';
import { AdminProjectComponent, addProject, updateProject } from './admin-project/admin-project.component';
import { UserDetailsComponent, LoginModal2 } from './user-details/user-details.component';
import { UserProjectComponent, LoginModal1 } from './user-project/user-project.component';


//import material-ui and other packeges
import { FormsModule } from '@angular/forms';
import { NgDragDropModule } from 'ng-drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';




const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/user-project',
    pathMatch: 'full'
  },
  {
    path: 'admin-equipment',
    component: AdminEquipmentComponent
  },
  {
    path: 'admin-employees',
    component: AdminEmployeeComponent
  },
  {
    path: 'admin-projects',
    component: AdminProjectComponent
  },
  {
    path: 'user-project',
    component: UserProjectComponent
  },
  {
    path: 'user-details',
    component: UserDetailsComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminEmployeeComponent,
    AdminEquipmentComponent,
    AdminProjectComponent,
    UserDetailsComponent,
    UserProjectComponent,
    LoginModal1,
    LoginModal2,
    addModal,
    updateModal,
    addEmployeeModal,
    updateEmployeeModal,
    addProject,
    updateProject
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    MatTableModule,
    NgDragDropModule.forRoot(),
    FormsModule,
    MatCardModule,
    FlexLayoutModule,

  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule
  ], entryComponents: [
    LoginModal1,
    LoginModal2,
    addModal,
    updateModal,
    addEmployeeModal,
    updateEmployeeModal,
    addProject,
    updateProject

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
