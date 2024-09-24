export type Criterias = {
    domains?: string[];
    root_domains?: string[];
    app_domains?: string[];
    email_domains?: string[];
    ips?: string[];
    infection_date_from?: string;
    infection_date_to?: string;
    next?: string;
    size?: 100;
}