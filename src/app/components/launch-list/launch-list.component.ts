import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PastLaunchesListGQL } from 'src/app/services/spacexGraphql.service';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchListComponent implements OnInit {

  constructor(private pastLaunchService: PastLaunchesListGQL) { }

  //limit fetch
  pastLaunches$ = this.pastLaunchService
  .fetch({ limit: 30 })

  //extract query data
  .pipe(
    map(
      res => res.data.launchesPast
    )
  );

  ngOnInit(): void {
  }

}
