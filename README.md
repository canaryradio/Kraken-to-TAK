Convert data from a Kraken SDR to TAK endpoints

The software will parse information collected by Kraken, convert to COT and XML and send to common TAK interfaces. The length of the line is arbitrary. The line is 6km long, but has no correlation besides bearing to the transmitter. Intersecting bearing lines are necessary for determining the geolocation of a transmitter. 

Planned improvements include:
- Button for persisting the current line and generating a new UID
- Dashboard for easier updating of Kraken and TAK endpoints

# Quick Start
```
npm install
# edit thetaDOAConverter.ts
npm run compile
npx node-red # to run node red server
# reimport thetaDOAConverter.js to node-red flows
```

<img width="424" alt="Screenshot 2024-01-26 at 9 09 38 PM" src="https://github.com/canaryradio/Kraken-to-TAK/assets/127666889/1baa35a4-d956-4250-8b26-06b6e71eeac0">

<img width="691" alt="Screenshot 2024-01-26 at 9 32 30 PM" src="https://github.com/canaryradio/Kraken-to-TAK/assets/127666889/137528e6-ebc6-425f-9b49-15f77f1b9bb5">

