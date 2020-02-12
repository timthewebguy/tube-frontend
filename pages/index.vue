<template>
	<div id="content" class="site-content">
	<header>
		<a href="/" to="/" class="logo">
            <img src="/img/logo-wordmark-beta-white.svg" alt="Sourcery Logo">
        </a>
		<div class="cta">
			<div class="slogan">
				<h2>Your sources, like magic</h2>
				<p>Delivering archival documents straight to your device</p>
			</div>
			<div class="nav-button">
				<a href="/register" to="/register" class="button solid-white">SIGN UP</a>
				<a href="/login" to="/login" class="button outline-white">SIGN IN</a>
			</div>
		</div>
	</header>
        <div id="meet-sourcery">
            <h1 id="meet-header">Meet Sourcery</h1>
            <div class="meet-step img-left">
                <img src="img/illustrations/undraw_researching_22gp.png" alt="Person on laptop">
                <div class="meet-text">
                    <h3>Easy document requests.</h3>
                    <p>Request a document using just a citation and where it’s located.</p>
                </div>
            </div>
            <div class="meet-step img-right">
                <img src="img/illustrations/undraw_transfer_files_6tns.png" alt="2 files">
                <div class="meet-text">
                    <h3>High quality sources.</h3>
                    <p>Receive high resolution scans from Sourcery-registered researchers.</p>
                </div>
            </div>
            <div class="meet-step img-left">
                <img src="img/illustrations/undraw_Savings_dwkw.png" alt="Person on laptop">
                <div class="meet-text">
                    <h3>Cut the travel fees.</h3>
                    <p>Save your wallet on expensive flights and transportation.</p>
                </div>
            </div>
            <div class="meet-step img-right">
                <img src="img/illustrations/undraw_environment_iaus.png" alt="2 files">
                <div class="meet-text">
                    <h3>Reduce your carbon footprint.</h3>
                    <p>Something about how Sourcery is good for the environment.</p>
                </div>
            </div>
            <div class="meet-step img-left">
                <img src="img/illustrations/undraw_folder_39kl.png" alt="Person on laptop">
                <div class="meet-text">
                    <h3>Get back to what’s important.</h3>
                    <p>Gain efficient, affordable access with Sourcery.</p>
                </div>
            </div>
        </div>
        <div id="how-sourcery">
            <img src="img/illustrations/undraw_faq_rjoy.png" alt="">
            <h1>How does Sourcery work?</h1>
            <p class="how-summary">When you submit a request, the app finds and notifies Sourcery-registered researchers working near the repository where your document is located. One of these remote researchers will claim the job, call the document from the archive, take a picture of it, and send it directly to your desktop or mobile device.</p>
            <div class="sparkle-circle">
                <img src="img/sparkles.svg" alt="">
            </div>
            <p class="how-detail">Sourcery is a not-for-profit service that gives researchers access to documents that can't be found online by paying other researchers to find them. It aims to streamline the process that researchers go through by providing one simple platform that works at any collecting institution in our service area (currently New York City, Boston, and Storrs; coming soon to Providence, New Haven, Washington, DC, and other cities). Just provide the document’s citation information, and Sourcery will do the rest.</p>
            <div class="sparkle-circle">
                <img src="img/sparkles.svg" alt="">
            </div>
            <p class="how-detail">Sourcery emerges from the design process of Greenhouse Studios and from the project team’s past work and ongoing interests in research software for the humanities. Greenhouse Studios, an incubator for digital scholarship at the University of Connecticut, is a shared initiative of the UConn Library, School of Fine Arts, and the College of Liberal Arts and Sciences. Sourcery is a project of the Corporation for Digital Scholarship, a not-for-profit organization.</p>
            <a href="/about" class="button thin outline-purple">LEARN MORE</a>
        </div>
        <div id="ready">
            <img src="img/illustrations/undraw_enter_uhqk.png" alt="">
            <h1>Ready to try Sourcery?</h1>
            <a href="" class="button solid-purple">SIGN UP</a>
        </div>
	<footer>
            <cookie-law
            theme="dark-lime"
            message="We use cookies to ensure you get the best experience on our website."
            buttonText="OK"
            buttonLink="/cookies-notice"
            >
            </cookie-law>
            <div class="links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/login">Login</a>
                <a href="/register">Sign Up</a>
            </div>
            <img src="img/gh-wordmark-dark-purple.svg" alt="">
            <div class="socials links">
                <a href="">
                    Instagram
                </a>
                <a href="">
                    Twitter
                </a>
                <a href="">
                    Facebook
                </a>
            </div>
            <p>Sourcery is a project of the Corporation for Digital Scholarship, a nonprofit organization dedicated to the development of software and services for researchers and cultural heritage institutions, in partnership with Greenhouse Studios | Scholarly Communications Design at UConn</p>
	</footer>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/stickybits/3.7.2/stickybits.min.js" integrity="sha256-pytD+8MI6QUO5dayaQjTboZuqXv8YU05ZuQFl4NijpM=" crossorigin="anonymous"></script>
    <script>

    </script>
	</div>
