'use client';

import Image from 'next/image';
import Link from 'next/link';

const UnderwaterDivider = () => {
    return (
        <div>

            <div className="under-water-divider">
                <div className="flex pt-10 pb-5 gap-3 w-full justify-center ">
                    <Link href="https://www.facebook.com/woodenships68">
                        <Image
                            src="/social-media-icons/facebook.png"
                            className='icon rounded-xl hover:shadow-md hover:shadow-purple-600'
                            alt="facebook-icon"
                            height={45}
                            width={45}
                        />
                    </Link>
                    <Link href="https://bandzone.cz/woodenships">
                        <Image
                            src="/social-media-icons/bandzone-icon.png"
                            className='icon rounded-xl hover:shadow-md hover:shadow-purple-600'
                            alt="bandzone-icon"
                            height={45}
                            width={45}
                        />
                    </Link>
                </div>
                <div className="flex w-full justify-center">
                    <Image
                        src="/logos/wooden-ships-logo-color-ship.svg"
                        className='pb-10'
                        alt="band-logo"
                        height={220}
                        width={220}
                    />
                </div>
            </div>
            <Image
                src="/images/band-red-light.jpg"
                className=''
                alt="band-red-light"
                height={0}
                width={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
            />
        </div>
    );
}

export default UnderwaterDivider;