/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/netapp_volume_group_oracle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermNetappVolumeGroupOracleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/netapp_volume_group_oracle#account_name DataAzurermNetappVolumeGroupOracle#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/netapp_volume_group_oracle#id DataAzurermNetappVolumeGroupOracle#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/netapp_volume_group_oracle#name DataAzurermNetappVolumeGroupOracle#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/netapp_volume_group_oracle#resource_group_name DataAzurermNetappVolumeGroupOracle#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/netapp_volume_group_oracle#timeouts DataAzurermNetappVolumeGroupOracle#timeouts}
  */
  readonly timeouts?: DataAzurermNetappVolumeGroupOracleTimeouts;
}
export interface DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplication {
}

export function dataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationToTerraform(struct?: DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationToHclTerraform(struct?: DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint_type - computed: true, optional: false, required: false
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }

  // remote_volume_location - computed: true, optional: false, required: false
  public get remoteVolumeLocation() {
    return this.getStringAttribute('remote_volume_location');
  }

  // remote_volume_resource_id - computed: true, optional: false, required: false
  public get remoteVolumeResourceId() {
    return this.getStringAttribute('remote_volume_resource_id');
  }

  // replication_frequency - computed: true, optional: false, required: false
  public get replicationFrequency() {
    return this.getStringAttribute('replication_frequency');
  }
}

