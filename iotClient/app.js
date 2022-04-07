let collectedData = [];

fetch("http://localhost:3000/devices")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    return data;
  });
