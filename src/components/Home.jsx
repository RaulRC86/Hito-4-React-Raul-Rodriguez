import { useState,useEffect } from "react";
import CardPizza from "./CardPizza";


const Home = () => {

    const [pizzas, setPizzas] = useState([])
    const backEnd= "http://localhost:5000/api/pizzas"
  
    useEffect(() => {
      const consultaApi = async () => {
        const res = await fetch(backEnd)
        const data= await res.json()
        setPizzas(data) 
      }
      consultaApi()
    }, [])
    return (
      <>
   <div className="pizzaContainer">
      {pizzas.map(
        (pizza) => (
          <CardPizza
          key={pizza.id}
          name={pizza.name}
          img={pizza.img}
          ingredients={pizza.ingredients}
          price={pizza.price}
          />
        )
      )}</div>
      </>
    )
  }
  
  export default Home

