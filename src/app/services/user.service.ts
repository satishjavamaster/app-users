import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', role: 'User' },
    { id: 4, name: 'Alice Williams', email: 'alice.williams@example.com', role: 'Manager' },
    { id: 5, name: 'Charlie Brown', email: 'charlie.brown@example.com', role: 'User' }
  ];

  constructor() { }

  getUsers(): User[] {
    return this.users;
  }
}