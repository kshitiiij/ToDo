import { Component, EventEmitter, Input, Output, computed, input, signal, output } from '@angular/core';
import { type User} from './user.model';
import { CardComponent } from "../shared/card/card.component";

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);


//there are two ways to do this : type or Interface
// type User = {
//     id: string;
//     avatar : string;
//     name : string;
// }

// interface User {
//     id: string;
//     avatar : string;
//     name : string;
// }


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // @Input({required:true}) id!:string;
  // @Input({required:true}) avatar!: string;
  // @Input({required:true}) name!: string;
  // @Input({required:true}) user!: {
  //   id: string;
  //   avatar : string;
  //   name : string;
  // };

  @Input({required:true}) user!: User;
  @Input({required:true}) selected!: boolean;
  @Output() select = new EventEmitter();   // select = output<String>();  can also mention <string> after event emitter

  // avatar = input.required<String>();
  // name = input.required<String>();
  // imagePath = computed(() => "assets/users/" + this.avatar());

  // this will be used with signal
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar); 
  

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {

    this.select.emit(this.user.id);
    
  }

}
