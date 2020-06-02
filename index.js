const btns=document.querySelectorAll('.question-btn');


btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const question=e.currentTarget.parentElement.parentElement;
        
        const questionsAsked=document.querySelectorAll('.question');
      
        questionsAsked.forEach(function(item){
            
            if(item!==question){
                item.classList.remove('show-text');
            }
        })

        question.classList.toggle('show-text');
        
    })
})
