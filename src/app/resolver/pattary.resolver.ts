import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { FirebaseService } from '../services/firebase.service';

@Injectable()
export class PattaryResolver implements Resolve<any> {

  constructor(public firebaseService: FirebaseService) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      let id = route.paramMap.get('id');
      this.firebaseService.get_product('pattarys', id)
      .subscribe(
        data => {
          resolve(data);
        }
      );
    })
  }
}
