// https://www.terraform.io/docs/providers/azurerm/r/site_recovery_protection_container_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteRecoveryProtectionContainerMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_protection_container_mapping#name SiteRecoveryProtectionContainerMapping#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_protection_container_mapping#recovery_fabric_name SiteRecoveryProtectionContainerMapping#recovery_fabric_name}
  */
  readonly recoveryFabricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_protection_container_mapping#recovery_replication_policy_id SiteRecoveryProtectionContainerMapping#recovery_replication_policy_id}
  */
  readonly recoveryReplicationPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_protection_container_mapping#recovery_source_protection_container_name SiteRecoveryProtectionContainerMapping#recovery_source_protection_container_name}
  */
  readonly recoverySourceProtectionContainerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_protection_container_mapping#recovery_target_protection_container_id SiteRecoveryProtectionContainerMapping#recovery_target_protection_container_id}
  */
  readonly recoveryTargetProtectionContainerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_protection_container_mapping#recovery_vault_name SiteRecoveryProtectionContainerMapping#recovery_vault_name}
  */
  readonly recoveryVaultName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_protection_container_mapping#resource_group_name SiteRecoveryProtectionContainerMapping#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_protection_container_mapping#timeouts SiteRecoveryProtectionContainerMapping#timeouts}
  */
  readonly timeouts?: SiteRecoveryProtectionContainerMappingTimeouts;
}
export interface SiteRecoveryProtectionContainerMappingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_protection_container_mapping#create SiteRecoveryProtectionContainerMapping#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_protection_container_mapping#delete SiteRecoveryProtectionContainerMapping#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_protection_container_mapping#read SiteRecoveryProtectionContainerMapping#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_protection_container_mapping#update SiteRecoveryProtectionContainerMapping#update}
  */
  readonly update?: string;
}

export function siteRecoveryProtectionContainerMappingTimeoutsToTerraform(struct?: SiteRecoveryProtectionContainerMappingTimeoutsOutputReference | SiteRecoveryProtectionContainerMappingTimeouts): any {
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

export class SiteRecoveryProtectionContainerMappingTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SiteRecoveryProtectionContainerMappingTimeouts | undefined {
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

  public set internalValue(value: SiteRecoveryProtectionContainerMappingTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_protection_container_mapping azurerm_site_recovery_protection_container_mapping}
*/
export class SiteRecoveryProtectionContainerMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_site_recovery_protection_container_mapping";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_protection_container_mapping azurerm_site_recovery_protection_container_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteRecoveryProtectionContainerMappingConfig
  */
  public constructor(scope: Construct, id: string, config: SiteRecoveryProtectionContainerMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_site_recovery_protection_container_mapping',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._recoveryFabricName = config.recoveryFabricName;
    this._recoveryReplicationPolicyId = config.recoveryReplicationPolicyId;
    this._recoverySourceProtectionContainerName = config.recoverySourceProtectionContainerName;
    this._recoveryTargetProtectionContainerId = config.recoveryTargetProtectionContainerId;
    this._recoveryVaultName = config.recoveryVaultName;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // recovery_fabric_name - computed: false, optional: false, required: true
  private _recoveryFabricName?: string; 
  public get recoveryFabricName() {
    return this.getStringAttribute('recovery_fabric_name');
  }
  public set recoveryFabricName(value: string) {
    this._recoveryFabricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryFabricNameInput() {
    return this._recoveryFabricName;
  }

  // recovery_replication_policy_id - computed: false, optional: false, required: true
  private _recoveryReplicationPolicyId?: string; 
  public get recoveryReplicationPolicyId() {
    return this.getStringAttribute('recovery_replication_policy_id');
  }
  public set recoveryReplicationPolicyId(value: string) {
    this._recoveryReplicationPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryReplicationPolicyIdInput() {
    return this._recoveryReplicationPolicyId;
  }

  // recovery_source_protection_container_name - computed: false, optional: false, required: true
  private _recoverySourceProtectionContainerName?: string; 
  public get recoverySourceProtectionContainerName() {
    return this.getStringAttribute('recovery_source_protection_container_name');
  }
  public set recoverySourceProtectionContainerName(value: string) {
    this._recoverySourceProtectionContainerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoverySourceProtectionContainerNameInput() {
    return this._recoverySourceProtectionContainerName;
  }

  // recovery_target_protection_container_id - computed: false, optional: false, required: true
  private _recoveryTargetProtectionContainerId?: string; 
  public get recoveryTargetProtectionContainerId() {
    return this.getStringAttribute('recovery_target_protection_container_id');
  }
  public set recoveryTargetProtectionContainerId(value: string) {
    this._recoveryTargetProtectionContainerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryTargetProtectionContainerIdInput() {
    return this._recoveryTargetProtectionContainerId;
  }

  // recovery_vault_name - computed: false, optional: false, required: true
  private _recoveryVaultName?: string; 
  public get recoveryVaultName() {
    return this.getStringAttribute('recovery_vault_name');
  }
  public set recoveryVaultName(value: string) {
    this._recoveryVaultName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryVaultNameInput() {
    return this._recoveryVaultName;
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
  private _timeouts = new SiteRecoveryProtectionContainerMappingTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SiteRecoveryProtectionContainerMappingTimeouts) {
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
      name: cdktf.stringToTerraform(this._name),
      recovery_fabric_name: cdktf.stringToTerraform(this._recoveryFabricName),
      recovery_replication_policy_id: cdktf.stringToTerraform(this._recoveryReplicationPolicyId),
      recovery_source_protection_container_name: cdktf.stringToTerraform(this._recoverySourceProtectionContainerName),
      recovery_target_protection_container_id: cdktf.stringToTerraform(this._recoveryTargetProtectionContainerId),
      recovery_vault_name: cdktf.stringToTerraform(this._recoveryVaultName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: siteRecoveryProtectionContainerMappingTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
