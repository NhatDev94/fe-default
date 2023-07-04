import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faXmark, faEarthAmericas, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
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


export {
    faEllipsisIcon,
    faXmarkIcon,
    faEarthAmericasIcon,
    faThumbsUpIcon,
    faThumbsUpBlueIcon,
    faMessageIcon,
    faShareIcon,
}