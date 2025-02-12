import { useState } from "react";

import { createSuperhero } from "../services/superheroesService";

export function SuperheroesForm({
  onSuperheroCreated,
}: {
  onSuperheroCreated: () => void;
}) {
  const [form, setForm] = useState({ name: "", superpower: "", humility: 1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "humility" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await createSuperhero(form);
      setMessage("Superhero created successfully! 🚀");
      setForm({ name: "", superpower: "", humility: 1 });
      onSuperheroCreated();
    } catch (error) {
      console.error("Error creating superhero:", error);
      setMessage("Failed to create superhero. ❌");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Create Superheroes</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          style={{ padding: "8px" }}
        />
        <input
          type="text"
          name="superpower"
          value={form.superpower}
          onChange={handleChange}
          placeholder="Superpower"
          style={{ padding: "8px" }}
        />
        <input
          type="number"
          name="humility"
          value={form.humility}
          onChange={handleChange}
          placeholder="Humility Score"
          style={{ padding: "8px" }}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          style={{ opacity: isSubmitting ? 0.7 : 1, backgroundColor: "green" }}
        >
          {isSubmitting ? "Creating..." : "Create Superhero"}
        </button>
        {message && (
          <p style={{ color: message.includes("❌") ? "red" : "green" }}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
