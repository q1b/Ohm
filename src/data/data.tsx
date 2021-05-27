// importing Icons from HeroIcon Library
import { AnnotationIcon as BlogIcon, GlobeIcon as WorkIcon, NewspaperIcon as EventsIcon } from "@heroicons/react/outline";
import { LightBulbIcon as LifeIcon, FireIcon as WisdomIcon, PhoneIcon as ContactsIcon } from "@heroicons/react/solid"

export default ([
    {
        NavItemId:1,
        NavItemPos:'Top',
        NavItemName:'Life',
        NavItemSvgIcon:LifeIcon,
    },
    {
        NavItemId:2,
        NavItemPos:'Mid',
        NavItemName:'Work',
        NavItemSvgIcon:WorkIcon,
    },
    {
        NavItemId:3,
        NavItemPos:'Mid',
        NavItemName:'Wisdom',
        NavItemSvgIcon:WisdomIcon,
    },
    {
        NavItemId:4,
        NavItemPos:'Mid',
        NavItemName:'Events',
        NavItemSvgIcon:EventsIcon,
    },
    {
        NavItemId:5,
        NavItemPos:'Mid',
        NavItemName:'Blog',
        NavItemSvgIcon:BlogIcon,
    },
    {
        NavItemId:6,
        NavItemPos:'Lst',
        NavItemName:'Contacts',
        NavItemSvgIcon:ContactsIcon,
    }
])