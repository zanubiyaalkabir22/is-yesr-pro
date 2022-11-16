import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AngularFireModule } from '@angular/fire';
import { SwiperModule } from 'swiper/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FabComponent } from './fab/fab.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { WatchesComponent } from './watches/watches.component';
import { PattariesComponent } from './pattaries/pattaries.component';
import { MachinsComponent } from './machins/machins.component';
import { AkssesComponent } from './aksses/aksses.component';
import { AkssesResolver } from './resolver/aksses.resolver';
import { MachinResolver } from './resolver/machin.resolver';
import { PattaryResolver } from './resolver/pattary.resolver';
import { WatchResolver } from './resolver/watch.resolver';

const config = {
  apiKey: "AIzaSyA5hu3ZunkFR3QHqEJS7U140tTID0ikX1o",
  authDomain: "database-bd073.firebaseapp.com",
  projectId: "database-bd073",
  storageBucket: "database-bd073.appspot.com",
  messagingSenderId: "750097615464",
  appId: "1:750097615464:web:2a05d3695a722a9fb409dd",
  measurementId: "G-CL5GV02F2E"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    FabComponent,
    WatchesComponent,
    PattariesComponent,
    MachinsComponent,
    AkssesComponent
  ],
  imports: [
    NgxPayPalModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatSnackBarModule,
    AppRoutingModule,
    SwiperModule,
    Ng2SearchPipeModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(config, 'test-database-f4547'),

  ],
  providers: [   
    WatchResolver,
    PattaryResolver,
    MachinResolver,
    AkssesResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
