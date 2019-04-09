import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',  // css selector syntax
  // template: '<h2>{{ "Title:" + getTitle() }}</h2>',  /// String interpolation {{ }}
  template: `
    <h2>{{ title }}</h2>
    <!-- <img src="{{ imageUrl }}" /> -->
    <img [src]="imageUrl" />
    <table>
      <tr>
        <td [attr.colspan]=colspan><td>
      </tr>
    </table>
    <br/>
    <button class="btn btn-primary" [class.active]="isActive">Save</button> <!-- Class binding -->
    <br/>
    <br/>
    <button [style.backgroundColor]="'red'">Submit</button> <!-- style binding- red is not variable so put it in '' -->
    <br/>
    <br/>
    <div (click)="onDivClicked()">
      <button (click)="onSave($event)">Push</button> <!-- Event binding -->
    </div>
    <br/>
    <label>Event passing &nbsp;</label>
    <input (keyup.enter)="onKeyUp($event)" />
    <br/>
    <label>Template variable &nbsp;</label>
    <input #_email (keyup.enter)="onKeyUpNew(_email.value)" /> <!-- #_email is template variable -->
    <br/>
    <label>Two way binding &nbsp;</label>
    <!-- two way binding here email and emailText must be different variable names -->
    <input [(ngModel)]="email" #emailText="ngModel" (keyup.enter)="twoWayBinding()" />
    <br/>
    <label>Pipes</label> <br/>
    {{ course.title | uppercase | lowercase }} <br/>
    {{ course.students | number }} <br/>
    {{ course.ratings | number:'1.1-2' }} <br/>
    {{ course.price | currency:'USD':true:'3.2-2' }} <br/> <!-- true is for symbol -->
    {{ course.releaseDate | date:'mediumDate' }} <br/> <!-- from DatePipe class -->
  `,
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  title = 'Json org';
  imageUrl = 'http://www.json.org/img/json160.gif';
  colspan = 2;
  isActive = false;
  email = 'me@example.com';
  course = {
    title: "Angular Course",
    students: 2341,
    ratings: 4.3222,
    price: 31.22,
    releaseDate: new Date(2016, 1, 1)
  };

  onSave($event) {
    $event.stopPropagation();
    console.log('Button was pushed', $event);
  }

  onDivClicked() {
    console.log('Div was clicked');
  }

  onKeyUp($event) {
    // if ($event.onKeyUp === 13) console.log('Enter was pressed');
    console.log('Enter was pressed', $event.target.value);
  }

  onKeyUpNew(value) {
    console.log(value);
  }

  twoWayBinding() {
    console.log(this.email);
  }
}
