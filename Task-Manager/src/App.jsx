import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="bg-dark text-white p-3">
        <div class="container text-center">
          <div class="row">
            <div class="col-10">
              <input
                class="form-control"
                type="text"
                placeholder="Add Something to the page.."
              />
            </div>
            <div class="col-2">
              <button class="btn btn-primary">Add</button>
            </div>
          </div>
          <div class="Tasks">
            <div ><input type="radio" />Do Home Work</div>
            <div><input type="radio" />Do Class Work</div>
            <div><input type="radio" />Do Assignment</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
