const App = () => {
  const Course = ({ course }) => {
    const total = course.parts.reduce((sum, part) => sum + part.exercises, 0);
    console.log("total", total);
    return (
      <div>
        <h2>{course.name}</h2>
        {course.parts.map((part) => (
          <p key={part.id}>
            {part.name} {part.exercises}
          </p>
        ))}
        <b>total of {total} exercises</b>
      </div>
    );
  };

  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
