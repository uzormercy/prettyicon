import PagentListing from "@/components/Pagents/PagentListing"

const PagentListingPage =  () => {
    const images = [
        {
            url: "/images/01.jpg",
            name: 'Nadia Giri',
            title: 'Staff Engineer, Algolia',
            votes: 30
        },
        {
            url: "/images/02.jpg",
            name: 'Sarah Daya',
            title: 'Staff Engineer, Algolia',
            votes: 30
        },
        {
            url: "/images/03.jpg",
            name: 'Leila Lucas',
            title: 'Staff Engineer, Algolia',
            votes: 30
        },
        {
            url: "/images/04.jpg",
            name: 'Taylor Dami',
            title: 'Staff Engineer, Algolia',
            votes: 30
        },
        {
            url: "/images/05.jpg",
            name: 'Elizabeth Noah',
            title: 'Staff Engineer, Algolia',
            votes: 30
        },
        {
            url: "/images/06.jpg",
            name: 'Sasha Davidson',
            title: 'Staff Engineer, Algolia',
            votes: 30
        },
        {
            url: "/images/07.jpg",
            name: 'Precious Daniels',
            title: 'Staff Engineer, Algolia',
            votes: 30
        },
        {
            url: "/images/08.jpg",
            name: 'Jazmyn Timothy',
            title: 'Staff Engineer, Algolia',
            votes: 30
        },
        {
            url: "/images/09.jpg",
            name: 'Taryn Brown',
            title: 'Staff Engineer, Algolia',
            votes: 30
        },
        {
            url: "/images/10.jpg",
            name: 'Kasey Favour',
            title: 'Staff Engineer, Algolia',
            votes: 30
        },
        {
            url: "/images/11.jpg",
            name: 'Amara Kalu',
            title: 'Staff Engineer, Algolia',
            votes: 30
        },
        {
            url: "/images/12.jpg",
            name: 'Baylee Mark',
            title: 'Staff Engineer, Algolia',
            votes: 30
        },
        {
            url: "/images/13.jpg",
            name: 'Emely Robot',
            title: 'Staff Engineer, Algolia',
            votes: 30
        },
        {
            url: "/images/14.jpg",
            name: 'Quinn Peter',
            title: 'Staff Engineer, Algolia',
            votes: 30
        },
        {
            url: "/images/15.jpg",
            name: 'Deborah Stevens',
            title: 'Staff Engineer, Algolia',
            votes: 30
        },
        {
            url: "/images/16.jpg",
            name: 'Evelyn Jakes',
            title: 'Staff Engineer, Algolia',
            votes: 30
        },
        {
            url: "/images/17.jpg",
            name: 'Miya Samuel',
            title: 'Staff Engineer, Algolia',
            votes: 20
        }
     ]
    return <div className="w-full bg-slate-100">
        <div className="container mx-auto pt-3">
            <div className="flex items-center justify-center">
                <h2 className="sec-title text-center">Vote your favourite <br/> beauty pagent</h2>
            </div>
        </div>
        <PagentListing images={images} />
    </div>
}


export default PagentListingPage