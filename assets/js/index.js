


console.log(document);



const botaoTrailer = document.querySelector('.botao-trailer') ;

const modal = document.querySelector(".modal");

const video = document.getElementById("video");

const linkDOVideo = " https://www.youtube.com/embed/rjwUooksI-A" ;

botaoTrailer.addEventListener("click", () => {

    modal.classList.add("aberto");
    video.setAttribute("src", linkDOVideo);
    
});

const fecharModal= document.querySelector('.fechar-modal') ;
console.log(fecharModal);





fecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src","");
})








