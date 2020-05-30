import React from 'react';


class ShoesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shoesData: prepareShoesData(props.items),
        };
    }

    render() {
        const { shoesData } = this.state;
        const { type } = this.prop;
        if (type === 'table') {
            return (<TableShoes shoes={shoesData} />);
        }
        return (<Shoes shoes={shoesData} />);
    }
}

const ListShoes = ({ shoes }) => {

    return (
        <ul>{shoes.map(shoe => <li> {shoe.name} </li>)}</ul>
    );
};

const TableShoes = ({ shoes }) => {

    return (
        <table>{shoes.map(shoe => <tr><th> {shoe.name} </th></tr>)}</table>
    );
};

















Shoes();
ShoesContainer();
export const prepareShoesData = () => {};
