import type { Superhero } from "../types/superhero";

type SuperheroesListProps = {
  data: Superhero[];
};

export function SuperheroesList({ data }: SuperheroesListProps) {
  return (
    <div>
      <h1>Superheroes List</h1>
      {data.map((item) => (
        <div key={item.id}>
          <p>
            <strong>Name:</strong> {item.name}
          </p>
          <p>
            <strong>Superpower:</strong> {item.superpower}
          </p>
          <p>
            <strong>Humility:</strong> {item.humility}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
}
