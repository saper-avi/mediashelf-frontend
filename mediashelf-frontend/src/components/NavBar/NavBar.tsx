'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function NavBar() {
    const [query, setQuery] = useState('')
    const router = useRouter()
    function handleSearch() {
        router.push(`/search?q=${query}`)
    }
    return (
        <nav className="flex justify-between items-center p-4 text-white">
            <div className="flex gap-4">
                <Link href="/" className="cursor-pointer hover:text-teal-400">Главная</Link>
                <p className="cursor-pointer hover:text-teal-400">Избранные</p>
            </div>
            <div className = "flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
<input 
      placeholder="Поиск"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      className="bg-transparent outline-none text-white placeholder-gray-400"
      />
      <div className="bg-blue-400 rounded-2xl mt-0 p-1"> 
        <button onClick={handleSearch} className="text-white">Поиск</button>
        </div>
</div>


        </nav>
        
    )
}
 
