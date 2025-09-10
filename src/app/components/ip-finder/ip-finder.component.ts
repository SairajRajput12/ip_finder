import { PublicIp } from './../../model/public_ip_response';
import { IpResponse } from './../../model/ip_response';
import { Component } from '@angular/core';
import { IpFetcherService } from '../../service/ip-fetcher.service';

@Component({
  selector: 'app-ip-finder',
  templateUrl: './ip-finder.component.html',
  styleUrl: './ip-finder.component.css',
})
export class IpFinderComponent {
  ip_data: IpResponse | undefined = undefined;
  public_ip_address: PublicIp | undefined = undefined;
  constructor(private ip_finder: IpFetcherService) {}

  getIpAddress(): void {
    this.ip_finder.getIpAddress().subscribe((value) => {
      this.ip_data = value;
    });

    this.ip_finder.getPublicIpAddress().subscribe((value) => {
      this.public_ip_address = value;
    });
  }
}
