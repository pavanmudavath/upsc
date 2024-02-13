//querySelecter() method in Html is used to  return the first element that matches a specified css selector(s) in the document.
//querySelectorAll() is return a collections of an elements.child elements that matches a specified CSS selector(s).

const slides=document.querySelectorAll(".slide");
var counter=0;

slides.forEach((slide,index)=>{
    slide.style.left=`${index*100}%`
}
)

const goPrev=()=>{
    counter--;
    slideImage();
}

const goNext=()=>{
    counter++;
    if(counter>=slides.length){
    counter=0;
}
    slideImage();
}

const slideImage =()=>{
    slides.forEach((slide)=>{
        try{
            slide.style.transform=`translateX(-${counter * 100}%)`;
        }catch(error){
            console.log("error setting transform property:",error);
        }
        }
    )
}

const showSlider=(index)=>{
    if(index>=0 && index<slides.length){
        counter=index;
        slideImage();
    }
}

const startSlideShow=()=>{
    intervalId=setInterval(goNext,3000);
}

startSlideShow();