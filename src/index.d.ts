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
	static create(devName: string): Promise<IDBDevice>;
}
export class BlockDevice extends Device {
}
export class FileDevice extends BlockDevice {
	static create(parent: CheerpOSDevice, fileName: string): Promise<FileDevice>;
}
export class GitHubDevice extends BlockDevice {
	static create(url: string): Promise<GitHubDevice>;
}
export class HttpBytesDevice extends BlockDevice {
	static create(url: string): Promise<HttpBytesDevice>;
}
export class Linux {
	static create(optionals?: {mounts?: MountPointConfiguration[], networkInterface?: NetworkInterface}): Promise<Linux>;
	delete(): void;
	run(fileName: string, args: Array<string>, optionals?: { env?: string[]; cwd?: string; uid?: number; gid?: number; }): Promise<{ status: number }>;
	setActivateConsole(activateFunc: (_: number) => void): EventListener;
	setConsole(e: HTMLElement): void;
	setCustomConsole(writeFunc: (buffer: Uint8Array, bufferLength: number) => void, columns: number, rows: number): EventListener;
	registerCallback(eventName: string, cb: EventListener): void;
	unregisterCallback(eventName: string, cb: EventListener): void;
}
export class OverlayDevice extends BlockDevice {
	static create(src: BlockDevice, idb: IDBDevice): Promise<OverlayDevice>;
}
export class WebDevice extends CheerpOSDevice {
	static create(url: string): Promise<WebDevice>;
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
