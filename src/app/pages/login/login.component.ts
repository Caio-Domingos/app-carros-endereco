import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/providers/auth.service';
import { TokenService } from 'src/app/core/providers/token.service';

@Component({
  selector: 'pro-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  placa = '';
  cpf = '';

  sending = false;

  @ViewChild('loginForm', { static: false }) loginForm: NgForm;

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private auth: AuthService,
    private token: TokenService
  ) {}

  ngOnInit() {}

  getErrorMessage(field: string) {
    return this.loginForm.controls[field].hasError('required')
      ? 'Campo obrigatório'
      : this.loginForm.controls[field].hasError('minlength')
      ? 'Minimo de 7 dígitos'
      : 'Erro desconhecido';
  }

  login() {
    this.sending = true;

    const sub = this.auth
      .login(this.cpf, this.placa)
      .subscribe(
        (e: any) => {
          if (!e) {
            this.messageToast('Placa/CPF incorretos!');
            this.sending = false;
            return;
          }
          console.log('login', e);
          this.token.setToken(e.token);
          window.localStorage.setItem('userId', e.idAssociado);
          this.sending = false;
          this.messageToast('Logado com sucesso!');
          this.router.navigateByUrl('home');
          sub.unsubscribe();
        },
        err => {
          console.error('err', err);
        }
      );
  }

  messageToast(message: string) {
    this.snackBar.open(message, 'Ok', { duration: 4000 });
  }
}
