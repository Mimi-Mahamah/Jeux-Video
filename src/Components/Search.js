import react from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
    return (
    <div className="search-bar">
      <input type="text"  placeholder="input game title..." className="search"/>
      <button type="submit" className="search-button">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"></FontAwesomeIcon>
      </button>
    </div>
    )
}