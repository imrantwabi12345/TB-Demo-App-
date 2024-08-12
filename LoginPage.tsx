import { Button, Card, Form, Input } from 'antd'
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const [loginForm] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (values: any) => {
        setLoading(true);
        console.log(values);
        setTimeout(() => {
            setLoading(false);
            navigate('/home');
        }, 2000);
    };

    return (
        <div className='w-screen h-screen flex justify-end items-center bg-cover bg-center'
             style={{backgroundImage: `url('/bg-image.jpg')`}}>
            <div className="relative z-10 lg:w-5/12 w-full h-full flex justify-center items-center px-3">
                <Card className="lg:w-9/12 md:w-9/12 w-11/12 h-fit">
                    <div className='w-full flex flex-col gap-1 justify-center text-center'>
                        <svg
                            className='left-0 h-20 w-30 fill-current text-blue-600'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                        >
                            <path
                                d='M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z'
                            />
                        </svg>

                        <p className='font-bold text-lg text-blue-600'>Clinicsl TB Demo</p>
                    </div>

                    <Form
                        className='flex w-full flex-col justify-center gap-5 p-6'
                        id='addAvatar'
                        form={loginForm}
                        layout={'vertical'}
                        onFinish={handleLogin}>
                        <Form.Item
                            name='user'
                            //label='Email'
                            rules={[{required: true, message: 'Please enter username!'}]}
                            style={{
                                marginBottom: 0,
                            }}
                        >
                            <Input
                                type='text'
                                size='large'
                                id='text'
                                aria-label='text'
                                onChange={() => {
                                }}
                                placeholder='Enter text'
                                className='w-full rounded-lg border-gray-300'
                            />
                        </Form.Item>
                        <Form.Item
                            name='pass'
                            //label='Password'
                            rules={[{required: true, message: 'Please enter password!'}]}
                            style={{
                                marginBottom: 0,
                            }}>
                            <Input.Password
                                size='large'
                                id='password'
                                aria-label='password'
                                onChange={() => {
                                }}
                                placeholder='Enter password'
                                className='w-full rounded-lg border-gray-300'/>
                        </Form.Item>
                        <Form.Item
                            className="flex justify-center"
                            style={{
                                marginBottom: 0,
                            }}
                        >
                            <Button type='primary'
                                    loading={loading}
                                    size='large'
                                    htmlType='submit'>Login</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </div>

    )
}

export default LoginPage;