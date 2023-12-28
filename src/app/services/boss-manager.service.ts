import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BossRes } from '../model/user';
import { environment } from '../../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class BossManagerService {

  data: BossRes[]

  constructor(private http : HttpClient){
    this.data = []
  }
  ngOnInit() :void {
    this.getBossData()
  }

  getBossData(): Observable<BossRes[]> {
    return this.http.get<BossRes[]>(`${environment.baseUrl}/api/v1/boss`);
  }
}
