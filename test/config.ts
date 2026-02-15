const BASE_URL: string = "http://192.168.2.2";

export function url(path: string): string {
    return `${BASE_URL}${path}`;
}
