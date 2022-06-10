import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css']
})
export class TestimonyComponent implements OnInit {

  peopledata=[{
    slno:"",
    name:"",
    review:"",
    imageurl:""
  }]

  constructor(private peopleservice:PeopleService) { }

  ngOnInit(): void {

    this.peopleservice.getpeople()
    .subscribe((data)=>{
        this.peopledata=JSON.parse(JSON.stringify(data))

    })
  }

}
