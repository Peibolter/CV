let previousTitle=document.title;

window.addEventListener('blur', ()=>{
    previousTitle=document.title;
    document.title='Hope you enjoyed!😊'
})

window.addEventListener('focus',()=>{
    document.title=previousTitle
})
