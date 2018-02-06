import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-file-input',
  templateUrl: 'file-input.component.html',
})
export class FileInputComponent {
  @Output() change = new EventEmitter<File>();

  public onChange(event: any) {
    const files = event.target.files;
    if (files.length) {
      this.change.emit(event.target.files[0]);
    }
  }
}
