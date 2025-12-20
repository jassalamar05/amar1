import { useReducer, useState } from "react";
import icon from "../assets/img/8922789.png";

export default function TodosAmar() {

  // REDUCER
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return [...state, action.text];

      case "remove":
        return state.filter((_, i) => i !== action.index);

      case "clear":
        return [];

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState("");

  const changeEvent = () => {
    if (!text.trim()) return;
    dispatch({ type: "add", text });
    setText("");
  };

  const clearEvent = () => {
    dispatch({ type: "clear" });
  };

  return (
    <section className="flex items-center justify-center bg-sky-500 min-h-screen px-4">

      {/* CARD */}
      <div className="
        bg-gradient-to-br from-sky-600 to-pink-500 
        w-full sm:w-[90%] md:w-[70%] lg:w-[40%]
        rounded-xl pb-6
      ">

        {/* HEADER */}
        <div className="flex items-center justify-center pt-8 relative px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
            TO <span className="text-pink-700">DO</span> LIST
          </h1>

          <button
            onClick={clearEvent}
            className="
              absolute right-4
              h-10 w-10 sm:h-12 sm:w-12
              bg-red-500 text-white rounded-full
            "
          >
            🗑️
          </button>
        </div>

        {/* INPUT */}
        <div className="
          flex flex-col sm:flex-row
          items-center justify-center
          gap-4 pt-8 px-4
        ">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add To Do"
            className="
              w-full sm:w-80
              h-10 px-4 rounded
            "
          />

          <img
            src={icon}
            alt="add todo"
            onClick={changeEvent}
            className="
              h-10 w-10 cursor-pointer
              hover:scale-125 transition duration-300
            "
          />
        </div>

        {/* TODO LIST */}
        <ul className="mt-6 max-h-[300px] overflow-y-auto px-4 space-y-2">
          {state.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-center gap-2"
            >
              <div className="
                bg-gray-300 w-full sm:w-80
                min-h-[32px] px-2 text-center
                break-words hover:bg-gray-500
              ">
                {item}
              </div>

              <button
                onClick={() => dispatch({ type: "remove", index })}
                className="hover:scale-150 transition h-8 w-8"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
