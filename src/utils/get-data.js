const urlData = "https://norma.nomoreparties.space/api";
export const fetchIngredients = () => {    
    return fetch(`${urlData}/ingredients`)
      .then(checkReponse)
      .then((data) => {
         if (data?.success) return data.data;
         return Promise.reject(data);
      });
};

const checkReponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const fetchOrder = (data) =>{
return fetch(`${urlData}/orders`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  body: JSON.stringify({
    ingredients: data,
  }),
})
  .then(checkReponse)
  .then((data) => {
    if (data?.success) return data;
    return Promise.reject(data);
  });
}
