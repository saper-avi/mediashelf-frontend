export default function NavBar() {
    return (
        <nav className="flex justify-between items-center p-4 text-white">
            <p className="text-2xl font-bold">MediaShelf</p>
            <div className="flex gap-4">
                <p className="cursor-pointer hover:text-teal-400">Поиск</p>
                <p className="cursor-pointer hover:text-teal-400">Мой список</p>
            </div>
        </nav>
    )
}


