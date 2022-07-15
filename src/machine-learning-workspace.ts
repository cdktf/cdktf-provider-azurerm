// https://www.terraform.io/docs/providers/azurerm/r/machine_learning_workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MachineLearningWorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_workspace#application_insights_id MachineLearningWorkspace#application_insights_id}
  */
  readonly applicationInsightsId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_workspace#container_registry_id MachineLearningWorkspace#container_registry_id}
  */
  readonly containerRegistryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_workspace#description MachineLearningWorkspace#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_workspace#friendly_name MachineLearningWorkspace#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_workspace#high_business_impact MachineLearningWorkspace#high_business_impact}
  */
  readonly highBusinessImpact?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_workspace#id MachineLearningWorkspace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_workspace#image_build_compute_name MachineLearningWorkspace#image_build_compute_name}
  */
  readonly imageBuildComputeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_workspace#key_vault_id MachineLearningWorkspace#key_vault_id}
  */
  readonly keyVaultId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_workspace#location MachineLearningWorkspace#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_workspace#name MachineLearningWorkspace#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_workspace#primary_user_assigned_identity MachineLearningWorkspace#primary_user_assigned_identity}
  */
  readonly primaryUserAssignedIdentity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_workspace#public_access_behind_virtual_network_enabled MachineLearningWorkspace#public_access_behind_virtual_network_enabled}
  */
  readonly publicAccessBehindVirtualNetworkEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_workspace#public_network_access_enabled MachineLearningWorkspace#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_workspace#resource_group_name MachineLearningWorkspace#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_workspace#sku_name MachineLearningWorkspace#sku_name}
  */
  readonly skuName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_workspace#storage_account_id MachineLearningWorkspace#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_workspace#tags MachineLearningWorkspace#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * encryption block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_workspace#encryption MachineLearningWorkspace#encryption}
  */
  readonly encryption?: MachineLearningWorkspaceEncryption;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_workspace#identity MachineLearningWorkspace#identity}
  */
  readonly identity: MachineLearningWorkspaceIdentity;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_workspace#timeouts MachineLearningWorkspace#timeouts}
  */
  readonly timeouts?: MachineLearningWorkspaceTimeouts;
}
export interface MachineLearningWorkspaceEncryption {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_workspace#key_id MachineLearningWorkspace#key_id}
  */
  readonly keyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_workspace#key_vault_id MachineLearningWorkspace#key_vault_id}
  */
  readonly keyVaultId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_workspace#user_assigned_identity_id MachineLearningWorkspace#user_assigned_identity_id}
  */
  readonly userAssignedIdentityId?: string;
}

export function machineLearningWorkspaceEncryptionToTerraform(struct?: MachineLearningWorkspaceEncryptionOutputReference | MachineLearningWorkspaceEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    user_assigned_identity_id: cdktf.stringToTerraform(struct!.userAssignedIdentityId),
  }
}

export class MachineLearningWorkspaceEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MachineLearningWorkspaceEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._keyVaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultId = this._keyVaultId;
    }
    if (this._userAssignedIdentityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssignedIdentityId = this._userAssignedIdentityId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineLearningWorkspaceEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyId = undefined;
      this._keyVaultId = undefined;
      this._userAssignedIdentityId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyId = value.keyId;
      this._keyVaultId = value.keyVaultId;
      this._userAssignedIdentityId = value.userAssignedIdentityId;
    }
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // key_vault_id - computed: false, optional: false, required: true
  private _keyVaultId?: string; 
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }
  public set keyVaultId(value: string) {
    this._keyVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultIdInput() {
    return this._keyVaultId;
  }

  // user_assigned_identity_id - computed: false, optional: true, required: false
  private _userAssignedIdentityId?: string; 
  public get userAssignedIdentityId() {
    return this.getStringAttribute('user_assigned_identity_id');
  }
  public set userAssignedIdentityId(value: string) {
    this._userAssignedIdentityId = value;
  }
  public resetUserAssignedIdentityId() {
    this._userAssignedIdentityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedIdentityIdInput() {
    return this._userAssignedIdentityId;
  }
}
export interface MachineLearningWorkspaceIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_workspace#identity_ids MachineLearningWorkspace#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_workspace#type MachineLearningWorkspace#type}
  */
  readonly type: string;
}

