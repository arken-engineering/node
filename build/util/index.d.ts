import * as ethers from 'ethers';
export declare const isDebug: boolean;
export declare function logError(...msgs: any[]): void;
export declare function log(...msgs: any[]): void;
export declare function nowReadable(): string;
export declare function wait(ms: any): Promise<unknown>;
export declare function round(num: any, precision: any): number;
export declare function pad(n: any, width: any, z?: string): string;
export declare function removeDupes(list: any): any;
export declare const toLong: (x: any) => ethers.ethers.BigNumber;
export declare const toShort: (x: any) => number;
export declare function updateGit(): Promise<void>;
export declare function groupBySub(xs: any, key: any, subkey: any): any;
export declare function groupBy(xs: any, key: any): any;
export declare function getHighestId(arr: any): number;
export declare function average(arr: any): number;
export declare function ordinalise(n: any): string;
export declare function commarise(n: any): any;
export declare function getTime(): number;
export declare function convertToDecimal(byte: any): number;
export declare function binaryAgent(str: any): string;
export declare function decodePayload(msg: any): any;
export declare function isNumeric(str: any): boolean;
export declare function sha256(str: any): string;
export declare function randomPosition(min: any, max: any): any;
export declare function shuffleArray(array: any): any;
export declare const getAddress: (address: any) => any;
export declare function random(min: any, max: any): any;
declare const _default: {
    db: {
        isPostgresError: (error: any) => boolean;
        isUniqueConstraintViolation: (error: any) => boolean;
    };
    time: {
        date: () => string;
        now: () => Date;
        fancyTimeFormat: typeof import("./time/fancyTimeFormat").default;
        removeTimezoneOffset: typeof import("./time").removeTimezoneOffset;
    };
};
export default _default;
