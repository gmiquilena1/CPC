import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Message } from 'primeng/primeng';

@Injectable()
export class NotificationService {
    private msg: BehaviorSubject<Message> = new BehaviorSubject<Message>(false);

    sendMsg(value: Message) {
        this.msg.next(value);
    }

    statusMsg():BehaviorSubject<Message>{
        return this.msg;
    }
}