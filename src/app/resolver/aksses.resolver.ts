import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { FirebaseService } from '../services/firebase.service';

@Injectable()
export class AkssesResolver implements Resolve<any> {

  constructor(public firebaseService: FirebaseService) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      let id = route.paramMap.get('id');
      this.firebaseService.get_product('aksses', id)
      .subscribe(
        data => {
          resolve(data);
        }
      );
    })
  }
}
