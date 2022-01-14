// https://www.terraform.io/docs/providers/azurerm/r/netapp_volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetappVolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#account_name NetappVolume#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#create_from_snapshot_resource_id NetappVolume#create_from_snapshot_resource_id}
  */
  readonly createFromSnapshotResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#location NetappVolume#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#name NetappVolume#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#pool_name NetappVolume#pool_name}
  */
  readonly poolName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#protocols NetappVolume#protocols}
  */
  readonly protocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#resource_group_name NetappVolume#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#security_style NetappVolume#security_style}
  */
  readonly securityStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#service_level NetappVolume#service_level}
  */
  readonly serviceLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#snapshot_directory_visible NetappVolume#snapshot_directory_visible}
  */
  readonly snapshotDirectoryVisible?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#storage_quota_in_gb NetappVolume#storage_quota_in_gb}
  */
  readonly storageQuotaInGb: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#subnet_id NetappVolume#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#tags NetappVolume#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#throughput_in_mibps NetappVolume#throughput_in_mibps}
  */
  readonly throughputInMibps?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#volume_path NetappVolume#volume_path}
  */
  readonly volumePath: string;
  /**
  * data_protection_replication block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#data_protection_replication NetappVolume#data_protection_replication}
  */
  readonly dataProtectionReplication?: NetappVolumeDataProtectionReplication;
  /**
  * data_protection_snapshot_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#data_protection_snapshot_policy NetappVolume#data_protection_snapshot_policy}
  */
  readonly dataProtectionSnapshotPolicy?: NetappVolumeDataProtectionSnapshotPolicy;
  /**
  * export_policy_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#export_policy_rule NetappVolume#export_policy_rule}
  */
  readonly exportPolicyRule?: NetappVolumeExportPolicyRule[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#timeouts NetappVolume#timeouts}
  */
  readonly timeouts?: NetappVolumeTimeouts;
}
export interface NetappVolumeDataProtectionReplication {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#endpoint_type NetappVolume#endpoint_type}
  */
  readonly endpointType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#remote_volume_location NetappVolume#remote_volume_location}
  */
  readonly remoteVolumeLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#remote_volume_resource_id NetappVolume#remote_volume_resource_id}
  */
  readonly remoteVolumeResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#replication_frequency NetappVolume#replication_frequency}
  */
  readonly replicationFrequency: string;
}

export function netappVolumeDataProtectionReplicationToTerraform(struct?: NetappVolumeDataProtectionReplicationOutputReference | NetappVolumeDataProtectionReplication): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_type: cdktf.stringToTerraform(struct!.endpointType),
    remote_volume_location: cdktf.stringToTerraform(struct!.remoteVolumeLocation),
    remote_volume_resource_id: cdktf.stringToTerraform(struct!.remoteVolumeResourceId),
    replication_frequency: cdktf.stringToTerraform(struct!.replicationFrequency),
  }
}

export class NetappVolumeDataProtectionReplicationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): NetappVolumeDataProtectionReplication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointType !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointType = this._endpointType;
    }
    if (this._remoteVolumeLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteVolumeLocation = this._remoteVolumeLocation;
    }
    if (this._remoteVolumeResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteVolumeResourceId = this._remoteVolumeResourceId;
    }
    if (this._replicationFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationFrequency = this._replicationFrequency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetappVolumeDataProtectionReplication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpointType = undefined;
      this._remoteVolumeLocation = undefined;
      this._remoteVolumeResourceId = undefined;
      this._replicationFrequency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpointType = value.endpointType;
      this._remoteVolumeLocation = value.remoteVolumeLocation;
      this._remoteVolumeResourceId = value.remoteVolumeResourceId;
      this._replicationFrequency = value.replicationFrequency;
    }
  }

  // endpoint_type - computed: false, optional: true, required: false
  private _endpointType?: string; 
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }
  public set endpointType(value: string) {
    this._endpointType = value;
  }
  public resetEndpointType() {
    this._endpointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTypeInput() {
    return this._endpointType;
  }

  // remote_volume_location - computed: false, optional: false, required: true
  private _remoteVolumeLocation?: string; 
  public get remoteVolumeLocation() {
    return this.getStringAttribute('remote_volume_location');
  }
  public set remoteVolumeLocation(value: string) {
    this._remoteVolumeLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteVolumeLocationInput() {
    return this._remoteVolumeLocation;
  }

  // remote_volume_resource_id - computed: false, optional: false, required: true
  private _remoteVolumeResourceId?: string; 
  public get remoteVolumeResourceId() {
    return this.getStringAttribute('remote_volume_resource_id');
  }
  public set remoteVolumeResourceId(value: string) {
    this._remoteVolumeResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteVolumeResourceIdInput() {
    return this._remoteVolumeResourceId;
  }

  // replication_frequency - computed: false, optional: false, required: true
  private _replicationFrequency?: string; 
  public get replicationFrequency() {
    return this.getStringAttribute('replication_frequency');
  }
  public set replicationFrequency(value: string) {
    this._replicationFrequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationFrequencyInput() {
    return this._replicationFrequency;
  }
}
export interface NetappVolumeDataProtectionSnapshotPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#snapshot_policy_id NetappVolume#snapshot_policy_id}
  */
  readonly snapshotPolicyId: string;
}

export function netappVolumeDataProtectionSnapshotPolicyToTerraform(struct?: NetappVolumeDataProtectionSnapshotPolicyOutputReference | NetappVolumeDataProtectionSnapshotPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    snapshot_policy_id: cdktf.stringToTerraform(struct!.snapshotPolicyId),
  }
}

export class NetappVolumeDataProtectionSnapshotPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): NetappVolumeDataProtectionSnapshotPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._snapshotPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotPolicyId = this._snapshotPolicyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetappVolumeDataProtectionSnapshotPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._snapshotPolicyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._snapshotPolicyId = value.snapshotPolicyId;
    }
  }

  // snapshot_policy_id - computed: false, optional: false, required: true
  private _snapshotPolicyId?: string; 
  public get snapshotPolicyId() {
    return this.getStringAttribute('snapshot_policy_id');
  }
  public set snapshotPolicyId(value: string) {
    this._snapshotPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotPolicyIdInput() {
    return this._snapshotPolicyId;
  }
}
export interface NetappVolumeExportPolicyRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#allowed_clients NetappVolume#allowed_clients}
  */
  readonly allowedClients: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#cifs_enabled NetappVolume#cifs_enabled}
  */
  readonly cifsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#nfsv3_enabled NetappVolume#nfsv3_enabled}
  */
  readonly nfsv3Enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#nfsv4_enabled NetappVolume#nfsv4_enabled}
  */
  readonly nfsv4Enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#protocols_enabled NetappVolume#protocols_enabled}
  */
  readonly protocolsEnabled?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#root_access_enabled NetappVolume#root_access_enabled}
  */
  readonly rootAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#rule_index NetappVolume#rule_index}
  */
  readonly ruleIndex: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#unix_read_only NetappVolume#unix_read_only}
  */
  readonly unixReadOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#unix_read_write NetappVolume#unix_read_write}
  */
  readonly unixReadWrite?: boolean | cdktf.IResolvable;
}

export function netappVolumeExportPolicyRuleToTerraform(struct?: NetappVolumeExportPolicyRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_clients: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedClients),
    cifs_enabled: cdktf.booleanToTerraform(struct!.cifsEnabled),
    nfsv3_enabled: cdktf.booleanToTerraform(struct!.nfsv3Enabled),
    nfsv4_enabled: cdktf.booleanToTerraform(struct!.nfsv4Enabled),
    protocols_enabled: cdktf.listMapper(cdktf.stringToTerraform)(struct!.protocolsEnabled),
    root_access_enabled: cdktf.booleanToTerraform(struct!.rootAccessEnabled),
    rule_index: cdktf.numberToTerraform(struct!.ruleIndex),
    unix_read_only: cdktf.booleanToTerraform(struct!.unixReadOnly),
    unix_read_write: cdktf.booleanToTerraform(struct!.unixReadWrite),
  }
}

