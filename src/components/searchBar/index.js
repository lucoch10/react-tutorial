import {FormControl} from "react-bootstrap";

export default function SearchBar({handleOnChange, handleEnter}) {
    
    return <>
        <FormControl onChange={handleOnChange} onKeyDown={handleEnter} type="text" placeholder="Enter a Pokemon"/>
    </>
}