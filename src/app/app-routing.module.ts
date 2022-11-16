import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AkssesComponent } from './aksses/aksses.component';
import { WatchesComponent } from './watches/watches.component';
import { MachinsComponent } from './machins/machins.component';
import { PattariesComponent } from './pattaries/pattaries.component';
import { AkssesResolver } from './resolver/aksses.resolver';
import { MachinResolver } from './resolver/machin.resolver';
import { PattaryResolver } from './resolver/pattary.resolver';
import { WatchResolver } from './resolver/watch.resolver';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, },
  { path: 'contact', component: ContactComponent  },
  { path: 'accessories', component: AkssesComponent  },
  { path: 'watches', component: WatchesComponent  },
  { path: 'pattaries', component: PattariesComponent  },
  { path: 'machins', component: MachinsComponent  },
  { path: 'accessories/:id', component: ProductComponent , resolve:{ data: AkssesResolver} },
  { path: 'watch/:id', component: ProductComponent, resolve:{ data: WatchResolver}  },
  { path: 'pattary/:id', component: ProductComponent , resolve:{ data: PattaryResolver} },
  { path: 'machin/:id', component: ProductComponent, resolve:{ data: MachinResolver}  },

  { path: '**',  redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
