import React from 'react'

const FindList = ({handleSearch, searchInput}) => {
    return (
        <div>
            <form onSubmit={handleSearch}>
                <div className="formStyle">
                    <input type="text" ref={searchInput} className="search" placeholder="FindList item" onInput={handleSearch} />
                    <button type="submit" className="myBtn">Search</button>
                </div>
            </form>
        </div>
    )
}

export default FindList
