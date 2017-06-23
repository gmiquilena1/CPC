import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'app/services';
import {Message} from 'primeng/primeng';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  msgs: Message[] = [];

  constructor(private notificationService:NotificationService) { }

  ngOnInit() {
    this.notificationService.statusMsg().subscribe(
      (newMsg) => {
          if(newMsg){
            this.msgs = [];
            this.msgs.push(newMsg);
          } 
        }
    )
  }

}
