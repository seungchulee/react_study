import React from "react";
import Accordion from './components/Accordion'
import Search from './components/Search'

const items = [
    {
        title: 'What is React?',
        content: "react is front end from javascript"
    },
    {
        title: 'why use React?',
        content: 'react is favorite javascript library'
    },
    {
        title: 'how do you use React?',
        content: 'You use React by creating components'
    }
];

export default () => {
    return (
        <div>
            {/* <Accordion items={items}/> */}
            <Search/>
        </div>
    )
}