export function machineLearningWorkspaceIdentityToTerraform(struct?: MachineLearningWorkspaceIdentityOutputReference | MachineLearningWorkspaceIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class MachineLearningWorkspaceIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MachineLearningWorkspaceIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityIds = this._identityIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineLearningWorkspaceIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identityIds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identityIds = value.identityIds;
      this._type = value.type;
    }
  }

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[]; 
  public get identityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('identity_ids'));
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface MachineLearningWorkspaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_workspace#create MachineLearningWorkspace#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_workspace#delete MachineLearningWorkspace#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_workspace#read MachineLearningWorkspace#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_workspace#update MachineLearningWorkspace#update}
  */
  readonly update?: string;
}

export function machineLearningWorkspaceTimeoutsToTerraform(struct?: MachineLearningWorkspaceTimeoutsOutputReference | MachineLearningWorkspaceTimeouts | cdktf.IResolvable): any {
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

export class MachineLearningWorkspaceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MachineLearningWorkspaceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MachineLearningWorkspaceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_workspace azurerm_machine_learning_workspace}
*/
export class MachineLearningWorkspace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_machine_learning_workspace";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_workspace azurerm_machine_learning_workspace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MachineLearningWorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: MachineLearningWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_machine_learning_workspace',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.14.0',
        providerVersionConstraint: '~> 3.10'
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
    this._id = config.id;
    this._imageBuildComputeName = config.imageBuildComputeName;
    this._keyVaultId = config.keyVaultId;
    this._location = config.location;
    this._name = config.name;
    this._primaryUserAssignedIdentity = config.primaryUserAssignedIdentity;
    this._publicAccessBehindVirtualNetworkEnabled = config.publicAccessBehindVirtualNetworkEnabled;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._storageAccountId = config.storageAccountId;
    this._tags = config.tags;
    this._encryption.internalValue = config.encryption;
    this._identity.internalValue = config.identity;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_insights_id - computed: false, optional: false, required: true
  private _applicationInsightsId?: string; 
  public get applicationInsightsId() {
    return this.getStringAttribute('application_insights_id');
  }
  public set applicationInsightsId(value: string) {
    this._applicationInsightsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInsightsIdInput() {
    return this._applicationInsightsId;
  }

  // container_registry_id - computed: false, optional: true, required: false
  private _containerRegistryId?: string; 
  public get containerRegistryId() {
    return this.getStringAttribute('container_registry_id');
  }
  public set containerRegistryId(value: string) {
    this._containerRegistryId = value;
  }
  public resetContainerRegistryId() {
    this._containerRegistryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRegistryIdInput() {
    return this._containerRegistryId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // discovery_url - computed: true, optional: false, required: false
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }

  // friendly_name - computed: false, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
  }

  // high_business_impact - computed: false, optional: true, required: false
  private _highBusinessImpact?: boolean | cdktf.IResolvable; 
  public get highBusinessImpact() {
    return this.getBooleanAttribute('high_business_impact');
  }
  public set highBusinessImpact(value: boolean | cdktf.IResolvable) {
    this._highBusinessImpact = value;
  }
  public resetHighBusinessImpact() {
    this._highBusinessImpact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highBusinessImpactInput() {
    return this._highBusinessImpact;
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

  // image_build_compute_name - computed: false, optional: true, required: false
  private _imageBuildComputeName?: string; 
  public get imageBuildComputeName() {
    return this.getStringAttribute('image_build_compute_name');
  }
  public set imageBuildComputeName(value: string) {
    this._imageBuildComputeName = value;
  }
  public resetImageBuildComputeName() {
    this._imageBuildComputeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageBuildComputeNameInput() {
    return this._imageBuildComputeName;
  }

  // key_vault_id - computed: false, optional: false, required: true
  private _keyVaultId?: string; 
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }
  public set keyVaultId(value: string) {
    this._keyVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultIdInput() {
    return this._keyVaultId;
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

  // primary_user_assigned_identity - computed: false, optional: true, required: false
  private _primaryUserAssignedIdentity?: string; 
  public get primaryUserAssignedIdentity() {
    return this.getStringAttribute('primary_user_assigned_identity');
  }
  public set primaryUserAssignedIdentity(value: string) {
    this._primaryUserAssignedIdentity = value;
  }
  public resetPrimaryUserAssignedIdentity() {
    this._primaryUserAssignedIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryUserAssignedIdentityInput() {
    return this._primaryUserAssignedIdentity;
  }

  // public_access_behind_virtual_network_enabled - computed: true, optional: true, required: false
  private _publicAccessBehindVirtualNetworkEnabled?: boolean | cdktf.IResolvable; 
  public get publicAccessBehindVirtualNetworkEnabled() {
    return this.getBooleanAttribute('public_access_behind_virtual_network_enabled');
  }
  public set publicAccessBehindVirtualNetworkEnabled(value: boolean | cdktf.IResolvable) {
    this._publicAccessBehindVirtualNetworkEnabled = value;
  }
  public resetPublicAccessBehindVirtualNetworkEnabled() {
    this._publicAccessBehindVirtualNetworkEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessBehindVirtualNetworkEnabledInput() {
    return this._publicAccessBehindVirtualNetworkEnabled;
  }

  // public_network_access_enabled - computed: true, optional: true, required: false
  private _publicNetworkAccessEnabled?: boolean | cdktf.IResolvable; 
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled');
  }
  public set publicNetworkAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._publicNetworkAccessEnabled = value;
  }
  public resetPublicNetworkAccessEnabled() {
    this._publicNetworkAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessEnabledInput() {
    return this._publicNetworkAccessEnabled;
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

  // sku_name - computed: false, optional: true, required: false
  private _skuName?: string; 
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  public resetSkuName() {
    this._skuName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName;
  }

  // storage_account_id - computed: false, optional: false, required: true
  private _storageAccountId?: string; 
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId;
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

  // encryption - computed: false, optional: true, required: false
  private _encryption = new MachineLearningWorkspaceEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: MachineLearningWorkspaceEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }

  // identity - computed: false, optional: false, required: true
  private _identity = new MachineLearningWorkspaceIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: MachineLearningWorkspaceIdentity) {
    this._identity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MachineLearningWorkspaceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MachineLearningWorkspaceTimeouts) {
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
      application_insights_id: cdktf.stringToTerraform(this._applicationInsightsId),
      container_registry_id: cdktf.stringToTerraform(this._containerRegistryId),
      description: cdktf.stringToTerraform(this._description),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      high_business_impact: cdktf.booleanToTerraform(this._highBusinessImpact),
      id: cdktf.stringToTerraform(this._id),
      image_build_compute_name: cdktf.stringToTerraform(this._imageBuildComputeName),
      key_vault_id: cdktf.stringToTerraform(this._keyVaultId),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      primary_user_assigned_identity: cdktf.stringToTerraform(this._primaryUserAssignedIdentity),
      public_access_behind_virtual_network_enabled: cdktf.booleanToTerraform(this._publicAccessBehindVirtualNetworkEnabled),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku_name: cdktf.stringToTerraform(this._skuName),
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      encryption: machineLearningWorkspaceEncryptionToTerraform(this._encryption.internalValue),
      identity: machineLearningWorkspaceIdentityToTerraform(this._identity.internalValue),
      timeouts: machineLearningWorkspaceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
