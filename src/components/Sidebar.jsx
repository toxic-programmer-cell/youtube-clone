import React from 'react'
import { useSelector } from 'react-redux'
import { GoHomeFill } from 'react-icons/go'
import { SiYoutubeshorts } from 'react-icons/si'
import { MdOutlineSubscriptions, MdOutlineVideoLibrary } from 'react-icons/md'
import { HiOutlineFire } from 'react-icons/hi'
import { IoMusicalNotesOutline } from 'react-icons/io5'
import { FaGamepad } from 'react-icons/fa6'
import { FiFilm, FiShoppingBag } from 'react-icons/fi'
import { BiNews } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen)

  if (!isMenuOpen) return null

  const Item = ({ icon: Icon, label, active = false }) => (
    <li>
      <button
        type="button"
        className={[
          'w-full flex items-center gap-5 rounded-lg px-3 py-2 text-sm text-gray-900 cursor-pointer',
          active ? 'bg-gray-100 font-medium' : 'hover:bg-gray-100',
        ].join(' ')}
      >
        <Icon size={20} className="shrink-0" />
        <span className="truncate">{label}</span>
      </button>
    </li>
  )

  return (
    <aside className="w-60 shrink-0 overflow-y-auto px-2 py-2">
      <ul className="space-y-1">
        <Link to={'/'}>
        <Item icon={GoHomeFill} label="Home" active />
        </Link>
        <Item icon={SiYoutubeshorts} label="Shorts" />
        <Item icon={MdOutlineSubscriptions} label="Subscriptions" />
      </ul>

      <hr className="my-3 border-gray-200" />

      <ul className="space-y-1">
        <Item icon={MdOutlineVideoLibrary} label="Library" />
      </ul>

      <hr className="my-3 border-gray-200" />

      <h3 className="px-3 pb-2 text-sm font-semibold text-gray-900">Explore</h3>
      <ul className="space-y-1">
        <Item icon={HiOutlineFire} label="Trending" />
        <Item icon={IoMusicalNotesOutline} label="Music" />
        <Item icon={FaGamepad} label="Gaming" />
        <Item icon={FiFilm} label="Movies" />
        <Item icon={BiNews} label="News" />
        <Item icon={FiShoppingBag} label="Shopping" />
      </ul>
    </aside>
  )
}

export default Sidebar