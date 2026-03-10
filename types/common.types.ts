export interface TimelineItem {
    id: string;
    title: string;
    subtitle: string;
    location?: string;
    badge?: string;
    startDate: string;
    endDate: string;
    description?: string[];
    skills?: string[];
}
