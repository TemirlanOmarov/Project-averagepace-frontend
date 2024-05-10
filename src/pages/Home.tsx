import { Link } from "react-router-dom"
import { runData } from "../runData"
export const Home = () => {
    return <div>
       
        <Link to="/contacts">Contacts</Link>

        {
            runData.map((item) => {
                return <div key={item.duration} style={{
                    backgroundColor: "red",
                    marginBottom: "12px",
                    padding: "8px"
                }}>
                    <p>{item.distance}</p>
                    <p>{item.date}</p>
                    <p>{item.duration}</p>
                    </div>
            })
        }
        
        </div>
}