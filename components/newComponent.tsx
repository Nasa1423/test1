import Image from 'next/image'
import Link from 'next/link'

// interface IMyModule {
//     image: string;
// }
/*width={16*size} height={9*size}*/
export const MyModule = ({image, size}) => {
    return <div className="p-20">
        <Link href={"newPage"}>
            <Image src={image} width={"50"} height={"100"} className="h-12 w-50"/>
        </Link>
    </div>
}