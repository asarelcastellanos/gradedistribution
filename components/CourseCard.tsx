export default function CourseCard({ course, instructor, section }) {
    return (
        <div>
            <h1>Course: {course}</h1>
            <p>Instructor: {instructor}</p>
            <p>Section No: {section}</p>
        </div>
    )
}