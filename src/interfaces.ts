export interface ItemProps {
    name: string;
    address: string;
    bearing: string;
    distance: number;
    location?: LatLon
}

export interface LatLon {
    latitude: number;
    longitude: number;
}

export interface AppState {
    isMap: boolean;
    location: LatLon;
}