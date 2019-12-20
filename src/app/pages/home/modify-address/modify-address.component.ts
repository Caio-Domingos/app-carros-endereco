import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'pro-modify-address',
  templateUrl: './modify-address.component.html',
  styleUrls: ['./modify-address.component.scss'],
})
export class ModifyAddressComponent implements OnInit {
  @ViewChild('addressForm', { static: false }) addressForm: NgForm;

  rua = '';
  complemento = '';
  bairro = '';
  cidade = '';
  estado = '';
  cep = '';
  numero = '';

  sending = false;
  constructor(
    public dialogRef: MatDialogRef<ModifyAddressComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  getErrorMessage(field: string) {
    return this.addressForm.controls[field].hasError('required')
      ? 'Campo obrigatório'
      : this.addressForm.controls[field].hasError('minlength')
      ? 'Minimo de 7 dígitos'
      : 'Erro desconhecido';
  }

  save() {
    this.sending = true;
    setTimeout(() => {
      this.sending = false;
      this.messageToast('Atualizado com sucesso!');
      this.dialogRef.close();
    }, 3000);
  }

  messageToast(message: string) {
    this.snackBar.open(message, 'Ok', { duration: 4000 });
  }
}
