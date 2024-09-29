// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_packet_capture
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualMachinePacketCaptureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_packet_capture#id VirtualMachinePacketCapture#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_packet_capture#maximum_bytes_per_packet VirtualMachinePacketCapture#maximum_bytes_per_packet}
  */
  readonly maximumBytesPerPacket?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_packet_capture#maximum_bytes_per_session VirtualMachinePacketCapture#maximum_bytes_per_session}
  */
  readonly maximumBytesPerSession?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_packet_capture#maximum_capture_duration_in_seconds VirtualMachinePacketCapture#maximum_capture_duration_in_seconds}
  */
  readonly maximumCaptureDurationInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_packet_capture#name VirtualMachinePacketCapture#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_packet_capture#network_watcher_id VirtualMachinePacketCapture#network_watcher_id}
  */
  readonly networkWatcherId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_packet_capture#virtual_machine_id VirtualMachinePacketCapture#virtual_machine_id}
  */
  readonly virtualMachineId: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_packet_capture#filter VirtualMachinePacketCapture#filter}
  */
  readonly filter?: VirtualMachinePacketCaptureFilter[] | cdktf.IResolvable;
  /**
  * storage_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_packet_capture#storage_location VirtualMachinePacketCapture#storage_location}
  */
  readonly storageLocation: VirtualMachinePacketCaptureStorageLocation;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_packet_capture#timeouts VirtualMachinePacketCapture#timeouts}
  */
  readonly timeouts?: VirtualMachinePacketCaptureTimeouts;
}
export interface VirtualMachinePacketCaptureFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_packet_capture#local_ip_address VirtualMachinePacketCapture#local_ip_address}
  */
  readonly localIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_packet_capture#local_port VirtualMachinePacketCapture#local_port}
  */
  readonly localPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_packet_capture#protocol VirtualMachinePacketCapture#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_packet_capture#remote_ip_address VirtualMachinePacketCapture#remote_ip_address}
  */
  readonly remoteIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_packet_capture#remote_port VirtualMachinePacketCapture#remote_port}
  */
  readonly remotePort?: string;
}

export function virtualMachinePacketCaptureFilterToTerraform(struct?: VirtualMachinePacketCaptureFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_ip_address: cdktf.stringToTerraform(struct!.localIpAddress),
    local_port: cdktf.stringToTerraform(struct!.localPort),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    remote_ip_address: cdktf.stringToTerraform(struct!.remoteIpAddress),
    remote_port: cdktf.stringToTerraform(struct!.remotePort),
  }
}


