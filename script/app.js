/////////// Modal
function modalBox(event) {
    event.preventDefault();
    const target = event.target;
    const modal = document.querySelectorAll('[class="modal open"]');
    const hideTitle = document.getElementById("home-modal");
    if (target.hasAttribute('data-window') && target.getAttribute('data-window') !== 'home-modal') {
        const m_ID = target.getAttribute('data-window');
        document.getElementById(m_ID).classList.add('open');
        hideTitle.classList.add('hide-title');
    }


    for(let i=0; i < modal.length; i++){
        if (target.classList.contains('home-icon')) {
            modal[i].classList.remove('open');
            hideTitle.classList.remove('hide-title');
        } else if (target.classList.contains('about-icon')){
            modal[i].classList.remove('open');
            document.getElementById('about-modal').classList.add('open');
        } else if (target.classList.contains('work-icon')){
            modal[i].classList.remove('open');
            document.getElementById('work-modal').classList.add('open');
        } else if (target.classList.contains('language-icon')){
            modal[i].classList.remove('open');
            document.getElementById('language-modal').classList.add('open');
        } else if (target.classList.contains('contact-me-icon')){
            modal[i].classList.remove('open');
            document.getElementById('contact-modal').classList.add('open');
        } else if (target.classList.contains('fun-fact-icon')){
            modal[i].classList.remove('open');
            document.getElementById('fun-modal').classList.add('open');
        }
    }
}
let modalBtn = document.querySelectorAll('.icon');
for(let i=0; i < modalBtn.length; i++){
    modalBtn[i].addEventListener('click', modalBox);
}



