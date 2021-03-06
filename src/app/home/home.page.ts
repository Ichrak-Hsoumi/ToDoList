import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { IonicAuthService } from '../services/authentication.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  currentDate = new Date();
  myTask = '';
  addTask: boolean;
  tasks = [];
  count: number;

  constructor(public afDB: AngularFireDatabase,
    private router: Router,
    private ionicAuthService: IonicAuthService
  ) { 
    this.getTasks();
  }

  ngOnInit() {
  }
  


  //Parcourir notre base firebase Tasks/ et récupérer les informations de nos tâches
  getTasks() {
    this.afDB.list('Tasks/').snapshotChanges(['child_added', 'child_removed']).subscribe(actions => {
      this.tasks = [];
      actions.forEach(action => {
        this.tasks.push({
          key: action.key,
          text: action.payload.exportVal().text,
          hour: action.payload.exportVal().date.substring(11, 16),
          checked: action.payload.exportVal().checked
        });
      });
    });
  }


  //changer la valeur de chekbox et mise à jour la valeur du champ checked de notre tâche Firebase
  changeCheckState(ev: any) {
    this.afDB.object('Tasks/' + ev.key + '/checked/').set(ev.checked);
  }



  //Signout 
  signOut() {
    this.ionicAuthService.signoutUser()
      .then(res => {
        this.router.navigateByUrl('login');
      })
      .catch(error => {
        console.log(error);
      })
  }

}
