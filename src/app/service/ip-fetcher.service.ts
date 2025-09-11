import { PublicIp } from './../model/public_ip_response';
import { IpResponse } from './../model/ip_response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const PROTOCOL = 'http';
const PORT = '3000';

@Injectable({
  providedIn: 'root',
})
export class IpFetcherService {
  private baseUrl: string = '';
  private port: string = '';
  constructor(public http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getIpAddress(): Observable<IpResponse> {
    return this.http.get<IpResponse>(this.baseUrl + 'get-ip');
  }

  getPublicIpAddress(): Observable<PublicIp> {
    return this.http.get<PublicIp>('https://api.ipify.org/?format=json');
  }
}
