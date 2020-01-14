import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public title = 'front-end-challenge-problem';

    constructor(private httpClient: HttpClient) {
    }

    public ngOnInit(): void {

    }
}
