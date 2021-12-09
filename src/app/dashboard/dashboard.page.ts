import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { IonicAuthService } from '../services/authentication.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {
  currentDate = new Date();
  myTask = '';
  addTask: boolean;
  tasks = [];
  count: number;
  userDetail='';

  constructor(
    public afDB: AngularFireDatabase,
    private router: Router,
    private ionicAuthService: IonicAuthService) { 
  }

  ngOnInit() {
    //Utiliser userDetails pour ajouter un champ nommé user au tasks qui contient l'email d'utilisateur 
    //pour afficher selement les tasks de cet utilisateur lors de login 
    this.ionicAuthService.userDetails().subscribe(response => {
      if (response !== null) {
        this.userDetail = response.email;
      } else {
        this.router.navigateByUrl('');
      }
    }, error => {
      console.log(error);
    })
    // if (this.userDetail==this.tasks.map(o=>o.user)) {
    //   this.getTasks();
    // }
    this.getTasks();
  }


  
  //Afficher le formulaire pour ajouter une tache
  showForm() {
    this.addTask = !this.addTask;
    this.myTask = '';
  }
  

  //Enregister une tache dans notre base des données
  addTaskToFirebase() {
    this.afDB.list('Tasks/').push({
      text: this.myTask,
      date: new Date().toISOString(),
      checked: false,
      user : this.userDetail
    });
    this.showForm();
    //Incrémenter la valeur de count(ion-badge)
    this.count=this.tasks.length
    this.count=this.count+1;
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