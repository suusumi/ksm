import React, { useState, useEffect } from 'react'
import WelcomePhraseButton from '../welcomePhraseButton/WelcomePhraseButton';

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
        <div>
            <WelcomePhraseButton slogan={data[0]?.slogan || ''} />
        </div>
    )
}

export default WelcomeBlock