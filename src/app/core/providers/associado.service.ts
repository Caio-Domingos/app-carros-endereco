import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AssociadoService {
  constructor(private http: HttpClient) {}

  get(token: string, id: string) {
    console.log({ token, id });
    return this.http.get(environment.api_url + `/Associado/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}
