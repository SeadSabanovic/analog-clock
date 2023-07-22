import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('hour') hour!: ElementRef;
  @ViewChild('minute') minute!: ElementRef;
  @ViewChild('second') second!: ElementRef;
  ngAfterViewInit(): void {
    const hour = this.hour.nativeElement,
      minute = this.minute.nativeElement,
      second = this.second.nativeElement;

    let sec_count = 0,
      min_count = 0;

    setInterval(() => {
      let d = new Date(),
        hr = d.getHours(),
        min = d.getMinutes(),
        sec = d.getSeconds(),
        hr_rotation = 30 * hr + min / 2,
        min_rotation = 6 * min + min_count * 360,
        sec_rotation = 6 * sec + sec_count * 360;

      if (sec_rotation === 0 || sec_rotation % 360 === 0) {
        sec_count++;
        sec_rotation = 6 * sec + sec_count * 360;
      }

      if (min_count === 0 || min_count % 360 === 0) {
        min_count++;
        min_rotation = 6 * min + min_count * 360;
      }

      hour.style.transform = `rotate(${hr_rotation}deg)`;
      minute.style.transform = `rotate(${min_rotation}deg)`;
      second.style.transform = `rotate(${sec_rotation}deg)`;
    }, 1000);
  }
}
