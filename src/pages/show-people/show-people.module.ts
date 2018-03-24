import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowPeoplePage } from './show-people';

@NgModule({
  declarations: [
    ShowPeoplePage,
  ],
  imports: [
    IonicPageModule.forChild(ShowPeoplePage),
  ],
})
export class ShowPeoplePageModule {}
