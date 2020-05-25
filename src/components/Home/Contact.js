import React from "react"
import { Link } from "gatsby"


const homeContact = () => {
    return (
        <section id="contact" class="block">
            <h3>
                Contact
            </h3>
                <div class="contact">
                    <a class="btn btn--normal" href="mailto:susogarciape@gmail.com" target="_blank"><i class="fas fa-envelope"></i>
                    Email</a >
                    <a class="btn btn--normal" href="https://github.com/SusoGarcia" target="_blank"><i class="fab fa-github"></i>
                    GitHub</a>
                    <a class="btn btn--normal" href="#" target="_blank"><i class="fas fa-file-alt"></i> Resume</a>
                    <a class="btn btn--normal" href="https://linkedin.com/in/susogarcia/" target="_blank"><i class="fab fa-linkedin"
                        target="_blank"></i> Linkedin</a>
                    <a class="btn btn--normal" href="https://dribbble.com/susogarp" target="_blank"><i class="fab fa-dribbble"></i>
                    Dribbble</a>
                    <a class="btn btn--normal" href="https://twitter.com/susogarp" target="_blank"><i class="fab fa-twitter"></i>
                    Twitter</a>
            </div>
    </section>
        
    )
}

export default homeContact;



