class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice, deleteFn) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;

        this.deleteFunction = deleteFn;

        this.createItem();
        this.updateItem();
    }

    createItem() {
        const template = document.querySelector('#item-template')
        const clone = template.content.cloneNode(true);
        this.element = clone.querySelector('.topsection')

        const btnDelete = this.element.querySelector('.remove');
        console.log(btnDelete);
        btnDelete.onclick = this.deleteItem.bind(this);
    };

    updateItem(item) {
        const itemImageElement = this.element.querySelector('.cinnamoncart');
        const itemDescription = this.element.querySelector('.cartdescriptionsmall');
        const itemPrice = this.element.querySelector('.cartdescription');

        itemImageElement.src = this.itemImageURL;
        itemDescription.innerText = this.itemDescription;
        itemPrice.innerText = this.basePrice;
    }
    deleteItem() {
        this.element.remove();
        this.deleteFunction(this);
    }
}

export { Roll }