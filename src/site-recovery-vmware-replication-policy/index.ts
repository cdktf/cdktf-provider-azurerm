/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/site_recovery_vmware_replication_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteRecoveryVmwareReplicationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/site_recovery_vmware_replication_policy#application_consistent_snapshot_frequency_in_minutes SiteRecoveryVmwareReplicationPolicy#application_consistent_snapshot_frequency_in_minutes}
  */
  readonly applicationConsistentSnapshotFrequencyInMinutes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/site_recovery_vmware_replication_policy#id SiteRecoveryVmwareReplicationPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/site_recovery_vmware_replication_policy#name SiteRecoveryVmwareReplicationPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/site_recovery_vmware_replication_policy#recovery_point_retention_in_minutes SiteRecoveryVmwareReplicationPolicy#recovery_point_retention_in_minutes}
  */
  readonly recoveryPointRetentionInMinutes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/site_recovery_vmware_replication_policy#recovery_vault_id SiteRecoveryVmwareReplicationPolicy#recovery_vault_id}
  */
  readonly recoveryVaultId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/site_recovery_vmware_replication_policy#timeouts SiteRecoveryVmwareReplicationPolicy#timeouts}
  */
  readonly timeouts?: SiteRecoveryVmwareReplicationPolicyTimeouts;
}
export interface SiteRecoveryVmwareReplicationPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/site_recovery_vmware_replication_policy#create SiteRecoveryVmwareReplicationPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/site_recovery_vmware_replication_policy#delete SiteRecoveryVmwareReplicationPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/site_recovery_vmware_replication_policy#read SiteRecoveryVmwareReplicationPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/site_recovery_vmware_replication_policy#update SiteRecoveryVmwareReplicationPolicy#update}
  */
  readonly update?: string;
}

export function siteRecoveryVmwareReplicationPolicyTimeoutsToTerraform(struct?: SiteRecoveryVmwareReplicationPolicyTimeouts | cdktf.IResolvable): any {
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


export function siteRecoveryVmwareReplicationPolicyTimeoutsToHclTerraform(struct?: SiteRecoveryVmwareReplicationPolicyTimeouts | cdktf.IResolvable): any {
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

export class SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteRecoveryVmwareReplicationPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SiteRecoveryVmwareReplicationPolicyTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/site_recovery_vmware_replication_policy azurerm_site_recovery_vmware_replication_policy}
*/
export class SiteRecoveryVmwareReplicationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_site_recovery_vmware_replication_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SiteRecoveryVmwareReplicationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SiteRecoveryVmwareReplicationPolicy to import
  * @param importFromId The id of the existing SiteRecoveryVmwareReplicationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/site_recovery_vmware_replication_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SiteRecoveryVmwareReplicationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_site_recovery_vmware_replication_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/site_recovery_vmware_replication_policy azurerm_site_recovery_vmware_replication_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteRecoveryVmwareReplicationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SiteRecoveryVmwareReplicationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_site_recovery_vmware_replication_policy',
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
    this._applicationConsistentSnapshotFrequencyInMinutes = config.applicationConsistentSnapshotFrequencyInMinutes;
    this._id = config.id;
    this._name = config.name;
    this._recoveryPointRetentionInMinutes = config.recoveryPointRetentionInMinutes;
    this._recoveryVaultId = config.recoveryVaultId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_consistent_snapshot_frequency_in_minutes - computed: false, optional: false, required: true
  private _applicationConsistentSnapshotFrequencyInMinutes?: number; 
  public get applicationConsistentSnapshotFrequencyInMinutes() {
    return this.getNumberAttribute('application_consistent_snapshot_frequency_in_minutes');
  }
  public set applicationConsistentSnapshotFrequencyInMinutes(value: number) {
    this._applicationConsistentSnapshotFrequencyInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationConsistentSnapshotFrequencyInMinutesInput() {
    return this._applicationConsistentSnapshotFrequencyInMinutes;
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

  // recovery_point_retention_in_minutes - computed: false, optional: false, required: true
  private _recoveryPointRetentionInMinutes?: number; 
  public get recoveryPointRetentionInMinutes() {
    return this.getNumberAttribute('recovery_point_retention_in_minutes');
  }
  public set recoveryPointRetentionInMinutes(value: number) {
    this._recoveryPointRetentionInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPointRetentionInMinutesInput() {
    return this._recoveryPointRetentionInMinutes;
  }

  // recovery_vault_id - computed: false, optional: false, required: true
  private _recoveryVaultId?: string; 
  public get recoveryVaultId() {
    return this.getStringAttribute('recovery_vault_id');
  }
  public set recoveryVaultId(value: string) {
    this._recoveryVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryVaultIdInput() {
    return this._recoveryVaultId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SiteRecoveryVmwareReplicationPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SiteRecoveryVmwareReplicationPolicyTimeouts) {
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
      application_consistent_snapshot_frequency_in_minutes: cdktf.numberToTerraform(this._applicationConsistentSnapshotFrequencyInMinutes),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      recovery_point_retention_in_minutes: cdktf.numberToTerraform(this._recoveryPointRetentionInMinutes),
      recovery_vault_id: cdktf.stringToTerraform(this._recoveryVaultId),
      timeouts: siteRecoveryVmwareReplicationPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_consistent_snapshot_frequency_in_minutes: {
        value: cdktf.numberToHclTerraform(this._applicationConsistentSnapshotFrequencyInMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      recovery_point_retention_in_minutes: {
        value: cdktf.numberToHclTerraform(this._recoveryPointRetentionInMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recovery_vault_id: {
        value: cdktf.stringToHclTerraform(this._recoveryVaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: siteRecoveryVmwareReplicationPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteRecoveryVmwareReplicationPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
