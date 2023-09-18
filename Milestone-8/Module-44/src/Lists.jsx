export default function Lists({list}) {
    return (
        <nav>
            <li className="hover:bg-slate-900 p-2 rounded-xl"><a href={list.link}>{list.label}</a></li>
        </nav>
    )
}
