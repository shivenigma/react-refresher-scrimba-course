import {Contact} from './Contact';
import cat from './assets/cat.png'

export default function ContactsList() {
    const data = {
        name: 'Mr. Whiskerson',
        phone: '(212) 555-1234',
        email: 'wishkaz@gmail.com',
        img: cat
    }
    return (
        <div className="app-body-contacts">
            <Contact data={data}></Contact>
            <Contact data={data}></Contact>
            <Contact data={data}></Contact>
            <Contact data={data}></Contact>
        </div>
    )
}
