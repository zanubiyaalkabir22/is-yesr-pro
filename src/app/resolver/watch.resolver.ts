import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { FirebaseService } from '../services/firebase.service';

@Injectable()
export class WatchResolver implements Resolve<any> {

  constructor(public firebaseService: FirebaseService) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      let id = route.paramMap.get('id');
      this.firebaseService.get_product('watches', id)
      .subscribe(
        data => {
          resolve(data);
        }
      );
    })
  }
}
