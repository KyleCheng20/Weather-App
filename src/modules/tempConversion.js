function fToC(f){
    return Math.round((f - 32) * 5/9);
}

export function formatTemp(temp, unit){
    return unit === "C" ? `${fToC(temp)} °C` : `${Math.round(temp)} °F`;
}
