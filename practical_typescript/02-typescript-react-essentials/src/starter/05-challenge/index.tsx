type Basic = {
  type: "basic" | "advanced";
  name: string;
  email?: string;
};

// type Advanced = {
//   type: "advanced";
//   name: string;
//   email: string;
// };

function Component({ type, name, email }: Basic) {
  return type === "advanced" ? (
    <div className="alert alert-danger">
      {name}
      <br />
      {email}
    </div>
  ) : (
    <div className="alert alert-success">{name}</div>
  );
}
export default Component;
