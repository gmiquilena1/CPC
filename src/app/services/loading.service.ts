import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoadingService {
    public loadingStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    displayLoading(value: boolean) {
        this.loadingStatus.next(value);
    }
}