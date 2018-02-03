import {Component, Input} from '@angular/core';
import {Goal} from '../../models/goal';
import {GoalService} from '../../services/goal.service';
import {Router} from '@angular/router';
import {FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-file-uploader',
  templateUrl: 'file-uploader.component.html',
  styleUrls: ['file-uploader.component.scss']
})
export class GoalComponent {
}