export interface NetappVolumeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#create NetappVolume#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#delete NetappVolume#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#read NetappVolume#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume#update NetappVolume#update}
  */
  readonly update?: string;
}

export function netappVolumeTimeoutsToTerraform(struct?: NetappVolumeTimeoutsOutputReference | NetappVolumeTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class NetappVolumeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): NetappVolumeTimeouts | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetappVolumeTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume azurerm_netapp_volume}
*/
export class NetappVolume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_netapp_volume";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume azurerm_netapp_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetappVolumeConfig
  */
  public constructor(scope: Construct, id: string, config: NetappVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_netapp_volume',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountName = config.accountName;
    this._createFromSnapshotResourceId = config.createFromSnapshotResourceId;
    this._location = config.location;
    this._name = config.name;
    this._poolName = config.poolName;
    this._protocols = config.protocols;
    this._resourceGroupName = config.resourceGroupName;
    this._securityStyle = config.securityStyle;
    this._serviceLevel = config.serviceLevel;
    this._snapshotDirectoryVisible = config.snapshotDirectoryVisible;
    this._storageQuotaInGb = config.storageQuotaInGb;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._throughputInMibps = config.throughputInMibps;
    this._volumePath = config.volumePath;
    this._dataProtectionReplication.internalValue = config.dataProtectionReplication;
    this._dataProtectionSnapshotPolicy.internalValue = config.dataProtectionSnapshotPolicy;
    this._exportPolicyRule = config.exportPolicyRule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // create_from_snapshot_resource_id - computed: true, optional: true, required: false
  private _createFromSnapshotResourceId?: string; 
  public get createFromSnapshotResourceId() {
    return this.getStringAttribute('create_from_snapshot_resource_id');
  }
  public set createFromSnapshotResourceId(value: string) {
    this._createFromSnapshotResourceId = value;
  }
  public resetCreateFromSnapshotResourceId() {
    this._createFromSnapshotResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createFromSnapshotResourceIdInput() {
    return this._createFromSnapshotResourceId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // mount_ip_addresses - computed: true, optional: false, required: false
  public get mountIpAddresses() {
    return this.getListAttribute('mount_ip_addresses');
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

  // pool_name - computed: false, optional: false, required: true
  private _poolName?: string; 
  public get poolName() {
    return this.getStringAttribute('pool_name');
  }
  public set poolName(value: string) {
    this._poolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolNameInput() {
    return this._poolName;
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // security_style - computed: true, optional: true, required: false
  private _securityStyle?: string; 
  public get securityStyle() {
    return this.getStringAttribute('security_style');
  }
  public set securityStyle(value: string) {
    this._securityStyle = value;
  }
  public resetSecurityStyle() {
    this._securityStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityStyleInput() {
    return this._securityStyle;
  }

  // service_level - computed: false, optional: false, required: true
  private _serviceLevel?: string; 
  public get serviceLevel() {
    return this.getStringAttribute('service_level');
  }
  public set serviceLevel(value: string) {
    this._serviceLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLevelInput() {
    return this._serviceLevel;
  }

  // snapshot_directory_visible - computed: true, optional: true, required: false
  private _snapshotDirectoryVisible?: boolean | cdktf.IResolvable; 
  public get snapshotDirectoryVisible() {
    return this.getBooleanAttribute('snapshot_directory_visible') as any;
  }
  public set snapshotDirectoryVisible(value: boolean | cdktf.IResolvable) {
    this._snapshotDirectoryVisible = value;
  }
  public resetSnapshotDirectoryVisible() {
    this._snapshotDirectoryVisible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotDirectoryVisibleInput() {
    return this._snapshotDirectoryVisible;
  }

  // storage_quota_in_gb - computed: false, optional: false, required: true
  private _storageQuotaInGb?: number; 
  public get storageQuotaInGb() {
    return this.getNumberAttribute('storage_quota_in_gb');
  }
  public set storageQuotaInGb(value: number) {
    this._storageQuotaInGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageQuotaInGbInput() {
    return this._storageQuotaInGb;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // throughput_in_mibps - computed: true, optional: true, required: false
  private _throughputInMibps?: number; 
  public get throughputInMibps() {
    return this.getNumberAttribute('throughput_in_mibps');
  }
  public set throughputInMibps(value: number) {
    this._throughputInMibps = value;
  }
  public resetThroughputInMibps() {
    this._throughputInMibps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInMibpsInput() {
    return this._throughputInMibps;
  }

  // volume_path - computed: false, optional: false, required: true
  private _volumePath?: string; 
  public get volumePath() {
    return this.getStringAttribute('volume_path');
  }
  public set volumePath(value: string) {
    this._volumePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumePathInput() {
    return this._volumePath;
  }

  // data_protection_replication - computed: false, optional: true, required: false
  private _dataProtectionReplication = new NetappVolumeDataProtectionReplicationOutputReference(this as any, "data_protection_replication", true);
  public get dataProtectionReplication() {
    return this._dataProtectionReplication;
  }
  public putDataProtectionReplication(value: NetappVolumeDataProtectionReplication) {
    this._dataProtectionReplication.internalValue = value;
  }
  public resetDataProtectionReplication() {
    this._dataProtectionReplication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProtectionReplicationInput() {
    return this._dataProtectionReplication.internalValue;
  }

  // data_protection_snapshot_policy - computed: false, optional: true, required: false
  private _dataProtectionSnapshotPolicy = new NetappVolumeDataProtectionSnapshotPolicyOutputReference(this as any, "data_protection_snapshot_policy", true);
  public get dataProtectionSnapshotPolicy() {
    return this._dataProtectionSnapshotPolicy;
  }
  public putDataProtectionSnapshotPolicy(value: NetappVolumeDataProtectionSnapshotPolicy) {
    this._dataProtectionSnapshotPolicy.internalValue = value;
  }
  public resetDataProtectionSnapshotPolicy() {
    this._dataProtectionSnapshotPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProtectionSnapshotPolicyInput() {
    return this._dataProtectionSnapshotPolicy.internalValue;
  }

  // export_policy_rule - computed: false, optional: true, required: false
  private _exportPolicyRule?: NetappVolumeExportPolicyRule[]; 
  public get exportPolicyRule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('export_policy_rule') as any;
  }
  public set exportPolicyRule(value: NetappVolumeExportPolicyRule[]) {
    this._exportPolicyRule = value;
  }
  public resetExportPolicyRule() {
    this._exportPolicyRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyRuleInput() {
    return this._exportPolicyRule;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetappVolumeTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetappVolumeTimeouts) {
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
      account_name: cdktf.stringToTerraform(this._accountName),
      create_from_snapshot_resource_id: cdktf.stringToTerraform(this._createFromSnapshotResourceId),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      pool_name: cdktf.stringToTerraform(this._poolName),
      protocols: cdktf.listMapper(cdktf.stringToTerraform)(this._protocols),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      security_style: cdktf.stringToTerraform(this._securityStyle),
      service_level: cdktf.stringToTerraform(this._serviceLevel),
      snapshot_directory_visible: cdktf.booleanToTerraform(this._snapshotDirectoryVisible),
      storage_quota_in_gb: cdktf.numberToTerraform(this._storageQuotaInGb),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      throughput_in_mibps: cdktf.numberToTerraform(this._throughputInMibps),
      volume_path: cdktf.stringToTerraform(this._volumePath),
      data_protection_replication: netappVolumeDataProtectionReplicationToTerraform(this._dataProtectionReplication.internalValue),
      data_protection_snapshot_policy: netappVolumeDataProtectionSnapshotPolicyToTerraform(this._dataProtectionSnapshotPolicy.internalValue),
      export_policy_rule: cdktf.listMapper(netappVolumeExportPolicyRuleToTerraform)(this._exportPolicyRule),
      timeouts: netappVolumeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
