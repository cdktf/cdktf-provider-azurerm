// https://www.terraform.io/docs/providers/azurerm/r/network_packet_capture.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkPacketCaptureConfig extends cdktf.TerraformMetaArguments {
  readonly maximumBytesPerPacket?: number;
  readonly maximumBytesPerSession?: number;
  readonly maximumCaptureDuration?: number;
  readonly name: string;
  readonly networkWatcherName: string;
  readonly resourceGroupName: string;
  readonly targetResourceId: string;
  /** filter block */
  readonly filter?: NetworkPacketCaptureFilter[];
  /** storage_location block */
  readonly storageLocation: NetworkPacketCaptureStorageLocation[];
  /** timeouts block */
  readonly timeouts?: NetworkPacketCaptureTimeouts;
}
export interface NetworkPacketCaptureFilter {
  readonly localIpAddress?: string;
  readonly localPort?: string;
  readonly protocol: string;
  readonly remoteIpAddress?: string;
  readonly remotePort?: string;
}

function networkPacketCaptureFilterToTerraform(struct?: NetworkPacketCaptureFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    local_ip_address: cdktf.stringToTerraform(struct!.localIpAddress),
    local_port: cdktf.stringToTerraform(struct!.localPort),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    remote_ip_address: cdktf.stringToTerraform(struct!.remoteIpAddress),
    remote_port: cdktf.stringToTerraform(struct!.remotePort),
  }
}

export interface NetworkPacketCaptureStorageLocation {
  readonly filePath?: string;
  readonly storageAccountId?: string;
}

function networkPacketCaptureStorageLocationToTerraform(struct?: NetworkPacketCaptureStorageLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    file_path: cdktf.stringToTerraform(struct!.filePath),
    storage_account_id: cdktf.stringToTerraform(struct!.storageAccountId),
  }
}

export interface NetworkPacketCaptureTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function networkPacketCaptureTimeoutsToTerraform(struct?: NetworkPacketCaptureTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class NetworkPacketCapture extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NetworkPacketCaptureConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_network_packet_capture',
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // maximum_bytes_per_packet - computed: false, optional: true, required: false
  private _maximumBytesPerPacket?: number;
  public get maximumBytesPerPacket() {
    return this.getNumberAttribute('maximum_bytes_per_packet');
  }
  public set maximumBytesPerPacket(value: number ) {
    this._maximumBytesPerPacket = value;
  }
  public resetMaximumBytesPerPacket() {
    this._maximumBytesPerPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBytesPerPacketInput() {
    return this._maximumBytesPerPacket
  }

  // maximum_bytes_per_session - computed: false, optional: true, required: false
  private _maximumBytesPerSession?: number;
  public get maximumBytesPerSession() {
    return this.getNumberAttribute('maximum_bytes_per_session');
  }
  public set maximumBytesPerSession(value: number ) {
    this._maximumBytesPerSession = value;
  }
  public resetMaximumBytesPerSession() {
    this._maximumBytesPerSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBytesPerSessionInput() {
    return this._maximumBytesPerSession
  }

  // maximum_capture_duration - computed: false, optional: true, required: false
  private _maximumCaptureDuration?: number;
  public get maximumCaptureDuration() {
    return this.getNumberAttribute('maximum_capture_duration');
  }
  public set maximumCaptureDuration(value: number ) {
    this._maximumCaptureDuration = value;
  }
  public resetMaximumCaptureDuration() {
    this._maximumCaptureDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumCaptureDurationInput() {
    return this._maximumCaptureDuration
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // network_watcher_name - computed: false, optional: false, required: true
  private _networkWatcherName: string;
  public get networkWatcherName() {
    return this.getStringAttribute('network_watcher_name');
  }
  public set networkWatcherName(value: string) {
    this._networkWatcherName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkWatcherNameInput() {
    return this._networkWatcherName
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // target_resource_id - computed: false, optional: false, required: true
  private _targetResourceId: string;
  public get targetResourceId() {
    return this.getStringAttribute('target_resource_id');
  }
  public set targetResourceId(value: string) {
    this._targetResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceIdInput() {
    return this._targetResourceId
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: NetworkPacketCaptureFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: NetworkPacketCaptureFilter[] ) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // storage_location - computed: false, optional: false, required: true
  private _storageLocation: NetworkPacketCaptureStorageLocation[];
  public get storageLocation() {
    return this.interpolationForAttribute('storage_location') as any;
  }
  public set storageLocation(value: NetworkPacketCaptureStorageLocation[]) {
    this._storageLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLocationInput() {
    return this._storageLocation
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetworkPacketCaptureTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: NetworkPacketCaptureTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      maximum_bytes_per_packet: cdktf.numberToTerraform(this._maximumBytesPerPacket),
      maximum_bytes_per_session: cdktf.numberToTerraform(this._maximumBytesPerSession),
      maximum_capture_duration: cdktf.numberToTerraform(this._maximumCaptureDuration),
      name: cdktf.stringToTerraform(this._name),
      network_watcher_name: cdktf.stringToTerraform(this._networkWatcherName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      target_resource_id: cdktf.stringToTerraform(this._targetResourceId),
      filter: cdktf.listMapper(networkPacketCaptureFilterToTerraform)(this._filter),
      storage_location: cdktf.listMapper(networkPacketCaptureStorageLocationToTerraform)(this._storageLocation),
      timeouts: networkPacketCaptureTimeoutsToTerraform(this._timeouts),
    };
  }
}
