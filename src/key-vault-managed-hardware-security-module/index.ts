// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyVaultManagedHardwareSecurityModuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module#admin_object_ids KeyVaultManagedHardwareSecurityModule#admin_object_ids}
  */
  readonly adminObjectIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module#id KeyVaultManagedHardwareSecurityModule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module#location KeyVaultManagedHardwareSecurityModule#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module#name KeyVaultManagedHardwareSecurityModule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module#public_network_access_enabled KeyVaultManagedHardwareSecurityModule#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module#purge_protection_enabled KeyVaultManagedHardwareSecurityModule#purge_protection_enabled}
  */
  readonly purgeProtectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module#resource_group_name KeyVaultManagedHardwareSecurityModule#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module#security_domain_key_vault_certificate_ids KeyVaultManagedHardwareSecurityModule#security_domain_key_vault_certificate_ids}
  */
  readonly securityDomainKeyVaultCertificateIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module#security_domain_quorum KeyVaultManagedHardwareSecurityModule#security_domain_quorum}
  */
  readonly securityDomainQuorum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module#sku_name KeyVaultManagedHardwareSecurityModule#sku_name}
  */
  readonly skuName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module#soft_delete_retention_days KeyVaultManagedHardwareSecurityModule#soft_delete_retention_days}
  */
  readonly softDeleteRetentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module#tags KeyVaultManagedHardwareSecurityModule#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module#tenant_id KeyVaultManagedHardwareSecurityModule#tenant_id}
  */
  readonly tenantId: string;
  /**
  * network_acls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module#network_acls KeyVaultManagedHardwareSecurityModule#network_acls}
  */
  readonly networkAcls?: KeyVaultManagedHardwareSecurityModuleNetworkAcls;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module#timeouts KeyVaultManagedHardwareSecurityModule#timeouts}
  */
  readonly timeouts?: KeyVaultManagedHardwareSecurityModuleTimeouts;
}
export interface KeyVaultManagedHardwareSecurityModuleNetworkAcls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module#bypass KeyVaultManagedHardwareSecurityModule#bypass}
  */
  readonly bypass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module#default_action KeyVaultManagedHardwareSecurityModule#default_action}
  */
  readonly defaultAction: string;
}

export function keyVaultManagedHardwareSecurityModuleNetworkAclsToTerraform(struct?: KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference | KeyVaultManagedHardwareSecurityModuleNetworkAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass: cdktf.stringToTerraform(struct!.bypass),
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
  }
}


