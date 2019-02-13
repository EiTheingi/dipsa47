import { NgModule } from "@angular/core";

import { FlexLayoutModule } from '@angular/flex-layout';

import { 
    MatToolbarModule, MatFormFieldModule, MatInputModule,
    MatButtonModule, MatIconModule
} from '@angular/material';

const MODULES = [
    FlexLayoutModule,
    MatToolbarModule, MatFormFieldModule, MatIconModule,
    MatButtonModule, MatIconModule, MatInputModule
]

@NgModule({
    imports: MODULES,
    exports: MODULES
})
export class MaterialModule { }