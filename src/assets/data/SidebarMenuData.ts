import {menuListProps} from "types"

export const MenuData:menuListProps[] = [
    {
        "routerName": "/",
        "menuTitle": "홈",
        "show": ["admin", "councillor", "developer", "member"]
    },
    {
        "routerName": "/notice",
        "menuTitle":"공지사항",
        "show": ["admin", "councillor", "developer", "member"]
    },
    {
        "routerName": "/selfstudy",
        "menuTitle": "자습신청",
        "show": ["admin", "councillor", "developer", "member"]
    },
    {
        "routerName": "/massage",
        "menuTitle": "안마의자 신청",
        "show": ["admin", "councillor", "developer", "member"]
    },
    {
        "routerName": "/song",
        "menuTitle": "기상음악 신청",
        "show": ["admin", "councillor", "developer", "member"]
    },
    {
        "routerName": "/studsDetail",
        "menuTitle": "학생정보",
        "show": ["admin", "councillor", "developer"]
    }
]