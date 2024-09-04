const heading=React.createElement("h1",{id:"heading"},"Hello World from React !");
console.log(heading);  //heading is an Object not a tag it contains various things see in console
//first parameter is type i.e what tag
//second and third parameters are props in object heading.
//second parameter is Attributes we can pass as many attributes 
//Third Paramter is children in heading object basically a text inside the tag h1;


const root=ReactDOM.createRoot(document.getElementById("root"));

//The heading Object is passed into the root element by using render method this method internally convert this object
//into the html syntax with tag as h1 and id as heading and content inside the tag is Hello World from React !
//basically look like this <h1 id="heading"> Hello Wolrd from React!</h1>

root.render(heading);  // remeber here we are passing object not tag . 