const divs = document.getElementsByTagName('div');
let frameQty = 0;

for (let i = 0; i < divs.length; i++) {
    if (divs[i].getAttribute('class') === "uir-field-wrapper" && divs[i].getAttribute('data-searchable-id') === "custom191custom191custbody_frameqty") {
        const spans = divs[i].getElementsByTagName('span');

        for (let j = 0; j < spans.length; j++) {
            if (spans[i].getAttribute('class') === "uir-field inputreadonly") {
                frameQty = spans[i].innerHTML;
            }
        }
    }
}

alert(frameQty);