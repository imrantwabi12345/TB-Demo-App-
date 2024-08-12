import React from 'react'
import { LogoutOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Popover, Tooltip } from 'antd'

import MenuOptions from './MenuOptions'
import {useNavigate} from "react-router-dom";


type Props = {
  collapsed: boolean
  setCollapsed: (value: boolean) => void
}

const Headerbar: React.FC<Props> = (props) => {

  const navigate = useNavigate()
  return (
    <>
      <div className='relative my-1 flex flex-row items-center justify-between rounded-lg bg-white p-2'>
        <div>
          <div
            className='hidden cursor-pointer rounded-sm p-1 text-xl hover:text-blue-800 lg:flex'
            onClick={() => {
              props.setCollapsed(!props.collapsed)
            }}
          >
            <MenuUnfoldOutlined />
          </div>

          <Popover
            placement='bottom'
            content={<MenuOptions collapsed={props.collapsed} />}
            title='Menu'
            trigger='click'
          >
            <div className='flex cursor-pointer p-1 text-xl hover:text-blue-800 lg:hidden'>
              <MenuUnfoldOutlined />
            </div>
          </Popover>
        </div>
        <Tooltip title="Log out">
          <div
            className='mx-5 p-2 cursor-pointer'
            onClick={() => {
              navigate('/login')
            }}
          >
            <LogoutOutlined className='text-xl hover:text-blue-300' />
          </div>
        </Tooltip>

      </div>
    </>
  )
}

export default Headerbar
