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
        <nav className=" text-white">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
                <div className="flex gap-4">
                <Link href="/" className="cursor-pointer hover:text-teal-400">Главная</Link>
                <p className="cursor-pointer hover:text-teal-400">Избранные</p>
            </div>

<div className="flex items-center gap-2">
    <div className = "flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
        <span className="text-gray-400">  </span>
        <input 
        placeholder="Поиск"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        className="bg-transparent outline-none text-white placeholder-gray-400"
        />
    </div>
    <div>
        <button onClick={handleSearch} className="bg-cyan-500 text-white font-semibold rounded-full px-6 py-2">Поиск</button>
        </div>
</div>
</div>
        </nav>
      
        
    )
}
 
