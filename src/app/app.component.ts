import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'assignment';

  transformedData:any[]=[];
  samples:any[];

  constructor(private dataService:DataService){}

  ngOnInit()
  {
    this.samples=this.dataService.getData();
    this.transformData(this.samples[0].value);
  }

  transformData(data:any)
  {
    for(let key in data)
    {
      console.log(typeof(data[key]))
      if(typeof(data[key]) !== "object")
      {
        this.transformedData.push({key:this.convertCamelCaseToReadable(key),value:data[key],type:"plain"})
      }
      else
      {
        this.flatArray(data[key],key);
        
      }
    }
    console.log(this.transformedData);
  }

  changeData(event)
  {
    const index=this.samples.findIndex((ele)=> ele.sample ==event.value)
    this.transformedData=[];
    this.transformData(this.samples[index].value);
  }

  flatArray(items,keyname)
  {
    let include=[];
    console.log(items)
    for(let item of items)
    {
      let key=Object.keys(item)[0];
      if(typeof(item[key])  !== "object")
      {
        include.push({key:this.convertCamelCaseToReadable(key),value:item[key],type:"plain"});
      }
      else
      {
        include.push({key:this.convertCamelCaseToReadable(key),value:"icon",type:"plain"});
        this.transformedData.push({key:this.convertCamelCaseToReadable(keyname),type:"table",value:[...include]});
        return this.flatArray(item[key],key);
      }
    }
    this.transformedData.push({key:this.convertCamelCaseToReadable(keyname),type:"table",value:[...include]});
  }

  convertCamelCaseToReadable(value)
  {
    return value.replace(/([A-Z])/g, ' $1');
  }

}
