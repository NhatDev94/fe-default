import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faXmark, faEarthAmericas, faThumbsUp, faListUl, faChartColumn, faUser as _faUser, faPlus as _faPlus, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import {faMessage, faShareFromSquare, faThumbsUp as faThumbsUpRe} from '@fortawesome/free-regular-svg-icons'

const getIcon = (icon: any, color?: string) => {
    return <FontAwesomeIcon icon={icon} color={color} />
}

const faEllipsisIcon = getIcon(faEllipsis)
const faXmarkIcon = getIcon(faXmark)
const faEarthAmericasIcon = getIcon(faEarthAmericas)
const faThumbsUpIcon = getIcon(faThumbsUpRe)
const faThumbsUpBlueIcon = getIcon(faThumbsUp, 'blue')
const faMessageIcon = getIcon(faMessage)
const faShareIcon = getIcon(faShareFromSquare)
const faList = (color?: string) => getIcon(faListUl, color)
const faChart = (color?: string) => getIcon(faChartColumn, color)
const faUser = (color?: string) => getIcon(_faUser, color)
const faPlus = (color?: string) => getIcon(_faPlus, color)
const angleLeft = (color?: string) => getIcon(faAngleLeft, color)
const angleRight = (color?: string) => getIcon(faAngleRight, color)


export {
    faEllipsisIcon,
    faXmarkIcon,
    faEarthAmericasIcon,
    faThumbsUpIcon,
    faThumbsUpBlueIcon,
    faMessageIcon,
    faShareIcon,
    faList,
    faChart,
    faUser,
    faPlus,
    angleLeft,
    angleRight
}