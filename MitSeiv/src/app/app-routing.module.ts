import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio-sesion', pathMatch: 'full' },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./pages/inicio-sesion/inicio-sesion.module').then( m => m.InicioSesionPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'solicitudes',
    loadChildren: () => import('./pages/solicitudes/solicitudes.module').then( m => m.SolicitudesPageModule)
  },
  {
    path: 'lista-amigos',
    loadChildren: () => import('./pages/lista-amigos/lista-amigos.module').then( m => m.ListaAmigosPageModule)
  },
  {
    path: 'crear-quedada',
    loadChildren: () => import('./pages/crear-quedada/crear-quedada.module').then( m => m.CrearQuedadaPageModule)
  },
  {
    path: 'timeline',
    loadChildren: () => import('./pages/timeline/timeline.module').then( m => m.TimelinePageModule)
  },
  {
    path: 'lista-quedadas',
    loadChildren: () => import('./pages/lista-quedadas/lista-quedadas/lista-quedadas.module').then( m => m.ListaQuedadasPageModule)
  },
  {
    path: 'solicitudes-quedadas',
    loadChildren: () => import('./pages/solicitudes-quedadas/solicitudes-quedadas/solicitudes-quedadas.module').then( m => m.SolicitudesQuedadasPageModule)
  },
  {
    path: 'ver-quedada',
    loadChildren: () => import('./pages/ver-quedada/ver-quedada/ver-quedada.module').then( m => m.VerQuedadaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
