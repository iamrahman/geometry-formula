# Geometry Tool

This npm package will help to play with all geometrical shape.

## Getting Started

Before working with this npm package we should install node in our system.

### Prerequisites

Before working with this npm package we should install node in our system. Click to install [Node](https://nodejs.org/en/download/). Just to confirm check the node version

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

console.log(Geometry.circle('parameter',10));
console.log(Geometry.circle('area',10));
```

### Rectangle

In case of circle we have to pass two parameters. First is type i.e. 'area' or 'parameter'.
Second paramter is the value of lenght and third is breadth.

```
const Geometry = require('geometry-formula');

console.log(Geometry.rectangle('parameter',10,12));
console.log(Geometry.rectangle('area',10,12));
```

## Authors

* **Inamur Rahman**  - [Github](https://github.com/iamrahman)

## License

This project is licensed under the ISC License.