export function keyVaultManagedHardwareSecurityModuleNetworkAclsToHclTerraform(struct?: KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference | KeyVaultManagedHardwareSecurityModuleNetworkAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass: {
      value: cdktf.stringToHclTerraform(struct!.bypass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_action: {
      value: cdktf.stringToHclTerraform(struct!.defaultAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KeyVaultManagedHardwareSecurityModuleNetworkAcls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypass = this._bypass;
    }
    if (this._defaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAction = this._defaultAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyVaultManagedHardwareSecurityModuleNetworkAcls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bypass = undefined;
      this._defaultAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bypass = value.bypass;
      this._defaultAction = value.defaultAction;
    }
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
    return this._bypass;
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
    return this._defaultAction;
  }
}
export interface KeyVaultManagedHardwareSecurityModuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module#create KeyVaultManagedHardwareSecurityModule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module#delete KeyVaultManagedHardwareSecurityModule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module#read KeyVaultManagedHardwareSecurityModule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module#update KeyVaultManagedHardwareSecurityModule#update}
  */
  readonly update?: string;
}

export function keyVaultManagedHardwareSecurityModuleTimeoutsToTerraform(struct?: KeyVaultManagedHardwareSecurityModuleTimeouts | cdktf.IResolvable): any {
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


export function keyVaultManagedHardwareSecurityModuleTimeoutsToHclTerraform(struct?: KeyVaultManagedHardwareSecurityModuleTimeouts | cdktf.IResolvable): any {
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

export class KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeyVaultManagedHardwareSecurityModuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KeyVaultManagedHardwareSecurityModuleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module azurerm_key_vault_managed_hardware_security_module}
*/
export class KeyVaultManagedHardwareSecurityModule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_key_vault_managed_hardware_security_module";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KeyVaultManagedHardwareSecurityModule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeyVaultManagedHardwareSecurityModule to import
  * @param importFromId The id of the existing KeyVaultManagedHardwareSecurityModule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeyVaultManagedHardwareSecurityModule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_key_vault_managed_hardware_security_module", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module azurerm_key_vault_managed_hardware_security_module} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeyVaultManagedHardwareSecurityModuleConfig
  */
  public constructor(scope: Construct, id: string, config: KeyVaultManagedHardwareSecurityModuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_key_vault_managed_hardware_security_module',
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
    this._adminObjectIds = config.adminObjectIds;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._purgeProtectionEnabled = config.purgeProtectionEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._securityDomainKeyVaultCertificateIds = config.securityDomainKeyVaultCertificateIds;
    this._securityDomainQuorum = config.securityDomainQuorum;
    this._skuName = config.skuName;
    this._softDeleteRetentionDays = config.softDeleteRetentionDays;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
    this._networkAcls.internalValue = config.networkAcls;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_object_ids - computed: false, optional: false, required: true
  private _adminObjectIds?: string[]; 
  public get adminObjectIds() {
    return cdktf.Fn.tolist(this.getListAttribute('admin_object_ids'));
  }
  public set adminObjectIds(value: string[]) {
    this._adminObjectIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminObjectIdsInput() {
    return this._adminObjectIds;
  }

  // hsm_uri - computed: true, optional: false, required: false
  public get hsmUri() {
    return this.getStringAttribute('hsm_uri');
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

  // public_network_access_enabled - computed: false, optional: true, required: false
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

  // purge_protection_enabled - computed: false, optional: true, required: false
  private _purgeProtectionEnabled?: boolean | cdktf.IResolvable; 
  public get purgeProtectionEnabled() {
    return this.getBooleanAttribute('purge_protection_enabled');
  }
  public set purgeProtectionEnabled(value: boolean | cdktf.IResolvable) {
    this._purgeProtectionEnabled = value;
  }
  public resetPurgeProtectionEnabled() {
    this._purgeProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeProtectionEnabledInput() {
    return this._purgeProtectionEnabled;
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

  // security_domain_encrypted_data - computed: true, optional: false, required: false
  public get securityDomainEncryptedData() {
    return this.getStringAttribute('security_domain_encrypted_data');
  }

  // security_domain_key_vault_certificate_ids - computed: false, optional: true, required: false
  private _securityDomainKeyVaultCertificateIds?: string[]; 
  public get securityDomainKeyVaultCertificateIds() {
    return this.getListAttribute('security_domain_key_vault_certificate_ids');
  }
  public set securityDomainKeyVaultCertificateIds(value: string[]) {
    this._securityDomainKeyVaultCertificateIds = value;
  }
  public resetSecurityDomainKeyVaultCertificateIds() {
    this._securityDomainKeyVaultCertificateIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityDomainKeyVaultCertificateIdsInput() {
    return this._securityDomainKeyVaultCertificateIds;
  }

  // security_domain_quorum - computed: false, optional: true, required: false
  private _securityDomainQuorum?: number; 
  public get securityDomainQuorum() {
    return this.getNumberAttribute('security_domain_quorum');
  }
  public set securityDomainQuorum(value: number) {
    this._securityDomainQuorum = value;
  }
  public resetSecurityDomainQuorum() {
    this._securityDomainQuorum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityDomainQuorumInput() {
    return this._securityDomainQuorum;
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
    return this._skuName;
  }

  // soft_delete_retention_days - computed: false, optional: true, required: false
  private _softDeleteRetentionDays?: number; 
  public get softDeleteRetentionDays() {
    return this.getNumberAttribute('soft_delete_retention_days');
  }
  public set softDeleteRetentionDays(value: number) {
    this._softDeleteRetentionDays = value;
  }
  public resetSoftDeleteRetentionDays() {
    this._softDeleteRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softDeleteRetentionDaysInput() {
    return this._softDeleteRetentionDays;
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
    return this._tenantId;
  }

  // network_acls - computed: false, optional: true, required: false
  private _networkAcls = new KeyVaultManagedHardwareSecurityModuleNetworkAclsOutputReference(this, "network_acls");
  public get networkAcls() {
    return this._networkAcls;
  }
  public putNetworkAcls(value: KeyVaultManagedHardwareSecurityModuleNetworkAcls) {
    this._networkAcls.internalValue = value;
  }
  public resetNetworkAcls() {
    this._networkAcls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAclsInput() {
    return this._networkAcls.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KeyVaultManagedHardwareSecurityModuleTimeouts) {
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
      admin_object_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._adminObjectIds),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      purge_protection_enabled: cdktf.booleanToTerraform(this._purgeProtectionEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      security_domain_key_vault_certificate_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityDomainKeyVaultCertificateIds),
      security_domain_quorum: cdktf.numberToTerraform(this._securityDomainQuorum),
      sku_name: cdktf.stringToTerraform(this._skuName),
      soft_delete_retention_days: cdktf.numberToTerraform(this._softDeleteRetentionDays),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      network_acls: keyVaultManagedHardwareSecurityModuleNetworkAclsToTerraform(this._networkAcls.internalValue),
      timeouts: keyVaultManagedHardwareSecurityModuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_object_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._adminObjectIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      public_network_access_enabled: {
        value: cdktf.booleanToHclTerraform(this._publicNetworkAccessEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      purge_protection_enabled: {
        value: cdktf.booleanToHclTerraform(this._purgeProtectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_domain_key_vault_certificate_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityDomainKeyVaultCertificateIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      security_domain_quorum: {
        value: cdktf.numberToHclTerraform(this._securityDomainQuorum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sku_name: {
        value: cdktf.stringToHclTerraform(this._skuName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      soft_delete_retention_days: {
        value: cdktf.numberToHclTerraform(this._softDeleteRetentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_acls: {
        value: keyVaultManagedHardwareSecurityModuleNetworkAclsToHclTerraform(this._networkAcls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KeyVaultManagedHardwareSecurityModuleNetworkAclsList",
      },
      timeouts: {
        value: keyVaultManagedHardwareSecurityModuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KeyVaultManagedHardwareSecurityModuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
