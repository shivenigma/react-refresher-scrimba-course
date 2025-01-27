import {Contact} from './Contact';
import cat from './assets/cat.png'

export default function ContactsList() {
    const data = [
        {
        name: 'Mr. Whiskerson',
        phone: '(212) 555-1234',
        email: 'wishkaz@gmail.com',
        img: cat
    },
        {
        name: 'Mr. Doo',
        phone: '(111) 555-1234',
        email: 'DooCat@gmail.com',
        img: cat
    },

    ]
    return (
        <div className="app-body-contacts">
            <Contact data={data[0]}></Contact>
            <Contact data={data[1]}></Contact>
        </div>
    )
}
