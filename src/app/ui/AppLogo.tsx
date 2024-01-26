import Image from 'next/image'

export default function AppLogo () {
    return (
        <Image
            src="/logo.png"
            alt="Codelitt Logo"
            width={266}
            height={43}
        />
    )
}
