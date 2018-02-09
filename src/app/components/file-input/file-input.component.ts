import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-file-input',
  templateUrl: 'file-input.component.html',
})
export class FileInputComponent {
  @Output() private onChange: EventEmitter<File>;

  constructor() {
    this.onChange = new EventEmitter<File>();
  }

  public onFileSelected(event: any) {
    const files = event.target.files;
    if (files.length) {
      this.onChange.emit(event.target.files[0]);
    }
  }
}
