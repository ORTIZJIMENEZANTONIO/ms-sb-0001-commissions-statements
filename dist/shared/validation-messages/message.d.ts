export declare class Message {
    static MAX_LENGTH: (field: any, len: any) => string;
    static MIN_LENGTH: (field: any, len: any) => string;
    static LENGTH: (field: any, len: any) => string;
    static MIN: (field: any, val: any) => string;
    static MAX: (field: any, val: any) => string;
    static POSITIVE: (field: any) => string;
    static MAX_NUMBER: (field: any, val: any) => string;
    static STRING: (field: any) => string;
    static NUMBER: (field: any) => string;
    static REQUIRED: (field: any) => string;
    static ALREADY_EXISTS: () => string;
    static IsDate: (field: any) => string;
    static DELETED: () => string;
    static UPDATED: () => string;
    static NOT_FOUND: () => string;
}
