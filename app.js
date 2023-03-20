// la date 
const laDate = document.querySelector('.date')
const dateDuJour = new Date()

laDate.textContent = "Nous sommes le " + dateDuJour.toLocaleDateString()

const btnMenu = document.querySelector('.btn-rond-menu');
const nav = document.querySelector('.nav');
const allItemNav = document.querySelectorAll('.nav-menu-item');
const ligne = document.querySelector('.cont-ligne');


btnMenu.addEventListener('click', () => {

    ligne.classList.toggle('active')
    nav.classList.toggle('menu-visible')

})

if(window.matchMedia('(max-width: 1024px)')) {

    allItemNav.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.toggle('menu-visible')
            ligne.classList.toggle('active')
        })
    })

}

// Animation écriture

const txtAnim = document.querySelector('.txt-animation');

let typewriter = new Typewriter(txtAnim, {
    loop: false,
    deleteSpeed: 20
})

typewriter
    .pauseFor(1800)
    .changeDelay(30)
    .typeString('GRAFF Alexandre, ')
    .pauseFor(300)
    .typeString('<b>Développeur </b>')
    .typeString('<span style="color:rgb(214, 31, 132);">HTML - CSS</span> !')
    .pauseFor(500)
    .deleteChars(12)
    .typeString('<span style="color:rgb(21, 17, 233);">Javascript</span> !')
    .pauseFor(500)
    .deleteChars(12)
    .typeString('<span style="color:rgb(226, 25, 159);">Python</span> !')
    .pauseFor(500)
    .deleteChars(8)
    .typeString('<b>Web</b> !')
    .start()


// Animation Contact

const input_fields = document.querySelectorAll('input')

for (let i = 0; i < input_fields.length; i++) {
    let field = input_fields[i];

    field.addEventListener('input', (e) => {

        if (e.target.value !== '') {
            e.target.parentNode.classList.add('animation')
        } else if (e.target.value == '') {
            e.target.parentNode.classList.remove('animation')
        }

    })
    
}

// Animation GSAP + ScrollMagic

const navbar = document.querySelector('.nav');
const titre = document.querySelector('h1');
const btn = document.querySelectorAll('.btn-acc');
const btnMedias = document.querySelectorAll('.media');
const btnRondAccueil = document.querySelector('.btn-rond');

const TL1 = gsap.timeline({paused: true});

TL1
.to(nav, {top: '0px', ease: Power3.easeOut, duration: 0.6})
.from(titre, {x: -100, opacity: 0, ease: Power3.easeOut, duration: 0.4})
.staggerFrom(btn, 1, {opacity:0}, 0.2, '-=0.30')
.staggerFrom(btnMedias, 1, {opacity:0}, 0.2, '-=0.75')
.from(btnRondAccueil, {y: -50, opacity:0, ease:Power3.easeOut, duration: 0.4}, '-=1')

window.addEventListener('load', () => {
    TL1.play()
})


//  Animation presentation 


const presentationContainer = document.querySelector('.presentation')
const titrePresentation = document.querySelector('.titre-presentation');
const presentationGauche = document.querySelector('.presentation-gauche');
const listePresentation = document.querySelectorAll('.item-liste');

const timelinePresentation = new TimelineMax();


timelinePresentation
.from(titrePresentation, {y: -200, opacity:0, duration:0.6})
.from(presentationGauche, {y:-20, opacity:0, duration: 0.6}, '-=0.5')
.staggerFrom(listePresentation, 1, {opacity:0,}, 0.2, '-=0.5')

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: presentationContainer,
    triggerHook: 0.5,
    reverse: false
})
.setTween(timelinePresentation)
// .addIndicators()
.addTo(controller)

//  Animation portfolio

const portfolioContainer = document.querySelector('.portfolio')
const titrePortfolio = document.querySelector('.titre-portfolio')
const itemPortfolio = document.querySelectorAll('.vague1')

const timelinePortfolio = new TimelineMax();

timelinePortfolio
.from(titrePortfolio, {y: -50, opacity:0, duration:0.5})
.staggerFrom(itemPortfolio, 1, {opacity:0}, 0.2, '-=0.5')

const scene2 = new ScrollMagic.Scene({
    triggerElement: portfolioContainer,
    triggerHook: 0.5,
    reverse: false
})
.setTween(timelinePortfolio)
// .addIndicators()
.addTo(controller)

//  Vague 2

const itemPortfolio2 = document.querySelectorAll('.vague2')

const timelinePortfolio2 = new TimelineMax();

timelinePortfolio2
.staggerFrom(itemPortfolio2, 1, {opacity:0}, 0.2, '-=0.5')

const scene3 = new ScrollMagic.Scene({
    triggerElement: itemPortfolio,
    triggerHook: 0.1,
    reverse: false
})
.setTween(timelinePortfolio2)
// .addIndicators()
.addTo(controller)

//  Vague 3

const itemPortfolio3 = document.querySelectorAll('.vague3')

const timelinePortfolio3 = new TimelineMax();

timelinePortfolio3
.staggerFrom(itemPortfolio3, 1, {opacity:0}, 0.2, '-=0.5')

const scene4 = new ScrollMagic.Scene({
    triggerElement: itemPortfolio2,
    triggerHook: 0.1,
    reverse: false
})
.setTween(timelinePortfolio3)
// .addIndicators()
.addTo(controller)


// Animation barre de progression 

const sectionRange = document.querySelector('.section-range');
const titreRange = document.querySelector('.titre-exp');
const allLabel = document.querySelectorAll('.label-skill')
// const allPourcent = document.querySelectorAll('.number-skill')
const allBarres = document.querySelectorAll('.barre-skill')
const allShadowBarres = document.querySelectorAll('.barre-grises')

const timelineProgression = new TimelineMax();

timelineProgression
.from(titreRange, {opacity:0, duration: 0.6})
.staggerFrom(allLabel, 0.5, {y: -50, opacity:0}, 0.1, '-=0.5')
// .staggerFrom(allPourcent, 0.5, {y: -10, opacity:0}, 0.1, '-=0.5')
.staggerFrom(allShadowBarres, 0.5, {y: -10, opacity:0}, 0.1, '-=1')
.staggerFrom(allBarres, 0.5, {y: -10, opacity:0, width:100}, 0.1, '-=1')


const scene5 = new ScrollMagic.Scene({
    triggerElement: sectionRange,
    reverse: false
})
.setTween(timelineProgression)
.addTo(controller)