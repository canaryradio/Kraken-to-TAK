Convert data from a Kraken SDR to TAK endpoints

The software will parse information collected by Kraken, convert to COT and XML and send to common TAK interfaces. The length of the line is arbitrary. The line is 6km long, but has no correlation besides bearing to the transmitter. Intersecting bearing lines are necessary for determining the geolocation of a transmitter. 

Planned improvements include:
- Button for persisting the current line and generating a new UID
- Work on filtering out by DOA Angle node
- Dashboard for easier updating of Kraken and TAK endpoints
- Simplified deployment

# Quick Start
```
Load flow to Node Red server
Adjust timestamp interval to desired frequency (5 seconds in the default)
Change http://10.0.0.16:8081/DOA_value.html to http://<YOUR_KRAKEN_SERVER_IP>:8081/DOA_value.html
Change TAK UDP URL to your TAK Server's URL
* The filter by DOA Angle node will disregard packets with a DOA within your notch. I use this to not display DOA bearing for a transmitter that I know exists, but is not of concern. The notch reads clockwise and any DOA between the low number and high number will be discarded. The node is disabled by default.
There are default values hardcoded for latitude and longitude. Ensure you use a GPS for the Kraken's server or input location data for a stationary deployment

```

<img width="424" alt="Screenshot 2024-01-26 at 9 09 38 PM" src="https://github.com/canaryradio/Kraken-to-TAK/assets/127666889/1baa35a4-d956-4250-8b26-06b6e71eeac0">

<img width="691" alt="Screenshot 2024-01-26 at 9 32 30 PM" src="https://github.com/canaryradio/Kraken-to-TAK/assets/127666889/137528e6-ebc6-425f-9b49-15f77f1b9bb5">

