import React, { useState, useEffect } from 'react'

interface WelcomeBlockData {
    title: string;
    subtitle: string;
    slogan: string;
}

const WelcomeBlock: React.FC = () => {
    const [data, setData] = useState<WelcomeBlockData[]>([]);

    useEffect(() => {

        const welcomeBlockData: WelcomeBlockData[] = [
            { title: 'Искусство быть врачом', subtitle: 'Заботимся о вашем здоровье. Индивидуальный подход к каждому пациенту', slogan: 'Здоровье превыше всего!' },
        ];

        setData(welcomeBlockData);
    }, []);


    return (
        <div>WelcomeBlock</div>
    )
}

export default WelcomeBlock