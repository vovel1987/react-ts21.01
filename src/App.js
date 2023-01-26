import "./App.css";
import Content from "./components/Content/content";
// import Greeting from "./components/Greeting/Greeting";
import Header from "./components/Header/Header";
import Result from "./components/Result/result";
// const Greeting = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <p>Hello {props.name} {props.surname} {props.age ? (
//         <div>
//           {props.age}
//         </div>
//       ):""}</p>
//     </div>
//   );
// };

const App = () => {
  const course = "Frontend Pro";
  const part1 = "Вводные занятия по React";
  const tasks1 = 10;
  const part2 = "Использование React хуков";
  const tasks2 = 5;
  const part3 = "Использование библиотеки react-router-dom";
  const tasks3 = 15;
  const summe = tasks1 + tasks2 + tasks3;

  return (
    <div className="App">
      <div>
        <Header course={course} />
        <Content
          part1={part1}
          tasks1={tasks1}
          part2={part2}
          tasks2={tasks2}
          part3={part3}
          tasks3={tasks3}
        />
        <Result summe={summe} />
      </div>
      <div >

      <Header course={course} />
        <Content
          part1={part1}
          tasks1={tasks1}
          part2={part2}
          tasks2={tasks2}
          part3={part3}
          tasks3={tasks3}
        />
        <Result summe={summe} />

      </div>
      {/* <p>
        {part1} {tasks1}
      </p>
      <p>
        {part2} {tasks2}
      </p>
      <p>
        {part3} {tasks3}
      </p> */}

      {/* <p>Общее количество задач: 'N' - сюда вывести общее число тасков</p> */}

      {/* //   <h1>{course}</h1>
    //   <p>
    //    {part1}{tasks1}
    //   </p>
    //   <p>
    //     {part2} {tasks2}
    //   </p>
    //   <p>
    //     {part3}{tasks3}
    //   </p>
    //   <p>
    //     "Summe"
    //   </p> */}
      {/* <Greeting name="Anatolii" surname="CUvak" age="30"/>
      <Greeting name="Max" surname="iokjlkj" />
      <Greeting name="Arsen" surname="klkljfdls" /> */}
    </div>
  );
};

export default App;
