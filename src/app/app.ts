import { Component, OnInit } from '@angular/core';

import { UserCard } from './components/user-card/user-card';
import { type utilisateurs } from "./users/users.model";
import { Error } from "./components/error/error";
import { UserSpesification } from "./components/user-spesification/user-spesification";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    UserCard,
    Error,
    UserSpesification
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App implements OnInit {
  utilisateurs : utilisateurs[] = [];
  errorLoading : boolean = false;
  clickedUser !: utilisateurs;
  usershown : boolean = false;
  
  async ngOnInit() {
    const url = "https://dummyjson.com/users";
    const configOption = {
        method : "GET",
        header: {"Content-Type" : "application/json"}
    };
    try{
        const response = await fetch(url, configOption);
        
        if(!response.ok) // ma3neha response.ok == false
            throw new Error();
        
        const data = await response.json();

        this.utilisateurs = data.users.map((user : any) => ({
            id : user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            age: Number(user.age),
            email: user.email,
            image_url: user.image
        }));
        this.errorLoading = false;
    }catch(error){
        this.errorLoading = true;
        console.error('Error : ', error);
    }
  }


  SelectedUser(user: utilisateurs){
    this.clickedUser = user;
    this.usershown = true;
  }
}