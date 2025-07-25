import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { ProductsComponent } from './pages/products/products';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'nosotros', component:About},
    {path: 'productos', component:ProductsComponent},
    {path:'contacto', component:ContactComponent},
    {path:'**', redirectTo:''} //Redirige a la ruta de Home para dar el el eror 404 de ERROR
];