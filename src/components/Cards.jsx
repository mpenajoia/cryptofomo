import { useContext, useState } from 'react';
import { CoinListContext } from "../context/CoinListContext";

function Card(props) {
    const info = props.vCO
    const reg = `/\B(?=(\d{3})+(?!\d))/g, ","`
  return (
    <div className='flex flex-col items-center justify-center text-center my-6 p-5 rounded-xl bg-gray-100'>
        <h3 className='font-bold'>A {info.time} ago</h3>
        <div>
            <p>{info.gainLoss.toString().replace(reg)}</p>
            <p>{info.gainLoss > 0 ? 'Gained' : 'Lost'}</p>
        </div>
        <div>
            <p>${info.totalValue.toString().replace(reg)}</p>
            <p>Total Worth</p>
        </div>
        <p>You would have {info.tokenAmount} {props.coin.symbol.toUpperCase()}</p>
    </div>
  )
}

function Cards(props) {
    const { inputAmount } = useContext(CoinListContext);
    const coin = props.coin
    const marketData = coin.market_data
    const timeScaleArray = [['Day', '24h'],['Week', '7d'], ['Month', '30d'], ['Year','1y']];
    const timeScaleMap = timeScaleArray.map((item, key) => {
        const currentPrice = marketData.current_price.usd
        const percentChange = marketData[`price_change_percentage_${item[1]}`]
        const timePrice = ((currentPrice * 100) / (100 + (percentChange))).toFixed(20)
        const tokenAmount = (inputAmount / timePrice).toFixed(6)
        const totalValue = (tokenAmount * currentPrice).toFixed(2)
        const gainLoss = (totalValue - inputAmount).toFixed(2)
        const variableCoinObject = {time: item[0], gainLoss, totalValue, tokenAmount}
        return (
            <Card key={key} coin={coin} vCO={variableCoinObject}/>
        )
    })

  return (
    <div className='px-6'>{timeScaleMap}</div>
  )
}

export default Cards