window.onload = function() {

    let commandInput = document.querySelector('#command-input');
    const commandForm = document.querySelector('form');
    const submitBtn = document.querySelector('#submit');
    const outputDiv = document.querySelector('.log');
    const pageWrapper = document.querySelector('.page-wrapper');
    localStorage.setItem('command', 'about');

    function restoreCommand (event){
        const nl = event.which == 38;

        if (nl) {
            let currentCommand = sessionStorage.getItem('command');
            if (currentCommand === null){
                currentCommand = localStorage.getItem('command');
            }
            commandInput.value = currentCommand;
            event.preventDefault();
        }
    }
    document.addEventListener('keydown', restoreCommand, true)

    commandForm.addEventListener('submit', function(e) {
        e.preventDefault();
    });
    submitBtn.addEventListener('click', () => {
        // targeting last child to scroll to
        lastKid = outputDiv.lastElementChild;
        lastKid.scrollIntoView({behavior: "smooth", block: "start"});


        const para = document.createElement('p');
        outputDiv.firstElementChild.appendChild(para);
        sessionStorage.setItem('command', commandInput.value);

        switch (commandInput.value){
            case "about":
            case "omid":
            case "you":
                para.innerHTML = "Did you know my name, Omid, means Hope in Farsi? I always have hope with me ;-) " +
                "<br />Hi! Welcome to my portfolio website :-)&#x261F;";
                const para2 = document.createElement('p');
                outputDiv.firstElementChild.appendChild(para2);
                setTimeout(function(){
                    setTimeout(function(){
                        setTimeout(function(){
                            para2.innerHTML = "&#10003; &nbsp; Currently, I'm a student at <a href='https://hyperisland.com/' target='_blank'>Hyper Island</a> studying <a href='https://en.wikipedia.org/wiki/Front-end_web_development' target='_blank'>Frontend Developer Program</a>. The FED program is to learn writing codes for the interface of websites and web applications. Putting it into context, '<i>a front-end developer is responsible for the interior design of a house that’s been built by a back-end developer.</i>'" +
                            "<br><br>&#10003; &nbsp; Formerly a UI Designer, I have a number of years experience designing web applications and enterprise websites. I particularly kept on Adobe Photoshop before spending most of my time implementing the layouts into static webpages using HTML5 and CSS3 with a blend of jQuery." +
                            "<br><br>&#10003; &nbsp; I also worked professionally as a Social Media Strategist and Online Media Specialist between 2013 to 2017 in Afghanistan as well as in Europe." +
                            "<br><br>&#10003; &nbsp; On a quick side note: if you are working on something interesting or looking for a passionate team member, give me a buzz at omid.haqbin@gmail.com. Maybe we could work out how to collaborate together.</a>"
                        }, 1500);
                        para2.innerHTML = "Takse a second... Thank you for your patience. <br>loading… ███████▒▒▒"
                    }, 1500);
                    para2.innerHTML = "Takse a second... Thank you for your patience. <br>loading… █▒▒▒▒▒▒▒▒▒"
                }, 500);
                break;
            case "work":
            case "works":
                para.innerHTML = "<strong>Currently:</strong>  &nbsp; <br>&#9733; &nbsp; Full-time student at <a href='https://hyperisland.com' target='_blank'>Hyper Island</a> + part-time working on my <a href='https://omidhaqbin.com/'>Personal Portfolio</a>" +
                "<br><br><strong>Previously:</strong><br>&#9733;  &nbsp; Webmaster and Social Media Consultant at Internews Europe in Athens, Greece." +
                "<br>&#9733; &nbsp; Social Media Strategiest at Impassion, U.S. Embassy-funded project, in Kabul, Afghanistan." +
                "<br>&#9733; &nbsp; Web and Online Media Consultant in TAFA Project at USAID in Kabul." +
                "<br>&#9733; &nbsp; UI/UX Intern at Tech Sharks in Kabul." + 
                "<br><br>You can visit <a href='https://works.omidhaqbin.com/' target='_blank'>www.works.omidhaqbin.com</a> for more information"
                break
            case "contact":
                para.innerHTML = "&#10687; &nbsp; Have a question?<br>" +
                "&#10687; &nbsp; Found an issue or have a feedback?<br>" +
                "&#10687; &nbsp; Looking for someone to hire, or to work together on something cool?<br>" +
                "&#10687; &nbsp; Feel like talking with someone?<br>" +
                "&#10687; &nbsp; Perhaps you know me from my past lives?<br>" +
                "&#10687; &nbsp; Or just anything interesting!! It's OK!<br>" + 
                "<br><a href='mailto:omid.haqbin@gmail.com' titl='Email Omid'>Drop me a line here</a>";
                break;
            case "svenska":
                para.innerHTML = "Jag studerar Frontend Developer på Hyper Island. Utbildningen ger mig" + 
                "verktyg att skapa optimala användarupplevelser, planera projekt, kommunicera idéer och" +
                "arbeta i team för att uppnå bästa resultat. <br><br>" +
                "Jag drivs av att lösa tekniska utmaningar och att kommunicera om demokrati och mänskliga" + 
                "rättigheter. I Afghanistan studerade jag datavetenskap, arbetade som UI-designer, webbutvecklare" +
                "och senare som social media-specialist i ett antal år. <br><br>" +
                "<span>Kom tillbaka snart! Det kommer att finnas mer om mig på Svenska!</span>";
                break;
            case "farsi":
                para.classList.add("farsi");
                para.innerHTML = "سلام! <br>"+
                "امید حق‌بین هستم. ۳۱ ساله و باشنده شهر استکهلم، پایتخت سویدن گرچه روحم را در افغانستان جا گذاشته‌ام و قلبم نیز در کابل می‌تپد. برنامه‌نویس‌ام و تمرکزم بیشتر روی طراحی و توسعه رابط کاربری است. در اوقات فراغت در شبکه‌های اجتماعی فعالیت می‌کنم. گاهی هم برای دل‌خوشی و ساعت‌تیری، یا داستانی می‌نویسم یا که داستانی می‌خوانم. <br><br>"+
                "ببخشید کوتاه نوشتم. به زودی اگر که برگردید، بیشتر خواهید دید و شنید.<br><br>"+
                "در ضمن، به وب سایتم خوش آمدید :)";
                break;
            case "fun":
                para.classList.add("fun");
                para.innerHTML = "<strong>Fun facts:</strong><br></br>I love writing, either codes or a new short story." +
                "<br>Check back later for more ;-)";
                break;
            case "cv":
                    para.innerHTML = "&#10515; &nbsp; <strong>Ready for download:</strong> &nbsp;My complete resume as <a href='#' title='My Resume'><strong>a PDF file.</strong></a>";
                    break;
            case "secret":
                para.innerHTML = "<span>If I wanted to tell you, it wouldn't be a secret any more :/ </span> <br><br>But you're welcome to guess ;-)";
                break;
            case "light mode":
                para.innerHTML = "Light Mode Activated!";
                pageWrapper.classList.add("light-mode");
                break;
            case "dark mode":
                para.innerHTML = "Dark Mode Activated!";
                pageWrapper.classList.remove("light-mode");
                break;
            case "hi":
            case "hello":
            case "hey":
                para.innerHTML = "Hi, there!<br><br> Welcome to my website :-)";
                break;
            case "fuck":
            case "shit":
            case "damn":
                para.innerHTML = "Oops! <br><br> Something went wrong. :(";
                setTimeout(function(){
                    para.innerHTML = "Sorry, due to the <i>langauge</i> used, I had to discard your last command.<br>Try starting over by typing help.";
                }, 2000);
                break;
            case "clear":
                outputDiv.firstElementChild.innerHTML = "";
                break;
            case "help":
            case "-h":
                para.innerHTML = "<strong>help</strong> &#x2E3A;&#xFF1E; shows this message. An overview of all the commands." +
                "<br><strong>about</strong> &#x2E3A;&#xFF1E; prints a short introduction of me" +
                "<br><strong>ls</strong> &#x2E3A;&#xFF1E; prints avialable commands without their description." +
                "<br><strong>work</strong> &#x2E3A;&#xFF1E; a list of some of my previous works"+
                "<br><br>More commands:<br /> light mode  &#x2016; dark mode  &#x2016; cv &#x2016; version &#x2016; gdpr &#x2016; fun  &#x2016; svenska  &#x2016; farsi  &#x2016; secret" +
                "<br /><br />&#x7B;*For more visual content please click through the icons on the left side in your desktop browser*&#x7D;"
                break;
            case "version":
            case "-v":
                para.innerHTML = "omidhaqbin.com 1.2 (beta version) <br />A personal portfolio website"
                break;
            case "ls":
                para.innerHTML = "Some of the commands are:<br /> help &#x2016; about &#x2016; ls &#x2016; work &#x2016; light mode  &#x2016; dark mode  &#x2016; cv &#x2016; version &#x2016; " + 
                "gdpr &#x2016; fun  &#x2016; svenska  &#x2016; farsi  &#x2016; secret"
                break;
            case "gdpr":
                para.innerHTML = "This website does use GA to track and analyze the number of users who pay my website a visit. Having GA is mainly out of curiosity and for personal use. " + 
                "I'm not sharing its information with any company nor it has commercial/advertising purposes. Except for GA and other cookies for performance enhancement, this website doesn't use other (particularly targeting) cookies. " +
                "<br />With that being, if you don't want GA to track your browser, you can simply close the tab in your browser window."
                break;
            default:
                para.innerHTML = "<strong>Error:</strong> &ensp;<i>'" + 
                commandInput.value + "'</i> is not a command. ٌWrite <i>'help'</i> for the list of available commands."
        }
        commandInput.value = null;
});





/////////// Glasses, eye Follow
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function setWindowSize() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
};
window.addEventListener('resize', setWindowSize);

