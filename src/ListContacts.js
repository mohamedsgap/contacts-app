import React from 'react';


// convert calss component to statless functional component
/*
class ListContacts extends React.Component {
  render() {
    return(
      <ol className='contact-list'>

        {this.props.contacts.map((contact)=>(
          <li key={contact.id} className='contact-list-item'>

          <div className='contact-avatar' style={{
            backgroundImage: `url(${contact.avatarURL})`
           }}></div>
          <div className='contact-details'>
            <p>{contact.name}</p>
            <p>{contact.email}</p>
          </div>
          <button className='contact-remove'>
            Remove
          </button>
          </li>
        ))}
      </ol>
    )
  }
}
*/


function ListContacts(props){
  return(
    <ol className='contact-list'>

    {props.contacts.map((contact)=>(

      <li key={contact.id} className='contact-list-item'>

      <div className='contact-avatar' style={{
        backgroundImage: `url(${contact.avatarURL})`
       }}></div>
       
      <div className='contact-details'>
        <p>{contact.name}</p>
        <p>{contact.email}</p>
      </div>

      <button className='contact-remove'>
        Remove
      </button>

      </li>

    ))}

  </ol>
  )
}

export default ListContacts
