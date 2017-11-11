import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreadcrumbService , Message , MessagesService , User } from 'ngx-admin-lte';
import { } from 'morris.js';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  linechart: morris.GridChart;
  areaChart: morris.GridChart; 
  donutChart: morris.DonutChart;
  public date: Date = new Date();

  constructor(
    private msgServ: MessagesService,
    private breadServ: BreadcrumbService
  ) {
    // TODO
  } 

  public ngOnInit() {
    // setttings the header for the home
    this.breadServ.setCurrent({
      description: 'Início',
      display: true,
      header: 'Dashboard',
      levels: [
        {
          icon: 'dashboard',
          link: ['/'],
          title: 'Home'
        }
      ]
    });

    this.areaChart = Morris.Area({
      element: 'revenue-chart',
      resize: true,
      parseTime: false,
      data: [
        { hours: '09:00', f02: 2666, f04: 2666, f05: 1000, f06:1200, f07:1500, f08:1900, f13:2000 },
        { hours: '10:00', f02: 2778, f04: 2294, f05: 1200, f06:1300, f07:1600, f08:2000, f13:2100 },
        { hours: '11:00', f02: 4912, f04: 1969, f05: 1300, f06:1400, f07:1700, f08:2100, f13:2200 },
        { hours: '12:00', f02: 3767, f04: 3597, f05: 1400, f06:1500, f07:1800, f08:2200, f13:2300 },
        { hours: '13:00', f02: 6810, f04: 1914, f05: 1500, f06:1600, f07:1900, f08:2300, f13:2400 },
        { hours: '14:00', f02: 5670, f04: 4293, f05: 1600, f06:1700, f07:2000, f08:2400, f13:2500 },
        { hours: '15:00', f02: 4820, f04: 3795, f05: 1700, f06:1800, f07:2100, f08:2500, f13:2600 },
        { hours: '16:00', f02: 15073, f04: 5967, f05: 1800, f06:1900, f07:2200, f08:2600, f13:2700 },
        { hours: '17:00', f02: 10687, f04: 4460, f05: 1900, f06:2000, f07:2300, f08:2700, f13:2800 },
        { hours: '18:00', f02: 8432, f04: 5713, f05: 2000, f06:2100, f07:2400, f08:2800, f13:2900 }
      ],
      xkey: 'hours',
      ykeys: ['f02', 'f04', 'f05', 'f06', 'f07', 'f08', 'f13'],
      labels: ['F-02', 'F-04', 'F-05', 'F-06', 'F-07', 'F-08', 'F-13'],
      lineColors: ['#a0d0e0', '#3c8dbc', '#3c8dbc', '#3c8dbc', '#3c8dbc', '#3c8dbc', '#3c8dbc'],
      hideHover: 'auto'
    });

    this.donutChart = Morris.Donut({
      element: 'sales-chart',
      resize: true,
      colors: ['#3c8dbc', '#f56954', '#00a65a'],
      data: [
        { label: 'F02', value: 12 },
        { label: 'F04', value: 30 },
        { label: 'F05', value: 30 },
        { label: 'F06', value: 30 },
        { label: 'F07', value: 30 },
        { label: 'F08', value: 30 },
        { label: 'F13', value: 30 },
      ],
    });

    this.linechart = Morris.Line({
      element: 'line-chart',
      resize: true,
      data: [
        { y: '2011 Q1', item1: 2666 },
        { y: '2011 Q2', item1: 2778 },
        { y: '2011 Q3', item1: 4912 },
        { y: '2011 Q4', item1: 3767 },
        { y: '2012 Q1', item1: 6810 },
        { y: '2012 Q2', item1: 5670 },
        { y: '2012 Q3', item1: 4820 },
        { y: '2012 Q4', item1: 15073 },
        { y: '2013 Q1', item1: 10687 },
        { y: '2013 Q2', item1: 8432 }
      ],
      xkey: 'y',
      ykeys: ['item1'],
      labels: ['Item 1'],
      lineColors: ['#efefef'],
      lineWidth: 2,
      hideHover: 'auto',
      gridTextColor: '#fff',
      gridStrokeWidth: 0.4,
      pointSize: 4,
      pointStrokeColors: ['#efefef'],
      gridLineColor: '#efefef',
      gridTextFamily: 'Open Sans',
      gridTextSize: 10
    });
  }

  public ngOnDestroy() {
    //remove header
    this.breadServ.clear();
  }
}