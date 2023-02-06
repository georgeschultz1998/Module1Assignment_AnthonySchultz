// Function replace Template
module.exports = (htmlStr, course)=> {
    let output = htmlStr.replace(/{%NAME%}/g, course.courseName);
    output = output.replace(/{%IMAGE%}/g, course.image);
    output = output.replace(/{%FROM%}/g, course.from);
    output = output.replace(/{%INSTRUCTOR%}/g, course.instructor);
    output = output.replace(/{%CREDITS%}/g, course.credits);
    output = output.replace(/{%DESCRIPTION%}/g, course.description);
    output = output.replace(/{%ID%}/g, course.id);
    return output;
}