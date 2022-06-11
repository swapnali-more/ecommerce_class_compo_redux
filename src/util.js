export default function CurrencyFormat(num){
    return "$" + Number(num.toFixed(1)).toLocaleString() + "";
}