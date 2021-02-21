import React, { useState } from "react";
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'

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
    // const [selected, setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdown] = useState(true);
    return (
        <div>
            {/* <Accordion items={items}/> */}
            {/* <Search/> */}
            {/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {
                showDropdown ? <Dropdown options={options} selected={selected} onSelectedChange={setSelected}/> : null
            } */}
            <Translate/>
        </div>
    )
}