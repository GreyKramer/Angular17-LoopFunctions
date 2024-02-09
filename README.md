
<a href="#">
  <h1 align="center">Grey Kramer's Angular17 Looping Project</h1>

</a>

<p align="center">
  A dive into Angular @for, tracking and more
</p>


## About the Project
This project covers Agular 17's new @for looping functionality. 
Check app.component for @for and my comments towards its functionality and requirements to work correctly.


@for is useful for compilation and how the DOM is rendered and updated. At any moment that a list being iterated is changed, Angular will have a pervious list and will receive a new list to update the page. Angular will start diffing the two lists, determining the difference between the perious version and the new version of the data being rendered. Based on that diffing mechanism Angular will ditermine what needs to be updated and what remains unchanged. Angular can only do that if it can uniquly identify each element. Which is why we are required to add a tracking function to the @for.

A tracking function uniquley identifies each element of a list and unlike the previous ngFor tracking, @for tracking is manditory. Now that is it required, it is important to know how to use it. In this project we are using the tracking funciton for an array of course objects. The unique identifier on each course iterated is the course.id. In certain situations it is not as simple as tracking the course.id. This project also covers how to create a function to track several properties to create a unique identifier. As a last resort you can also track by using $index

Optional properties of @for include:
   * $index - contains the index of the element currently iterated 
   * $count - contains the number of elements in the iterable array
   * $first - identifies the first element in an array  
   * $last - identifies the last element in an array 
   * $odd - identifies odd elements in an array
   * $even - identifies even elements in an array

[Angular.io @for reference docs](https://angular.io/api/core/for)

## About the Author

I am Grey Kramer, a web developer with years of experience in JavaScript, TypeScript, Node, React, and more.

## Contact and Links

- **LinkedIn:** [Follow Me on LinkedIn](https://www.linkedin.com/in/grey-kramer/)
- **GitHub:** [Follow Me on Github](https://github.com/GreyKramer)
- **Twitter:** [@Grey_Kramer](https://twitter.com/Grey_Kramer)
