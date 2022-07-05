import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, interval } from 'rxjs';
import { NotificationsService } from 'src/app/services/notifications.service';


@Component({
  selector: 'app-navbar-four',
  templateUrl: './navbar-four.component.html',
  styleUrls: ['./navbar-four.component.scss']
})
export class NavbarFourComponent implements OnInit {

  assignedTasksInterval: number = 3600 * 20 // 1 minute
  MessagesList: string
  getTasksInvertal = interval(this.assignedTasksInterval);

  constructor(
    private notificationService: NotificationsService
  ) { }

  ngOnInit(): void {

    this.getNotifications()

    this.getTasksInvertal.subscribe(val => {
      this.getNotifications()
    })
  }

  getNotifications() {
    this.notificationService.getNotifications().subscribe(
      res => {
        if (res.sucess) {          
          if (res.data) {
            this.MessagesList = res.data
          }
        }
      }
    )
  }
}
