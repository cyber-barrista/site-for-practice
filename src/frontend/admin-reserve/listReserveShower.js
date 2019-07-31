import React from 'react'
import ReserveShower from './reserveShower'
import ThreeLineButton from './threeLineButton'

const ListReserveShower = (props) => {
    const {reserves, rateReserve} = props
    console.log(reserves)


    return (
        <div className="reserves">
            {
                reserves.map(
                    (reserve) => {
                        return (
                            <div key={reserve._id} className="reserve">
                                <ReserveShower data={reserve}/>
                                <h2>Изменить статус заказа</h2>
                                <ThreeLineButton
                                text={['Отказ', 'Ожидание', 'Одобрение']}
                                onClickers={
                                    [
                                        () => rateReserve(reserve._id, 'no'),
                                        () => rateReserve(reserve._id, 'wait'),
                                        () => rateReserve(reserve._id, 'yes')
                                    ]
                                }
                                />
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default ListReserveShower