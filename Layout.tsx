import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'

import Headerbar from './Headerbar'
import Sidebar from './Sidebar'

export function AppLayout() {
    const [collapsed, setCollapsed] = useState(() => {
        // Get the collapsed state from local storage if available, or default to false
        // @ts-ignore
        return JSON.parse(localStorage.getItem('collapsed')) || false
    })

    useEffect(() => {
        localStorage.setItem('collapsed', JSON.stringify(collapsed))
    }, [collapsed])

    return (
        <Layout className='flex h-screen w-screen flex-col lg:flex-row overflow-x-hidden'>
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
            <Layout
                className={
                    !collapsed ? `h-full ml-[0px] md:ml-[0px] lg:ml-[98px] lg:mr-3`
                        : `h-full ml-[0px] pl-2 pr-3 md:ml-[0px] lg:ml-[210px]`
                }
            >
                <Headerbar collapsed={collapsed} setCollapsed={setCollapsed} />
                <div className='h-full w-full p-4 py-2'>
                    <Outlet />
                </div>
            </Layout>
        </Layout>
    )
}
