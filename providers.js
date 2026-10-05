export const mapAssetsBase=new URL('./assets/',import.meta.url);
export const MapProvider={"id":"maplibre-pmtiles","label":"本地矢量地图","supportsOffline":true,"sources":[{"id":"egypt","path":"maps/egypt.pmtiles","bounds":[30.8,21.9,34.2,30.4]},{"id":"dubai","path":"maps/dubai.pmtiles","bounds":[54.95,24.95,55.55,25.4]}]};
export function mapProviderForTrip(){return MapProvider;}
// Accept supplied GeoJSON coordinate order without changing the stored document.
export function normalizeCoordinates(coordinates) {
  return Array.isArray(coordinates)&&coordinates.length===2
    ? {lng:coordinates[0],lat:coordinates[1]} : coordinates;
}
export function readCoordinates(place) {
  const valid=c=>c&&Number.isFinite(c.lat)&&Number.isFinite(c.lng)&&Math.abs(c.lat)<=90&&Math.abs(c.lng)<=180;
  const current=normalizeCoordinates(place?.coordinates);
  if(valid(current))return {lat:current.lat,lng:current.lng};
  const legacy={lat:place?.latitude,lng:place?.longitude};
  return valid(legacy)?legacy:null;
}
