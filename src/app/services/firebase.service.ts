import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) { }

  get_news(collection){
    return this.db.collection(collection).snapshotChanges();
  }

  get_products(collection) {
    return this.db.collection(collection).snapshotChanges();
  }

  get_product(collection ,id) {
    return this.db.collection(collection).doc(id).snapshotChanges();
  }
  
  add_document(collection, value){
    return this.db.collection(collection).add(value);
  }
  

  create_order(collection, value){
    return this.db.collection(collection).add(value);
  }


}
