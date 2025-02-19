import { Component } from "@angular/core";

@Component({
  templateUrl: "ranges.html"
})
export class RangesComponent {
  brightness: number = 20;
  contrast: number = 0;
  warmth: number = 1300;
  structure: any = { lower: 33, upper: 60 };
  text: number = 0;
}
