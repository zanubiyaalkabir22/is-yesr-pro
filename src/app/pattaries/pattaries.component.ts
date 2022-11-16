import { Component, OnInit, Inject } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-pattaries',
  templateUrl: './pattaries.component.html',
  styleUrls: ['./pattaries.component.scss']
})
export class PattariesComponent implements OnInit {
  searchText;
  items: any [] = [];
  results: any;
  passcode ;
  constructor(
    public firebaseService: FirebaseService,
    private route: ActivatedRoute,
    private title: Title,
    @Inject(DOCUMENT) private _document: Document) { 
      this.title.setTitle("Akkad Watches | Pattaries");
    }

  ngOnInit(): void {
    this.get_Data();
  }

  get_Data() {
    this.firebaseService.get_products('pattarys')
    .subscribe(result => {
      this.results = result;
      for (let i = 0; i< result.length; i++) {
        this.items[i] = this.results[i].payload.doc.data();
        this.items[i]._id= this.results[i].payload.doc.id;
      }
    })
  }


}
 