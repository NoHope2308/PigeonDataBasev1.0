import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthResponse, User } from '../interfaces/auth-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _user!: User;

  get user() {
    return { ...this._user };
  }

  constructor( private http: HttpClient) { }

  login (email: string , password: string) {
    const url = `${ this.baseUrl }/auth`;
    const body = {email, password};

    return this.http.post<AuthResponse>( url, body )
    .pipe(
      tap(res => {
        if (res.ok) {
          this._user = {
            name: res.name!,
            uid: res.uid!
          }
        }
      }),
      map( res => res.ok),
      catchError( err => of(err.error.msg))
    );
  }
}
