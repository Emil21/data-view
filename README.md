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

On running th application using npm start script , the web page will open up in your default browser. You can also manually access it using the following link http://localhost:3000/ 

Based on the data the graphs are generated using D3.js. 
In the line graph, once you hover over the points, it displays the values for easy tracking. Also the points are coloured based on the value. If y value is greater than 10 then it's red circle,else if it's greater than 8 then its yellow and if its lesser than 8 it's white.

Flexbox is used to make the app responsive.

Test cases are written at root level. I could write in depth test cases after investing some more time.

