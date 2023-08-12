import './SearchPage.css';
import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import { useState } from 'react';
import $ from 'jquery';

/**
 * Returns a component which is a list of all images found from the user search. 
 *
 * @param {object} results The number to raise.
 * @return {Componenet} div containing a list of images.
 */
function DisplayResults(results) {
    return (
        <div name ="results"> 
        <ul className='ResultList'>
        {results.results.hits.map((element)=> 
        <li> 
            <Link to="/Image" state={{ data: element }}>
            <img src={element.previewURL} alt="Girl in a jacket" width="400" height="400"/> 
            </Link>
        </li>
        )}
        </ul>
        </div> 

    )
}


export default function SearchPage () {

    const [data, setData] = useState({})
    const [searchString, setSearchString] = useState("")

    /**
     * Queries Pixbay given the user input. The results are stored using the setData hook 
     */
    function searchImage() {
    
        var API_KEY = '38767656-60a4b2a9fa620fe7c320b344f';
        var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+searchString;
        var finalResults = {}
    
        return new Promise((resolve, reject) => {
            $.getJSON(URL, function(data){
                if (parseInt(data.totalHits) > 0) {
 
                    finalResults = data
                    setData(data)
                    resolve(data)
                }
                else
                console.log('No hits');
                return null
                });
    
        });   
    }

     /**
     * Method to search for results based on user query
     * @param {object} event the submit event triggered by submitting the form
     */

    async function handleSubmit (event) {
        event.preventDefault();
        let temp = await searchImage(); 
    }

    
    if(Object.keys(data).length != 0) {
        return (
        <div className = "SearchPage">
        

        <h1 className='Label'>
            Results
        </h1>
        <button onClick={() => setData({})} className="Submit" >
            Back to Search
        </button>
        <DisplayResults results = {data}/>
        </div>
        )
    } else {
        return (
            <div className = "SearchPage">
            <form onSubmit={handleSubmit}>
            <div>
            <h1 className='Label'>
                What would you like to search?
            </h1>
            </div>
            <div>
            <input type="text" className="Textbox" value = {searchString} onChange={e => {setSearchString(e.target.value)}} />
            </div>

            <div>
            <input type="submit" className="Submit" value="Submit" />
            </div>

            </form>
            </div>
        )
    }

}