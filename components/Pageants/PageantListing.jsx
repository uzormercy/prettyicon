import Image from "next/image";
import Link from "next/link";

const PageantListing = ({images, section}) => {
    return <div className="w-full mt-2 pt-8">
        <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-4  sm:grid-cols-2 px-3">
                { images.map((image) => (<Link href={`/pageants/${image.id}`} key={image.url} className="bg-white p-8 md:p-0 cursor-pointer">
                            <Image className="w-80 h-80 pageant-image"  src={image.url} alt="" width="384" height="512" loading="lazy" />
                            <div className="pt-6 md:p-8 text-center space-y-4">
                                <figcaption className="font-medium">
                                    <div className="pageant-title font-semibold">
                                        {image.name}
                                    </div>
                                    <div className="text-slate-700 dark:text-slate-500">
                                        {image.title}
                                    </div>
                                    <div className="text-black dark:text-black font-bold">
                                        Votes: {image.votes}
                                    </div>
                                </figcaption>
                            </div>
                </Link>))}
            </div>
        </div>
    </div>
}


export default PageantListing;