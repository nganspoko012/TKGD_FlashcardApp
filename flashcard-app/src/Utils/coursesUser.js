import users from '../Data/users.json';

export function getCoursesUser(courses){
    return courses.map((course) => {
        let user = users.find(user => user.id === course.userId);
        return { ...course, user: user };
    });
}