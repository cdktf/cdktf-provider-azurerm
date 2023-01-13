// https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicebusNamespaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace#capacity ServicebusNamespace#capacity}
  */
  readonly capacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace#id ServicebusNamespace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace#local_auth_enabled ServicebusNamespace#local_auth_enabled}
  */
  readonly localAuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace#location ServicebusNamespace#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace#minimum_tls_version ServicebusNamespace#minimum_tls_version}
  */
  readonly minimumTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace#name ServicebusNamespace#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace#public_network_access_enabled ServicebusNamespace#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace#resource_group_name ServicebusNamespace#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace#sku ServicebusNamespace#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace#tags ServicebusNamespace#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace#zone_redundant ServicebusNamespace#zone_redundant}
  */
  readonly zoneRedundant?: boolean | cdktf.IResolvable;
  /**
  * customer_managed_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace#customer_managed_key ServicebusNamespace#customer_managed_key}
  */
  readonly customerManagedKey?: ServicebusNamespaceCustomerManagedKey;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace#identity ServicebusNamespace#identity}
  */
  readonly identity?: ServicebusNamespaceIdentity;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace#timeouts ServicebusNamespace#timeouts}
  */
  readonly timeouts?: ServicebusNamespaceTimeouts;
}
export interface ServicebusNamespaceCustomerManagedKey {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace#identity_id ServicebusNamespace#identity_id}
  */
  readonly identityId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace#infrastructure_encryption_enabled ServicebusNamespace#infrastructure_encryption_enabled}
  */
  readonly infrastructureEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace#key_vault_key_id ServicebusNamespace#key_vault_key_id}
  */
  readonly keyVaultKeyId: string;
}

export function servicebusNamespaceCustomerManagedKeyToTerraform(struct?: ServicebusNamespaceCustomerManagedKeyOutputReference | ServicebusNamespaceCustomerManagedKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_id: cdktf.stringToTerraform(struct!.identityId),
    infrastructure_encryption_enabled: cdktf.booleanToTerraform(struct!.infrastructureEncryptionEnabled),
    key_vault_key_id: cdktf.stringToTerraform(struct!.keyVaultKeyId),
  }
}

export class ServicebusNamespaceCustomerManagedKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicebusNamespaceCustomerManagedKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityId = this._identityId;
    }
    if (this._infrastructureEncryptionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructureEncryptionEnabled = this._infrastructureEncryptionEnabled;
    }
    if (this._keyVaultKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultKeyId = this._keyVaultKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicebusNamespaceCustomerManagedKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identityId = undefined;
      this._infrastructureEncryptionEnabled = undefined;
      this._keyVaultKeyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identityId = value.identityId;
      this._infrastructureEncryptionEnabled = value.infrastructureEncryptionEnabled;
      this._keyVaultKeyId = value.keyVaultKeyId;
    }
  }

  // identity_id - computed: false, optional: false, required: true
  private _identityId?: string; 
  public get identityId() {
    return this.getStringAttribute('identity_id');
  }
  public set identityId(value: string) {
    this._identityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdInput() {
    return this._identityId;
  }

  // infrastructure_encryption_enabled - computed: false, optional: true, required: false
  private _infrastructureEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get infrastructureEncryptionEnabled() {
    return this.getBooleanAttribute('infrastructure_encryption_enabled');
  }
  public set infrastructureEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._infrastructureEncryptionEnabled = value;
  }
  public resetInfrastructureEncryptionEnabled() {
    this._infrastructureEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureEncryptionEnabledInput() {
    return this._infrastructureEncryptionEnabled;
  }

  // key_vault_key_id - computed: false, optional: false, required: true
  private _keyVaultKeyId?: string; 
  public get keyVaultKeyId() {
    return this.getStringAttribute('key_vault_key_id');
  }
  public set keyVaultKeyId(value: string) {
    this._keyVaultKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultKeyIdInput() {
    return this._keyVaultKeyId;
  }
}
export interface ServicebusNamespaceIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace#identity_ids ServicebusNamespace#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace#type ServicebusNamespace#type}
  */
  readonly type: string;
}

