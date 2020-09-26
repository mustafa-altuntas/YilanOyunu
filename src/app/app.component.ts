import { Component, HostListener, OnInit } from '@angular/core';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  Down_ARROW = 40,
  Up_ARROW = 38,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.createKareler(this.sutunUstLimit);
  }
  title = 'YilanOyunu';

  seciliKare;
  satir: number = 0;
  sutun: number = 0;
  satirUstLimit = 7;
  sutunUstLimit = 7;

  kareler = [];

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);
    this.createKareler(this.sutunUstLimit);

    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.sagaIlerler();
      this.birYap(this.sutun, this.satir);
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.solaIlerle();
      this.birYap(this.sutun, this.satir);
    }
    if (event.keyCode === KEY_CODE.Up_ARROW) {
      this.yukariIlerler();
      this.birYap(this.sutun, this.satir);
    }

    if (event.keyCode === KEY_CODE.Down_ARROW) {
      this.asagiIlerle();
      this.birYap(this.sutun, this.satir);
    }
  }

  birYap(sutun: number, satir: number) {
    console.log(`${sutun} : ${satir}`);
    this.kareler[sutun][satir] = 1;
  }

  solaIlerle() {
    if (this.satir > 0) {
      this.satir -= 1;
    }
  }
  sagaIlerler() {
    if (this.satir < this.satirUstLimit - 1) {
      this.satir += 1;
    }
  }
  asagiIlerle() {
    if (this.sutun < this.sutunUstLimit - 1) {
      this.sutun += 1;
    }
  }
  yukariIlerler() {
    if (this.sutun > 0) {
      this.sutun -= 1;
    }
  }

  createKareler(sutun: number, satir?: number) {
    satir == null ? (satir = sutun) : null;
    let kareler = [];

    for (let c = 0; c < sutun; c++) {
      let satirDizisi: number[] = [];
      for (let r = 0; r < satir; r++) {
        satirDizisi.push(0);
      }
      kareler.push(satirDizisi);
    }
    this.kareler = kareler;
    console.log(kareler);
  }
}
