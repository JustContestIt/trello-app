let DATA2 = FormData
fetch('https://randomuser.me/api/', {
    method:"GET"
}).then( response => {
    return response.json();
})

let DATA = [
    {
        name: "Column 1",
        id: 'column1',
        cards: [
            {
                name: 'Card 1',
                id: 'card1',
            },
            {
                name: 'Card 2',
                id: 'card2',
            },
            {
                name: 'Card 3',
                id: 'card3',
            },
        ]
    },
    {
        name: "Column 2",
        id: 'column2',
        cards: [
            {
                name: 'Card 4',
                id: 'card4',
            },
            {
                name: 'Card 5',
                id: 'card5',
            },
            {
                name: 'Card 6',
                id: 'card6',
            },
        ]
    },
    {
        name: "Column 3",
        id: 'column3',
        cards: []
    },
    {
        name: "Column 4",
        id: 'column4',
        cards: []
    },
    {
        name: "Column 5",
        id: 'column5',
        cards: []
    },
];
export default DATA2;