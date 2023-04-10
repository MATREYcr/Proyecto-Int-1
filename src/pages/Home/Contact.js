

import './styles/stylesContact.css';
const PageContact = ()=>{
    return(
        <div class="content">

        <div class="contact-wrapper animated bounceInUp">
            <div class="contact-form">
            <h1 class="logo">Contact <span>Us</span></h1>
                <form action="">
                    <p>
                        <label className='label_contact'>FullName</label>
                        <input type="text" name="fullname"/>
                    </p>
                    <p>
                        <label className='label_contact'>Email Adress</label>
                        <input type="email" name="email"/>
                    </p>
                    <p>
                        <label className='label_contact'>Phone Number</label>
                        <input type="tel" name="phone"/>
                    </p>
                    <p>
                        <label className='label_contact'>Affair</label>
                        <input type="text" name="affair"/>
                    </p>
                    <p class="block">
                       <label className='label_contact'>Message</label> 
                        <textarea name="message" rows="3"></textarea>
                    </p>
                    <p class="block">
                        <button>
                            Send
                        </button>
                    </p>
                </form>
            </div>
            <div class="contact-info">
                <h4>More Info</h4>
                <ul>
                    <li><i class="fas fa-map-marker-alt"></i> Baker Street</li>
                    <li><i class="fas fa-phone"></i> (111) 111 111 111</li>
                    <li><i class="fas fa-envelope-open-text"></i> contact@website.com</li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident ipsam necessitatibus repellendus?</p>
                <p>Company.com</p>
            </div>
        </div>

    </div>
    )
}
export default PageContact;