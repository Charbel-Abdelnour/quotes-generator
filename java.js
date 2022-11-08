let quote = document.querySelector(".Quotes");
let auther = document.querySelector(".Auther");
let btn = document.querySelector(".btn");

const Quotes = [{
    quote:"You know, Hobbes, some days even my lucky rocketship underpants don't help.",
    auther:'―Bill Watterson'
},{
    quote:"Even if we don't have the power to choose where we come from, we can still choose where we go from there.",
    auther:"—Stephen Chbosky"
},{
    quote:"And now that you don't have to be perfect, you can be good.",
    auther:'—John Steinbeck'
},{
    quote:'Life is never fair, and perhaps it is a good thing for most of us that it is not.',
    auther:'—Oscar Wilde'
},{
    quote:'Outside the windows the day was bright: golden sunshine, blue sky, pleasant wind... I wanted to punch the happy day in the face, grab it by the hair, and beat it until it told me what the hell it was so happy about.',
    auther:'―Ilona Andrews'
},{
    quote:"I've had the sort of day that would make St. Francis of Assisi kick babies.",
    auther:' ―Douglas Adams'
},{
    quote:'Everything is hard before it is easy.',
    auther:'—Johann Wolfgang von Goethe'
},{
    quote:'Anyone who has never made a mistake has never tried anything new',
    auther:'—Albert Einstein'
},{
    quote:"Don't let your happiness depend on something you may lose.'",
    auther:'—C.S. Lewis'
},]

btn.addEventListener('click',function(){

    let random =Math.floor(Math.random() * Quotes.length);

    quote.innerHTML = Quotes[random].quote
    auther.innerHTML = Quotes[random].auther

})