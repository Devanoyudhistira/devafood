 export default function convertToMoney(price) {
    const number = Number(price.toString().replace(/\./g, ""));
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "CAD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
            currencyDisplay: "narrowSymbol",
        }).format(number);
    }