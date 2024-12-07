import { useState } from "react";

type Person = {
  name: string;
};

function Component() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const formData = new FormData(e.currentTarget);
    // const formData = new FormData(e.target as HTMLFormElement);
    console.log(formData);
    const data = Object.fromEntries(formData);
    console.log(data);
    const text = formData.get("text") as string;
    const person: Person = { name: text };
  };

  return (
    <section>
      <h2>events Example</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          name="text"
          type="text"
          className="form-input mb-1"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <input
          name="email"
          type="email"
          value={email}
          className="form-input mb-1"
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </section>
  );
}
export default Component;
