import * as Location from "expo-location";

const tenMetersWithDegrees=0.001;

const getlocation=(increment)=>{
	return {
		timestamp:1601275769914,
		coords:{
			speed:-1,
			heading:-1,
			accuracy:65,
			altitudeAccuracy:10,
			altitude:237.00230407714844,
			latitude:30.852153182183862+increment*tenMetersWithDegrees,
			longitude:75.83730341230522+increment*tenMetersWithDegrees,
		}
	};
};

let counter=0;
setInterval(()=>{
	Location.EventEmitter.emit('Expo.locationChanged',{
		watchId:Location._getCurrentWatchId(),
		location:getlocation(counter)
	});
	counter++;
},1000);