import { Component, OnInit, Inject } from '@angular/core';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  flag = faFlag;
  plus = faPlus;
  pen = faPenToSquare;
  reverseIndex = false;
  isSortingActive: boolean = false;
  tableData: any = [
    {
      ID: "EFTEW1E52KKC90439",
      progressColor: "red",
      percent: 45,
      flag: "red",
      biddingStatus: "open",
      notesAdded: true,
      notesValue: "Testing Notes"
    },
    {
      ID: "RFTEW1E52KKC90439",
      progressColor: "green",
      percent: 75,
      flag: "green",
      biddingStatus: "closed",
      notesAdded: false,
      notesValue: ""
    },
    {
      ID: "YFTEW1E52KKC90439",
      progressColor: "red",
      percent: 45,
      flag: "grey",
      biddingStatus: "open",
      notesAdded: true,
      notesValue: "Testing Notes"
    },
    {
      ID: "ABTEW1E52KKC90439",
      progressColor: "green",
      percent: 75,
      flag: "red",
      biddingStatus: "closed",
      notesAdded: false,
      notesValue: ""
    },
    {
      ID: "UITEW1E52KKC90439",
      progressColor: "red",
      percent: 45,
      flag: "green",
      biddingStatus: "open",
      notesAdded: true,
      notesValue: "Testing Notes"
    },
    {
      ID: "OPTEW1E52KKC90439",
      progressColor: "green",
      percent: 75,
      flag: "grey",
      biddingStatus: "closed",
      notesAdded: false,
      notesValue: ""
    },
    {
      ID: "KLTEW1E52KKC90439",
      progressColor: "red",
      percent: 45,
      flag: "red",
      biddingStatus: "open",
      notesAdded: true,
      notesValue: "Testing Notes"
    },
    {
      ID: "1FTEW1E52KKC90439",
      progressColor: "green",
      percent: 75,
      flag: "green",
      biddingStatus: "closed",
      notesAdded: false,
      notesValue: ""
    }
  ]
  tableDataCopy: any = []

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.tableDataCopy = this.tableData;
  }
  openDialog(mode?: string): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {
        mode: mode
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });
  }

  sortByID() {
    // console.log("Sort By ID")
    this.tableDataCopy.sort((a: any, b: any) => {
      if (a.ID < b.ID)
        return -1;
      if (a.ID > b.ID)
        return 1;
      return 0;
    });
    this.isSortingActive = true
    if (this.reverseIndex == true) {
      this.tableDataCopy = this.tableDataCopy.reverse()
    }
    this.reverseIndex = !this.reverseIndex
  }

  sortByBiddingStatus() {
    // console.log("Sort By ID")
    this.tableDataCopy.sort((a: any, b: any) => {
      if (a.biddingStatus < b.biddingStatus)
        return -1;
      if (a.biddingStatus > b.biddingStatus)
        return 1;
      return 0;
    });
    this.isSortingActive = true
    if (this.reverseIndex == true) {
      this.tableDataCopy = this.tableDataCopy.reverse()
    }
    this.reverseIndex = !this.reverseIndex
  }

  sortByFlag() {
    // console.log("Sort By Flag")
    this.tableDataCopy.sort((a: any, b: any) => {
      if (a.flag < b.flag)
        return -1;
      if (a.flag > b.flag)
        return 1;
      return 0;
    });
    this.isSortingActive = true
    if (this.reverseIndex == true) {
      this.tableDataCopy = this.tableDataCopy.reverse()
    }
    this.reverseIndex = !this.reverseIndex
  }

  sortByPercent() {
    // console.log("Sort By Percent")
    this.tableDataCopy.sort((a: any, b: any) => a.percent - b.percent);
    this.isSortingActive = true;
    if (this.reverseIndex == true) {
      this.tableDataCopy = this.tableDataCopy.reverse()
    }
    this.reverseIndex = !this.reverseIndex
  }

  filterTableData() {
    if (this.isSortingActive == false) {
      return this.tableData
    }
    else {
      return this.tableDataCopy
    }
  }


}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
  styleUrls: ['./home.component.scss']
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  pen = faPen;
  inputValue: any = "Testing Notes"
  isNoteEdit: boolean = false;

  onNoClick(): void {
    this.dialogRef.close();
    this.isNoteEdit = false
  }

  onClickEdit() {
    this.isNoteEdit = true
  }
}

