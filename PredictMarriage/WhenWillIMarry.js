function randomDateGenerator(start, end){
    let startmilli = start.getTime();
    let endmilli = end.getTime();
    let randomMilli = startmilli + Math.random()*(endmilli-startmilli);
    let randomDate = new Date(randomMilli);
    return randomDate.toString();
}
function buttonClick(){
    let s = document.getElementById("date");
    let startDate = new Date("2024-03-07");
    let endDate = new Date("2034-01-01");
    s.innerText = "Congratulations!!! You will get married at "+ randomDateGenerator(startDate,endDate);
}