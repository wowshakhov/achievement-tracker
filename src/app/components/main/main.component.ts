import {Component} from '@angular/core';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html'
})
export class MainComponent {
  public goals = this.storageService.list('/goal').valueChanges();

  constructor(private storageService: StorageService) {}
}
