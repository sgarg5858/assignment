import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

   data1=[
    {"sample":"1",
      "value":{
      "nodeOne": "John Doe",
      "nodeTwo": "05/06/2020",
      "nodeThree": 777,
      "nodeFour": [
          {"elementOne": "B Street"},
          {"elementTwo": "City"},
          {"elementThree": "Area - 591323"},
          {"elementFour": [
              {"elementFive": "06/07/2020"},
              {"elementSix": 123}
          ]}
      ]
  }
},
     
{
  "sample":"2",
  value:
{
    "nodeOne": "John Doe",
    "nodeTwo": "05/06/2020",
    "nodeThree": 777,
    "nodeFour": [
        {"elementOne": "B Street"},
        {"elementTwo": "City"},
        {"elementThree": "Area - 591323"},
        {"elementFour": [
            {"elementFive": "06/07/2020"},
            {"elementSix": 123},
            {"elementSeven":[
            {"elementEight": "06/07/2020"},
            {"elementNine": 123},
            ]}
        ]}
    ]
}
},
{
  "sample":"3",
  value:
{
    "nodeOne": "John Doe",
    "nodeTwo": "05/06/2020",
    "nodeThree": 777,
    "nodeFour": [
        {"elementOne": "B Street"},
        {"elementTwo": "City"},
        {"elementThree": "Area - 591323"},
        {"elementFour": [
            {"elementFive": "06/07/2020"},
            {"elementSix": 123},
            {"elementSeven":[
            {"elementEight": "06/07/2020"},
            {"elementNine": 123},
            ]}
        ]}
    ],
    "nodeFive": [
      {"elementEleven": "B Street"},
      {"elementTweleve": [
          {"elementThirteen": "06/07/2020"}
      ]}
  ]
}
}
]

  public getData()
  {
    return this.data1;
  }
}
