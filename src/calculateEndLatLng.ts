// PORTED FROM KRAKEN SDR's PYTHON Version
// https://github.com/krakenrf/krakensdr_doa/blob/main/_signal_processing/krakenSDR_signal_processor.py#L1289-L1303

const R = 6372.795477598
const line_length = 100

const degrees_to_radians = (degrees: number) => {
  var pi = Math.PI;
  return degrees * (pi/180);
}

const radians_to_degrees = (radians: number) => {
  return radians * (180 / Math.PI)
}

const calculateEndLatLng = (s_lat: number, s_lng: number, doa: number, my_bearing: number) => {
    const theta = degrees_to_radians(my_bearing + (360 - doa)) // that is the relative angle from you the craken to the target 360 degrees minus doa + your bearing) then calculated to radians
    const s_lat_in_rad = degrees_to_radians(s_lat) // starting latitude converted to radians)
    const s_lng_in_rad = degrees_to_radians(s_lng) // starting lng
    const e_lat_in_rad = Math.asin(Math.sin(s_lat_in_rad) * Math.cos(line_length / R) + Math.cos(s_lat_in_rad) * (Math.sin(line_length / R) * Math.cos(theta)))
    const e_lng_in_rad = s_lng_in_rad + Math.atan2(Math.sin(theta) * Math.sin(line_length / R) * Math.cos(s_lat_in_rad), Math.cos(line_length / R) - Math.sin(s_lat_in_rad) * Math.sin(e_lat_in_rad))
    const e_lat = radians_to_degrees(e_lat_in_rad)
    const e_lng = radians_to_degrees(e_lng_in_rad)
    return parseFloat(e_lat.toFixed(6)), parseFloat(e_lng.toFixed(6))
}

export default calculateEndLatLng