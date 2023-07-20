import React from "react";
const styles = { color: getRandomColor() }

//Decleration Function
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Arrow Function + Expression Function
//<=> const Color = function(WrappedComponent){}
const Color = (WrappedComponent) => {
    const colorRandom = getRandomColor();
    //Trả về 1 Arrow Function nhận đầu vào là props (Props trong trường hợp này là props
    //của component Home được nhận từ Home.js) và trả về 1 component mới.
    return (props) => (
        <div style={styles}>
            <WrappedComponent {...props} />
        </div>
        //Spread Operator {a, ...props}: Lấy ra phần CÒN LẠI trong mảng hoặc object truyền vào
        //Do không truyền tham số đầu vào nên lấy phần còn lại là lấy hết
    )
}

export default Color;