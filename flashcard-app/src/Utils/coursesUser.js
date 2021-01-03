import users from '../Data/users.json';

export function getCoursesUser(courses){
    return courses.map((course) => {
        let user = users.find(user => user.id === course.creatorId);
        return { ...course, user: user };
    });
}