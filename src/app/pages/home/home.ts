import { Component } from '@angular/core';
import { Carousel } from "../../ui/carousel/carousel";
import { Accordian } from "../../ui/accordian/accordian";
import { Workflow } from "../../ui/workflow/workflow";

@Component({
  selector: 'app-home',
  imports: [Carousel, Accordian, Workflow],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
