interface IYoutubeVideos {
    id: number;
    src: string;
    name: string;
}

interface IConcerts {
    id: number;
    name: string;
    date: string; 
    place: string;
    fbUrl: string;
}



export const youtubeVideos: Array<IYoutubeVideos> = [
    {
        id: 1,
        src: "https://www.youtube.com/embed/gwuz7XzlGrU",
        name: "Wooden Ships - Beznohý je osud",
    },
    {
        id: 2,
        src: "https://www.youtube.com/embed/KxAO28cuhpw",
        name: "Wooden Ships - In the rocks",
    },
    {
        id: 3,
        src: "https://www.youtube.com/embed/_8aT4xFP5j4",
        name: "Wooden Ships - Pochybnosti",
    },
    {
        id: 4,
        src: "https://www.youtube.com/embed/8LjiTTNbjFE",
        name: "Wooden Ships - Vstupuju znova do stejný řeky",
    },
    {
        id: 5,
        src: "https://www.youtube.com/embed/cCxbF4wq1Fo",
        name: "Wooden Ships - Studená noc",
    },
] 

export const concerts: Array<IConcerts> = [
    {
        id: 1,
        name: "Turbáza jede!",
        date: "17/06/2023",
        place: "Turistická chata na Prachově",
        fbUrl: "https://www.facebook.com/events/257731546747812",
    },
   
]


