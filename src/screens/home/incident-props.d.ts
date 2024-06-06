export type IncidentProps = {
    id: string;
    descricao: string;
    imageUrl: string;
    location: {
        latitude: number;
        longitude: number;
    };
    name: string;
    priority: number;
}