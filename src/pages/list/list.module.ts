import { NgModule } from '@angular/core';
import { ListPage } from './list';

@NgModule({
  declarations: [
    ListPage,
  ],
  imports: [
    ListPageModule.forRoot(ListPage),
  ],

})
export class ListPageModule {static forRoot(arg0: any): any {
  throw new Error("Method not implemented");
}

}
