import { Component } from '@angular/core';
import { Form } from "../../ui/form/form";
import { Map } from "../../ui/map/map";

@Component({
  selector: 'app-contact',
  imports: [Form, Map],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {}
