import {useNavigate} from "react-router-dom";

export default function HomeLayout() {

    const navigate = useNavigate()
    const dummyCardData = [
        {
            title: 'Step 2C',
            description: 'This study is about the effects of the drug on TB',
            image: 'https://lunginstitute.co.za/wp-content/uploads/2017/03/Pills3-960x480.jpg',
            id: 'sdferrf45vrg4tg',
            date: '2021-09-12',
            sampleSize: 270
        },
        {
            title: 'Optirimox TB',
            description: 'This study is about the effects of the drug on TB',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBbG9gXorakUMDCQOYpYBkD0s-H6-Ju3tNFw&s',
            id: '45t45gbtgrg34rg',
            date: '2021-09-12',
            sampleSize: 270
        },
    ]

    return (
        <div className='flex h-full w-full flex-col gap-2'>
            <div className='flex h-fit w-full flex-row items-center justify-between p-2'>
                <p className='mx-3 text-xl font-bold text-black'>Home</p>

            </div>

            <div className='w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-4 gap-2'>
                {
                    dummyCardData.map((card, index) => (
                        <div key={index}
                             className='bg-white p-2 rounded-lg cursor-pointer hover:bg-opacity-60 hover:shadow-3xl'
                                onClick={() => {
                                    navigate(`/study/${card.id}`, {state: {study: card}})
                                }}
                        >
                            <img src={card.image} alt='card' className='w-full h-32 object-cover rounded-lg' />
                            <p className='text-lg font-bold text-black'>{card.title}</p>
                            <p className='text-sm text-gray-500'>{card.description}</p>
                        </div>
                    ))
                }


            </div>
        </div>
    );
}