var eyes = document.querySelectorAll(".eyes");
var cursorPos = { x: 0, y: 0 };

window.addEventListener("mousemove", mousemove);


function mousemove(e) {
  cursorPos = {
    x: e.clientX,
    y: e.clientY
  }; 
	if (!clicked) {
	  eyes.forEach(function(el) {
		  eyeFollow.init(el);
	  })
	}
}

var eyeFollow = (function() {

	function getOffset(el) {
  		el = el.getBoundingClientRect();
		return {
			x: el.left + window.scrollX,
			y: el.top + window.scrollY
		};
	}
	
	function moveEye(eye) {
		var eyeOffset = getOffset(eye);
		var bBox = eye.getBBox();
		var centerX = eyeOffset.x + bBox.width / 2;
		var centerY = eyeOffset.y + bBox.height / 2;
		var percentTop = Math.round((cursorPos.y - centerY) * 400 / windowHeight);
		var percentLeft = Math.round((cursorPos.x - centerX) * 900 / windowWidth);
		eye.style.transform = `translate(${percentLeft/5}px, ${ percentTop/5}px)`
	}
	
	return {
    init: (el) => {
      moveEye(el);
    }
  };
})();

var clicked;
var animate = (function() {

	var select = function(el) {
		 return document.getElementById(el);
	};

})();

}