import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import angular routing
import { RouterModule, Routes } from '@angular/router';

//import components
import { AppComponent } from './app.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';

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




const appRoutes: Routes = [
  {
    path: '',
    component: SplashScreenComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent
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
    MatCardModule
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
