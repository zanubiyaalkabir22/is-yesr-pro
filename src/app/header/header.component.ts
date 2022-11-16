import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  role: string;
  loading: boolean = false; 
  constructor(private firebaseService: FirebaseService,
    public snackBar: MatSnackBar,
    public router: Router,
    public dialog: MatDialog,) {
     }

    ngOnInit(): void {
    }

  
}
