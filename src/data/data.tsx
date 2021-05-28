// importing Icons from HeroIcon Library for NavItems 
import { AnnotationIcon as BlogIcon, GlobeIcon as WorkIcon, NewspaperIcon as EventsIcon,  } from "@heroicons/react/outline";
import { LightBulbIcon as LifeIcon, FireIcon as WisdomIcon, PhoneIcon as ContactsIcon, } from "@heroicons/react/solid"
// Importing Icons from HeroIcon Library for SubItems of Each NavItems
import { SunIcon as OutlineSunIcon } from "@heroicons/react/outline";
import { SunIcon as SolidSunIcon } from "@heroicons/react/solid"
export default ([
    {
        NavItemId:1,
        NavItemPos:'Top',
        NavItemName:'Life',
        NavItemSvgIcon:LifeIcon,
        SubItem:true,
        SubItemList:[
            {
                SubItemListId:1,   
                SubItemListName:"About",
                OutlineIcon:OutlineSunIcon,
                SolidIcon:SolidSunIcon
            },
            {
                SubItemListId:2,   
                SubItemListName:"Biography",
                OutlineIcon:OutlineSunIcon,
                SolidIcon:SolidSunIcon
            },
            {
                SubItemListId:3,   
                SubItemListName:"Honors & Awards",
                OutlineIcon:OutlineSunIcon,
                SolidIcon:SolidSunIcon
            },
            {
                SubItemListId:4,   
                SubItemListName:"Year in Review",
                OutlineIcon:OutlineSunIcon,
                SolidIcon:SolidSunIcon
            },
            {
                SubItemListId:5,   
                SubItemListName:"Sudarshan Kriya",
                OutlineIcon:OutlineSunIcon,
                SolidIcon:SolidSunIcon
            },
            {
                SubItemListId:6,   
                SubItemListName:"Social Media Wall",
                OutlineIcon:OutlineSunIcon,
                SolidIcon:SolidSunIcon
            },
        ]
    },
    {
        NavItemId:2,
        NavItemPos:'Mid',
        NavItemName:'Work',
        NavItemSvgIcon:WorkIcon,
        SubItem:true,
        SubItemList:[
            {   
                SubItemListId:1,   
                SubItemListName:"All Service Activities",
                OutlineIcon:OutlineSunIcon,
                SolidIcon:SolidSunIcon
            },
            {
                SubItemListId:2,   
                SubItemListName:"Service & Social Programs",
                OutlineIcon:OutlineSunIcon,
                SolidIcon:SolidSunIcon
            },
            {
                SubItemListId:3,   
                SubItemListName:"Leadership & Ethics",
                OutlineIcon:OutlineSunIcon,
                SolidIcon:SolidSunIcon
            },
            {
                SubItemListId:4,   
                SubItemListName:"Peace Initiatives",
                OutlineIcon:OutlineSunIcon,
                SolidIcon:SolidSunIcon
            },
            {
                SubItemListId:5,   
                SubItemListName:"Spirituality & Human Values",
                OutlineIcon:OutlineSunIcon,
                SolidIcon:SolidSunIcon
            },
            {
                SubItemListId:6,   
                SubItemListName:"Culture & Celebrations",
                OutlineIcon:OutlineSunIcon,
                SolidIcon:SolidSunIcon
            },
        ]
    },
    {
        NavItemId:3,
        NavItemPos:'Mid',
        NavItemName:'Wisdom',
        NavItemSvgIcon:WisdomIcon,
        SubItem:false,
        SubItemList:[
        ]
    },
    {
        NavItemId:4,
        NavItemPos:'Mid',
        NavItemName:'Events',
        NavItemSvgIcon:EventsIcon,
        SubItem:false,
        SubItemList:[
        ]
    },
    {
        NavItemId:5,
        NavItemPos:'Mid',
        NavItemName:'Blog',
        NavItemSvgIcon:BlogIcon,
        SubItem:false,
        SubItemList:[
        ]
    },
    {
        NavItemId:6,
        NavItemPos:'Lst',
        NavItemName:'Contacts',
        NavItemSvgIcon:ContactsIcon,
        SubItem:false,
        SubItemList:[
        ]
    }
])