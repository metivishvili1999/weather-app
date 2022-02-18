import moment from 'moment';

function SummaryCard({day}) {
    let day_icon = `${process.env.REACT_APP_ICON_URL + day.weather[0]["icon"]}@2x.png`
    return (
        <li className="container p-5 flex items-center justify-center bg-gray-200 rounded-3xl my-auto mr-1">
            <div className="my-auto">
                <p className="font-bold text-3xl text-emerald-700 mb-2">{Math.round(day.main.temp)}&deg;C</p>
                <p className="text-2xl text-gray-800 font-medium tracking-widest">{day.weather[0].main}
                    <img src={day_icon} className="w-1/4 inline" />
                </p>
                <p className="text-emerald-700 text-sm font-medium uppercase tracking-widest">{day.weather[0].description}</p>
                <p className="tracking-wider">{moment(day.dt_txt).format("dddd hh:mm")}AM</p>
            </div>
        </li>
    )
}

export default SummaryCard;