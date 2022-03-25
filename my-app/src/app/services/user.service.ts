import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { User } from '../models/user.model';
import { User2 } from '../models/user2.model';

// const baseUri = 'http://localhost:5000/api';
const baseUri = 'http://192.168.8.103:5000/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isModalOn: boolean;
  userUpdated: boolean;
  showRequest: string;
  userIdRequested: number;
  userIdRequested2: string;
  users: User[] = [
    {
      id: 1,
      name: "Robot1",
      email: "robot1@yahoo.com",
      phone: "001",
      gender: "male",
      NRIC: "990313-02-2233",
      address: "Street 12 mile 17",
      postCode: "66565",
      state: "undefined"
    },
    {
      id: 2,
      name: "Robot2",
      email: "robot2@yahoo.com",
      phone: "002",
      gender: "male",
      NRIC: "980123-09-2344",
      address: "Street 13 mile 19",
      postCode: "66578",
      state: "Penang"
    }
  ];

  users2: User2[];
  user2: User2;

  constructor(private http: HttpClient) { }

  getAllUser(){
    return this.users;
  }
  getSpecificUser(id: number){
    return this.users.find(x=>x.id===id);
  }

  getSpecificUser2(id2: string){
    return this.http.get(`${baseUri}/userGet/${id2}`);
  }
  setUserDetails(newDetails: User){

    let previousUserDetails = this.users.find(x=>x.id===newDetails.id);
    previousUserDetails.name = newDetails.name;
    previousUserDetails.email = newDetails.email;
    previousUserDetails.phone = newDetails.phone;
    previousUserDetails.gender = newDetails.gender;
    previousUserDetails.NRIC = newDetails.NRIC;
    previousUserDetails.address = newDetails.address;
    previousUserDetails.postCode = newDetails.postCode;
    previousUserDetails.state = newDetails.state;
  }
  addNewUser(newUser: User){
    if(newUser.id !=0 && this.users.find(x=>x.id===newUser.id) == null)
      this.users.push(newUser)
    else if (this.users.find(x=>x.id===newUser.id) != null)
      console.log("ID already existed");
  }
  setUserViewRequest(newId: number){
    this.userIdRequested = newId;
  }

  updateUserDetails(data: User2){
    
    return this.http.put(`${baseUri}/userUpdate/${this.userIdRequested2}`, data);

  }

  setUserViewRequest2(newId: string){
    this.userIdRequested2 = newId;
  }
  setShowRequest(newShowRequest: string)
  {
    this.showRequest = newShowRequest;
  }
  getShowRequest(){
    return this.showRequest;
  }
    
  create(data: User) {
    // let jsonData = JSON.stringify(data)
    // console.log( jsonData);
    
    // return this.http.post(baseUrl, jsonData);

    // const headers = { 'content-type': 'application/json'}  
    // const body=JSON.stringify(data);
    // console.log(body)
    return this.http.post(baseUri + '/userCreate', data);
    
  }
  takeAllUsers(){
    // console.log(baseUri);
    return this.http.get(baseUri + '/userGet')
  }
}
