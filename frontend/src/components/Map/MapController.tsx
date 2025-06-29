import { useMap } from 'react-leaflet';
import { useEffect } from 'react';

interface MapControllerProps {
    center: [number, number] | null;
    zoom?: number;
}

export default function MapController({ center, zoom = 15 }: MapControllerProps) {
    const map = useMap();

    useEffect(() => {
        if (center) {
            map.setView(center, zoom);
        }
    }, [center, zoom, map]);

    return null;
} 