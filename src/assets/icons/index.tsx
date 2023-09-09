import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faXmark, faEarthAmericas, faThumbsUp, faRightFromBracket, faUserGear } from '@fortawesome/free-solid-svg-icons'
import {faFile, faMessage, faShareFromSquare, faThumbsUp as faThumbsUpRe, faUser} from '@fortawesome/free-regular-svg-icons'

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
const faUserIcon = getIcon(faUser)
const faFileIcon = getIcon(faFile)
const faRightFromBracketIcon = getIcon(faRightFromBracket)
const faUserGearIcon = getIcon(faUserGear)


export {
    faEllipsisIcon,
    faXmarkIcon,
    faEarthAmericasIcon,
    faThumbsUpIcon,
    faThumbsUpBlueIcon,
    faMessageIcon,
    faShareIcon,
    faUserIcon,
    faFileIcon,
    faRightFromBracketIcon,
    faUserGearIcon
}