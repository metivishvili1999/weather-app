import moment from 'moment';

function DetailCard({weather_icon, data}) {
    const {clouds, main, weather} = data.list[0]

    return (
        <div className="container p-5 flex items-center justify-center shadow-lg rounded-3xl bg-gray-200 h-1/3 mb-auto">
            <div className="my-auto">
            <p className="font-bold text-5xl text-emerald-500 mb-2">{Math.round(main.temp)}&deg;C</p>
            <p className="text-4xl text-gray-800 font-medium tracking-widest">{weather[0].main}
                <img src={weather_icon} className="w-1/4 inline" />
            </p>
            <p className="text-gray-400 font-medium text-xs uppercase tracking-widest">{weather[0].description}</p>
            <p className="text-cyan-700 font-semibold tracking-wider ">{moment().format("dddd, MMM YYYY.")}</p>
            </div>
            <div className="my-2 border-l-2 border-gray-500 p-3">
            <p className="text-gray-500 font-semibold">Cloud Cover: {clouds.all}%</p>
            <p className="text-gray-500 font-semibold">Min Temp: {Math.round(main.temp_min)}&deg;C</p>
            <p className="text-gray-500 font-semibold">Max Temp: {Math.round(main.temp_max)}&deg;C</p>
            </div>
        </div>
    )
}



export default DetailCard;