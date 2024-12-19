### Object and Array Access

1. Create a function called `getFirstPrepObservation` that takes in one parameter - `object` - which represents a student object like the one featured in the data.js file. This function should use the principles of object and array access to return a string of the text of the student's first observation from the Prep phase (assume all students will have a Prep observation) followed by the date the observation was made.

```javascript
// example output
getFirstPrepObservation(student); // => "He would benefit from asking more questions in class. - 08/23/2023"
```
2. Create a function called `getLastObservationAuthor` that takes in one parameter - `object` - which represents a student object like the one featured in the data.js file. This function use the principles of object and array access to return a string the of the name and role of the author of the student's last observation from the last phase they have attempted (assume the last object in the courses array is the last one chronologically). You SHOULD NOT HARDCODE

```javascript
// example output
getLastObservationAuthor(student); // => "Vannesa Jones - Student Success Coordinator"
```
3. Create a function called `getLastCourseNameAndStatus` that takes in one parameter - `object`, which represents a student object like the one featured in data.js. This function should use the principles of object and array access to return a string of the last course the user has taken followed by a dash and the course's status (assume the last course in the user's courses array is last chronologically).

```javascript
// example output
getLastCourseName(student); // => "Bootcamp - Passed"
```
4. Let's say we want to create a simpler student object. Create a function called `createSimplifiedObject` that takes in one parameter - `object` - which represents a student object like the one featured in data.js. This function should return a new object that looks like this...

```javascript
// example output
createSimpliefiedObject(student);
/*
RETURNS => 
{
    name: 'Nathan Coen',
    age: 36,
    location: "Atlanta, Georgia",
    courses: 2,
}
*/
```

5. Create a function called `createString` that takes in one parameter - `object` - which represents a student object like the one featured in data.js. This function should use the principles of object and array access to create a string like this:

```javascript
// example output
createString(student); // => "Nathan C.\nState & Time Zone: Georgia - EST\nDate of Last Course: 09/15/2023 (Bootcamp)\n"
/*
LOGS =>

Nathan C.
State & Time Zone: Georgia - EST,
Date of Last Course: 09/15/2023 (Bootcamp)
*/
```


