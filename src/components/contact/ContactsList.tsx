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
            {data.map((item, index) => {
                return <Contact data={item} key={index}></Contact>
            })}
        </div>
    )
}
