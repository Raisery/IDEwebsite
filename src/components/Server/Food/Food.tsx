import foodUp from '@/assets/img/food-up.svg';
import foodDown from '@/assets/img/food-down.svg';
import Image from 'next/image';

type Props = {
    isReady: boolean;
};

export default function Food({ isReady }: Props) {
    let food = foodDown;
    if (isReady) {
        food = foodUp;
    }
    return (
        <div>
            <Image className=" w-5" src={food} alt="food"></Image>
        </div>
    );
}
