export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "https://api.sheety.co/8d1a2ed28c851666f5616d1c86086465/productsData/products",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer evara123",
        },
      }
    );
    const data = await response.json();

    resolve(data["products"]);
  });
}

export function fetchProductsByFilters(filter) {
  // filter = {"category":["color","Materials"]}
  let queryString = "";
  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`;
  }

  return new Promise(async (resolve) => {
    const response = await fetch(
      "https://api.sheety.co/8d1a2ed28c851666f5616d1c86086465/productsData/products?" +
        queryString,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer evara123",
        },
      }
    );
    const data = await response.json();
    resolve(data["products"]);
  });
}

export function fetchAllColors() {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "https://api.sheety.co/8d1a2ed28c851666f5616d1c86086465/productsData/colors",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer evara123",
        },
      }
    );
    const data = await response.json();
    console.log("data", data);

    resolve(data);
  });
}

export function fetchAllMaterials() {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "https://api.sheety.co/8d1a2ed28c851666f5616d1c86086465/productsData/materials",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer evara123",
        },
      }
    );
    const data = await response.json();

    resolve(data);
  });
}
