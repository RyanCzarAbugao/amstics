import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AttendancesComponent } from './pages/attendances/attendances.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { UsersComponent } from './pages/users/users.component';
import { SchedulesComponent } from './pages/schedules/schedules.component';
import { QrcodesComponent } from './pages/qrcodes/qrcodes.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ScanqrcodeComponent } from './pages/scanqrcode/scanqrcode.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'attendances', component: AttendancesComponent },
  { path: 'schedules', component: SchedulesComponent},
  { path: 'users', component: UsersComponent},
  { path: 'qrcodes', component: QrcodesComponent },
  { path: 'scan_qrcode', component: ScanqrcodeComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'settings/subjects', component: SubjectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
