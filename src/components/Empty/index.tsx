// NextJS
import Image from 'next/image'

export default function Empty () {
    return (
        <Image
            alt="Empty"
            height={300}
            src="/empty.png"
            width={425}
        />
    )
}
