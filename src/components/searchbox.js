import React from 'react';

const searchbox=({seaarchfield, searchChange})=>{
    return(
        <div className="tc">
            <input
                onChange={searchChange}
                className="pa3 ba bg-lightest-blue"
                type="search"
                placeholder="search">
            </input>

        </div>
    );
}
export default searchbox;