import { Component, OnInit } from '@angular/core';
import { IonicAuthService } from '../services/authentication.service';

@Component({
  selector: 'app-reset-paswword',
  templateUrl: './reset-paswword.page.html',
  styleUrls: ['./reset-paswword.page.scss'],
})
export class ResetPaswwordPage implements OnInit {
  email='';
  res='';

  constructor(private authService: IonicAuthService){ }

  ngOnInit() {
  }

  //Reset Password
  //Envoyer un lien à l'email saisie pour réinitialiser le mot de passe 
  onSubmit ()  { 
    this.authService.resetPassword(this.email); 
    this.res='Check your email'
  } 

}
