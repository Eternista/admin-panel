import { Link } from "react-router-dom"

const testUsageData = [
    {
        id: "item-1",
        link: "link-1",
        context: "Calendar",
        icon: "calendar",
    },
    {
        id: "item-2",
        link: "link-2",
        context: "Statistic",
        icon: "circle-rad",
    },
    {
        id: "item-3",
        link: "link-3",
        context: "Todo",
        icon: "Todo",
    },
]

export const UsageMenu = () => {
    return (
        <ul className="usage-menu d-flex">
            {testUsageData.map(item => (
                <li className="single-item" key={item.id}>
                    <Link to={item.link}>{item.icon}{item.context}</Link>
                </li>
            ))}
        </ul>
    )
}