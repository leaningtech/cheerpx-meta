export interface Device {
	delete(): void;
}
export interface CheerpOSDevice extends Device {
}
export interface DataDevice extends CheerpOSDevice {
	writeFile(path: string, data: string): Promise<void>;
}
export interface IDBDevice extends CheerpOSDevice {
	readFileAsBlob(path: string): Promise<Blob>;
	reset(): Promise<void>;
}
export interface BlockDevice extends Device {
}
export interface FileDevice extends BlockDevice {
}
export interface GitHubDevice extends BlockDevice {
}
export interface HttpBytesDevice extends BlockDevice {
}
export interface CloudDevice extends BlockDevice {
}
export interface Linux {
	delete(): void;
	run(fileName: string, args: Array<string>, optionals?: { env?: string[]; cwd?: string; uid?: number; gid?: number; }): Promise<{ status: number }>;
	setActivateConsole(activateFunc: (_: number) => void): EventListener;
	setConsole(e: HTMLElement): void;
	setCustomConsole(writeFunc: (buffer: Uint8Array, vt: number) => void, columns: number, rows: number): (keyCode: number) => void;
	registerCallback(eventName: string, callback: (state: string | number) => void): void;
	unregisterCallback(eventName: string, callback: (state: string | number) => void): void;
}
export interface OverlayDevice extends BlockDevice {
}
export interface WebDevice extends CheerpOSDevice {
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
	DataDevice: {
		create(): Promise<DataDevice>;
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

export default CheerpX;
