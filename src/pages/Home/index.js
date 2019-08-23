import React from 'react'

import Parameters from 'pages/Home/Parameters'
import Graphic from 'components/Graphic/Graphic'

const Home = (props) => {
  return <div>
    <Parameters setDaysQuantity={qty => console.log(qty)} />
    <Graphic />
  </div>
}

export default Home;
