import { NgModule } from '@angular/core';
// Angular Material
import {MatButtonModule} from '@angular/material/button';

const MaterialComponents = [
  MatButtonModule,
]

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})

export class MaterialModule { }
