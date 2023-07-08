import { NgModule } from "@angular/core";
import {MatInputModule} from  "@angular/material/input";
import {MatIconModule} from '@angular/material/icon';

import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
    
exports:[
    MatInputModule,
    MatButtonModule, MatDividerModule, MatIconModule,
]
})
export class MaterialModule{

}