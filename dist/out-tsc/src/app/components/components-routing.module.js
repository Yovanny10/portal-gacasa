import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { VideoComponent } from './video/video.component';
import { EditorComponent } from './editor/editor.component';
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
import { GoogleMapComponent } from './google-map/google-map.component';
import { AuthService } from '../middlewares/auth.service';
const routes = [
    {
        path: '',
        canActivate: [AuthService],
        children: [
            {
                path: 'carousel',
                component: CarouselComponent,
                data: {
                    title: 'Carrusel'
                }
            }, {
                path: 'videoembebido',
                component: VideoComponent,
                data: {
                    title: 'Video Embebido'
                }
            }, {
                path: 'editor',
                component: EditorComponent,
                data: {
                    title: 'Editor Html'
                }
            }, {
                path: 'google',
                component: GoogleMapComponent,
                data: {
                    title: 'Google Map'
                }
            },
            {
                path: 'estudiante',
                component: EstudianteComponent,
                data: {
                    title: 'Gestionar Estudiante'
                }
            }, {
                path: 'casa',
                component: CasaComponent,
                data: {
                    title: '  Gestionar Casa'
                }
            }, {
                path: 'aseocasa',
                component: AseocasaComponent,
                data: {
                    title: 'Gestionar Aseo Casa'
                }
            }, {
                path: 'aseococina',
                component: AseococinaComponent,
                data: {
                    title: 'Gestionar Aseo Cocina'
                }
            }, {
                path: 'aseocuarto',
                component: AseocuartoComponent,
                data: {
                    title: 'Gestionar Aseo Cuarto'
                }
            }, {
                path: 'cocinada',
                component: CocinadaComponent,
                data: {
                    title: 'Gestionar Preparar Alimentos'
                }
            }, {
                path: 'lavada',
                component: LavadaComponent,
                data: {
                    title: 'Gestionar Lavada de Ropa'
                }
            }, {
                path: 'castigo',
                component: CastigoComponent,
                data: {
                    title: 'Gestionar Castigo'
                }
            }, {
                path: 'remplazomadre',
                component: RemplazomadreComponent,
                data: {
                    title: 'Gestionar Remplazo de la Madre'
                }
            }, {
                path: 'aseogeneral',
                component: AseogeneralComponent,
                data: {
                    title: 'Gestionar Aseo General'
                }
            }
        ]
    }
];
let ComponentsRoutingModule = class ComponentsRoutingModule {
};
ComponentsRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ComponentsRoutingModule);
export { ComponentsRoutingModule };
//# sourceMappingURL=components-routing.module.js.map