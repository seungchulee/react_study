import React from "react";
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'

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

const options = [
    {
        label: "the color red",
        value: "red"
    },
    {
        label: "the color green",
        value: "green"
    },
    {
        label: "the color blue",
        value: "blue"
    }
]

export default () => {
    return (
        <div>
            {/* <Accordion items={items}/> */}
            {/* <Search/> */}
            <Dropdown options={options}/>
        </div>
    )
}