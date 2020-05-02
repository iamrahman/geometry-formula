# Geometry Formula

This npm package will help to play with all geometrical shape.

## Getting Started

Before working with this npm package we should install node in our system.

### Prerequisites

Before working with this npm package we should install node in our system. [Install Node](https://nodejs.org/en/download/). Just to confirm check the node version

```
node --version
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
npm install geometry-formula
```

End with an example of getting some data out of the system or using it for a little demo

## Example

Let's take an example of few geometrical shape.

### Circle

In case of circle we have to pass two parameters. First is type i.e. 'area' or 'parameter'.
Second paramter is the value of radius.

```
const Geometry = require('geometry-formula');

console.log(Geometry.circle.parameter(10));
console.log(Geometry.circle.area(10));
```

### Cone

In case of cone we have to pass three parameters. First is type i.e. 'radius', 'slant height' and 'height'

```
const Geometry = require('geometry-formula');

console.log(Geometry.cone.volume(radius, height)); 
console.log(Geometry.cone.lateralArea(radius, slant_height));
console.log(Geometry.cone.area(radius, height,slant_height));        
```

### Mean Mode and Median

In case of cone we have to pass three parameters. First is type i.e. 'radius', 'slant height' and 'height'

```
const Geometry = require('geometry-formula');

var arr = [4,5,2,1,6,3,7,8,4,2,2]

console.log( Geometry.mean(arr) )
console.log( Geometry.mode(arr) )
console.log( Geometry.meadian(arr) )     
```

## Authors

* **Inamur Rahman**  - [Github](https://github.com/iamrahman)

## License

This project is licensed under the ISC License.
