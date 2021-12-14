import SpotListing from "../../Bookmarked/SpotListing";

const SearchResults = (props) => {
    return <ul className="list-group">
        {props.spots.map((spot) => SpotListing(spot))}
    </ul>
}

export default SearchResults;