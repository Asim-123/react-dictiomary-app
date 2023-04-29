const getData = async () => {
    return await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello", {
      method: "GET",
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };
  
export default getData