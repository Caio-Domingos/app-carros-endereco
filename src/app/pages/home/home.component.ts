import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material';
import { ModifyAddressComponent } from './modify-address/modify-address.component';
import { TokenService } from 'src/app/core/providers/token.service';
import { Router } from '@angular/router';
import { AssociadoService } from 'src/app/core/providers/associado.service';

@Component({
  selector: 'pro-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit, OnInit {
  associadoPerson: {
    id?: number;
    nome?: string;
    cpf?: string;
    placa?: string;
    telefone?: string;
    idEnd?: number;
    endereco?: {
      id: number;
      rua: string;
      numero: number;
      complemento: string;
      bairro: string;
      cidade: string;
      estado: string;
    };
  } = null;

  constructor(
    public dialog: MatDialog,
    private token: TokenService,
    private router: Router,
    private associado: AssociadoService
  ) {}

  ngOnInit() {
    this.associado
      .get(this.token.getToken(), window.localStorage.getItem('userId'))
      .subscribe(
        e => {
          console.log('e', e);
          this.associadoPerson = e;
        },
        err => console.error('err', err)
      );
  }

  ngAfterViewInit() {}

  openModify() {
    this.dialog.open(ModifyAddressComponent, {
      data: '1',
      minWidth: '300px',
      width: '50%',
      minHeight: '400px',
    });
  }

  logout() {
    this.token.removeToken();
    window.localStorage.removeItem('userId');
    this.router.navigateByUrl('login');
  }
}
