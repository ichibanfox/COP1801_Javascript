const output = document.getElementById("output");

// Prompt for service amount
let serviceAmount = prompt("Enter the total dollar amount of the service (between $5 and $500):");

serviceAmount = parseFloat(serviceAmount);
let serviceQuality = prompt("Was the service great, ok, or poor?").toLowerCase();

function isValidQuality(quality) {
    return quality === "great" || quality === "ok" || quality === "poor";
}
function isValidAmount(amount) {
    return !isNaN(amount) && amount >= 5 && amount <= 500;
}
function calculateTip(amount, quality) {
    let tipRate;

    if (quality === "great") {
        tipRate = 0.20;
    } else if (quality === "ok") {
        tipRate = 0.15;
    } else if (quality === "poor") {
        tipRate = 0.10;
    }

    return amount * tipRate;
}

// Validate inputs
if (!isValidQuality(serviceQuality)) {
    output.innerHTML = `<p><strong>Error:</strong> Invalid service quality entered. Please refresh and enter "great", "ok", or "poor".</p>`;
} else if (!isValidAmount(serviceAmount)) {
    output.innerHTML = `<p><strong>Error:</strong> Invalid service amount. Please refresh and enter a value between $5.00 and $500.00.</p>`;
} else {
    const tip = calculateTip(serviceAmount, serviceQuality);

// Display result
    output.innerHTML = `
        <p>For a service amount of <strong>$${serviceAmount.toFixed(2)}</strong>,</p>
        <p>and a service quality of "<strong>${serviceQuality}</strong>",</p>
        <p>you should leave a tip of <strong>$${tip.toFixed(2)}</strong>.</p>
    `;
}