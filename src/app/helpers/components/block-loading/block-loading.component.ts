import { Component, OnInit, Input } from '@angular/core';
import { LoadingService } from 'app/services';

@Component({
  selector: 'app-block-loading',
  templateUrl: './block-loading.component.html',
  styleUrls: ['./block-loading.component.scss']
})
export class BlockLoadingComponent implements OnInit {

  
  blocked:boolean;

  constructor(private loadingService:LoadingService) { }

  ngOnInit() {
    this.loadingService.loadingStatus.subscribe(
        (val)=>this.blocked = val
      );
  }

}
