let arrayTitle = [];
let arrayStock = [];

async function getDummyData(){
    const apiUrl = 'https://dummyjson.com/products'

    const response = await fetch(apiUrl);

    const apiData = await response.json()

    const products = apiData.products;

    console.log(products)

    const modelo = products.map((nombre) => nombre.title).slice(0, 17)

    const cantidad = products.map((cantidad) => cantidad.stock)

    

    arrayTitle = modelo;

    arrayStock = cantidad;

    
}

export {arrayTitle, arrayStock, getDummyData}