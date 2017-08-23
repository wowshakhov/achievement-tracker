import {Component} from '@angular/core';
import {StorageService} from '../../services/storage.service';


@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html'
})
export class MainComponent {
  public test = this.storageService.get('/test');

  constructor(private storageService: StorageService) {}
}
