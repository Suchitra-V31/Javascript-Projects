const arr = [
    {
        img_tag : "C:\\Users\\018055\\Pictures\\doaremon.jpg",
        show_name : "DORAEMON",
        reviews : "This has been my favorite show since childhood. The way Doraemon protected Nobita from all hurdles I always longed to have one such friend like him.No matter how much they fought they all stood together."
    },
    {
        img_tag : "C:\\Users\\018055\\Pictures\\shinchan.jpg",
        show_name : "SHINCHAN",
        reviews : "Shin chan one of the best cartoon in almost every one childhood ,this cartoon always make me laugh and happy , I watched so many cartoons but this one is my best cartoon show,I remmember why I am hungry I mom give me food and and I stilll watching chin chan my mom said off tv and eat food then I am crying and say plss mom dont off tv I will eat food but plss dont off tv , I have so many lovely memories with is cartoon I love it just love it ."
    },
    {
        img_tag : "C:\\Users\\018055\\Pictures\\supersuji.jpg",
        show_name : "SUPER SUJI",
        reviews : "I'm 21 now. Chutti TV made my childhood days pleasant. This is one of my favorite cartoons of that time.  Happy to see this after a long time.The magic stick that she holds always makes me fly along with her.I have also tried this in my home with a stick and used to play with my friends.."
    },
    {
        img_tag : "C:\\Users\\018055\\Pictures\\doraBuji.jpg",
        show_name : "DORA BUJI",
        reviews : "Famous Cartoon show loved by all kids."

    },
    {
        img_tag : "C:\\Users\\018055\\Pictures\\ninjahatori.jpg",
        show_name : "NINJA HATORI",  
        reviews : "Love this drama very muchhhhh"     
    }
]
var img = document.getElementById("img_tag");
var showName = document.getElementById("show_name");
var reviews = document.getElementById("review");
var prevBtn = document.getElementById("btn1");
var nextBtn = document.getElementById("btn2");
var randBtn = document.getElementById("btn3");

let i=0;
window.addEventListener('DOMContentLoaded',function() {
    img.src = arr[i].img_tag;
    showName.innerText = arr[i].show_name;
    reviews.innerText = arr[i].reviews;
});

function showData(name){
    const item = arr[name];
    img.src = item.img_tag;
    showName.innerText = item.show_name;
    reviews.innerText =item.reviews;
}

nextBtn.addEventListener('click',function(){
    i++;
    if(i>arr.length-1){
        i=0;
    }
    showData(i);
})
prevBtn.addEventListener('click',function(){
    i--;
    if(i<0){
        i=arr.length-1;
    }
    showData(i);
})
randBtn.addEventListener('click',function(){
    i = Math.floor(Math.random() * arr.length);
    showData(i);
})