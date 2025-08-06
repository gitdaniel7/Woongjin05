import React from 'react';

function SearchModal({onClose}){
    return(
        <div>
            <div>
                <input/>
                <button>검색하기</button>
                <button onClick={onClose}>X</button>
            </div>
        </div>
    )
}

export default SearchModal;