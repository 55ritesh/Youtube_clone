import React from 'react'


const list = ["All", "Live","Gaming","Songs","Live","Soccer","Cricket","Cooking","Cricket","Songs","Cricket","Cricket"];

const ButtonList = () => {
  return (
    <div className='flex'>
      {/* <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="Songs"/>
      <Button name="Live"/>
      <Button name="Soccer"/>
      <Button name="Cricket"/>
      <Button name="Cooking"/>
      <Button name="Cricket"/>
      <Button name="Valentines"/> */}
      {
        list.map((item, i) => (
          <h1 key={i} className="bg-gray-100 rounded-lg inline-block p-2 m-2 ">
            {item}
          </h1>
      ))}
    </div>
  )
}

export default ButtonList
