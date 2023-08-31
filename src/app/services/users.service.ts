import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { lastValueFrom} from 'rxjs'
import { User, Users } from '../interfaces/user.interfaces';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url:string="https://peticiones.online/api/users/"
  private urlPag:string="https://peticiones.online/api/users/?page="
  private httpClient=inject(HttpClient);
  
  constructor() {
   
   }

  getAll(page:number):Promise<User>{
    return lastValueFrom(this.httpClient.get<User>(`${this.urlPag}${page}`))
  }
  getById(_id:string):Promise<Users>{
    return lastValueFrom(this.httpClient.get<Users>(`${this.url}${_id}`))
  }
  getCreateUser(valueForm:Users):Promise<Users>{
    return lastValueFrom(this.httpClient.post<Users>(this.url,valueForm))
  }
  getUpdateUser(_id:string,valueForm:Users):Promise<Users>{
    return lastValueFrom(this.httpClient.put<Users>(`${this.url}${_id}`,valueForm))
  }
  getDeleteUser(_id:string):Promise<Users>{
    return lastValueFrom(this.httpClient.delete<Users>(`${this.url}${_id}`));
  }
}
