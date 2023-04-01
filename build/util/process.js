"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanExit = exports.killSubProcesses = exports.catchExceptions = exports.addSubProcess = exports.subProcesses = void 0;
const util_1 = __importDefault(require("util"));
const child_process_1 = require("child_process");
const _1 = require(".");
exports.subProcesses = [];
function addSubProcess(subProcess) {
    exports.subProcesses.push(subProcess);
}
exports.addSubProcess = addSubProcess;
function catchExceptions(kill = false) {
    process
        .on('unhandledRejection', (reason, p) => {
        console.log(reason, 'Unhandled Rejection at Promise', p);
        (0, _1.logError)(reason + '. Unhandled Rejection at Promise:' + p);
    })
        .on('uncaughtException', (err) => {
        console.log(err, 'Uncaught Exception thrown');
        // logError(err + ". Uncaught Exception thrown" + err.stack)
        if (kill) {
            process.exit(1);
        }
    });
}
exports.catchExceptions = catchExceptions;
function killSubProcesses() {
    console.log('Killing', exports.subProcesses.length, 'child processes');
    for (const i in exports.subProcesses) {
        if (!exports.subProcesses[i])
            continue;
        exports.subProcesses[i].kill();
        exports.subProcesses[i] = undefined;
    }
    try {
        const execPromise = util_1.default.promisify(child_process_1.exec);
        execPromise("kill -9 `ps aux | grep /usr/bin/node | grep -v grep | awk '{ print $2 }'` && kill -9 `ps aux | grep RuneInfinite | grep -v grep | awk '{ print $2 }'` && pkill -f Infinite").catch(() => { });
    }
    catch (e2) {
        console.log(e2);
    }
}
exports.killSubProcesses = killSubProcesses;
function cleanExit() {
    killSubProcesses();
    process.kill(0);
}
exports.cleanExit = cleanExit;
// process.on('exit', cleanExit)
// process.on('SIGINT', cleanExit) // catch ctrl-c
// process.on('SIGTERM', cleanExit) // catch kill
//# sourceMappingURL=process.js.map