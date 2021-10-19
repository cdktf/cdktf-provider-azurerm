// https://www.terraform.io/docs/providers/azurerm/r/key_vault.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyVaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#access_policy KeyVault#access_policy}
  */
  readonly accessPolicy?: KeyVaultAccessPolicy[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#enable_rbac_authorization KeyVault#enable_rbac_authorization}
  */
  readonly enableRbacAuthorization?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#enabled_for_deployment KeyVault#enabled_for_deployment}
  */
  readonly enabledForDeployment?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#enabled_for_disk_encryption KeyVault#enabled_for_disk_encryption}
  */
  readonly enabledForDiskEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#enabled_for_template_deployment KeyVault#enabled_for_template_deployment}
  */
  readonly enabledForTemplateDeployment?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#location KeyVault#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#name KeyVault#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#purge_protection_enabled KeyVault#purge_protection_enabled}
  */
  readonly purgeProtectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#resource_group_name KeyVault#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#sku_name KeyVault#sku_name}
  */
  readonly skuName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#soft_delete_enabled KeyVault#soft_delete_enabled}
  */
  readonly softDeleteEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#soft_delete_retention_days KeyVault#soft_delete_retention_days}
  */
  readonly softDeleteRetentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#tags KeyVault#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#tenant_id KeyVault#tenant_id}
  */
  readonly tenantId: string;
  /**
  * contact block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#contact KeyVault#contact}
  */
  readonly contact?: KeyVaultContact[];
  /**
  * network_acls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#network_acls KeyVault#network_acls}
  */
  readonly networkAcls?: KeyVaultNetworkAcls;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#timeouts KeyVault#timeouts}
  */
  readonly timeouts?: KeyVaultTimeouts;
}
export interface KeyVaultAccessPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#application_id KeyVault#application_id}
  */
  readonly applicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#certificate_permissions KeyVault#certificate_permissions}
  */
  readonly certificatePermissions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#key_permissions KeyVault#key_permissions}
  */
  readonly keyPermissions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#object_id KeyVault#object_id}
  */
  readonly objectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#secret_permissions KeyVault#secret_permissions}
  */
  readonly secretPermissions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#storage_permissions KeyVault#storage_permissions}
  */
  readonly storagePermissions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#tenant_id KeyVault#tenant_id}
  */
  readonly tenantId?: string;
}

function keyVaultAccessPolicyToTerraform(struct?: KeyVaultAccessPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: struct!.applicationId === undefined ? null : cdktf.stringToTerraform(struct!.applicationId),
    certificate_permissions: struct!.certificatePermissions === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.certificatePermissions),
    key_permissions: struct!.keyPermissions === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.keyPermissions),
    object_id: struct!.objectId === undefined ? null : cdktf.stringToTerraform(struct!.objectId),
    secret_permissions: struct!.secretPermissions === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.secretPermissions),
    storage_permissions: struct!.storagePermissions === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.storagePermissions),
    tenant_id: struct!.tenantId === undefined ? null : cdktf.stringToTerraform(struct!.tenantId),
  }
}

export interface KeyVaultContact {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#email KeyVault#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#name KeyVault#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#phone KeyVault#phone}
  */
  readonly phone?: string;
}

function keyVaultContactToTerraform(struct?: KeyVaultContact): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    name: cdktf.stringToTerraform(struct!.name),
    phone: cdktf.stringToTerraform(struct!.phone),
  }
}

export interface KeyVaultNetworkAcls {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#bypass KeyVault#bypass}
  */
  readonly bypass: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#default_action KeyVault#default_action}
  */
  readonly defaultAction: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#ip_rules KeyVault#ip_rules}
  */
  readonly ipRules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#virtual_network_subnet_ids KeyVault#virtual_network_subnet_ids}
  */
  readonly virtualNetworkSubnetIds?: string[];
}

function keyVaultNetworkAclsToTerraform(struct?: KeyVaultNetworkAclsOutputReference | KeyVaultNetworkAcls): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass: cdktf.stringToTerraform(struct!.bypass),
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    ip_rules: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipRules),
    virtual_network_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.virtualNetworkSubnetIds),
  }
}

export class KeyVaultNetworkAclsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // bypass - computed: false, optional: false, required: true
  private _bypass?: string; 
  public get bypass() {
    return this.getStringAttribute('bypass');
  }
  public set bypass(value: string) {
    this._bypass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassInput() {
    return this._bypass
  }

  // default_action - computed: false, optional: false, required: true
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction
  }

  // ip_rules - computed: false, optional: true, required: false
  private _ipRules?: string[] | undefined; 
  public get ipRules() {
    return this.getListAttribute('ip_rules');
  }
  public set ipRules(value: string[] | undefined) {
    this._ipRules = value;
  }
  public resetIpRules() {
    this._ipRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRulesInput() {
    return this._ipRules
  }

  // virtual_network_subnet_ids - computed: false, optional: true, required: false
  private _virtualNetworkSubnetIds?: string[] | undefined; 
  public get virtualNetworkSubnetIds() {
    return this.getListAttribute('virtual_network_subnet_ids');
  }
  public set virtualNetworkSubnetIds(value: string[] | undefined) {
    this._virtualNetworkSubnetIds = value;
  }
  public resetVirtualNetworkSubnetIds() {
    this._virtualNetworkSubnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkSubnetIdsInput() {
    return this._virtualNetworkSubnetIds
  }
}
export interface KeyVaultTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#create KeyVault#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#delete KeyVault#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#read KeyVault#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html#update KeyVault#update}
  */
  readonly update?: string;
}

