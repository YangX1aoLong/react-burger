const urlData = "https://norma.nomoreparties.space/api/ingredients";
const defaultSelectedIngredients = (data) => {
    let selectData = [];
    selectData = ([...selectData, data.find(i => i.type === "bun")]);
    selectData = ([...selectData, data.find(i => i.type === "sauce")]);
    selectData = [...selectData, ...data.filter(i => i.type === "main")];
    for (let i = 0; i < selectData.length; i++) selectData[i].count = 1;
    return selectData;
};
export const getData = (ingerdientList, selectedIngredients, status, setStatus) => {
    setStatus({ ...status, isLoading: true })
    fetch(urlData)
        .then((res) => res.json())
        .then((data) => {
            ingerdientList(data.data);
            selectedIngredients(defaultSelectedIngredients(data.data));
        })
        .catch((e) => setStatus({ ...status, error: e }))
        .finally(setStatus({ ...status, isLoading: false }));
};

