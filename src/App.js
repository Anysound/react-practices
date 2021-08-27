import "./App.css";
import Modal from "./Modal";
import { useState } from "react";

function App() {
  const [modalActive, setModalActive] = useState(true);
  return (
    <div className="App">
      <main>
        <button className="open-btn" onClick={() => setModalActive(true)}>
          Открыть модальное окно
        </button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          obcaecati ratione, beatae veritatis voluptatum facere quas. Aspernatur
          provident, delectus saepe corporis illum velit eos tenetur magni, eius
          beatae vero illo doloribus accusamus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          obcaecati ratione, beatae veritatis voluptatum facere quas. Aspernatur
          provident, delectus saepe corporis illum velit eos tenetur magni, eius
          beatae vero illo doloribus accusamus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          obcaecati ratione, beatae veritatis voluptatum facere quas. Aspernatur
          provident, delectus saepe corporis illum velit eos tenetur magni, eius
          beatae vero illo doloribus accusamus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          obcaecati ratione, beatae veritatis voluptatum facere quas. Aspernatur
          provident, delectus saepe corporis illum velit eos tenetur magni, eius
          beatae vero illo doloribus accusamus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          obcaecati ratione, beatae veritatis voluptatum facere quas. Aspernatur
          provident, delectus saepe corporis illum velit eos tenetur magni, eius
          beatae vero illo doloribus accusamus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          obcaecati ratione, beatae veritatis voluptatum facere quas. Aspernatur
          provident, delectus saepe corporis illum velit eos tenetur magni, eius
          beatae vero illo doloribus accusamus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          obcaecati ratione, beatae veritatis voluptatum facere quas. Aspernatur
          provident, delectus saepe corporis illum velit eos tenetur magni, eius
          beatae vero illo doloribus accusamus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          obcaecati ratione, beatae veritatis voluptatum facere quas. Aspernatur
          provident, delectus saepe corporis illum velit eos tenetur magni, eius
          beatae vero illo doloribus accusamus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          obcaecati ratione, beatae veritatis voluptatum facere quas. Aspernatur
          provident, delectus saepe corporis illum velit eos tenetur magni, eius
          beatae vero illo doloribus accusamus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          obcaecati ratione, beatae veritatis voluptatum facere quas. Aspernatur
          provident, delectus saepe corporis illum velit eos tenetur magni, eius
          beatae vero illo doloribus accusamus!
        </p>
      </main>
      <Modal active={modalActive} setActive={setModalActive}>
        <p>32323</p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab velit facilis quisquam exercitationem quia? Debitis, nulla est sunt provident corrupti tempore, beatae voluptatum nisi consectetur, alias voluptas vel aut deleniti itaque. Deleniti?
      </Modal>
    </div>
  );
}

export default App;
