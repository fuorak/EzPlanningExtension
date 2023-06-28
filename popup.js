import { processHTML } from './content.js';

const salesInput = document.getElementById("salesOrderInput");
const orderConfirmationInput = document.getElementById("orderConfirmationInput");
const ezShipDateInput = document.getElementById("ezShipDateInput");
const frameQtyInput = document.getElementById("frameQtyInput");
const doorQtyInput = document.getElementById("doorQtyInput");
const programmingInitialsInput = document.getElementById("programmingInitialsInput");
const doorInitialsInput = document.getElementById("doorInitialsInput");
const orderNotesInput = document.getElementById("orderNotesInput");

/*
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === "variables") {
        var salesOrder = request.data.salesOrder;
        var orderConfirmation = request.data.orderConfirmation;
        var ezShipDate = request.data.ezShipDate;

        alert(salesOrder);
        console.log(salesOrder); // Access the value of variable1 from the message payload
        console.log(orderConfirmation); // Access the value of variable2 from the message payload
    }
});
*/

processHTML(document);




salesInput.innerHTML = salesOrder;
orderConfirmationInput.innerHTML = orderConfirmation;
ezShipDateInput.innerHTML = ezShipDate;
frameQtyInput.innerHTML = frameQty;
doorQtyInput.innerHTML = doorQty;
programmingInitialsInput.innerHTML = programmingInitials;
doorInitialsInput.innerHTML = doorInitials;
orderNotesInput.innerHTML = orderNotes;