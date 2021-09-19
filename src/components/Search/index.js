import React from "react";
import { SearchPropType, SearchPropTypeDefault } from "./Search.props";
import { SearchBox } from "./Search.style";

const SearchComponent = ({placeholder, buttonText}) => {

    const onSubmit = () => {
        alert("Opss! Acho que não tem lógica aqui ainda...");
        return false;
    }

    return <SearchBox>
        <form onSubmit={onSubmit}>
            <label >
                <input type="text" placeholder={placeholder} />
            </label>
            <input type="button" onClick={onSubmit} value={buttonText} />
        </form>
    </SearchBox>
}

SearchComponent.propTypes = SearchPropType;
SearchComponent.defaultProps = SearchPropTypeDefault;

export default SearchComponent;
