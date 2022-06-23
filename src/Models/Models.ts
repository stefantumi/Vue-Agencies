export class Agency {
    "id":         number;
    "name":       string;
    "properties": Property[];
    "agents":     Agent[];
}

export class Agent {
    "catalogue": Property[];
    "id":        number;
    "firstName": string;
    "lastName":  string;
    "ssid":      string;
}

export class Property {
    "id":      number;
    "address": Address;
    "size":    number;
    "price":   number;
}

export class Address {
    "id":      number;
    "street":  string;
    "houseNo": number;
    "zip":     number;
}

