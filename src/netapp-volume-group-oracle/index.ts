/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetappVolumeGroupOracleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#account_name NetappVolumeGroupOracle#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#application_identifier NetappVolumeGroupOracle#application_identifier}
  */
  readonly applicationIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#group_description NetappVolumeGroupOracle#group_description}
  */
  readonly groupDescription: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#id NetappVolumeGroupOracle#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#location NetappVolumeGroupOracle#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#name NetappVolumeGroupOracle#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#resource_group_name NetappVolumeGroupOracle#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#timeouts NetappVolumeGroupOracle#timeouts}
  */
  readonly timeouts?: NetappVolumeGroupOracleTimeouts;
  /**
  * volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#volume NetappVolumeGroupOracle#volume}
  */
  readonly volume: NetappVolumeGroupOracleVolume[] | cdktf.IResolvable;
}
export interface NetappVolumeGroupOracleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#create NetappVolumeGroupOracle#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#delete NetappVolumeGroupOracle#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#read NetappVolumeGroupOracle#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#update NetappVolumeGroupOracle#update}
  */
  readonly update?: string;
}

export function netappVolumeGroupOracleTimeoutsToTerraform(struct?: NetappVolumeGroupOracleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function netappVolumeGroupOracleTimeoutsToHclTerraform(struct?: NetappVolumeGroupOracleTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetappVolumeGroupOracleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetappVolumeGroupOracleTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetappVolumeGroupOracleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
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
export interface NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#snapshot_policy_id NetappVolumeGroupOracle#snapshot_policy_id}
  */
  readonly snapshotPolicyId: string;
}

export function netappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyToTerraform(struct?: NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference | NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    snapshot_policy_id: cdktf.stringToTerraform(struct!.snapshotPolicyId),
  }
}


export function netappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyToHclTerraform(struct?: NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference | NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    snapshot_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.snapshotPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._snapshotPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotPolicyId = this._snapshotPolicyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy | undefined) {
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
export interface NetappVolumeGroupOracleVolumeExportPolicyRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#allowed_clients NetappVolumeGroupOracle#allowed_clients}
  */
  readonly allowedClients: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#nfsv3_enabled NetappVolumeGroupOracle#nfsv3_enabled}
  */
  readonly nfsv3Enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#nfsv41_enabled NetappVolumeGroupOracle#nfsv41_enabled}
  */
  readonly nfsv41Enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#root_access_enabled NetappVolumeGroupOracle#root_access_enabled}
  */
  readonly rootAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#rule_index NetappVolumeGroupOracle#rule_index}
  */
  readonly ruleIndex: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#unix_read_only NetappVolumeGroupOracle#unix_read_only}
  */
  readonly unixReadOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#unix_read_write NetappVolumeGroupOracle#unix_read_write}
  */
  readonly unixReadWrite?: boolean | cdktf.IResolvable;
}

export function netappVolumeGroupOracleVolumeExportPolicyRuleToTerraform(struct?: NetappVolumeGroupOracleVolumeExportPolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_clients: cdktf.stringToTerraform(struct!.allowedClients),
    nfsv3_enabled: cdktf.booleanToTerraform(struct!.nfsv3Enabled),
    nfsv41_enabled: cdktf.booleanToTerraform(struct!.nfsv41Enabled),
    root_access_enabled: cdktf.booleanToTerraform(struct!.rootAccessEnabled),
    rule_index: cdktf.numberToTerraform(struct!.ruleIndex),
    unix_read_only: cdktf.booleanToTerraform(struct!.unixReadOnly),
    unix_read_write: cdktf.booleanToTerraform(struct!.unixReadWrite),
  }
}


