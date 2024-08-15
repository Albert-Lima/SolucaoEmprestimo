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

    var messageWhatsapp = "https://wa.me/5511945876406?text=Nome Completo:%0A"+
                            name+"%0A%0AEmail:%0A"+
                            email+"%0A%0AValor do Empréstimo:%0A"+
                            value+" reais%0A%0ACNPJ/CPF:%0A"+
                            documento+"%0A%0ATelefone:%0A"+
                            phone

    if(name === "" || email === "" || value === "" || documento === "" || phone === ""){
        window.alert("preencha todos os campos")
    }else{
        window.open(messageWhatsapp, "_blank")
    }
})