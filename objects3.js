const course = {
    coursename: "Javascript",
    price: "999",
    courseInstructor: "Yash"
}

// course.courseInstructor

const {courseInstructor: instructor} =  course;
console.log(instructor);

// {
//     "name":"Yash",
//     "coursename": "Javascript",
//     "price": "999",
// }