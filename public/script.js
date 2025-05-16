document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    let currentIndex = 0;

    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.children.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlidePosition();
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.children.length - 1;
        }
        updateSlidePosition();
    });

    function updateSlidePosition() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});

//Função de Scroll Botão CTA
var buttonToForm = document.querySelectorAll(".buttonToForm")
var FormSection = document.querySelector(".formSimule")

buttonToForm.forEach(button => {
    button.addEventListener("click", ()=>{
        let elementoRect1 = FormSection.getBoundingClientRect()
        let centerY = elementoRect1.top
        window.scrollTo({
            top: centerY + window.scrollY,
            behavior: 'smooth'
        })
    })
})

//Submit Form Function
var NameField = document.querySelector("#NameField")
var EmailField = document.querySelector("#EmailField")
var EmprestimoValueField = document.querySelector("#EmprestimoVAlueField")
var DocumentValor = document.querySelector("#DocumentField")
var PhoneFiled = document.querySelector("#PhoneFiled")

var buttonSubmit = document.querySelector(".buttonSubmitFormSolicite")

buttonSubmit.addEventListener("click", ()=>{
    var name = NameField.value
    var email = EmailField.value
    var value = EmprestimoValueField.value
    var documento = DocumentValor.value
    var phone = PhoneFiled.value
    window.open("https://www.instagram.com/solucao.credito.rapido?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "_blank")
})