import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type utilisateurs } from '../../users/users.model';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css'
})
export class UserCard {
  @Input({required: true}) user !: utilisateurs;
  @Output() onUserClicked = new EventEmitter<utilisateurs>();
  
  userClicked(){
    this.onUserClicked.emit(this.user);
  }
}