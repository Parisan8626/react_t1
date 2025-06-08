export default function Render() {
  let frutes = ["orenge", "apple", "banana"];
  return (
    <ul>
      {frutes.map((frutes) => (
        <li>{frutes}</li>
      ))}
    </ul>
  );
}
