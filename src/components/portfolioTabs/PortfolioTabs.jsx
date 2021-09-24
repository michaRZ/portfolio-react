import "./portfolioTabs.scss"

export default function PortfolioTabs({id, title, active, setSelected}) {
    return (
        <li className={ active ? "portfolioTabs active" : "portfolioTabs"} onClick={() => setSelected(id)}>
            {title}
        </li>
    )
}
