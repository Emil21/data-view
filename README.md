# Application

Application to analyse the data and identify their peak point. Line and area graph is used for this.

## Installation

- Clone the project
- Install the Dependencies
```
$ npm i 
```


- Run the web app
```
$ npm start
```

- Run the test cases
```
$ npm test
```  

## Technology 

- React JS - Frontend
- Jest - Unit testing


## Application behavior

The applicaiton is developed using create-react-app and then ejected. This web app helps to analyze the data using graphs. As for now, the data is hardcoded in the application. Later we can add a node or any other server to serve the data to front end. Data is hardcoded in the hook, so later an api call can be made from here instead.  

Based on the data the graphs are generated using D3.js. 
In the line graph, once you hover over the points, it displays the values for easy tracking. Also the points are coloured based on the value. If y value is greater than 10 then its red circle,else if its greater 8 then its yellow and if its lesser than that its white.

