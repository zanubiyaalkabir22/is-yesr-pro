import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { Product } from '../shared/product';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public payPalConfig ? : IPayPalConfig;
  products: Product[] = [];
  productInfo: any;
  order:any;
  name: string = '';
  date = (new Date()).toISOString();
  price: string = '';
  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public db: AngularFirestore,
    private firebaseService: FirebaseService,
    
    private titleService: Title) {
    this.titleService.setTitle("Akkad Watches | Product");


  }
    ngOnInit(): void {
      this.initConfig();
      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });

    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.productInfo = data.payload.data();
        this.price = data.payload.data().price;
        this.name = data.payload.data().name;
      }
    })
    
    }


    private initConfig(): void {
      this.payPalConfig = {
          currency: 'USD',
          clientId: 'AehSjS3EKl4LQ1RqI345uDU2hmZ8ZkSzHk6Cp-zjlDwZQATnuwj9Glrp40_JI1P-nfGqCbbbiMZkpK3L',
          createOrderOnClient: (data) => < ICreateOrderRequest > {
              intent: 'CAPTURE',
              purchase_units: [{
                  amount: {
                      currency_code: 'USD',
                      value: this.price,
                      breakdown: {
                          item_total: {
                              currency_code: 'USD',
                              value: this.price
                          }
                      }
                  },
                  items: [{
                      name: 'Akkad Watches',
                      quantity: '1',
                      category: 'DIGITAL_GOODS',
                      unit_amount: {
                          currency_code: 'USD',
                          value: this.price,
                      },
                  }]
              }]
          },
          advanced: {
              commit: 'true'
          },
          style: {
              label: 'paypal',
              layout: 'vertical'
          },
          onApprove: (data, actions) => {
             
              actions.order.get().then(details => {
                const formData = {
                    details,
                    productName: this.name,
                    productPrice: this.price,
                    createdAt: this.date,
                  };
                  this.order = formData;
                this.firebaseService.create_order('orders', this.order)
                  console.log('onApprove - you can get full order details inside onApprove: ', details);
              });
          },
          onClientAuthorization: (data) => {
              console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
          },
          onCancel: (data, actions) => {
              console.log('OnCancel', data, actions);

          },
          onError: err => {
              console.log('OnError', err);
          },
          onClick: (data, actions) => {
              console.log('onClick', data, actions);
          },
      };
  }



  }
