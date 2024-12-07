import { useState } from "react";

type Link = {
  id: number;
  url: string;
  text: string;
};

const navLinks = [
  { id: 1, url: "some url1", text: "some text1" },
  { id: 2, url: "some url2", text: "some text2" },
  { id: 3, url: "some url3", text: "some text3" },
  { id: 4, url: "some url4", text: "some text4" },
];

function Component() {
  const [text, setText] = useState("hello");
  const [number, setNumber] = useState(7);
  const [list, setList] = useState<(string | number)[]>([]);
  const [links, setLinks] = useState<Link[]>(navLinks);

  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      {list.length > 0 && (
        <ul>
          {list.map((listContent) => (
            <li>{listContent}</li>
          ))}
        </ul>
      )}
      <h2>
        State is {text} and {number}
      </h2>
      <button
        className="btn btn-center"
        onClick={() => {
          setText("8");
          setNumber(23);
          setList(["this", "is", "a", "list", 10]);
          setLinks([...links, { id: 5, url: "new url", text: "new text" }]);
        }}
      >
        click me
      </button>
    </div>
  );
}
export default Component;
