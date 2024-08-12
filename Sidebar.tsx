import React from 'react'
import { Layout } from 'antd'

import MenuOptions from './MenuOptions'

const { Sider } = Layout
type Props = {
  collapsed: boolean
  setCollapsed: (arg0: boolean) => void
}

const Sidebar: React.FC<Props> = ({ collapsed, setCollapsed }) => {
  return (
    <div className=''>
      <Sider
        style={{
          overflow: 'hidden',
          position: 'fixed',
          left: 0,
          top: 0,
          borderRadius: '5px',
        }}
        theme={'light'}
        trigger={null}
        className='mx-2 my-1 hidden h-[98%] w-fit justify-center bg-white shadow-xl lg:flex'
        collapsible
        collapsed={!collapsed}
        onCollapse={() => {
          setCollapsed(!collapsed)
        }}
      >
        <div className='flex w-full flex-col items-center justify-center gap-5'>
          <div className='m-2 flex flex-row items-center gap-2 text-lg font-bold'>
            <svg
              className='left-0 h-8 w-8 fill-current'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z' />
            </svg>
            {collapsed ? <p>Clinical TB Demo</p> : null}
          </div>

          <MenuOptions collapsed={collapsed} />
        </div>
      </Sider>
    </div>
  )
}

export default Sidebar
