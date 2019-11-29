import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import { VideoComponent } from './video/video.component';
import { EditorComponent } from './editor/editor.component';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
import { QuillModule } from 'ngx-quill';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { CasaComponent } from './casa/casa.component';
import { AseocasaComponent } from './aseocasa/aseocasa.component';
import { AseococinaComponent } from './aseococina/aseococina.component';
import { AseocuartoComponent } from './aseocuarto/aseocuarto.component';
import { AseogeneralComponent } from './aseogeneral/aseogeneral.component';
import { CocinadaComponent } from './cocinada/cocinada.component';
import { LavadaComponent } from './lavada/lavada.component';
import { CastigoComponent } from './castigo/castigo.component';
import { RemplazomadreComponent } from './remplazomadre/remplazomadre.component';
import { GoogleMapComponent } from "./google-map/google-map.component";
let ComponentsModule = class ComponentsModule {
};
ComponentsModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            CarouselComponent,
            VideoComponent,
            EditorComponent,
            EstudianteComponent,
            CasaComponent,
            AseocasaComponent,
            AseococinaComponent,
            AseocuartoComponent,
            AseogeneralComponent,
            CocinadaComponent,
            LavadaComponent,
            CastigoComponent,
            RemplazomadreComponent,
            GoogleMapComponent,
        ],
        imports: [
            CommonModule,
            ComponentsRoutingModule,
            NgbModule,
            QuillModule,
            VgCoreModule,
            VgControlsModule,
            VgOverlayPlayModule,
            VgBufferingModule,
            FormsModule,
            ReactiveFormsModule,
            AgmCoreModule,
        ]
    })
], ComponentsModule);
export { ComponentsModule };
//# sourceMappingURL=components.module.js.map