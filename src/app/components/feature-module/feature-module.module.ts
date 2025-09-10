import { IpFetcherService } from './../../service/ip-fetcher.service';
import { IpFinderComponent } from './../ip-finder/ip-finder.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [IpFinderComponent],
  imports: [CommonModule],
  exports: [IpFinderComponent],
  providers: [IpFetcherService],
})
export class FeatureModuleModule {}