export function netappVolumeGroupOracleVolumeExportPolicyRuleToHclTerraform(struct?: NetappVolumeGroupOracleVolumeExportPolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_clients: {
      value: cdktf.stringToHclTerraform(struct!.allowedClients),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfsv3_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.nfsv3Enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nfsv41_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.nfsv41Enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    root_access_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.rootAccessEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rule_index: {
      value: cdktf.numberToHclTerraform(struct!.ruleIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unix_read_only: {
      value: cdktf.booleanToHclTerraform(struct!.unixReadOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unix_read_write: {
      value: cdktf.booleanToHclTerraform(struct!.unixReadWrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetappVolumeGroupOracleVolumeExportPolicyRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedClients = this._allowedClients;
    }
    if (this._nfsv3Enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfsv3Enabled = this._nfsv3Enabled;
    }
    if (this._nfsv41Enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfsv41Enabled = this._nfsv41Enabled;
    }
    if (this._rootAccessEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootAccessEnabled = this._rootAccessEnabled;
    }
    if (this._ruleIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleIndex = this._ruleIndex;
    }
    if (this._unixReadOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.unixReadOnly = this._unixReadOnly;
    }
    if (this._unixReadWrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.unixReadWrite = this._unixReadWrite;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetappVolumeGroupOracleVolumeExportPolicyRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedClients = undefined;
      this._nfsv3Enabled = undefined;
      this._nfsv41Enabled = undefined;
      this._rootAccessEnabled = undefined;
      this._ruleIndex = undefined;
      this._unixReadOnly = undefined;
      this._unixReadWrite = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedClients = value.allowedClients;
      this._nfsv3Enabled = value.nfsv3Enabled;
      this._nfsv41Enabled = value.nfsv41Enabled;
      this._rootAccessEnabled = value.rootAccessEnabled;
      this._ruleIndex = value.ruleIndex;
      this._unixReadOnly = value.unixReadOnly;
      this._unixReadWrite = value.unixReadWrite;
    }
  }

  // allowed_clients - computed: false, optional: false, required: true
  private _allowedClients?: string; 
  public get allowedClients() {
    return this.getStringAttribute('allowed_clients');
  }
  public set allowedClients(value: string) {
    this._allowedClients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedClientsInput() {
    return this._allowedClients;
  }

  // nfsv3_enabled - computed: false, optional: false, required: true
  private _nfsv3Enabled?: boolean | cdktf.IResolvable; 
  public get nfsv3Enabled() {
    return this.getBooleanAttribute('nfsv3_enabled');
  }
  public set nfsv3Enabled(value: boolean | cdktf.IResolvable) {
    this._nfsv3Enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsv3EnabledInput() {
    return this._nfsv3Enabled;
  }

  // nfsv41_enabled - computed: false, optional: false, required: true
  private _nfsv41Enabled?: boolean | cdktf.IResolvable; 
  public get nfsv41Enabled() {
    return this.getBooleanAttribute('nfsv41_enabled');
  }
  public set nfsv41Enabled(value: boolean | cdktf.IResolvable) {
    this._nfsv41Enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsv41EnabledInput() {
    return this._nfsv41Enabled;
  }

  // root_access_enabled - computed: false, optional: true, required: false
  private _rootAccessEnabled?: boolean | cdktf.IResolvable; 
  public get rootAccessEnabled() {
    return this.getBooleanAttribute('root_access_enabled');
  }
  public set rootAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._rootAccessEnabled = value;
  }
  public resetRootAccessEnabled() {
    this._rootAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootAccessEnabledInput() {
    return this._rootAccessEnabled;
  }

  // rule_index - computed: false, optional: false, required: true
  private _ruleIndex?: number; 
  public get ruleIndex() {
    return this.getNumberAttribute('rule_index');
  }
  public set ruleIndex(value: number) {
    this._ruleIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIndexInput() {
    return this._ruleIndex;
  }

  // unix_read_only - computed: false, optional: true, required: false
  private _unixReadOnly?: boolean | cdktf.IResolvable; 
  public get unixReadOnly() {
    return this.getBooleanAttribute('unix_read_only');
  }
  public set unixReadOnly(value: boolean | cdktf.IResolvable) {
    this._unixReadOnly = value;
  }
  public resetUnixReadOnly() {
    this._unixReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unixReadOnlyInput() {
    return this._unixReadOnly;
  }

  // unix_read_write - computed: false, optional: true, required: false
  private _unixReadWrite?: boolean | cdktf.IResolvable; 
  public get unixReadWrite() {
    return this.getBooleanAttribute('unix_read_write');
  }
  public set unixReadWrite(value: boolean | cdktf.IResolvable) {
    this._unixReadWrite = value;
  }
  public resetUnixReadWrite() {
    this._unixReadWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unixReadWriteInput() {
    return this._unixReadWrite;
  }
}

export class NetappVolumeGroupOracleVolumeExportPolicyRuleList extends cdktf.ComplexList {
  public internalValue? : NetappVolumeGroupOracleVolumeExportPolicyRule[] | cdktf.IResolvable

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
  public get(index: number): NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference {
    return new NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetappVolumeGroupOracleVolume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#capacity_pool_id NetappVolumeGroupOracle#capacity_pool_id}
  */
  readonly capacityPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#encryption_key_source NetappVolumeGroupOracle#encryption_key_source}
  */
  readonly encryptionKeySource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#key_vault_private_endpoint_id NetappVolumeGroupOracle#key_vault_private_endpoint_id}
  */
  readonly keyVaultPrivateEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#name NetappVolumeGroupOracle#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#network_features NetappVolumeGroupOracle#network_features}
  */
  readonly networkFeatures?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#protocols NetappVolumeGroupOracle#protocols}
  */
  readonly protocols: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#proximity_placement_group_id NetappVolumeGroupOracle#proximity_placement_group_id}
  */
  readonly proximityPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#security_style NetappVolumeGroupOracle#security_style}
  */
  readonly securityStyle: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#service_level NetappVolumeGroupOracle#service_level}
  */
  readonly serviceLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#snapshot_directory_visible NetappVolumeGroupOracle#snapshot_directory_visible}
  */
  readonly snapshotDirectoryVisible: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#storage_quota_in_gb NetappVolumeGroupOracle#storage_quota_in_gb}
  */
  readonly storageQuotaInGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#subnet_id NetappVolumeGroupOracle#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#tags NetappVolumeGroupOracle#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#throughput_in_mibps NetappVolumeGroupOracle#throughput_in_mibps}
  */
  readonly throughputInMibps: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#volume_path NetappVolumeGroupOracle#volume_path}
  */
  readonly volumePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#volume_spec_name NetappVolumeGroupOracle#volume_spec_name}
  */
  readonly volumeSpecName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#zone NetappVolumeGroupOracle#zone}
  */
  readonly zone?: string;
  /**
  * data_protection_snapshot_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#data_protection_snapshot_policy NetappVolumeGroupOracle#data_protection_snapshot_policy}
  */
  readonly dataProtectionSnapshotPolicy?: NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy;
  /**
  * export_policy_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#export_policy_rule NetappVolumeGroupOracle#export_policy_rule}
  */
  readonly exportPolicyRule: NetappVolumeGroupOracleVolumeExportPolicyRule[] | cdktf.IResolvable;
}

export function netappVolumeGroupOracleVolumeToTerraform(struct?: NetappVolumeGroupOracleVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity_pool_id: cdktf.stringToTerraform(struct!.capacityPoolId),
    encryption_key_source: cdktf.stringToTerraform(struct!.encryptionKeySource),
    key_vault_private_endpoint_id: cdktf.stringToTerraform(struct!.keyVaultPrivateEndpointId),
    name: cdktf.stringToTerraform(struct!.name),
    network_features: cdktf.stringToTerraform(struct!.networkFeatures),
    protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocols),
    proximity_placement_group_id: cdktf.stringToTerraform(struct!.proximityPlacementGroupId),
    security_style: cdktf.stringToTerraform(struct!.securityStyle),
    service_level: cdktf.stringToTerraform(struct!.serviceLevel),
    snapshot_directory_visible: cdktf.booleanToTerraform(struct!.snapshotDirectoryVisible),
    storage_quota_in_gb: cdktf.numberToTerraform(struct!.storageQuotaInGb),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    throughput_in_mibps: cdktf.numberToTerraform(struct!.throughputInMibps),
    volume_path: cdktf.stringToTerraform(struct!.volumePath),
    volume_spec_name: cdktf.stringToTerraform(struct!.volumeSpecName),
    zone: cdktf.stringToTerraform(struct!.zone),
    data_protection_snapshot_policy: netappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyToTerraform(struct!.dataProtectionSnapshotPolicy),
    export_policy_rule: cdktf.listMapper(netappVolumeGroupOracleVolumeExportPolicyRuleToTerraform, true)(struct!.exportPolicyRule),
  }
}


export function netappVolumeGroupOracleVolumeToHclTerraform(struct?: NetappVolumeGroupOracleVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.capacityPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_key_source: {
      value: cdktf.stringToHclTerraform(struct!.encryptionKeySource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_vault_private_endpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultPrivateEndpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_features: {
      value: cdktf.stringToHclTerraform(struct!.networkFeatures),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    proximity_placement_group_id: {
      value: cdktf.stringToHclTerraform(struct!.proximityPlacementGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_style: {
      value: cdktf.stringToHclTerraform(struct!.securityStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_level: {
      value: cdktf.stringToHclTerraform(struct!.serviceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_directory_visible: {
      value: cdktf.booleanToHclTerraform(struct!.snapshotDirectoryVisible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_quota_in_gb: {
      value: cdktf.numberToHclTerraform(struct!.storageQuotaInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    throughput_in_mibps: {
      value: cdktf.numberToHclTerraform(struct!.throughputInMibps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_path: {
      value: cdktf.stringToHclTerraform(struct!.volumePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_spec_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeSpecName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_protection_snapshot_policy: {
      value: netappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyToHclTerraform(struct!.dataProtectionSnapshotPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList",
    },
    export_policy_rule: {
      value: cdktf.listMapperHcl(netappVolumeGroupOracleVolumeExportPolicyRuleToHclTerraform, true)(struct!.exportPolicyRule),
      isBlock: true,
      type: "list",
      storageClassType: "NetappVolumeGroupOracleVolumeExportPolicyRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetappVolumeGroupOracleVolumeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetappVolumeGroupOracleVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityPoolId = this._capacityPoolId;
    }
    if (this._encryptionKeySource !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeySource = this._encryptionKeySource;
    }
    if (this._keyVaultPrivateEndpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultPrivateEndpointId = this._keyVaultPrivateEndpointId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkFeatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFeatures = this._networkFeatures;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._proximityPlacementGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.proximityPlacementGroupId = this._proximityPlacementGroupId;
    }
    if (this._securityStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityStyle = this._securityStyle;
    }
    if (this._serviceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLevel = this._serviceLevel;
    }
    if (this._snapshotDirectoryVisible !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotDirectoryVisible = this._snapshotDirectoryVisible;
    }
    if (this._storageQuotaInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageQuotaInGb = this._storageQuotaInGb;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._throughputInMibps !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughputInMibps = this._throughputInMibps;
    }
    if (this._volumePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumePath = this._volumePath;
    }
    if (this._volumeSpecName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSpecName = this._volumeSpecName;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    if (this._dataProtectionSnapshotPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataProtectionSnapshotPolicy = this._dataProtectionSnapshotPolicy?.internalValue;
    }
    if (this._exportPolicyRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportPolicyRule = this._exportPolicyRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetappVolumeGroupOracleVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityPoolId = undefined;
      this._encryptionKeySource = undefined;
      this._keyVaultPrivateEndpointId = undefined;
      this._name = undefined;
      this._networkFeatures = undefined;
      this._protocols = undefined;
      this._proximityPlacementGroupId = undefined;
      this._securityStyle = undefined;
      this._serviceLevel = undefined;
      this._snapshotDirectoryVisible = undefined;
      this._storageQuotaInGb = undefined;
      this._subnetId = undefined;
      this._tags = undefined;
      this._throughputInMibps = undefined;
      this._volumePath = undefined;
      this._volumeSpecName = undefined;
      this._zone = undefined;
      this._dataProtectionSnapshotPolicy.internalValue = undefined;
      this._exportPolicyRule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacityPoolId = value.capacityPoolId;
      this._encryptionKeySource = value.encryptionKeySource;
      this._keyVaultPrivateEndpointId = value.keyVaultPrivateEndpointId;
      this._name = value.name;
      this._networkFeatures = value.networkFeatures;
      this._protocols = value.protocols;
      this._proximityPlacementGroupId = value.proximityPlacementGroupId;
      this._securityStyle = value.securityStyle;
      this._serviceLevel = value.serviceLevel;
      this._snapshotDirectoryVisible = value.snapshotDirectoryVisible;
      this._storageQuotaInGb = value.storageQuotaInGb;
      this._subnetId = value.subnetId;
      this._tags = value.tags;
      this._throughputInMibps = value.throughputInMibps;
      this._volumePath = value.volumePath;
      this._volumeSpecName = value.volumeSpecName;
      this._zone = value.zone;
      this._dataProtectionSnapshotPolicy.internalValue = value.dataProtectionSnapshotPolicy;
      this._exportPolicyRule.internalValue = value.exportPolicyRule;
    }
  }

  // capacity_pool_id - computed: false, optional: false, required: true
  private _capacityPoolId?: string; 
  public get capacityPoolId() {
    return this.getStringAttribute('capacity_pool_id');
  }
  public set capacityPoolId(value: string) {
    this._capacityPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityPoolIdInput() {
    return this._capacityPoolId;
  }

  // encryption_key_source - computed: true, optional: true, required: false
  private _encryptionKeySource?: string; 
  public get encryptionKeySource() {
    return this.getStringAttribute('encryption_key_source');
  }
  public set encryptionKeySource(value: string) {
    this._encryptionKeySource = value;
  }
  public resetEncryptionKeySource() {
    this._encryptionKeySource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeySourceInput() {
    return this._encryptionKeySource;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_vault_private_endpoint_id - computed: true, optional: true, required: false
  private _keyVaultPrivateEndpointId?: string; 
  public get keyVaultPrivateEndpointId() {
    return this.getStringAttribute('key_vault_private_endpoint_id');
  }
  public set keyVaultPrivateEndpointId(value: string) {
    this._keyVaultPrivateEndpointId = value;
  }
  public resetKeyVaultPrivateEndpointId() {
    this._keyVaultPrivateEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultPrivateEndpointIdInput() {
    return this._keyVaultPrivateEndpointId;
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

  // network_features - computed: true, optional: true, required: false
  private _networkFeatures?: string; 
  public get networkFeatures() {
    return this.getStringAttribute('network_features');
  }
  public set networkFeatures(value: string) {
    this._networkFeatures = value;
  }
  public resetNetworkFeatures() {
    this._networkFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFeaturesInput() {
    return this._networkFeatures;
  }

  // protocols - computed: false, optional: false, required: true
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // proximity_placement_group_id - computed: false, optional: true, required: false
  private _proximityPlacementGroupId?: string; 
  public get proximityPlacementGroupId() {
    return this.getStringAttribute('proximity_placement_group_id');
  }
  public set proximityPlacementGroupId(value: string) {
    this._proximityPlacementGroupId = value;
  }
  public resetProximityPlacementGroupId() {
    this._proximityPlacementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proximityPlacementGroupIdInput() {
    return this._proximityPlacementGroupId;
  }

  // security_style - computed: false, optional: false, required: true
  private _securityStyle?: string; 
  public get securityStyle() {
    return this.getStringAttribute('security_style');
  }
  public set securityStyle(value: string) {
    this._securityStyle = value;
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

  // snapshot_directory_visible - computed: false, optional: false, required: true
  private _snapshotDirectoryVisible?: boolean | cdktf.IResolvable; 
  public get snapshotDirectoryVisible() {
    return this.getBooleanAttribute('snapshot_directory_visible');
  }
  public set snapshotDirectoryVisible(value: boolean | cdktf.IResolvable) {
    this._snapshotDirectoryVisible = value;
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
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // throughput_in_mibps - computed: false, optional: false, required: true
  private _throughputInMibps?: number; 
  public get throughputInMibps() {
    return this.getNumberAttribute('throughput_in_mibps');
  }
  public set throughputInMibps(value: number) {
    this._throughputInMibps = value;
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

  // volume_spec_name - computed: false, optional: false, required: true
  private _volumeSpecName?: string; 
  public get volumeSpecName() {
    return this.getStringAttribute('volume_spec_name');
  }
  public set volumeSpecName(value: string) {
    this._volumeSpecName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSpecNameInput() {
    return this._volumeSpecName;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // data_protection_snapshot_policy - computed: false, optional: true, required: false
  private _dataProtectionSnapshotPolicy = new NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference(this, "data_protection_snapshot_policy");
  public get dataProtectionSnapshotPolicy() {
    return this._dataProtectionSnapshotPolicy;
  }
  public putDataProtectionSnapshotPolicy(value: NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy) {
    this._dataProtectionSnapshotPolicy.internalValue = value;
  }
  public resetDataProtectionSnapshotPolicy() {
    this._dataProtectionSnapshotPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProtectionSnapshotPolicyInput() {
    return this._dataProtectionSnapshotPolicy.internalValue;
  }

  // export_policy_rule - computed: false, optional: false, required: true
  private _exportPolicyRule = new NetappVolumeGroupOracleVolumeExportPolicyRuleList(this, "export_policy_rule", false);
  public get exportPolicyRule() {
    return this._exportPolicyRule;
  }
  public putExportPolicyRule(value: NetappVolumeGroupOracleVolumeExportPolicyRule[] | cdktf.IResolvable) {
    this._exportPolicyRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyRuleInput() {
    return this._exportPolicyRule.internalValue;
  }
}

export class NetappVolumeGroupOracleVolumeList extends cdktf.ComplexList {
  public internalValue? : NetappVolumeGroupOracleVolume[] | cdktf.IResolvable

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
  public get(index: number): NetappVolumeGroupOracleVolumeOutputReference {
    return new NetappVolumeGroupOracleVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle azurerm_netapp_volume_group_oracle}
*/
export class NetappVolumeGroupOracle extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_netapp_volume_group_oracle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetappVolumeGroupOracle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetappVolumeGroupOracle to import
  * @param importFromId The id of the existing NetappVolumeGroupOracle that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetappVolumeGroupOracle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_netapp_volume_group_oracle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/netapp_volume_group_oracle azurerm_netapp_volume_group_oracle} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetappVolumeGroupOracleConfig
  */
  public constructor(scope: Construct, id: string, config: NetappVolumeGroupOracleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_netapp_volume_group_oracle',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.22.0',
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
    this._applicationIdentifier = config.applicationIdentifier;
    this._groupDescription = config.groupDescription;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts.internalValue = config.timeouts;
    this._volume.internalValue = config.volume;
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

  // application_identifier - computed: false, optional: false, required: true
  private _applicationIdentifier?: string; 
  public get applicationIdentifier() {
    return this.getStringAttribute('application_identifier');
  }
  public set applicationIdentifier(value: string) {
    this._applicationIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdentifierInput() {
    return this._applicationIdentifier;
  }

  // group_description - computed: false, optional: false, required: true
  private _groupDescription?: string; 
  public get groupDescription() {
    return this.getStringAttribute('group_description');
  }
  public set groupDescription(value: string) {
    this._groupDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupDescriptionInput() {
    return this._groupDescription;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetappVolumeGroupOracleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetappVolumeGroupOracleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // volume - computed: false, optional: false, required: true
  private _volume = new NetappVolumeGroupOracleVolumeList(this, "volume", false);
  public get volume() {
    return this._volume;
  }
  public putVolume(value: NetappVolumeGroupOracleVolume[] | cdktf.IResolvable) {
    this._volume.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: cdktf.stringToTerraform(this._accountName),
      application_identifier: cdktf.stringToTerraform(this._applicationIdentifier),
      group_description: cdktf.stringToTerraform(this._groupDescription),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: netappVolumeGroupOracleTimeoutsToTerraform(this._timeouts.internalValue),
      volume: cdktf.listMapper(netappVolumeGroupOracleVolumeToTerraform, true)(this._volume.internalValue),
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
      application_identifier: {
        value: cdktf.stringToHclTerraform(this._applicationIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_description: {
        value: cdktf.stringToHclTerraform(this._groupDescription),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
        value: netappVolumeGroupOracleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetappVolumeGroupOracleTimeouts",
      },
      volume: {
        value: cdktf.listMapperHcl(netappVolumeGroupOracleVolumeToHclTerraform, true)(this._volume.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetappVolumeGroupOracleVolumeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