</template>



<script>
/**
 * Cookie Consent
 * @url https://github.com/apertureless/vue-cookie-law#--vue-cookie-law
 */
import CookieLaw from 'vue-cookie-law'
export default {
  name: 'home',
  layout: 'landing-beta',
  middleware: null,
  data: function() {
    return {
        // social: social
    }
  },
  components: { CookieLaw },
  methods: {
    smoothScroll: function(target) {
        var scrollContainer = target;
        do { //find scroll container
            scrollContainer = scrollContainer.parentNode;
            if (!scrollContainer) return;
            scrollContainer.scrollTop += 1;
        } while (scrollContainer.scrollTop == 0);

        var targetY = 0;
        do { //find the top of target relatively to the container
            if (target == scrollContainer) break;
            targetY += target.offsetTop;
        } while (target = target.offsetParent);

        scroll = function(c, a, b, i) {
            i++; if (i > 30) return;
            c.scrollTop = a + (b - a) / 30 * i;
            setTimeout(function(){ scroll(c, a, b, i); }, 20);
        }
        // start scrolling
        scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
    }
  },
  mounted: function(){

  }
}
</script>

<style>
.Cookie--dark-lime a.Cookie__button {
    background-color: grey;
}

img {
    max-width: 100%
}
body{
    margin: 0;
    font-family: 'Barlow';
    color: #292043;
}

#meet-sourcery {
    padding: 24px;
}

#meet-header {
    text-align: center;
}

.meet-step {
    margin-bottom: 24px;
}

.meet-step img {
    max-width: 100%;
}

.meet-step h3 {
    margin-bottom: 12px;
}

.meet-step p {
    font-size: 18px;
    font-weight: 500;
}

#how-sourcery, footer {
    background: rgba(101, 78, 163, 0.05);
    padding: 24px;
}

.how-summary {
    font-weight: 500;
    font-size: 18px;
}

.sparkle-circle {
    background: #fff;
    border-radius: 50%;
    height: 48px;
    width: 48px;
    margin: 12px auto;
}

#ready {
    padding: 24px;
}

header{
	display: flex;
	flex-direction: column;
	background: linear-gradient(0deg, rgba(25, 0, 99, 0.8), rgba(25, 0, 99, 0.8)), url('/img/hero.jpg');
	background-size: cover;
	background-position: center;
	align-items: center;
	padding: 34px 24px;	
}


.logo {
    max-width: 100%;
    margin-bottom: 24px;
}

.logo>img {
    width: 100%
}
.cta {
	display: flex;
    flex-direction: column;
    font-family: 'Barlow';
    color: white;
    text-align: center;
}

.slogan {
    margin-bottom: 24px;
}

h1 {
    margin-bottom: 24px;
}
h2 {
    font-size: 25px;
}

h3 {
    font-size: 24px;
}
.cta p {
    font-family: Barlow;
    font-size: 20px;
}

.nav-button {
	display: flex;
    flex-direction: column;
    margin: -12px 0;
}

.nav-button .button {
    margin: 6px 0;
}

.button {
	height: 56px;
	display: flex;
	align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 24px;
    border-radius: 4px;
}

.thin {
    height: 36px;
    font-size: 16px;
}

.solid-white {
    background-color: #fff;
	color: rgba(25, 0, 99, 0.8);
}

.solid-purple {
    background: #654EA3;
	color: #fff;
}

.outline-white {
    border: 2px solid #FFFFFF;
    color: white;
}

.outline-purple {
    border: 2px solid #654EA3;
    color:#654EA3;
}
button:focus{
	outline: 0;
}

a{
	text-decoration: none;
}

footer img {
    width: 100%;
    margin: 0 auto;
}

.links {
    display: flex;
    justify-content: space-around;
    font-weight: 500;
    margin: 18px 0;
}
.links a {
    color: #292043;
}

@media screen and (min-width: 700px){

}



@media screen and (min-width: 1000px){


}

@media screen and (min-width: 1250px){
	
}




</style>
