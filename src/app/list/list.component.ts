import { Component, OnInit } from '@angular/core';
import {ListService} from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  correos = [];
  max = 100;

  color = "red";
  read = [];
  starDisabled = [];
  
  constructor(private listService: ListService) { }

  ngOnInit() {
    this.emailList();
  }

  maxLength(correo) {
    return 100 - correo.subject.length;
  }

  emailList() {
    this.listService.getCorreos().subscribe(datos => this.correos = datos);
  }
}
