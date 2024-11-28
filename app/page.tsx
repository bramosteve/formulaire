"use client"; // Nécessaire pour utiliser les événements client

import { useRef } from "react";

export default function SimpleForm() {
  const nameRef = useRef<HTMLInputElement>(null); // Référence pour le champ "name"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Empêche le rechargement de la page
    const name = nameRef.current?.value || "Anonymous"; // Récupère la valeur du champ
    alert(`Hello, ${name}! Your form was submitted successfully.`);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h1>Simple Formulaire</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" style={{ display: "block", marginBottom: "10px" }}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          ref={nameRef} // Associer la référence au champ
          placeholder="Enter your name"
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
         <label htmlFor="name" style={{ display: "block", marginBottom: "10px" }}>
          Prenom:
        </label>
        <input
          type="text"
          id="name"
          ref={nameRef} // Associer la référence au champ
          placeholder="Enter your name"
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
         <label htmlFor="name" style={{ display: "block", marginBottom: "10px" }}>
          Age:
        </label>
        <input
          type="text"
          id="name"
          ref={nameRef} // Associer la référence au champ
          placeholder="Enter your name"
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
         <label htmlFor="name" style={{ display: "block", marginBottom: "10px" }}>
          Adresse:
        </label>
        <input
          type="text"
          id="name"
          ref={nameRef} // Associer la référence au champ
          placeholder="Enter your name"
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
         <label htmlFor="name" style={{ display: "block", marginBottom: "10px" }}>
          Email:
        </label>
        <input
          type="text"
          id="name"
          ref={nameRef} // Associer la référence au champ
          placeholder="Enter your name"
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
