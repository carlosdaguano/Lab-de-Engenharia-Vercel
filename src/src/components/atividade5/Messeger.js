import React, { useState } from "react";

const contacts = [
    { name: 'Taylor', email: 'taylor@email.com' },
    { name: 'Alice', email: 'alice@email.com' },
    { name: 'Bob', email: 'bob@email.com' },
]
const Messeger = () => {
    const [to, setTo] = useState(contacts[0]);

    return(
        <div>
            <ContactList
                contacts={contacts}
                selectedContact={to}
                onSelect={contact => setTo(contact)}
            />
            <Chat contact={to} />
        </div>
    )
}

const ContactList = ({selectedcontact, contacts, onSelect}) => {
    return(
        <section className="contact-list">
            <ul>
                {contacts.map(contact =>
                    <li key={contact.email}>
                        <button onClick={() => {onSelect(contact)}}>{contact.name}</button>
                    </li>    
                )}
            </ul>
        </section>
    )
}

const Chat = ({contact}) => {
    const [text, setText] = useState('');
    return(
        <section className="chat">
            <textarea 
                value={text}
                placeholder={'Chat to ' + contact.name}
                onChange={e => setText(e.target.value)}
            />
            <br/>
            <button>Send to {contacts.email}</button>
        </section>
    )
}


export default Messeger;