export function virtualMachinePacketCaptureFilterToHclTerraform(struct?: VirtualMachinePacketCaptureFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.localIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_port: {
      value: cdktf.stringToHclTerraform(struct!.localPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.remoteIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_port: {
      value: cdktf.stringToHclTerraform(struct!.remotePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachinePacketCaptureFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VirtualMachinePacketCaptureFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.localIpAddress = this._localIpAddress;
    }
    if (this._localPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPort = this._localPort;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._remoteIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIpAddress = this._remoteIpAddress;
    }
    if (this._remotePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.remotePort = this._remotePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachinePacketCaptureFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localIpAddress = undefined;
      this._localPort = undefined;
      this._protocol = undefined;
      this._remoteIpAddress = undefined;
      this._remotePort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localIpAddress = value.localIpAddress;
      this._localPort = value.localPort;
      this._protocol = value.protocol;
      this._remoteIpAddress = value.remoteIpAddress;
      this._remotePort = value.remotePort;
    }
  }

  // local_ip_address - computed: false, optional: true, required: false
  private _localIpAddress?: string; 
  public get localIpAddress() {
    return this.getStringAttribute('local_ip_address');
  }
  public set localIpAddress(value: string) {
    this._localIpAddress = value;
  }
  public resetLocalIpAddress() {
    this._localIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpAddressInput() {
    return this._localIpAddress;
  }

  // local_port - computed: false, optional: true, required: false
  private _localPort?: string; 
  public get localPort() {
    return this.getStringAttribute('local_port');
  }
  public set localPort(value: string) {
    this._localPort = value;
  }
  public resetLocalPort() {
    this._localPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPortInput() {
    return this._localPort;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // remote_ip_address - computed: false, optional: true, required: false
  private _remoteIpAddress?: string; 
  public get remoteIpAddress() {
    return this.getStringAttribute('remote_ip_address');
  }
  public set remoteIpAddress(value: string) {
    this._remoteIpAddress = value;
  }
  public resetRemoteIpAddress() {
    this._remoteIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpAddressInput() {
    return this._remoteIpAddress;
  }

  // remote_port - computed: false, optional: true, required: false
  private _remotePort?: string; 
  public get remotePort() {
    return this.getStringAttribute('remote_port');
  }
  public set remotePort(value: string) {
    this._remotePort = value;
  }
  public resetRemotePort() {
    this._remotePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePortInput() {
    return this._remotePort;
  }
}

export class VirtualMachinePacketCaptureFilterList extends cdktf.ComplexList {
  public internalValue? : VirtualMachinePacketCaptureFilter[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VirtualMachinePacketCaptureFilterOutputReference {
    return new VirtualMachinePacketCaptureFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualMachinePacketCaptureStorageLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_packet_capture#file_path VirtualMachinePacketCapture#file_path}
  */
  readonly filePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_packet_capture#storage_account_id VirtualMachinePacketCapture#storage_account_id}
  */
  readonly storageAccountId?: string;
}

export function virtualMachinePacketCaptureStorageLocationToTerraform(struct?: VirtualMachinePacketCaptureStorageLocationOutputReference | VirtualMachinePacketCaptureStorageLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_path: cdktf.stringToTerraform(struct!.filePath),
    storage_account_id: cdktf.stringToTerraform(struct!.storageAccountId),
  }
}


export function virtualMachinePacketCaptureStorageLocationToHclTerraform(struct?: VirtualMachinePacketCaptureStorageLocationOutputReference | VirtualMachinePacketCaptureStorageLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_path: {
      value: cdktf.stringToHclTerraform(struct!.filePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_account_id: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachinePacketCaptureStorageLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachinePacketCaptureStorageLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePath = this._filePath;
    }
    if (this._storageAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountId = this._storageAccountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachinePacketCaptureStorageLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filePath = undefined;
      this._storageAccountId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filePath = value.filePath;
      this._storageAccountId = value.storageAccountId;
    }
  }

  // file_path - computed: false, optional: true, required: false
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  public resetFilePath() {
    this._filePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
  }

  // storage_account_id - computed: false, optional: true, required: false
  private _storageAccountId?: string; 
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  public resetStorageAccountId() {
    this._storageAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId;
  }

  // storage_path - computed: true, optional: false, required: false
  public get storagePath() {
    return this.getStringAttribute('storage_path');
  }
}
export interface VirtualMachinePacketCaptureTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_packet_capture#create VirtualMachinePacketCapture#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_packet_capture#delete VirtualMachinePacketCapture#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_packet_capture#read VirtualMachinePacketCapture#read}
  */
  readonly read?: string;
}

export function virtualMachinePacketCaptureTimeoutsToTerraform(struct?: VirtualMachinePacketCaptureTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function virtualMachinePacketCaptureTimeoutsToHclTerraform(struct?: VirtualMachinePacketCaptureTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualMachinePacketCaptureTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualMachinePacketCaptureTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachinePacketCaptureTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_packet_capture azurerm_virtual_machine_packet_capture}
*/
export class VirtualMachinePacketCapture extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_virtual_machine_packet_capture";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualMachinePacketCapture resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualMachinePacketCapture to import
  * @param importFromId The id of the existing VirtualMachinePacketCapture that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_packet_capture#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualMachinePacketCapture to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_virtual_machine_packet_capture", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_machine_packet_capture azurerm_virtual_machine_packet_capture} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualMachinePacketCaptureConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualMachinePacketCaptureConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_machine_packet_capture',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._maximumBytesPerPacket = config.maximumBytesPerPacket;
    this._maximumBytesPerSession = config.maximumBytesPerSession;
    this._maximumCaptureDurationInSeconds = config.maximumCaptureDurationInSeconds;
    this._name = config.name;
    this._networkWatcherId = config.networkWatcherId;
    this._virtualMachineId = config.virtualMachineId;
    this._filter.internalValue = config.filter;
    this._storageLocation.internalValue = config.storageLocation;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // maximum_bytes_per_packet - computed: false, optional: true, required: false
  private _maximumBytesPerPacket?: number; 
  public get maximumBytesPerPacket() {
    return this.getNumberAttribute('maximum_bytes_per_packet');
  }
  public set maximumBytesPerPacket(value: number) {
    this._maximumBytesPerPacket = value;
  }
  public resetMaximumBytesPerPacket() {
    this._maximumBytesPerPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBytesPerPacketInput() {
    return this._maximumBytesPerPacket;
  }

  // maximum_bytes_per_session - computed: false, optional: true, required: false
  private _maximumBytesPerSession?: number; 
  public get maximumBytesPerSession() {
    return this.getNumberAttribute('maximum_bytes_per_session');
  }
  public set maximumBytesPerSession(value: number) {
    this._maximumBytesPerSession = value;
  }
  public resetMaximumBytesPerSession() {
    this._maximumBytesPerSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBytesPerSessionInput() {
    return this._maximumBytesPerSession;
  }

  // maximum_capture_duration_in_seconds - computed: false, optional: true, required: false
  private _maximumCaptureDurationInSeconds?: number; 
  public get maximumCaptureDurationInSeconds() {
    return this.getNumberAttribute('maximum_capture_duration_in_seconds');
  }
  public set maximumCaptureDurationInSeconds(value: number) {
    this._maximumCaptureDurationInSeconds = value;
  }
  public resetMaximumCaptureDurationInSeconds() {
    this._maximumCaptureDurationInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumCaptureDurationInSecondsInput() {
    return this._maximumCaptureDurationInSeconds;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_watcher_id - computed: false, optional: false, required: true
  private _networkWatcherId?: string; 
  public get networkWatcherId() {
    return this.getStringAttribute('network_watcher_id');
  }
  public set networkWatcherId(value: string) {
    this._networkWatcherId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkWatcherIdInput() {
    return this._networkWatcherId;
  }

  // virtual_machine_id - computed: false, optional: false, required: true
  private _virtualMachineId?: string; 
  public get virtualMachineId() {
    return this.getStringAttribute('virtual_machine_id');
  }
  public set virtualMachineId(value: string) {
    this._virtualMachineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineIdInput() {
    return this._virtualMachineId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new VirtualMachinePacketCaptureFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: VirtualMachinePacketCaptureFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // storage_location - computed: false, optional: false, required: true
  private _storageLocation = new VirtualMachinePacketCaptureStorageLocationOutputReference(this, "storage_location");
  public get storageLocation() {
    return this._storageLocation;
  }
  public putStorageLocation(value: VirtualMachinePacketCaptureStorageLocation) {
    this._storageLocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLocationInput() {
    return this._storageLocation.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VirtualMachinePacketCaptureTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VirtualMachinePacketCaptureTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      maximum_bytes_per_packet: cdktf.numberToTerraform(this._maximumBytesPerPacket),
      maximum_bytes_per_session: cdktf.numberToTerraform(this._maximumBytesPerSession),
      maximum_capture_duration_in_seconds: cdktf.numberToTerraform(this._maximumCaptureDurationInSeconds),
      name: cdktf.stringToTerraform(this._name),
      network_watcher_id: cdktf.stringToTerraform(this._networkWatcherId),
      virtual_machine_id: cdktf.stringToTerraform(this._virtualMachineId),
      filter: cdktf.listMapper(virtualMachinePacketCaptureFilterToTerraform, true)(this._filter.internalValue),
      storage_location: virtualMachinePacketCaptureStorageLocationToTerraform(this._storageLocation.internalValue),
      timeouts: virtualMachinePacketCaptureTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_bytes_per_packet: {
        value: cdktf.numberToHclTerraform(this._maximumBytesPerPacket),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_bytes_per_session: {
        value: cdktf.numberToHclTerraform(this._maximumBytesPerSession),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_capture_duration_in_seconds: {
        value: cdktf.numberToHclTerraform(this._maximumCaptureDurationInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_watcher_id: {
        value: cdktf.stringToHclTerraform(this._networkWatcherId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_machine_id: {
        value: cdktf.stringToHclTerraform(this._virtualMachineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(virtualMachinePacketCaptureFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachinePacketCaptureFilterList",
      },
      storage_location: {
        value: virtualMachinePacketCaptureStorageLocationToHclTerraform(this._storageLocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualMachinePacketCaptureStorageLocationList",
      },
      timeouts: {
        value: virtualMachinePacketCaptureTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualMachinePacketCaptureTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
