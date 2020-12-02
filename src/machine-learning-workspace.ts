// https://www.terraform.io/docs/providers/azurerm/r/machine_learning_workspace.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface MachineLearningWorkspaceConfig extends TerraformMetaArguments {
  readonly applicationInsightsId: string;
  readonly containerRegistryId?: string;
  readonly description?: string;
  readonly friendlyName?: string;
  readonly highBusinessImpact?: boolean;
  readonly keyVaultId: string;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly skuName?: string;
  readonly storageAccountId: string;
  readonly tags?: { [key: string]: string };
  /** identity block */
  readonly identity: MachineLearningWorkspaceIdentity[];
  /** timeouts block */
  readonly timeouts?: MachineLearningWorkspaceTimeouts;
}
export interface MachineLearningWorkspaceIdentity {
  readonly type: string;
}
export interface MachineLearningWorkspaceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class MachineLearningWorkspace extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MachineLearningWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_machine_learning_workspace',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationInsightsId = config.applicationInsightsId;
    this._containerRegistryId = config.containerRegistryId;
    this._description = config.description;
    this._friendlyName = config.friendlyName;
    this._highBusinessImpact = config.highBusinessImpact;
    this._keyVaultId = config.keyVaultId;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._storageAccountId = config.storageAccountId;
    this._tags = config.tags;
    this._identity = config.identity;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_insights_id - computed: false, optional: false, required: true
  private _applicationInsightsId: string;
  public get applicationInsightsId() {
    return this.getStringAttribute('application_insights_id');
  }
  public set applicationInsightsId(value: string) {
    this._applicationInsightsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInsightsIdInput() {
    return this._applicationInsightsId
  }

  // container_registry_id - computed: false, optional: true, required: false
  private _containerRegistryId?: string;
  public get containerRegistryId() {
    return this.getStringAttribute('container_registry_id');
  }
  public set containerRegistryId(value: string ) {
    this._containerRegistryId = value;
  }
  public resetContainerRegistryId() {
    this._containerRegistryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRegistryIdInput() {
    return this._containerRegistryId
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // friendly_name - computed: false, optional: true, required: false
  private _friendlyName?: string;
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string ) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName
  }

  // high_business_impact - computed: false, optional: true, required: false
  private _highBusinessImpact?: boolean;
  public get highBusinessImpact() {
    return this.getBooleanAttribute('high_business_impact');
  }
  public set highBusinessImpact(value: boolean ) {
    this._highBusinessImpact = value;
  }
  public resetHighBusinessImpact() {
    this._highBusinessImpact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highBusinessImpactInput() {
    return this._highBusinessImpact
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_vault_id - computed: false, optional: false, required: true
  private _keyVaultId: string;
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }
  public set keyVaultId(value: string) {
    this._keyVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultIdInput() {
    return this._keyVaultId
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // sku_name - computed: false, optional: true, required: false
  private _skuName?: string;
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string ) {
    this._skuName = value;
  }
  public resetSkuName() {
    this._skuName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName
  }

  // storage_account_id - computed: false, optional: false, required: true
  private _storageAccountId: string;
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // identity - computed: false, optional: false, required: true
  private _identity: MachineLearningWorkspaceIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: MachineLearningWorkspaceIdentity[]) {
    this._identity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MachineLearningWorkspaceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MachineLearningWorkspaceTimeouts ) {
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
      application_insights_id: this._applicationInsightsId,
      container_registry_id: this._containerRegistryId,
      description: this._description,
      friendly_name: this._friendlyName,
      high_business_impact: this._highBusinessImpact,
      key_vault_id: this._keyVaultId,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      sku_name: this._skuName,
      storage_account_id: this._storageAccountId,
      tags: this._tags,
      identity: this._identity,
      timeouts: this._timeouts,
    };
  }
}
