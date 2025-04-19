import React from "react";

function AgeForm() {
  const [age, setAge] = React.useState(0);
  const [message, setMessage] = React.useState("");
  const successMessage = "Selamat datang!";
  const errorMessage = "Kamu belum cukup umur!";

  const checkAge = () => {
    if (age >= 18) {
      setMessage(successMessage);
    } else {
      setMessage(errorMessage);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <h1>Masukkan Umur Anda</h1>
      <input
        type="text"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      {/* <p>{age >= 18 ? successMessage : errorMessage}</p> */}
      <br />
      <button onClick={checkAge}>Check Umur</button>
      <br />
      <h3>{message}</h3>
    </div>
  );
}

export default AgeForm;