export class DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference {
    return new DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy {
}

export function dataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyToTerraform(struct?: DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyToHclTerraform(struct?: DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // snapshot_policy_id - computed: true, optional: false, required: false
  public get snapshotPolicyId() {
    return this.getStringAttribute('snapshot_policy_id');
  }
}

export class DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference {
    return new DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRule {
}

export function dataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleToTerraform(struct?: DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleToHclTerraform(struct?: DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_clients - computed: true, optional: false, required: false
  public get allowedClients() {
    return this.getStringAttribute('allowed_clients');
  }

  // nfsv3_enabled - computed: true, optional: false, required: false
  public get nfsv3Enabled() {
    return this.getBooleanAttribute('nfsv3_enabled');
  }

  // nfsv41_enabled - computed: true, optional: false, required: false
  public get nfsv41Enabled() {
    return this.getBooleanAttribute('nfsv41_enabled');
  }

  // root_access_enabled - computed: true, optional: false, required: false
  public get rootAccessEnabled() {
    return this.getBooleanAttribute('root_access_enabled');
  }

  // rule_index - computed: true, optional: false, required: false
  public get ruleIndex() {
    return this.getNumberAttribute('rule_index');
  }

  // unix_read_only - computed: true, optional: false, required: false
  public get unixReadOnly() {
    return this.getBooleanAttribute('unix_read_only');
  }

  // unix_read_write - computed: true, optional: false, required: false
  public get unixReadWrite() {
    return this.getBooleanAttribute('unix_read_write');
  }
}

export class DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference {
    return new DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermNetappVolumeGroupOracleVolume {
}

export function dataAzurermNetappVolumeGroupOracleVolumeToTerraform(struct?: DataAzurermNetappVolumeGroupOracleVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermNetappVolumeGroupOracleVolumeToHclTerraform(struct?: DataAzurermNetappVolumeGroupOracleVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermNetappVolumeGroupOracleVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermNetappVolumeGroupOracleVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermNetappVolumeGroupOracleVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_pool_id - computed: true, optional: false, required: false
  public get capacityPoolId() {
    return this.getStringAttribute('capacity_pool_id');
  }

  // data_protection_replication - computed: true, optional: false, required: false
  private _dataProtectionReplication = new DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList(this, "data_protection_replication", false);
  public get dataProtectionReplication() {
    return this._dataProtectionReplication;
  }

  // data_protection_snapshot_policy - computed: true, optional: false, required: false
  private _dataProtectionSnapshotPolicy = new DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList(this, "data_protection_snapshot_policy", false);
  public get dataProtectionSnapshotPolicy() {
    return this._dataProtectionSnapshotPolicy;
  }

  // encryption_key_source - computed: true, optional: false, required: false
  public get encryptionKeySource() {
    return this.getStringAttribute('encryption_key_source');
  }

  // export_policy_rule - computed: true, optional: false, required: false
  private _exportPolicyRule = new DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList(this, "export_policy_rule", false);
  public get exportPolicyRule() {
    return this._exportPolicyRule;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_vault_private_endpoint_id - computed: true, optional: false, required: false
  public get keyVaultPrivateEndpointId() {
    return this.getStringAttribute('key_vault_private_endpoint_id');
  }

  // mount_ip_addresses - computed: true, optional: false, required: false
  public get mountIpAddresses() {
    return this.getListAttribute('mount_ip_addresses');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_features - computed: true, optional: false, required: false
  public get networkFeatures() {
    return this.getStringAttribute('network_features');
  }

  // protocols - computed: true, optional: false, required: false
  public get protocols() {
    return this.getListAttribute('protocols');
  }

  // proximity_placement_group_id - computed: true, optional: false, required: false
  public get proximityPlacementGroupId() {
    return this.getStringAttribute('proximity_placement_group_id');
  }

  // security_style - computed: true, optional: false, required: false
  public get securityStyle() {
    return this.getStringAttribute('security_style');
  }

  // service_level - computed: true, optional: false, required: false
  public get serviceLevel() {
    return this.getStringAttribute('service_level');
  }

  // snapshot_directory_visible - computed: true, optional: false, required: false
  public get snapshotDirectoryVisible() {
    return this.getBooleanAttribute('snapshot_directory_visible');
  }

  // storage_quota_in_gb - computed: true, optional: false, required: false
  public get storageQuotaInGb() {
    return this.getNumberAttribute('storage_quota_in_gb');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // throughput_in_mibps - computed: true, optional: false, required: false
  public get throughputInMibps() {
    return this.getNumberAttribute('throughput_in_mibps');
  }

  // volume_path - computed: true, optional: false, required: false
  public get volumePath() {
    return this.getStringAttribute('volume_path');
  }

  // volume_spec_name - computed: true, optional: false, required: false
  public get volumeSpecName() {
    return this.getStringAttribute('volume_spec_name');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataAzurermNetappVolumeGroupOracleVolumeList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermNetappVolumeGroupOracleVolumeOutputReference {
    return new DataAzurermNetappVolumeGroupOracleVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermNetappVolumeGroupOracleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/netapp_volume_group_oracle#read DataAzurermNetappVolumeGroupOracle#read}
  */
  readonly read?: string;
}

export function dataAzurermNetappVolumeGroupOracleTimeoutsToTerraform(struct?: DataAzurermNetappVolumeGroupOracleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzurermNetappVolumeGroupOracleTimeoutsToHclTerraform(struct?: DataAzurermNetappVolumeGroupOracleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermNetappVolumeGroupOracleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermNetappVolumeGroupOracleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/netapp_volume_group_oracle azurerm_netapp_volume_group_oracle}
*/
export class DataAzurermNetappVolumeGroupOracle extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_netapp_volume_group_oracle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzurermNetappVolumeGroupOracle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermNetappVolumeGroupOracle to import
  * @param importFromId The id of the existing DataAzurermNetappVolumeGroupOracle that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/netapp_volume_group_oracle#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermNetappVolumeGroupOracle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_netapp_volume_group_oracle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/netapp_volume_group_oracle azurerm_netapp_volume_group_oracle} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermNetappVolumeGroupOracleConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermNetappVolumeGroupOracleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_netapp_volume_group_oracle',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.37.0',
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
    this._accountName = config.accountName;
    this._id = config.id;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
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

  // application_identifier - computed: true, optional: false, required: false
  public get applicationIdentifier() {
    return this.getStringAttribute('application_identifier');
  }

  // group_description - computed: true, optional: false, required: false
  public get groupDescription() {
    return this.getStringAttribute('group_description');
  }

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

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // volume - computed: true, optional: false, required: false
  private _volume = new DataAzurermNetappVolumeGroupOracleVolumeList(this, "volume", false);
  public get volume() {
    return this._volume;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermNetappVolumeGroupOracleTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermNetappVolumeGroupOracleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataAzurermNetappVolumeGroupOracleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermNetappVolumeGroupOracleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
