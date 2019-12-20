import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialBundleModule } from 'src/app/core/material/material.bundle.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ModifyAddressComponent } from './modify-address/modify-address.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, ModifyAddressComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialBundleModule,
    RouterModule.forChild(routes),
  ],
  entryComponents: [ModifyAddressComponent],
})
export class HomeModule {}
