const options = {};

export const fetchData = async () => {
  const url =
    "https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned?activity=skiing";
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
