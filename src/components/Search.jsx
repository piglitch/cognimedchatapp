import React, { useState } from 'react';

const Search = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Michael Johnson" },
    { id: 4, name: "Emily Davis" },
    { id: 5, name: "David Brown" }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className='search-container border-l h-full p-4'>
        <div>
          <div className="header">
            <h2 className="title">Search Contacts</h2>
          </div>
          <div className="content">
            <input
              type="text"
              placeholder="Search contacts..."
              value={searchTerm}
              onChange={handleChange}
              className="search-input"
            />
            <div className="contact-list">
              <ul className='mt-10'>
                {filteredContacts.map(contact => (
                  <li key={contact.id}>
                    <div className='eachContact cursor-pointer'>
                      <div className='p-2'>
                        {contact.name}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
