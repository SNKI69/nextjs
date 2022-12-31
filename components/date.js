import { parseISO, format} from 'date-fns';

export default function Date({ dateString }) {
    const date = parseISO(dateString);

    return(
        // <time dateTime={dateString}> {format (date, 'LLLL d, yyy')} </time>
        <time>2079-9-01</time>
    )
}