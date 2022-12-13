import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../services";

function PostSquared() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const user = useSelector((state) => state.user.value)
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPost(user.usuario, title, text)
  };

  return (
    <div className="flex items-center justify-center border m-2">
      <form className="m-4 w-full" onSubmit={handleSubmit}>
        <div className="mb-6">
          <div className="">
            <label
              className="block w-full text-gray-500 font-bold mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Title
            </label>
          </div>
          <div className="">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="title"
              name="title"
              type="title"
              value={title || ""}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-6">
          <div className="">
            <label
              className="block w-full text-gray-500 font-bold mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Mensaje
            </label>
          </div>
          <div className="">
            <textarea
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="text"
              name="text"
              type="text"
              value={text || ""}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full">
          <div className="w-1/6">
            <button
              className="shadow w-full bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PostSquared;
