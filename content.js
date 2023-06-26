const divs = document.getElementsByTagName('div');

let frameQty = 0;
let doorQty = 0;
let salesOrder = "SO-NONE";
let orderConfirmation = "THE FUTURE";
let ezShipDate = "THE FUTURE";
let programmingInitials = "T0";
let doorInitials = "NONE";
let orderNotes = "AHHH";


/*
 * This loop gets frame and door qty
 */ 
for (let i = 0; i < divs.length; i++) {
    //frame qty
    if (divs[i].getAttribute('class') === "uir-field-wrapper" && divs[i].getAttribute('data-searchable-id') === "custom191custom191custbody_frameqty") {
        const spans = divs[i].getElementsByTagName('span');

        for (let j = 0; j < spans.length; j++) {
            if (spans[j].getAttribute('class') === "uir-field inputreadonly") {
                frameQty = spans[j].innerHTML;
            }
        }
    }

    //door qty
    if (divs[i].getAttribute('class') === "uir-field-wrapper uir-inline-tag" && divs[i].getAttribute('data-searchable-id') === "custom191custom191custbody_doorquantity") {
        const spans = divs[i].getElementsByTagName('span');

        for (let j = 0; j < spans.length; j++) {
            if (spans[j].getAttribute('class') === "uir-field inputreadonly") {
                doorQty = spans[j].innerHTML;
            }
        }
    }

    //programming initials
    if (divs[i].getAttribute('class') === "uir-field-wrapper" && divs[i].getAttribute('data-searchable-id') === "custom191custom191custbody_programmingneeded") {
        const spans = divs[i].getElementsByTagName('span');

        for (let j = 0; j < spans.length; j++) {
            if (spans[j].getAttribute('class') === "uir-field inputreadonly") {
                programmingInitials = spans[j].innerHTML;
            }
        }
    }

    //door initials
    if (divs[i].getAttribute('class') === "uir-field-wrapper" && divs[i].getAttribute('data-searchable-id') === "custom191custom191custbody_nesting") {
        const spans = divs[i].getElementsByTagName('span');

        for (let j = 0; j < spans.length; j++) {
            if (spans[j].getAttribute('class') === "uir-field inputreadonly") {
                doorInitials = spans[j].innerHTML;
            }
        }
    }

    //Order confirmation
    if (divs[i].getAttribute('class') === "uir-field-wrapper" && divs[i].getAttribute('data-searchable-id') === "shippingshippingcustbody_ezconceptorderconfirmation") {
        const spans = divs[i].getElementsByTagName('span');

        for (let j = 0; j < spans.length; j++) {
            if (spans[j].getAttribute('class') === "uir-field inputreadonly") {
                orderConfirmation = spans[j].innerHTML;
            }
        }
    }

    //Ez ship date
    if (divs[i].getAttribute('class') === "uir-field-wrapper" && divs[i].getAttribute('data-searchable-id') === "shippingshippingcustbody_ezconceptshipdate1") {
        const spans = divs[i].getElementsByTagName('span');

        for (let j = 0; j < spans.length; j++) {
            if (spans[j].getAttribute('class') === "uir-field inputreadonly") {
                ezShipDate = spans[j].innerHTML;
            }
        }
    }

    //Order notes
    if (divs[i].getAttribute('class') === "uir-field-wrapper uir-long-text" && divs[i].getAttribute('data-searchable-id') === "custom191custom191custbody_ordernotes") {
        const spans = divs[i].getElementsByTagName('span');

        for (let j = 0; j < spans.length; j++) {
            if (spans[j].getAttribute('class') === "uir-field inputreadonly uir-resizable") {
                orderNotes = spans[j].innerHTML;
            }
        }
    }

    //sales order
    if (divs[i].getAttribute('class') === "uir-page-title-secondline") {
        const spans = divs[i].getElementsByTagName('div');

        for (let j = 0; j < spans.length; j++) {
            if (spans[j].getAttribute('class') === "uir-record-id") {
                salesOrder = spans[j].innerHTML;
            }
        }
    }
}

const salesInput = document.getElementById("salesOrderInput");
const orderConfirmationInput = document.getElementById("orderConfirmationInput");
const ezShipDateInput = document.getElementById("ezShipDateInput");
const frameQtyInput = document.getElementById("frameQtyInput");
const doorQtyInput = document.getElementById("doorQtyInput");
const programmingInitialsInput = document.getElementById("programmingInitialsInput");
const doorInitialsInput = document.getElementById("doorInitialsInput");
const orderNotesInput = document.getElementById("orderNotesInput");

salesInput.innerHTML = salesOrder;
orderConfirmationInput.innerHTML = orderConfirmation;
ezShipDateInput.innerHTML = ezShipDate;
frameQtyInput.innerHTML = frameQty;
doorQtyInput.innerHTML = doorQty;
programmingInitialsInput.innerHTML = programmingInitials;
doorInitialsInput.innerHTML = doorInitials;
orderNotesInput.innerHTML = orderNotes;