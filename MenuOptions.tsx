import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import type { MenuProps } from 'antd'


type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): any {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}

type Props = {
  collapsed: boolean
}

const MenuOptions: React.FC<Props> = ({ collapsed }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const iconClass = ''
  const items: any[] =  [
    getItem('Home', 'home',
      <svg
        className={`h-6 w-6 stroke-current ${iconClass}`}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
        />
      </svg>
    ),
     
    getItem('Settings', 'settings',
      <svg
          className={`h-6 w-6 stroke-current ${iconClass}`}
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
      >
        <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
        />
      </svg>
    )
  ]

  const gotoPath = (path: string) => {
    navigate(`/${path}`)
  }

  const getKey = (path: string) => {
    const exactPath = path.split('/')[1]

    if (items.some((x) => x?.key === exactPath)) {
      return exactPath
    }

    return exactPath
  }


  return (
      <div className='flex w-full flex-col gap-3'>
        {items.map((item, index: number) => (
            <div
                key={index}
                className='flex cursor-pointer flex-row items-center gap-2 rounded-lg
              p-3 font-bold hover:bg-blue-200 hover:text-white'
          style={{
            backgroundColor: getKey(location.pathname) === item.key ? '#276ee2' : '',
            color: getKey(location.pathname) === item.key ? 'white' : '',
          }}
          onClick={() => {
            gotoPath(item.key)
          }}
        >
          <div>{item.icon}</div>
          <div className={!collapsed ? 'flex lg:hidden' : 'flex lg:flex'}>{item.label}</div>
        </div>
      ))}
    </div>
  )
}

export default MenuOptions
