import { Component, Input } from '@angular/core';
import { utilisateurs } from '../users/users.model';

@Component({
  selector: 'app-user-spesification',
  imports: [],
  templateUrl: './user-spesification.html',
  styleUrl: './user-spesification.css'
})
export class UserSpesification {
  @Input({required : true}) user !: utilisateurs;
}
