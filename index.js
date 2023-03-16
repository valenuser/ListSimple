const productName = document.querySelector("#productName");
const productPrice = document.querySelector("#productPrice");
const buttonSave = document.querySelector("#button-save");
const buttonCancel = document.querySelector("#button-cancel");
const productList = document.querySelector("#product-list");
const totalProduct = document.querySelector("#total");

let total = 0;

const createNewProduct = (name,price) =>{
    const ionCard = document.createElement('ion-card');
    const newProductItem = document.createElement('ion-card-content');
    newProductItem.textContent = name + ': $' + price;

    ionCard.appendChild(newProductItem);
    productList.appendChild(ionCard);
}

const clearInput = ()=>{
    productName.value = '';
    productPrice.value = '';
}

const isEmpty = str => !str.trim().length;


const alertProduct = ()=>{
    const alert = document.createElement('ion-alert');
    alert.header = 'TRASH';
    alert.subHeader = 'Important';
    alert.message = 'Debes añadir datos en el formulario';
    alert.buttons = ['cerrar'];

    document.body.appendChild(alert);
    return alert.present();
}



buttonSave.addEventListener('click',()=>{
    const name =  productName.value;
    const price = productPrice.value;

    if(isEmpty(name)|| price <= 0 || isEmpty(price)){
        alertProduct();
        return;
    }
    createNewProduct(name,price);
    total += +price;
    totalProduct.textContent = total;
    clearInput();
})

buttonCancel.addEventListener('click',()=>{
    clearInput();
})