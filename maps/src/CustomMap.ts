//need to complete the SOLID principles course

interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): google.maps.Marker {
    return new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }

  openMarkerInfo(marker: google.maps.Marker, content: string): void {
    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content,
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
