import React, { Component } from 'react';
import './conten.css';


const Item = (props) => {
    const { title, conten } = props;
    var viewConten = conten;
    if(conten.length>83){
        viewConten = conten.substr(0,83)+" ..."
    }

    return (
        <div className='item'>
            <h3>{title}</h3>
            <span>
                {
                    viewConten
                }
            </span>
        </div>
    )
}

class conten extends Component {
    constructor() {
        super();
        this.state = {
            conten: [
                {
                    title: "Title",
                    conten: "Theo lãnh đạo Cảng hàng không quốc tế Nội Bài (Hà Nội), thời gian gần đây khách đi máy bay nội địa đã vượt 25% số lượng so với cùng kỳ năm 2019, trung bình mỗi ngày có 62.000 khách và 430 chuyến bay. Dự kiến dịp nghỉ lễ 30-4 và 1-5 có khoảng 78.000 - 80.000 lượt khách và trên 500 lượt chuyến bay tại Nội Bài mỗi ngày, tăng khoảng 30% so với hiện nay, tăng khoảng 40% so với cao điểm 30-4 của năm 2019."
                },
                {
                    title: "Title",
                    conten: "Hôm nay là thứ bảy trắc sẽ đông không biết mình có kiếm đủ tiền không nữa"
                }
            ]
        }
    }
    render() {
        const { conten } = this.state;
        return (
            <div className='conten'>
                {
                    !conten.length && <div>No conten</div>
                }
                {
                    conten.length && conten.map((item, index) => {
                        return (<Item title={item.title} conten={item.conten} key={index} />)
                    })
                }
            </div>
        );
    }
}

export default conten;