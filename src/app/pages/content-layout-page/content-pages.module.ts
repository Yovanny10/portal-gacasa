import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { ContentPagesRoutingModule } from "./content-pages-routing.module";
import { LoginComponent } from './login/login.component';
import { ForgotPasswordPageComponent } from "./forgot-password/forgot-password-page.component";
import { RegisterPageComponent } from "./register/register-page.component";

@NgModule({
    imports: [
        CommonModule,
        ContentPagesRoutingModule,
        FormsModule        
    ],
    declarations: [
        LoginComponent,
        ForgotPasswordPageComponent,
        RegisterPageComponent
    ]
})
export class ContentPagesModule { }