export function servicebusNamespaceIdentityToTerraform(struct?: ServicebusNamespaceIdentityOutputReference | ServicebusNamespaceIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ServicebusNamespaceIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicebusNamespaceIdentity | undefined {
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

  public set internalValue(value: ServicebusNamespaceIdentity | undefined) {
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
export interface ServicebusNamespaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace#create ServicebusNamespace#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace#delete ServicebusNamespace#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace#read ServicebusNamespace#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace#update ServicebusNamespace#update}
  */
  readonly update?: string;
}

export function servicebusNamespaceTimeoutsToTerraform(struct?: ServicebusNamespaceTimeoutsOutputReference | ServicebusNamespaceTimeouts | cdktf.IResolvable): any {
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

export class ServicebusNamespaceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicebusNamespaceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServicebusNamespaceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace azurerm_servicebus_namespace}
*/
export class ServicebusNamespace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_servicebus_namespace";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace azurerm_servicebus_namespace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicebusNamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: ServicebusNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_servicebus_namespace',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.39.0',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._capacity = config.capacity;
    this._id = config.id;
    this._localAuthEnabled = config.localAuthEnabled;
    this._location = config.location;
    this._minimumTlsVersion = config.minimumTlsVersion;
    this._name = config.name;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._tags = config.tags;
    this._zoneRedundant = config.zoneRedundant;
    this._customerManagedKey.internalValue = config.customerManagedKey;
    this._identity.internalValue = config.identity;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity - computed: false, optional: true, required: false
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // default_primary_connection_string - computed: true, optional: false, required: false
  public get defaultPrimaryConnectionString() {
    return this.getStringAttribute('default_primary_connection_string');
  }

  // default_primary_key - computed: true, optional: false, required: false
  public get defaultPrimaryKey() {
    return this.getStringAttribute('default_primary_key');
  }

  // default_secondary_connection_string - computed: true, optional: false, required: false
  public get defaultSecondaryConnectionString() {
    return this.getStringAttribute('default_secondary_connection_string');
  }

  // default_secondary_key - computed: true, optional: false, required: false
  public get defaultSecondaryKey() {
    return this.getStringAttribute('default_secondary_key');
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

  // local_auth_enabled - computed: false, optional: true, required: false
  private _localAuthEnabled?: boolean | cdktf.IResolvable; 
  public get localAuthEnabled() {
    return this.getBooleanAttribute('local_auth_enabled');
  }
  public set localAuthEnabled(value: boolean | cdktf.IResolvable) {
    this._localAuthEnabled = value;
  }
  public resetLocalAuthEnabled() {
    this._localAuthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAuthEnabledInput() {
    return this._localAuthEnabled;
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

  // minimum_tls_version - computed: true, optional: true, required: false
  private _minimumTlsVersion?: string; 
  public get minimumTlsVersion() {
    return this.getStringAttribute('minimum_tls_version');
  }
  public set minimumTlsVersion(value: string) {
    this._minimumTlsVersion = value;
  }
  public resetMinimumTlsVersion() {
    this._minimumTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumTlsVersionInput() {
    return this._minimumTlsVersion;
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

  // sku - computed: false, optional: false, required: true
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
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

  // zone_redundant - computed: false, optional: true, required: false
  private _zoneRedundant?: boolean | cdktf.IResolvable; 
  public get zoneRedundant() {
    return this.getBooleanAttribute('zone_redundant');
  }
  public set zoneRedundant(value: boolean | cdktf.IResolvable) {
    this._zoneRedundant = value;
  }
  public resetZoneRedundant() {
    this._zoneRedundant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneRedundantInput() {
    return this._zoneRedundant;
  }

  // customer_managed_key - computed: false, optional: true, required: false
  private _customerManagedKey = new ServicebusNamespaceCustomerManagedKeyOutputReference(this, "customer_managed_key");
  public get customerManagedKey() {
    return this._customerManagedKey;
  }
  public putCustomerManagedKey(value: ServicebusNamespaceCustomerManagedKey) {
    this._customerManagedKey.internalValue = value;
  }
  public resetCustomerManagedKey() {
    this._customerManagedKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedKeyInput() {
    return this._customerManagedKey.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new ServicebusNamespaceIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: ServicebusNamespaceIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServicebusNamespaceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServicebusNamespaceTimeouts) {
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
      capacity: cdktf.numberToTerraform(this._capacity),
      id: cdktf.stringToTerraform(this._id),
      local_auth_enabled: cdktf.booleanToTerraform(this._localAuthEnabled),
      location: cdktf.stringToTerraform(this._location),
      minimum_tls_version: cdktf.stringToTerraform(this._minimumTlsVersion),
      name: cdktf.stringToTerraform(this._name),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku: cdktf.stringToTerraform(this._sku),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      zone_redundant: cdktf.booleanToTerraform(this._zoneRedundant),
      customer_managed_key: servicebusNamespaceCustomerManagedKeyToTerraform(this._customerManagedKey.internalValue),
      identity: servicebusNamespaceIdentityToTerraform(this._identity.internalValue),
      timeouts: servicebusNamespaceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
