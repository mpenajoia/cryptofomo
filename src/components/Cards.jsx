import { useContext, useState } from 'react';
import { CoinListContext } from "../context/CoinListContext";

import React from 'react'

function Card(props) {
    console.log(props.vCO.time)
    const info = props.vCO
  return (
    <div>
        <p>{info.time}</p>
        <p>{info.gainLoss}</p>
        <p>{info.totalValue}</p>
        <p>{info.tokenAmount}</p>
    </div>
  )
}

function Cards(props) {
    const { inputAmount } = useContext(CoinListContext);
    console.log(inputAmount)
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
            <Card key={key} vCO={variableCoinObject}/>
        )
    })

  return (
    <div>{timeScaleMap}</div>
  )
}

export default Cards