export class Device {
	delete(): void;
}
export class CheerpOSDevice extends Device {
}
export class DataDevice extends CheerpOSDevice {
	static create(): Promise<DataDevice>;
	writeFile(path: string, data: string): Promise<void>;
}
export class IDBDevice extends CheerpOSDevice {
}
export class BlockDevice extends Device {
}
export class FileDevice extends BlockDevice {
}
export class GitHubDevice extends BlockDevice {
}
export class HttpBytesDevice extends BlockDevice {
}
interface Linux {
	delete(): void;
	run(fileName: string, args: Array<string>, optionals?: { env?: string[]; cwd?: string; uid?: number; gid?: number; }): Promise<{ status: number }>;
	setActivateConsole(activateFunc: (_: number) => void): EventListener;
	setConsole(e: HTMLElement): void;
	setCustomConsole(writeFunc: (buffer: Uint8Array, bufferLength: number) => void, columns: number, rows: number): EventListener;
	registerCallback(eventName: string, cb: EventListener): void;
	unregisterCallback(eventName: string, cb: EventListener): void;
}
interface OverlayDevice extends BlockDevice {
	delete(): void;
}
interface WebDevice extends CheerpOSDevice {
	delete(): void;
}
interface MountPointConfiguration {
	type: "ext2" | "dir" | "devs" | "proc";
	path: string;
	dev: Device;
}
interface NetworkInterface {
	authKey?: string;
	controlUrl?: string;
	loginUrlCb?: (url: string) => void;
	stateUpdateCb?: (state: number) => void;
	netmapUpdateCb?: (map: any) => void;
}
declare const CheerpX: {
	BlockDevice: {
		new(metaStr: string, length: number): BlockDevice;
	},
	FileDevice: {
		create(parent: CheerpOSDevice, fileName: string): Promise<FileDevice>;
	},
	GitHubDevice: {
		create(url: string): Promise<GitHubDevice>;
	},
	HttpBytesDevice: {
		create(url: string): Promise<HttpBytesDevice>;
	},
	IDBDevice: {
		create(devName: string): Promise<IDBDevice>;
	},
	Linux: {
		create(optionals?: {mounts?: MountPointConfiguration[], networkInterface?: NetworkInterface}): Promise<Linux>;
	},
	OverlayDevice: {
		create(src: BlockDevice, idb: IDBDevice): Promise<OverlayDevice>;
	},
	WebDevice: {
		create(url: string): Promise<WebDevice>;
	}
};

export default CheerpX;*/
