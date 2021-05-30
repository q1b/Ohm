// importing Icons from HeroIcon Library for NavItems 
import { AnnotationIcon as BlogIcon, GlobeIcon as WorkIcon, NewspaperIcon as EventsIcon,  } from "@heroicons/react/outline";
import { LightBulbIcon as LifeIcon, FireIcon as WisdomIcon, PhoneIcon as ContactsIcon, } from "@heroicons/react/solid"
// Importing Icons from HeroIcon Library for SubItems of Each NavItems
import { SunIcon as OSunIcon } from "@heroicons/react/outline";
import { SunIcon as SSunIcon } from "@heroicons/react/solid"

export default ([
    {
        Id:1,
        Pos:'Top',
        Name:'Life',
        Icon:LifeIcon,
        SubItem:true,
        SubItemList:[
            {
                Id:1,   
                Name:"About",
                OIcon:OSunIcon,
                SIcon:SSunIcon,
                href:"",
            },
            {
                Id:2,   
                Name:"Biography",
                OIcon:OSunIcon,
                SIcon:SSunIcon,
                href:"",
            },
            {
                Id:3,   
                Name:"Honors & Awards",
                OIcon:OSunIcon,
                SIcon:SSunIcon,
                href:"",
            },
            {
                Id:4,   
                Name:"Year in Review",
                OIcon:OSunIcon,
                SIcon:SSunIcon,
                href:"",
            },
            {
                Id:5,   
                Name:"Sudarshan Kriya",
                OIcon:OSunIcon,
                SIcon:SSunIcon,
                href:"",
            },
            {
                Id:6,   
                Name:"Social Media Wall",
                OIcon:OSunIcon,
                SIcon:SSunIcon,
                href:"",
            },
        ]
    },
    {
        Id:2,
        Pos:'Mid',
        Name:'Work',
        Icon:WorkIcon,
        SubItem:true,
        SubItemList:[
            {   
                Id:1,   
                Name:"All Service Activities",
                OIcon:OSunIcon,
                SIcon:SSunIcon,
                href:"",
            },
            {
                Id:2,   
                Name:"Service & Social Programs",
                OIcon:OSunIcon,
                SIcon:SSunIcon,
                href:"",
            },
            {
                Id:3,   
                Name:"Leadership & Ethics",
                OIcon:OSunIcon,
                SIcon:SSunIcon,
                href:"",
            },
            {
                Id:4,   
                Name:"Peace Initiatives",
                OIcon:OSunIcon,
                SIcon:SSunIcon,
                href:"",
            },
            {
                Id:5,   
                Name:"Spirituality & Human Values",
                OIcon:OSunIcon,
                SIcon:SSunIcon,
                href:"",
            },
            {
                Id:6,   
                Name:"Culture & Celebrations",
                OIcon:OSunIcon,
                SIcon:SSunIcon,
                href:"",
            },
        ]
    },
    {
        Id:3,
        Pos:'Mid',
        Name:'Wisdom',
        Icon:WisdomIcon,
        SubItem:false,
        SubItemList:[
        ]
    },
    {
        Id:4,
        Pos:'Mid',
        Name:'Events',
        Icon:EventsIcon,
        SubItem:false,
        SubItemList:[
        ]
    },
    {
        Id:5,
        Pos:'Mid',
        Name:'Blog',
        Icon:BlogIcon,
        SubItem:false,
        SubItemList:[
        ]
    },
    {
        Id:6,
        Pos:'Lst',
        Name:'Contacts',
        Icon:ContactsIcon,
        SubItem:false,
        SubItemList:[
        ]
    }
])