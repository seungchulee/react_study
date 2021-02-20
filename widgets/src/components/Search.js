import React, { useState, useEffect } from 'react';
import axios from "axios";

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setdebouncedTerm] = useState(term);
    const [results, setResult] = useState([])

    useEffect(() => {
        const timerId = setTimeout(() => {
            setdebouncedTerm(term);
        }, 1000)

        return () => {
            clearTimeout(timerId);
        }
    }, [term])

    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm,
                }
            });
            setResult(data.query.search);
        };
        search();
    }, [debouncedTerm])

    // useEffect(() => {
    //     // 방법 1
    //     const search = async () => {
    //         const {data} = await axios.get("https://en.wikipedia.org/w/api.php", {
    //             params: {
    //                 action: 'query',
    //                 list: 'search',
    //                 origin: '*',
    //                 format: 'json',
    //                 srsearch: term
    //             }
    //         });
    //         setResult(data.query.search);
    //     }
    //     if (term && !results.length) {
    //         search();
    //     } else {
    //         const timeoutId = setTimeout(() => {
    //             if (term) {
    //                 search();
    //             }
    //         }, 500);
    
    //         return () => {
    //             clearTimeout(timeoutId);
    //         }
    //     }
    //     // 방법 2 
    //     // (async () => {
    //     //     await axios.get('asdad')
    //     // })();

    //     // 방법 3
    //     // axios.get('asdf').then((response) => {
    //     //     console.log(response.data);
    //     // })
    // }, [term, results.length])

    const renderedResults = results.map((result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated clntent">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
        )   
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>
                        Enter Search Term
                    </label>
                    <input className="input" value={term} onChange={e => setTerm(e.target.value)}/>
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}
export default Search;