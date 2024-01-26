import fs from 'fs'
import calculateEndLatLng from './src/calculateEndLatLng'

const main = async () => {
    const file = fs.readFileSync('./sample_data/sample1.csv')
    const array = file.toString().split(',')
    const s_lat = parseFloat(array[8])
    const s_lng = parseFloat(array[9])
    const doa = parseFloat(array[1])
    const compassHeading = parseFloat(array[11])
    const txPosition = calculateEndLatLng(s_lat, s_lng, doa, compassHeading)
    console.log('Start Lat:', s_lat)
    console.log('End Lng:', s_lng)
    console.log('End Lat:', txPosition[0])
    console.log('End Lng:', txPosition[1])
}

main()  