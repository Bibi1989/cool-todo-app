import React from 'react'

export default function SearchInput({searchInput, searchItem}) {
    return (
        <div>
            <input type="text" className="search" placeholder="Search an item..." ref={searchInput} onChange={searchItem} />
        </div>
    )
}
