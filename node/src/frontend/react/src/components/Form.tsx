import * as React from "react";
import { Select } from 'antd';

const Option = Select.Option;

declare var window: {
    [key: string]: any;
}

function handleChange(value: any) {
    console.log(`selected ${value}`);
}

export default class Form extends React.Component<any, any> {

    componentDidMount() {
        let search: any = document.getElementsByClassName('search')[0]
        let searchHeader = search.children[0]
        searchHeader.style.visibility = 'hidden'
        searchHeader.style.opacity = 0
        //        searchHeader.style.display = 'none'

        let searchForm = search.children[1]
        searchForm.style.opacity = 1;
        searchForm.style.visibility = 'visible';
        //        searchForm.style.display = 'block'
    }

    render() {
        return <form className="search__search-form">
            <div className="w3-center">
                <div className="w3-quarter">
                    <Select defaultValue="sell" className="app-select form-control" onChange={handleChange}>
                        <Option value="sell">Купить</Option>
                        <Option value="rent">Снять</Option>
                    </Select>
                </div>
                <div className="w3-quarter">
                    <Select defaultValue="flat" className="app-select form-control" onChange={handleChange}>
                        <Option value="flat">Квартиру</Option>
                        <Option value="room">Комнату</Option>
                        <Option value="rent">Дом</Option>
                        <Option value="rent">Коттедж</Option>
                        <Option value="rent">Гараж</Option>

                    </Select>
                </div>
                <div className="w3-quarter">
                    <Select defaultValue="flat" className="app-select form-control" onChange={handleChange}>
                        <Option value="flat">Квартиру</Option>
                        <Option value="room">Комнату</Option>
                        <Option value="rent">Дом</Option>
                        <Option value="rent">Коттедж</Option>
                        <Option value="rent">Гараж</Option>

                    </Select>
                </div>
                <div className="w3-quarter">
                    <Select defaultValue="flat" className="app-select form-control" onChange={handleChange}>
                        <Option value="flat">Квартиру</Option>
                        <Option value="room">Комнату</Option>
                        <Option value="rent">Дом</Option>
                        <Option value="rent">Коттедж</Option>
                        <Option value="rent">Гараж</Option>

                    </Select>
                </div>
            </div>
        </form>
    }
}