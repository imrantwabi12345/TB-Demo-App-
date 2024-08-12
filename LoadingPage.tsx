import {Spin} from "antd";


const LoadingPage = () => {

    return (
        <div className='flex justify-center items-center h-screen w-screen mt-5'>
            <Spin />
        </div>
    )
}

export default LoadingPage;