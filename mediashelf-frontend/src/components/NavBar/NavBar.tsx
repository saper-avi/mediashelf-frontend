export default function NavBar() {
    return (
        <nav className="flex justify-between items-center p-4 text-white">
            <div className="flex gap-4">
                <p className="cursor-pointer hover:text-teal-400">Главная</p>
                <p className="cursor-pointer hover:text-teal-400">Избранные</p>
            </div>
            <div className = "flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
<input 
      placeholder="Поиск"
      className="bg-transparent outline-none text-white placeholder-gray-400"
      />
      <button className="text-white">🔍</button>
</div>


        </nav>
        
    )
}
 
