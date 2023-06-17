import PageantListing from "@/components/Pageants/PageantListing"

const PageantListingPage =  () => {
    const images = [
        {
            id: 1,
            url: "/images/01.jpg",
            name: 'Nadia Giri',
            title: 'Staff Engineer, Algolia',
            votes: 30
        },
        {
            id: 2,
            url: "/images/02.jpg",
            name: 'Sarah Daya',
            title: 'Staff Engineer, Algolia',
            votes: 30
        },
        {
            id: 3,
            url: "/images/03.jpg",
            name: 'Leila Lucas',
            title: 'Staff Engineer, Algolia',
            votes: 30
        },
        {
            id: 4,
            url: "/images/04.jpg",
            name: 'Taylor Dami',
            title: 'Staff Engineer, Algolia',
            votes: 30
        },
        {
            id: 5,
            url: "/images/05.jpg",
            name: 'Elizabeth Noah',
            title: 'Staff Engineer, Algolia',
            votes: 30
        },
        {
            id: 6,
            url: "/images/06.jpg",
            name: 'Sasha Davidson',
            title: 'Staff Engineer, Algolia',
            votes: 30
        },
        {
            id: 7,
            url: "/images/07.jpg",
            name: 'Precious Daniels',
            title: 'Staff Engineer, Algolia',
            votes: 30
        },
        {
            id: 8,
            url: "/images/08.jpg",
            name: 'Jazmyn Timothy',
            title: 'Staff Engineer, Algolia',
            votes: 30
        },
        {
            id: 9,
            url: "/images/09.jpg",
            name: 'Taryn Brown',
            title: 'Staff Engineer, Algolia',
            votes: 30
        },
        {
            id: 10,
            url: "/images/10.jpg",
            name: 'Kasey Favour',
            title: 'Staff Engineer, Algolia',
            votes: 30
        },
        {
            id: 11,
            url: "/images/11.jpg",
            name: 'Amara Kalu',
            title: 'Staff Engineer, Algolia',
            votes: 30
        },
        {
            id: 12,
            url: "/images/12.jpg",
            name: 'Baylee Mark',
            title: 'Staff Engineer, Algolia',
            votes: 30
        },
        {
            id: 13,
            url: "/images/13.jpg",
            name: 'Emely Robot',
            title: 'Staff Engineer, Algolia',
            votes: 30
        },
        {
            id: 14,
            url: "/images/14.jpg",
            name: 'Quinn Peter',
            title: 'Staff Engineer, Algolia',
            votes: 30
        },
        {
            id: 15,
            url: "/images/15.jpg",
            name: 'Deborah Stevens',
            title: 'Staff Engineer, Algolia',
            votes: 30
        },
        {
            id: 16,
            url: "/images/16.jpg",
            name: 'Evelyn Jakes',
            title: 'Staff Engineer, Algolia',
            votes: 30
        },
        {
            id: 17,
            url: "/images/17.jpg",
            name: 'Miya Samuel',
            title: 'Staff Engineer, Algolia',
            votes: 20
        }
     ]
    return <div className="w-full bg-slate-100 py-6">
        <div className="container mx-auto pt-3">
            <div className="flex items-center justify-center">
                <h2 className="sec-title text-center">Vote your favourite <br/> beauty pagent</h2>
            </div>
        </div>
        <PageantListing images={images} />
    </div>
}


export default PageantListingPage