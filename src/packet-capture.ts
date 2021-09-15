// https://www.terraform.io/docs/providers/azurerm/r/packet_capture.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PacketCaptureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/packet_capture.html#maximum_bytes_per_packet PacketCapture#maximum_bytes_per_packet}
  */
  readonly maximumBytesPerPacket?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/packet_capture.html#maximum_bytes_per_session PacketCapture#maximum_bytes_per_session}
  */
  readonly maximumBytesPerSession?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/packet_capture.html#maximum_capture_duration PacketCapture#maximum_capture_duration}
  */
  readonly maximumCaptureDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/packet_capture.html#name PacketCapture#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/packet_capture.html#network_watcher_name PacketCapture#network_watcher_name}
  */
  readonly networkWatcherName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/packet_capture.html#resource_group_name PacketCapture#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/packet_capture.html#target_resource_id PacketCapture#target_resource_id}
  */
  readonly targetResourceId: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/packet_capture.html#filter PacketCapture#filter}
  */
  readonly filter?: PacketCaptureFilter[];
  /**
  * storage_location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/packet_capture.html#storage_location PacketCapture#storage_location}
  */
  readonly storageLocation: PacketCaptureStorageLocation[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/packet_capture.html#timeouts PacketCapture#timeouts}
  */
  readonly timeouts?: PacketCaptureTimeouts;
}
export interface PacketCaptureFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/packet_capture.html#local_ip_address PacketCapture#local_ip_address}
  */
  readonly localIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/packet_capture.html#local_port PacketCapture#local_port}
  */
  readonly localPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/packet_capture.html#protocol PacketCapture#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/packet_capture.html#remote_ip_address PacketCapture#remote_ip_address}
  */
  readonly remoteIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/packet_capture.html#remote_port PacketCapture#remote_port}
  */
  readonly remotePort?: string;
}

function packetCaptureFilterToTerraform(struct?: PacketCaptureFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    local_ip_address: cdktf.stringToTerraform(struct!.localIpAddress),
    local_port: cdktf.stringToTerraform(struct!.localPort),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    remote_ip_address: cdktf.stringToTerraform(struct!.remoteIpAddress),
    remote_port: cdktf.stringToTerraform(struct!.remotePort),
  }
}

export interface PacketCaptureStorageLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/packet_capture.html#file_path PacketCapture#file_path}
  */
  readonly filePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/packet_capture.html#storage_account_id PacketCapture#storage_account_id}
  */
  readonly storageAccountId?: string;
}

function packetCaptureStorageLocationToTerraform(struct?: PacketCaptureStorageLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    file_path: cdktf.stringToTerraform(struct!.filePath),
    storage_account_id: cdktf.stringToTerraform(struct!.storageAccountId),
  }
}

export interface PacketCaptureTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/packet_capture.html#create PacketCapture#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/packet_capture.html#delete PacketCapture#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/packet_capture.html#read PacketCapture#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/packet_capture.html#update PacketCapture#update}
  */
  readonly update?: string;
}

function packetCaptureTimeoutsToTerraform(struct?: PacketCaptureTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/packet_capture.html azurerm_packet_capture}
*/
export class PacketCapture extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_packet_capture";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/packet_capture.html azurerm_packet_capture} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PacketCaptureConfig
  */
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
  private _filter?: PacketCaptureFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: PacketCaptureFilter[] ) {
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
  private _storageLocation: PacketCaptureStorageLocation[];
  public get storageLocation() {
    return this.interpolationForAttribute('storage_location') as any;
  }
  public set storageLocation(value: PacketCaptureStorageLocation[]) {
    this._storageLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLocationInput() {
    return this._storageLocation
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PacketCaptureTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: PacketCaptureTimeouts ) {
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
      filter: cdktf.listMapper(packetCaptureFilterToTerraform)(this._filter),
      storage_location: cdktf.listMapper(packetCaptureStorageLocationToTerraform)(this._storageLocation),
      timeouts: packetCaptureTimeoutsToTerraform(this._timeouts),
    };
  }
}
