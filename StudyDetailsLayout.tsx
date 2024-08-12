import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import {useLocation} from "react-router-dom";

export default function StudyDetailsLayout() {
    const location = useLocation()
    const { study } = location.state;

    return (
        <div className='flex h-full w-full flex-col gap-2'>
            <div className='flex h-fit w-full flex-col gap-2 items-center justify-between p-1'>
                <p className='mx-3 text-2xl font-bold text-black'>{study.title}</p>
                <div className='flex lg:w-3/6 w-full flex-row gap-1'>
                    <Input
                        prefix={<SearchOutlined />}
                        placeholder='search content'
                        onChange={(e: { target: { value: any } }) => {
                            console.log(e.target.value)
                        }}
                        size='large'
                        className='mx-1 mr-1 rounded-full'
                    />
                </div>
            </div>

            <div className='w-full lg:h-4/6 h-[1100px] py-4 grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-2'>
                <div className='bg-white p-2 rounded-lg'>
                    <img src={'https://medicaldialogues.in/wp-content/uploads/2017/11/tb-drug.jpg'} alt='card' className='w-full h-40 object-cover rounded-lg'/>
                    <div>
                        {
                            study&&Object.entries(study).map((item:any, index:number) => {
                                if(item[0] === 'image' || item[0] === 'id') return null
                                return(
                                    <div key={index} className='flex flex-col gap-1'>
                                        <p className='font-bold text-black'>{item[0]}</p>
                                        <p className='text-sm text-gray-500'>{item[1]}</p>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
                <div className='bg-white rounded-lg overflow-y-auto p-2'>
                    <p className="text-lg font-bold text-black bg-white">Full Protocol</p>

                    <div className="">
                        {
                            //dummy list of protocol, having name, id, date and fileLink
                            [
                                {
                                    name: 'Protocol',
                                    id: '1',
                                    date: '2021-09-12',
                                    fileLink: 'https://via.placeholder.com/150'
                                },
                                {
                                    name: 'Inclusion and Exclusion Criteria',
                                    id: '45t45gbtgrg34rg',
                                    date: '2021-09-12',
                                    fileLink: 'https://via.placeholder.com/150'
                                },
                                {
                                    name: 'Visit Schedule',
                                    id: 'sdferrf45vrg4tg',
                                    date: '2021-09-12',
                                    fileLink: 'https://via.placeholder.com/150'
                                },
                                {
                                    name: 'Possible SAEs',
                                    id: '45t45gbtgrg34rg',
                                    date: '2021-09-12',
                                    fileLink: 'https://via.placeholder.com/150'
                                },
                            ].map((protocol, index) => (
                                <div key={index} className='bg-white p-2 rounded-lg border border-gray-100 flex flex-col my-2'>
                                    <p className='font-bold text-black'>{protocol.name}</p>
                                    <p className='text-sm text-gray-500'>{protocol.date}</p>
                                    <a href={protocol.fileLink} className='text-blue-500'>View</a>
                                </div>
                            ))
                        }

                    </div>
                </div>

                <div className='bg-white rounded-lg overflow-y-auto p-2'>
                    <p className="text-lg font-bold text-black bg-white">Drug Dosage</p>

                    <div className="">
                        {
                            //dummy list of data, having name, id, date and fileLink
                            [
                                {
                                    name: 'Dosage Type A',
                                    id: 'sdferrf45vrg4tg',
                                    date: '2021-09-12',
                                    fileLink: 'https://via.placeholder.com/150'
                                },
                                {
                                    name: 'Dosage Type B',
                                    id: '45t45gbtgrg34rg',
                                    date: '2021-09-12',
                                    fileLink: 'https://via.placeholder.com/150'
                                },
                                {
                                    name: 'Dosage Calculator',
                                    id: 'sdferrf45vrg4tg',
                                    date: '2021-09-12',
                                    fileLink: 'https://via.placeholder.com/150'
                                },
                            ].map((data, index) => (
                                <div key={index} className='bg-white p-2 rounded-lg border border-gray-100 flex flex-col my-2'>
                                    <p className='font-bold text-black'>{data.name}</p>
                                    <p className='text-sm text-gray-500'>{data.date}</p>
                                    <a href={data.fileLink} className='text-blue-500'>View</a>
                                </div>
                            ))
                        }

                    </div>
                </div>

            </div>
        </div>
    );
}
