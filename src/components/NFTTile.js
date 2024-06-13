import axie from "../tile.jpeg";
import './NFTTile.css';
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";
  import { GetIpfsUrlFromPinata } from "../utils";

function NFTTile (data) {
    const newTo = {
        pathname:"/nftPage/"+data.data.tokenId
    }

    const IPFSUrl = GetIpfsUrlFromPinata(data.data.image);

    return (
        <Link to={newTo}>
        <div className="mt-5 mb-12 flex flex-col justify-center items-center rounded-lg w-48 md:w-72 shadow-2xl">
            <div className= "text-white border-dashed border-4 w-full p-2 rounded-lg pt-5 -mt-20 h-80 backdrop-blur">
                <strong className="text-xl">{data.data.name}</strong>
                <p className="display-inline ">
                    {data.data.description}
                </p>
                <img src="https://img.freepik.com/free-vector/nft-non-fungible-token-concept-with-neon-light-effect_1017-36944.jpg" className="h-60"></img>
            </div>
        </div>
        </Link>
    )
}

export default NFTTile;
