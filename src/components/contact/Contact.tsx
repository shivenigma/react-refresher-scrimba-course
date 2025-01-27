import mail from './assets/mail.png';
import phone from './assets/phone.png';
import './ContactsList.css'

export function Contact({data}) {
    return (
        <article className="contact-card">
            <img className="contact-thumb" src={data?.img} alt="Mr. Whiskerson"/>
            <h3>{data?.name}</h3>
            <div className="contact-info">
                <img src={phone} alt="phone icon"/>
                <p>{data?.phone}</p>
            </div>
            <div className="contact-info">
                <img src={mail} alt="mail icon"/>
                <p>{data?.email}</p>
            </div>
        </article>
    )
}
