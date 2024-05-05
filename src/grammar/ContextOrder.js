import React, { useContext, useState } from 'react'

//context 생성
const OrderContext = React.createContext()

const ContextOrder = () => {

    const [order, setOrder] = useState({
        price : 0,
        option : 'none',
    })

  return (
    //context 제공
    <OrderContext.Provider value={{order, setOrder}}>
        ContextOrder
        <Order />
        <Total />
    </OrderContext.Provider>
  )
}

const Order = () => {

    const {order, setOrder} = useContext(OrderContext)

    const handleChange = (e) => {
        // e.target.value = 'sugar'
        let price = 0
        switch (e.target.value) {
            case 'sugar':
                price = 1000
                break
            case 'milk':
                price = 1000
                break
            case 'none' :
            default:
                price = 0
                break
        }
        setOrder({...order, option: e.target.value, price: price})
    }
    return (
        
        <div>
        <select value={order.option} onChange={handleChange}>
            <option value="none">None</option>
            <option value="sugar">Sugar</option>
            <option value="milk">Milk</option>
        </select>
    </div>
    )
}

const Total = () => {

    //context 사용
    const {order} = useContext(OrderContext)

    return (
        <div>
            <p>가격 : {order.price}원</p>
            <p>선택옵션 : {order.option}</p>
        </div>
    ) 
}


export default ContextOrder