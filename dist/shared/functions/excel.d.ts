export declare class File {
    static makeFile(data: any, fileName: string): Promise<{
        data: any;
        file: {
            name: string;
            base64: string;
        };
    }>;
}
