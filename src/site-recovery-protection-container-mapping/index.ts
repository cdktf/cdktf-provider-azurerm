// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_protection_container_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteRecoveryProtectionContainerMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_protection_container_mapping#id SiteRecoveryProtectionContainerMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_protection_container_mapping#name SiteRecoveryProtectionContainerMapping#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_protection_container_mapping#recovery_fabric_name SiteRecoveryProtectionContainerMapping#recovery_fabric_name}
  */
  readonly recoveryFabricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_protection_container_mapping#recovery_replication_policy_id SiteRecoveryProtectionContainerMapping#recovery_replication_policy_id}
  */
  readonly recoveryReplicationPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_protection_container_mapping#recovery_source_protection_container_name SiteRecoveryProtectionContainerMapping#recovery_source_protection_container_name}
  */
  readonly recoverySourceProtectionContainerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_protection_container_mapping#recovery_target_protection_container_id SiteRecoveryProtectionContainerMapping#recovery_target_protection_container_id}
  */
  readonly recoveryTargetProtectionContainerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_protection_container_mapping#recovery_vault_name SiteRecoveryProtectionContainerMapping#recovery_vault_name}
  */
  readonly recoveryVaultName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_protection_container_mapping#resource_group_name SiteRecoveryProtectionContainerMapping#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * automatic_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_protection_container_mapping#automatic_update SiteRecoveryProtectionContainerMapping#automatic_update}
  */
  readonly automaticUpdate?: SiteRecoveryProtectionContainerMappingAutomaticUpdate;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_protection_container_mapping#timeouts SiteRecoveryProtectionContainerMapping#timeouts}
  */
  readonly timeouts?: SiteRecoveryProtectionContainerMappingTimeouts;
}
export interface SiteRecoveryProtectionContainerMappingAutomaticUpdate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_protection_container_mapping#authentication_type SiteRecoveryProtectionContainerMapping#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_protection_container_mapping#automation_account_id SiteRecoveryProtectionContainerMapping#automation_account_id}
  */
  readonly automationAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_protection_container_mapping#enabled SiteRecoveryProtectionContainerMapping#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function siteRecoveryProtectionContainerMappingAutomaticUpdateToTerraform(struct?: SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference | SiteRecoveryProtectionContainerMappingAutomaticUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_type: cdktf.stringToTerraform(struct!.authenticationType),
    automation_account_id: cdktf.stringToTerraform(struct!.automationAccountId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function siteRecoveryProtectionContainerMappingAutomaticUpdateToHclTerraform(struct?: SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference | SiteRecoveryProtectionContainerMappingAutomaticUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_type: {
      value: cdktf.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    automation_account_id: {
      value: cdktf.stringToHclTerraform(struct!.automationAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SiteRecoveryProtectionContainerMappingAutomaticUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._automationAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.automationAccountId = this._automationAccountId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteRecoveryProtectionContainerMappingAutomaticUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationType = undefined;
      this._automationAccountId = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationType = value.authenticationType;
      this._automationAccountId = value.automationAccountId;
      this._enabled = value.enabled;
    }
  }

  // authentication_type - computed: false, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // automation_account_id - computed: false, optional: true, required: false
  private _automationAccountId?: string; 
  public get automationAccountId() {
    return this.getStringAttribute('automation_account_id');
  }
  public set automationAccountId(value: string) {
    this._automationAccountId = value;
  }
  public resetAutomationAccountId() {
    this._automationAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automationAccountIdInput() {
    return this._automationAccountId;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface SiteRecoveryProtectionContainerMappingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_protection_container_mapping#create SiteRecoveryProtectionContainerMapping#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_protection_container_mapping#delete SiteRecoveryProtectionContainerMapping#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_protection_container_mapping#read SiteRecoveryProtectionContainerMapping#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_protection_container_mapping#update SiteRecoveryProtectionContainerMapping#update}
  */
  readonly update?: string;
}

export function siteRecoveryProtectionContainerMappingTimeoutsToTerraform(struct?: SiteRecoveryProtectionContainerMappingTimeouts | cdktf.IResolvable): any {
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


export function siteRecoveryProtectionContainerMappingTimeoutsToHclTerraform(struct?: SiteRecoveryProtectionContainerMappingTimeouts | cdktf.IResolvable): any {
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

export class SiteRecoveryProtectionContainerMappingTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteRecoveryProtectionContainerMappingTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SiteRecoveryProtectionContainerMappingTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_protection_container_mapping azurerm_site_recovery_protection_container_mapping}
*/
export class SiteRecoveryProtectionContainerMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_site_recovery_protection_container_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SiteRecoveryProtectionContainerMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SiteRecoveryProtectionContainerMapping to import
  * @param importFromId The id of the existing SiteRecoveryProtectionContainerMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_protection_container_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SiteRecoveryProtectionContainerMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_site_recovery_protection_container_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/site_recovery_protection_container_mapping azurerm_site_recovery_protection_container_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteRecoveryProtectionContainerMappingConfig
  */
  public constructor(scope: Construct, id: string, config: SiteRecoveryProtectionContainerMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_site_recovery_protection_container_mapping',
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
    this._name = config.name;
    this._recoveryFabricName = config.recoveryFabricName;
    this._recoveryReplicationPolicyId = config.recoveryReplicationPolicyId;
    this._recoverySourceProtectionContainerName = config.recoverySourceProtectionContainerName;
    this._recoveryTargetProtectionContainerId = config.recoveryTargetProtectionContainerId;
    this._recoveryVaultName = config.recoveryVaultName;
    this._resourceGroupName = config.resourceGroupName;
    this._automaticUpdate.internalValue = config.automaticUpdate;
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

  // automatic_update - computed: false, optional: true, required: false
  private _automaticUpdate = new SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference(this, "automatic_update");
  public get automaticUpdate() {
    return this._automaticUpdate;
  }
  public putAutomaticUpdate(value: SiteRecoveryProtectionContainerMappingAutomaticUpdate) {
    this._automaticUpdate.internalValue = value;
  }
  public resetAutomaticUpdate() {
    this._automaticUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticUpdateInput() {
    return this._automaticUpdate.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SiteRecoveryProtectionContainerMappingTimeoutsOutputReference(this, "timeouts");
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      recovery_fabric_name: cdktf.stringToTerraform(this._recoveryFabricName),
      recovery_replication_policy_id: cdktf.stringToTerraform(this._recoveryReplicationPolicyId),
      recovery_source_protection_container_name: cdktf.stringToTerraform(this._recoverySourceProtectionContainerName),
      recovery_target_protection_container_id: cdktf.stringToTerraform(this._recoveryTargetProtectionContainerId),
      recovery_vault_name: cdktf.stringToTerraform(this._recoveryVaultName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      automatic_update: siteRecoveryProtectionContainerMappingAutomaticUpdateToTerraform(this._automaticUpdate.internalValue),
      timeouts: siteRecoveryProtectionContainerMappingTimeoutsToTerraform(this._timeouts.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_fabric_name: {
        value: cdktf.stringToHclTerraform(this._recoveryFabricName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_replication_policy_id: {
        value: cdktf.stringToHclTerraform(this._recoveryReplicationPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_source_protection_container_name: {
        value: cdktf.stringToHclTerraform(this._recoverySourceProtectionContainerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_target_protection_container_id: {
        value: cdktf.stringToHclTerraform(this._recoveryTargetProtectionContainerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_vault_name: {
        value: cdktf.stringToHclTerraform(this._recoveryVaultName),
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
      automatic_update: {
        value: siteRecoveryProtectionContainerMappingAutomaticUpdateToHclTerraform(this._automaticUpdate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SiteRecoveryProtectionContainerMappingAutomaticUpdateList",
      },
      timeouts: {
        value: siteRecoveryProtectionContainerMappingTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteRecoveryProtectionContainerMappingTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
