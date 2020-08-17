// https://www.terraform.io/docs/providers/azurerm/r/packet_capture.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface PacketCaptureConfig extends TerraformMetaArguments {
  readonly maximumBytesPerPacket?: number;
  readonly maximumBytesPerSession?: number;
  readonly maximumCaptureDuration?: number;
  readonly name: string;
  readonly networkWatcherName: string;
  readonly resourceGroupName: string;
  readonly targetResourceId: string;
  /** filter block */
  readonly filter?: PacketCaptureFilter[];
  /** storage_location block */
  readonly storageLocation: PacketCaptureStorageLocation[];
  /** timeouts block */
  readonly timeouts?: PacketCaptureTimeouts;
}
export interface PacketCaptureFilter {
  readonly localIpAddress?: string;
  readonly localPort?: string;
  readonly protocol: string;
  readonly remoteIpAddress?: string;
  readonly remotePort?: string;
}
export interface PacketCaptureStorageLocation {
  readonly filePath?: string;
  readonly storageAccountId?: string;
}
export interface PacketCaptureTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class PacketCapture extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PacketCaptureConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_packet_capture',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._maximumBytesPerPacket = config.maximumBytesPerPacket;
    this._maximumBytesPerSession = config.maximumBytesPerSession;
    this._maximumCaptureDuration = config.maximumCaptureDuration;
    this._name = config.name;
    this._networkWatcherName = config.networkWatcherName;
    this._resourceGroupName = config.resourceGroupName;
    this._targetResourceId = config.targetResourceId;
    this._filter = config.filter;
    this._storageLocation = config.storageLocation;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // maximum_bytes_per_packet - computed: false, optional: true, required: false
  private _maximumBytesPerPacket?: number;
  public get maximumBytesPerPacket() {
    return this._maximumBytesPerPacket;
  }
  public set maximumBytesPerPacket(value: number | undefined) {
    this._maximumBytesPerPacket = value;
  }

  // maximum_bytes_per_session - computed: false, optional: true, required: false
  private _maximumBytesPerSession?: number;
  public get maximumBytesPerSession() {
    return this._maximumBytesPerSession;
  }
  public set maximumBytesPerSession(value: number | undefined) {
    this._maximumBytesPerSession = value;
  }

  // maximum_capture_duration - computed: false, optional: true, required: false
  private _maximumCaptureDuration?: number;
  public get maximumCaptureDuration() {
    return this._maximumCaptureDuration;
  }
  public set maximumCaptureDuration(value: number | undefined) {
    this._maximumCaptureDuration = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // network_watcher_name - computed: false, optional: false, required: true
  private _networkWatcherName: string;
  public get networkWatcherName() {
    return this._networkWatcherName;
  }
  public set networkWatcherName(value: string) {
    this._networkWatcherName = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // target_resource_id - computed: false, optional: false, required: true
  private _targetResourceId: string;
  public get targetResourceId() {
    return this._targetResourceId;
  }
  public set targetResourceId(value: string) {
    this._targetResourceId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: PacketCaptureFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: PacketCaptureFilter[] | undefined) {
    this._filter = value;
  }

  // storage_location - computed: false, optional: false, required: true
  private _storageLocation: PacketCaptureStorageLocation[];
  public get storageLocation() {
    return this._storageLocation;
  }
  public set storageLocation(value: PacketCaptureStorageLocation[]) {
    this._storageLocation = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PacketCaptureTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: PacketCaptureTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      maximum_bytes_per_packet: this._maximumBytesPerPacket,
      maximum_bytes_per_session: this._maximumBytesPerSession,
      maximum_capture_duration: this._maximumCaptureDuration,
      name: this._name,
      network_watcher_name: this._networkWatcherName,
      resource_group_name: this._resourceGroupName,
      target_resource_id: this._targetResourceId,
      filter: this._filter,
      storage_location: this._storageLocation,
      timeouts: this._timeouts,
    };
  }
}
