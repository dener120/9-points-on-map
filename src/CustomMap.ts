export interface Mappable {
    location: {
        lat: number,
        lng: number,
    };
    markerContent(): string;
    color: string;
}

export class CustomMap {
    private goggleMap: google.maps.Map;

    constructor(mapDivId: string) {
        this.goggleMap = new google.maps.Map(document.getElementById(mapDivId) as HTMLElement, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            }
        });
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.goggleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });

            infoWindow.open(this.goggleMap, marker);
        });
    }
}