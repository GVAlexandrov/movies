import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='footer-info-div'>
                <h3>Info</h3>
                <p>
                    My name is Georgi Alexandrov, and I have been working as a professional structural engineer since 2015.
                </p>

                <p>
                    I am passionate about engineering in general, including, but not limited to: software engineering, structural engineering, and mechanical engineering, among others.
                </p>
            </div>

            <div>
                <h3>Contacts</h3>
                <address>
                    <p>Email:</p>
                    <p><a href="mailto:eng.g.v.alexandrov@abv.bg">eng.g.v.alexandrov@abv.bg</a></p>

                    <p>Mobile Phone:</p>
                    <p><a href="tel:+359884973116">+359884973116</a></p>

                    <p>Address:</p>
                    <p>Sofia, Bulgaria</p>
                </address>
            </div>

            <div>
                <h3>Links</h3>
                <a href="https://github.com/GVAlexandrov" target="_blank">My GitHub</a>
            </div>
        </footer>
    )
}

export default Footer;