function keyVaultTimeoutsToTerraform(struct?: KeyVaultTimeoutsOutputReference | KeyVaultTimeouts): any {
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

export class KeyVaultTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html azurerm_key_vault}
*/
export class KeyVault extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_key_vault";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault.html azurerm_key_vault} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeyVaultConfig
  */
  public constructor(scope: Construct, id: string, config: KeyVaultConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_key_vault',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessPolicy = config.accessPolicy;
    this._enableRbacAuthorization = config.enableRbacAuthorization;
    this._enabledForDeployment = config.enabledForDeployment;
    this._enabledForDiskEncryption = config.enabledForDiskEncryption;
    this._enabledForTemplateDeployment = config.enabledForTemplateDeployment;
    this._location = config.location;
    this._name = config.name;
    this._purgeProtectionEnabled = config.purgeProtectionEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._softDeleteEnabled = config.softDeleteEnabled;
    this._softDeleteRetentionDays = config.softDeleteRetentionDays;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
    this._contact = config.contact;
    this._networkAcls = config.networkAcls;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy - computed: true, optional: true, required: false
  private _accessPolicy?: KeyVaultAccessPolicy[] | undefined; 
  public get accessPolicy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('access_policy') as any;
  }
  public set accessPolicy(value: KeyVaultAccessPolicy[] | undefined) {
    this._accessPolicy = value;
  }
  public resetAccessPolicy() {
    this._accessPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyInput() {
    return this._accessPolicy
  }

  // enable_rbac_authorization - computed: false, optional: true, required: false
  private _enableRbacAuthorization?: boolean | cdktf.IResolvable | undefined; 
  public get enableRbacAuthorization() {
    return this.getBooleanAttribute('enable_rbac_authorization') as any;
  }
  public set enableRbacAuthorization(value: boolean | cdktf.IResolvable | undefined) {
    this._enableRbacAuthorization = value;
  }
  public resetEnableRbacAuthorization() {
    this._enableRbacAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRbacAuthorizationInput() {
    return this._enableRbacAuthorization
  }

  // enabled_for_deployment - computed: false, optional: true, required: false
  private _enabledForDeployment?: boolean | cdktf.IResolvable | undefined; 
  public get enabledForDeployment() {
    return this.getBooleanAttribute('enabled_for_deployment') as any;
  }
  public set enabledForDeployment(value: boolean | cdktf.IResolvable | undefined) {
    this._enabledForDeployment = value;
  }
  public resetEnabledForDeployment() {
    this._enabledForDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledForDeploymentInput() {
    return this._enabledForDeployment
  }

  // enabled_for_disk_encryption - computed: false, optional: true, required: false
  private _enabledForDiskEncryption?: boolean | cdktf.IResolvable | undefined; 
  public get enabledForDiskEncryption() {
    return this.getBooleanAttribute('enabled_for_disk_encryption') as any;
  }
  public set enabledForDiskEncryption(value: boolean | cdktf.IResolvable | undefined) {
    this._enabledForDiskEncryption = value;
  }
  public resetEnabledForDiskEncryption() {
    this._enabledForDiskEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledForDiskEncryptionInput() {
    return this._enabledForDiskEncryption
  }

  // enabled_for_template_deployment - computed: false, optional: true, required: false
  private _enabledForTemplateDeployment?: boolean | cdktf.IResolvable | undefined; 
  public get enabledForTemplateDeployment() {
    return this.getBooleanAttribute('enabled_for_template_deployment') as any;
  }
  public set enabledForTemplateDeployment(value: boolean | cdktf.IResolvable | undefined) {
    this._enabledForTemplateDeployment = value;
  }
  public resetEnabledForTemplateDeployment() {
    this._enabledForTemplateDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledForTemplateDeploymentInput() {
    return this._enabledForTemplateDeployment
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
    return this._location
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
    return this._name
  }

  // purge_protection_enabled - computed: false, optional: true, required: false
  private _purgeProtectionEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get purgeProtectionEnabled() {
    return this.getBooleanAttribute('purge_protection_enabled') as any;
  }
  public set purgeProtectionEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._purgeProtectionEnabled = value;
  }
  public resetPurgeProtectionEnabled() {
    this._purgeProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeProtectionEnabledInput() {
    return this._purgeProtectionEnabled
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
    return this._resourceGroupName
  }

  // sku_name - computed: false, optional: false, required: true
  private _skuName?: string; 
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName
  }

  // soft_delete_enabled - computed: true, optional: true, required: false
  private _softDeleteEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get softDeleteEnabled() {
    return this.getBooleanAttribute('soft_delete_enabled') as any;
  }
  public set softDeleteEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._softDeleteEnabled = value;
  }
  public resetSoftDeleteEnabled() {
    this._softDeleteEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softDeleteEnabledInput() {
    return this._softDeleteEnabled
  }

  // soft_delete_retention_days - computed: false, optional: true, required: false
  private _softDeleteRetentionDays?: number | undefined; 
  public get softDeleteRetentionDays() {
    return this.getNumberAttribute('soft_delete_retention_days');
  }
  public set softDeleteRetentionDays(value: number | undefined) {
    this._softDeleteRetentionDays = value;
  }
  public resetSoftDeleteRetentionDays() {
    this._softDeleteRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softDeleteRetentionDaysInput() {
    return this._softDeleteRetentionDays
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId
  }

  // vault_uri - computed: true, optional: false, required: false
  public get vaultUri() {
    return this.getStringAttribute('vault_uri');
  }

  // contact - computed: false, optional: true, required: false
  private _contact?: KeyVaultContact[] | undefined; 
  public get contact() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('contact') as any;
  }
  public set contact(value: KeyVaultContact[] | undefined) {
    this._contact = value;
  }
  public resetContact() {
    this._contact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactInput() {
    return this._contact
  }

  // network_acls - computed: false, optional: true, required: false
  private _networkAcls?: KeyVaultNetworkAcls | undefined; 
  private __networkAclsOutput = new KeyVaultNetworkAclsOutputReference(this as any, "network_acls", true);
  public get networkAcls() {
    return this.__networkAclsOutput;
  }
  public putNetworkAcls(value: KeyVaultNetworkAcls | undefined) {
    this._networkAcls = value;
  }
  public resetNetworkAcls() {
    this._networkAcls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAclsInput() {
    return this._networkAcls
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KeyVaultTimeouts | undefined; 
  private __timeoutsOutput = new KeyVaultTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: KeyVaultTimeouts | undefined) {
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
      access_policy: cdktf.listMapper(keyVaultAccessPolicyToTerraform)(this._accessPolicy),
      enable_rbac_authorization: cdktf.booleanToTerraform(this._enableRbacAuthorization),
      enabled_for_deployment: cdktf.booleanToTerraform(this._enabledForDeployment),
      enabled_for_disk_encryption: cdktf.booleanToTerraform(this._enabledForDiskEncryption),
      enabled_for_template_deployment: cdktf.booleanToTerraform(this._enabledForTemplateDeployment),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      purge_protection_enabled: cdktf.booleanToTerraform(this._purgeProtectionEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku_name: cdktf.stringToTerraform(this._skuName),
      soft_delete_enabled: cdktf.booleanToTerraform(this._softDeleteEnabled),
      soft_delete_retention_days: cdktf.numberToTerraform(this._softDeleteRetentionDays),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      contact: cdktf.listMapper(keyVaultContactToTerraform)(this._contact),
      network_acls: keyVaultNetworkAclsToTerraform(this._networkAcls),
      timeouts: keyVaultTimeoutsToTerraform(this._timeouts),
    };
  }
}
