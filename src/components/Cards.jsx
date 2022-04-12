import { useContext, useState } from 'react';
import { CoinListContext } from "../context/CoinListContext";

function Card(props) {
    const info = props.vCO
    const reg = `/\B(?=(\d{3})+(?!\d))/g, ","`
  return (
    <div className='flex flex-col gap-1 items-center justify-center text-center my-6 p-5 rounded-2xl bg-gradient-to-t from-gray-900 bg-gray-800 drop-shadow-xl '>
        <h3 className='font-bold text-2xl'>A {info.time} ago</h3>
        <div className={`text-xl font-bold ${info.gainLoss > 0 ? 'text-green-500' : 'text-red-500'}`}>
            <p>${info.gainLoss.toString().replace(reg)} {info.gainLoss > 0 ? 'Gained' : 'Lost'}</p>
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