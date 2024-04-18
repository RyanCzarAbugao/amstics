import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { AttendancesComponent } from './pages/attendances/attendances.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { UsersComponent } from './pages/users/users.component';
import { SchedulesComponent } from './pages/schedules/schedules.component';
import { QrcodesComponent } from './pages/qrcodes/qrcodes.component';
import { TableComponent } from './components/table/table.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ScanqrcodeComponent } from './pages/scanqrcode/scanqrcode.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,
    AttendancesComponent,
    SidebarComponent,
    SubjectsComponent,
    UsersComponent,
    SchedulesComponent,
    QrcodesComponent,
    TableComponent,
    SettingsComponent,
    ScanqrcodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
