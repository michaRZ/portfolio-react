import { List } from "@material-ui/core"
import { useEffect, useState } from "react";
import PortfolioTabs from "../portfolioTabs/PortfolioTabs";
import "./portfolio.scss"
import { projects, challenges } from "../../data";


export default function Portfolio() {

    const [selected, setSelected] = useState("projects");
    
    const [data, setData] = useState([]);

    const list = [
        { id: "projects", title: "Projects" },
        { id: "challenges", title: "Coding Challenges" }
    ];

    useEffect(() => {
        switch (selected){
            case "projects":
                setData(projects);
                break;
            case "challenges":
                setData(challenges);
                break;
            default: 
                setData(projects);
        }
    }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => 
                ( <PortfolioTabs 
                    title = {item.title} 
                    active = {selected === item.id} 
                    setSelected = {setSelected}
                    id = {item.id}
                    />)
                )}
            </ul>
            <div className="container">
                    {data.map (d => (
                        <a href={d.link} target="_blank" rel="noopener noreferrer">
                            <div className="item">
                                <img src={d.img} alt="" />
                                <h3>{d.title}</h3>
                            </div>
                        </a>
                    ))}
            </div>
        </div>
    );
}
