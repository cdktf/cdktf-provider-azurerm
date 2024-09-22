// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermStorageAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account#id DataAzurermStorageAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account#min_tls_version DataAzurermStorageAccount#min_tls_version}
  */
  readonly minTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account#name DataAzurermStorageAccount#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account#resource_group_name DataAzurermStorageAccount#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account#timeouts DataAzurermStorageAccount#timeouts}
  */
  readonly timeouts?: DataAzurermStorageAccountTimeouts;
}
export interface DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectory {
}

export function dataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryToTerraform(struct?: DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryToHclTerraform(struct?: DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_guid - computed: true, optional: false, required: false
  public get domainGuid() {
    return this.getStringAttribute('domain_guid');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // domain_sid - computed: true, optional: false, required: false
  public get domainSid() {
    return this.getStringAttribute('domain_sid');
  }

  // forest_name - computed: true, optional: false, required: false
  public get forestName() {
    return this.getStringAttribute('forest_name');
  }

  // netbios_domain_name - computed: true, optional: false, required: false
  public get netbiosDomainName() {
    return this.getStringAttribute('netbios_domain_name');
  }

  // storage_sid - computed: true, optional: false, required: false
  public get storageSid() {
    return this.getStringAttribute('storage_sid');
  }
}

export class DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference {
    return new DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermStorageAccountAzureFilesAuthentication {
}

export function dataAzurermStorageAccountAzureFilesAuthenticationToTerraform(struct?: DataAzurermStorageAccountAzureFilesAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermStorageAccountAzureFilesAuthenticationToHclTerraform(struct?: DataAzurermStorageAccountAzureFilesAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermStorageAccountAzureFilesAuthenticationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermStorageAccountAzureFilesAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermStorageAccountAzureFilesAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_directory - computed: true, optional: false, required: false
  private _activeDirectory = new DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList(this, "active_directory", false);
  public get activeDirectory() {
    return this._activeDirectory;
  }

  // default_share_level_permission - computed: true, optional: false, required: false
  public get defaultShareLevelPermission() {
    return this.getStringAttribute('default_share_level_permission');
  }

  // directory_type - computed: true, optional: false, required: false
  public get directoryType() {
    return this.getStringAttribute('directory_type');
  }
}

export class DataAzurermStorageAccountAzureFilesAuthenticationList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermStorageAccountAzureFilesAuthenticationOutputReference {
    return new DataAzurermStorageAccountAzureFilesAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermStorageAccountCustomDomain {
}

export function dataAzurermStorageAccountCustomDomainToTerraform(struct?: DataAzurermStorageAccountCustomDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermStorageAccountCustomDomainToHclTerraform(struct?: DataAzurermStorageAccountCustomDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermStorageAccountCustomDomainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermStorageAccountCustomDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermStorageAccountCustomDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAzurermStorageAccountCustomDomainList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermStorageAccountCustomDomainOutputReference {
    return new DataAzurermStorageAccountCustomDomainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermStorageAccountIdentity {
}

export function dataAzurermStorageAccountIdentityToTerraform(struct?: DataAzurermStorageAccountIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermStorageAccountIdentityToHclTerraform(struct?: DataAzurermStorageAccountIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermStorageAccountIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermStorageAccountIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermStorageAccountIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // identity_ids - computed: true, optional: false, required: false
  public get identityIds() {
    return this.getListAttribute('identity_ids');
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAzurermStorageAccountIdentityList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermStorageAccountIdentityOutputReference {
    return new DataAzurermStorageAccountIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermStorageAccountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account#read DataAzurermStorageAccount#read}
  */
  readonly read?: string;
}

export function dataAzurermStorageAccountTimeoutsToTerraform(struct?: DataAzurermStorageAccountTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzurermStorageAccountTimeoutsToHclTerraform(struct?: DataAzurermStorageAccountTimeouts | cdktf.IResolvable): any {
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

export class DataAzurermStorageAccountTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermStorageAccountTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataAzurermStorageAccountTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account azurerm_storage_account}
*/
export class DataAzurermStorageAccount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_storage_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzurermStorageAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermStorageAccount to import
  * @param importFromId The id of the existing DataAzurermStorageAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermStorageAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_storage_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/storage_account azurerm_storage_account} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermStorageAccountConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermStorageAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_account',
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
    this._minTlsVersion = config.minTlsVersion;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_tier - computed: true, optional: false, required: false
  public get accessTier() {
    return this.getStringAttribute('access_tier');
  }

  // account_kind - computed: true, optional: false, required: false
  public get accountKind() {
    return this.getStringAttribute('account_kind');
  }

  // account_replication_type - computed: true, optional: false, required: false
  public get accountReplicationType() {
    return this.getStringAttribute('account_replication_type');
  }

  // account_tier - computed: true, optional: false, required: false
  public get accountTier() {
    return this.getStringAttribute('account_tier');
  }

  // allow_nested_items_to_be_public - computed: true, optional: false, required: false
  public get allowNestedItemsToBePublic() {
    return this.getBooleanAttribute('allow_nested_items_to_be_public');
  }

  // azure_files_authentication - computed: true, optional: false, required: false
  private _azureFilesAuthentication = new DataAzurermStorageAccountAzureFilesAuthenticationList(this, "azure_files_authentication", false);
  public get azureFilesAuthentication() {
    return this._azureFilesAuthentication;
  }

  // custom_domain - computed: true, optional: false, required: false
  private _customDomain = new DataAzurermStorageAccountCustomDomainList(this, "custom_domain", false);
  public get customDomain() {
    return this._customDomain;
  }

  // dns_endpoint_type - computed: true, optional: false, required: false
  public get dnsEndpointType() {
    return this.getStringAttribute('dns_endpoint_type');
  }

  // https_traffic_only_enabled - computed: true, optional: false, required: false
  public get httpsTrafficOnlyEnabled() {
    return this.getBooleanAttribute('https_traffic_only_enabled');
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

  // identity - computed: true, optional: false, required: false
  private _identity = new DataAzurermStorageAccountIdentityList(this, "identity", false);
  public get identity() {
    return this._identity;
  }

  // infrastructure_encryption_enabled - computed: true, optional: false, required: false
  public get infrastructureEncryptionEnabled() {
    return this.getBooleanAttribute('infrastructure_encryption_enabled');
  }

  // is_hns_enabled - computed: true, optional: false, required: false
  public get isHnsEnabled() {
    return this.getBooleanAttribute('is_hns_enabled');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // min_tls_version - computed: false, optional: true, required: false
  private _minTlsVersion?: string; 
  public get minTlsVersion() {
    return this.getStringAttribute('min_tls_version');
  }
  public set minTlsVersion(value: string) {
    this._minTlsVersion = value;
  }
  public resetMinTlsVersion() {
    this._minTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTlsVersionInput() {
    return this._minTlsVersion;
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

  // nfsv3_enabled - computed: true, optional: false, required: false
  public get nfsv3Enabled() {
    return this.getBooleanAttribute('nfsv3_enabled');
  }

  // primary_access_key - computed: true, optional: false, required: false
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
  }

  // primary_blob_connection_string - computed: true, optional: false, required: false
  public get primaryBlobConnectionString() {
    return this.getStringAttribute('primary_blob_connection_string');
  }

  // primary_blob_endpoint - computed: true, optional: false, required: false
  public get primaryBlobEndpoint() {
    return this.getStringAttribute('primary_blob_endpoint');
  }

  // primary_blob_host - computed: true, optional: false, required: false
  public get primaryBlobHost() {
    return this.getStringAttribute('primary_blob_host');
  }

  // primary_blob_internet_endpoint - computed: true, optional: false, required: false
  public get primaryBlobInternetEndpoint() {
    return this.getStringAttribute('primary_blob_internet_endpoint');
  }

  // primary_blob_internet_host - computed: true, optional: false, required: false
  public get primaryBlobInternetHost() {
    return this.getStringAttribute('primary_blob_internet_host');
  }

  // primary_blob_microsoft_endpoint - computed: true, optional: false, required: false
  public get primaryBlobMicrosoftEndpoint() {
    return this.getStringAttribute('primary_blob_microsoft_endpoint');
  }

  // primary_blob_microsoft_host - computed: true, optional: false, required: false
  public get primaryBlobMicrosoftHost() {
    return this.getStringAttribute('primary_blob_microsoft_host');
  }

  // primary_connection_string - computed: true, optional: false, required: false
  public get primaryConnectionString() {
    return this.getStringAttribute('primary_connection_string');
  }

  // primary_dfs_endpoint - computed: true, optional: false, required: false
  public get primaryDfsEndpoint() {
    return this.getStringAttribute('primary_dfs_endpoint');
  }

  // primary_dfs_host - computed: true, optional: false, required: false
  public get primaryDfsHost() {
    return this.getStringAttribute('primary_dfs_host');
  }

  // primary_dfs_internet_endpoint - computed: true, optional: false, required: false
  public get primaryDfsInternetEndpoint() {
    return this.getStringAttribute('primary_dfs_internet_endpoint');
  }

  // primary_dfs_internet_host - computed: true, optional: false, required: false
  public get primaryDfsInternetHost() {
    return this.getStringAttribute('primary_dfs_internet_host');
  }

  // primary_dfs_microsoft_endpoint - computed: true, optional: false, required: false
  public get primaryDfsMicrosoftEndpoint() {
    return this.getStringAttribute('primary_dfs_microsoft_endpoint');
  }

  // primary_dfs_microsoft_host - computed: true, optional: false, required: false
  public get primaryDfsMicrosoftHost() {
    return this.getStringAttribute('primary_dfs_microsoft_host');
  }

  // primary_file_endpoint - computed: true, optional: false, required: false
  public get primaryFileEndpoint() {
    return this.getStringAttribute('primary_file_endpoint');
  }

  // primary_file_host - computed: true, optional: false, required: false
  public get primaryFileHost() {
    return this.getStringAttribute('primary_file_host');
  }

  // primary_file_internet_endpoint - computed: true, optional: false, required: false
  public get primaryFileInternetEndpoint() {
    return this.getStringAttribute('primary_file_internet_endpoint');
  }

  // primary_file_internet_host - computed: true, optional: false, required: false
  public get primaryFileInternetHost() {
    return this.getStringAttribute('primary_file_internet_host');
  }

  // primary_file_microsoft_endpoint - computed: true, optional: false, required: false
  public get primaryFileMicrosoftEndpoint() {
    return this.getStringAttribute('primary_file_microsoft_endpoint');
  }

  // primary_file_microsoft_host - computed: true, optional: false, required: false
  public get primaryFileMicrosoftHost() {
    return this.getStringAttribute('primary_file_microsoft_host');
  }

  // primary_location - computed: true, optional: false, required: false
  public get primaryLocation() {
    return this.getStringAttribute('primary_location');
  }

  // primary_queue_endpoint - computed: true, optional: false, required: false
  public get primaryQueueEndpoint() {
    return this.getStringAttribute('primary_queue_endpoint');
  }

  // primary_queue_host - computed: true, optional: false, required: false
  public get primaryQueueHost() {
    return this.getStringAttribute('primary_queue_host');
  }

  // primary_queue_microsoft_endpoint - computed: true, optional: false, required: false
  public get primaryQueueMicrosoftEndpoint() {
    return this.getStringAttribute('primary_queue_microsoft_endpoint');
  }

  // primary_queue_microsoft_host - computed: true, optional: false, required: false
  public get primaryQueueMicrosoftHost() {
    return this.getStringAttribute('primary_queue_microsoft_host');
  }

  // primary_table_endpoint - computed: true, optional: false, required: false
  public get primaryTableEndpoint() {
    return this.getStringAttribute('primary_table_endpoint');
  }

  // primary_table_host - computed: true, optional: false, required: false
  public get primaryTableHost() {
    return this.getStringAttribute('primary_table_host');
  }

  // primary_table_microsoft_endpoint - computed: true, optional: false, required: false
  public get primaryTableMicrosoftEndpoint() {
    return this.getStringAttribute('primary_table_microsoft_endpoint');
  }

  // primary_table_microsoft_host - computed: true, optional: false, required: false
  public get primaryTableMicrosoftHost() {
    return this.getStringAttribute('primary_table_microsoft_host');
  }

  // primary_web_endpoint - computed: true, optional: false, required: false
  public get primaryWebEndpoint() {
    return this.getStringAttribute('primary_web_endpoint');
  }

  // primary_web_host - computed: true, optional: false, required: false
  public get primaryWebHost() {
    return this.getStringAttribute('primary_web_host');
  }

  // primary_web_internet_endpoint - computed: true, optional: false, required: false
  public get primaryWebInternetEndpoint() {
    return this.getStringAttribute('primary_web_internet_endpoint');
  }

  // primary_web_internet_host - computed: true, optional: false, required: false
  public get primaryWebInternetHost() {
    return this.getStringAttribute('primary_web_internet_host');
  }

  // primary_web_microsoft_endpoint - computed: true, optional: false, required: false
  public get primaryWebMicrosoftEndpoint() {
    return this.getStringAttribute('primary_web_microsoft_endpoint');
  }

  // primary_web_microsoft_host - computed: true, optional: false, required: false
  public get primaryWebMicrosoftHost() {
    return this.getStringAttribute('primary_web_microsoft_host');
  }

  // queue_encryption_key_type - computed: true, optional: false, required: false
  public get queueEncryptionKeyType() {
    return this.getStringAttribute('queue_encryption_key_type');
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

  // secondary_access_key - computed: true, optional: false, required: false
  public get secondaryAccessKey() {
    return this.getStringAttribute('secondary_access_key');
  }

  // secondary_blob_connection_string - computed: true, optional: false, required: false
  public get secondaryBlobConnectionString() {
    return this.getStringAttribute('secondary_blob_connection_string');
  }

  // secondary_blob_endpoint - computed: true, optional: false, required: false
  public get secondaryBlobEndpoint() {
    return this.getStringAttribute('secondary_blob_endpoint');
  }

  // secondary_blob_host - computed: true, optional: false, required: false
  public get secondaryBlobHost() {
    return this.getStringAttribute('secondary_blob_host');
  }

  // secondary_blob_internet_endpoint - computed: true, optional: false, required: false
  public get secondaryBlobInternetEndpoint() {
    return this.getStringAttribute('secondary_blob_internet_endpoint');
  }

  // secondary_blob_internet_host - computed: true, optional: false, required: false
  public get secondaryBlobInternetHost() {
    return this.getStringAttribute('secondary_blob_internet_host');
  }

  // secondary_blob_microsoft_endpoint - computed: true, optional: false, required: false
  public get secondaryBlobMicrosoftEndpoint() {
    return this.getStringAttribute('secondary_blob_microsoft_endpoint');
  }

  // secondary_blob_microsoft_host - computed: true, optional: false, required: false
  public get secondaryBlobMicrosoftHost() {
    return this.getStringAttribute('secondary_blob_microsoft_host');
  }

  // secondary_connection_string - computed: true, optional: false, required: false
  public get secondaryConnectionString() {
    return this.getStringAttribute('secondary_connection_string');
  }

  // secondary_dfs_endpoint - computed: true, optional: false, required: false
  public get secondaryDfsEndpoint() {
    return this.getStringAttribute('secondary_dfs_endpoint');
  }

  // secondary_dfs_host - computed: true, optional: false, required: false
  public get secondaryDfsHost() {
    return this.getStringAttribute('secondary_dfs_host');
  }

  // secondary_dfs_internet_endpoint - computed: true, optional: false, required: false
  public get secondaryDfsInternetEndpoint() {
    return this.getStringAttribute('secondary_dfs_internet_endpoint');
  }

  // secondary_dfs_internet_host - computed: true, optional: false, required: false
  public get secondaryDfsInternetHost() {
    return this.getStringAttribute('secondary_dfs_internet_host');
  }

  // secondary_dfs_microsoft_endpoint - computed: true, optional: false, required: false
  public get secondaryDfsMicrosoftEndpoint() {
    return this.getStringAttribute('secondary_dfs_microsoft_endpoint');
  }

  // secondary_dfs_microsoft_host - computed: true, optional: false, required: false
  public get secondaryDfsMicrosoftHost() {
    return this.getStringAttribute('secondary_dfs_microsoft_host');
  }

  // secondary_file_endpoint - computed: true, optional: false, required: false
  public get secondaryFileEndpoint() {
    return this.getStringAttribute('secondary_file_endpoint');
  }

  // secondary_file_host - computed: true, optional: false, required: false
  public get secondaryFileHost() {
    return this.getStringAttribute('secondary_file_host');
  }

  // secondary_file_internet_endpoint - computed: true, optional: false, required: false
  public get secondaryFileInternetEndpoint() {
    return this.getStringAttribute('secondary_file_internet_endpoint');
  }

  // secondary_file_internet_host - computed: true, optional: false, required: false
  public get secondaryFileInternetHost() {
    return this.getStringAttribute('secondary_file_internet_host');
  }

  // secondary_file_microsoft_endpoint - computed: true, optional: false, required: false
  public get secondaryFileMicrosoftEndpoint() {
    return this.getStringAttribute('secondary_file_microsoft_endpoint');
  }

  // secondary_file_microsoft_host - computed: true, optional: false, required: false
  public get secondaryFileMicrosoftHost() {
    return this.getStringAttribute('secondary_file_microsoft_host');
  }

  // secondary_location - computed: true, optional: false, required: false
  public get secondaryLocation() {
    return this.getStringAttribute('secondary_location');
  }

  // secondary_queue_endpoint - computed: true, optional: false, required: false
  public get secondaryQueueEndpoint() {
    return this.getStringAttribute('secondary_queue_endpoint');
  }

  // secondary_queue_host - computed: true, optional: false, required: false
  public get secondaryQueueHost() {
    return this.getStringAttribute('secondary_queue_host');
  }

  // secondary_queue_microsoft_endpoint - computed: true, optional: false, required: false
  public get secondaryQueueMicrosoftEndpoint() {
    return this.getStringAttribute('secondary_queue_microsoft_endpoint');
  }

  // secondary_queue_microsoft_host - computed: true, optional: false, required: false
  public get secondaryQueueMicrosoftHost() {
    return this.getStringAttribute('secondary_queue_microsoft_host');
  }

  // secondary_table_endpoint - computed: true, optional: false, required: false
  public get secondaryTableEndpoint() {
    return this.getStringAttribute('secondary_table_endpoint');
  }

  // secondary_table_host - computed: true, optional: false, required: false
  public get secondaryTableHost() {
    return this.getStringAttribute('secondary_table_host');
  }

  // secondary_table_microsoft_endpoint - computed: true, optional: false, required: false
  public get secondaryTableMicrosoftEndpoint() {
    return this.getStringAttribute('secondary_table_microsoft_endpoint');
  }

  // secondary_table_microsoft_host - computed: true, optional: false, required: false
  public get secondaryTableMicrosoftHost() {
    return this.getStringAttribute('secondary_table_microsoft_host');
  }

  // secondary_web_endpoint - computed: true, optional: false, required: false
  public get secondaryWebEndpoint() {
    return this.getStringAttribute('secondary_web_endpoint');
  }

  // secondary_web_host - computed: true, optional: false, required: false
  public get secondaryWebHost() {
    return this.getStringAttribute('secondary_web_host');
  }

  // secondary_web_internet_endpoint - computed: true, optional: false, required: false
  public get secondaryWebInternetEndpoint() {
    return this.getStringAttribute('secondary_web_internet_endpoint');
  }

  // secondary_web_internet_host - computed: true, optional: false, required: false
  public get secondaryWebInternetHost() {
    return this.getStringAttribute('secondary_web_internet_host');
  }

  // secondary_web_microsoft_endpoint - computed: true, optional: false, required: false
  public get secondaryWebMicrosoftEndpoint() {
    return this.getStringAttribute('secondary_web_microsoft_endpoint');
  }

  // secondary_web_microsoft_host - computed: true, optional: false, required: false
  public get secondaryWebMicrosoftHost() {
    return this.getStringAttribute('secondary_web_microsoft_host');
  }

  // table_encryption_key_type - computed: true, optional: false, required: false
  public get tableEncryptionKeyType() {
    return this.getStringAttribute('table_encryption_key_type');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermStorageAccountTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermStorageAccountTimeouts) {
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
      min_tls_version: cdktf.stringToTerraform(this._minTlsVersion),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermStorageAccountTimeoutsToTerraform(this._timeouts.internalValue),
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
      min_tls_version: {
        value: cdktf.stringToHclTerraform(this._minTlsVersion),
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
        value: dataAzurermStorageAccountTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermStorageAccountTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
