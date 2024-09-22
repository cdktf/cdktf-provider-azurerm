// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_linked_service_azure_blob_storage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryLinkedServiceAzureBlobStorageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_linked_service_azure_blob_storage#additional_properties DataFactoryLinkedServiceAzureBlobStorage#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_linked_service_azure_blob_storage#annotations DataFactoryLinkedServiceAzureBlobStorage#annotations}
  */
  readonly annotations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_linked_service_azure_blob_storage#connection_string DataFactoryLinkedServiceAzureBlobStorage#connection_string}
  */
  readonly connectionString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_linked_service_azure_blob_storage#connection_string_insecure DataFactoryLinkedServiceAzureBlobStorage#connection_string_insecure}
  */
  readonly connectionStringInsecure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_linked_service_azure_blob_storage#data_factory_id DataFactoryLinkedServiceAzureBlobStorage#data_factory_id}
  */
  readonly dataFactoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_linked_service_azure_blob_storage#description DataFactoryLinkedServiceAzureBlobStorage#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_linked_service_azure_blob_storage#id DataFactoryLinkedServiceAzureBlobStorage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_linked_service_azure_blob_storage#integration_runtime_name DataFactoryLinkedServiceAzureBlobStorage#integration_runtime_name}
  */
  readonly integrationRuntimeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_linked_service_azure_blob_storage#name DataFactoryLinkedServiceAzureBlobStorage#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_linked_service_azure_blob_storage#parameters DataFactoryLinkedServiceAzureBlobStorage#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_linked_service_azure_blob_storage#sas_uri DataFactoryLinkedServiceAzureBlobStorage#sas_uri}
  */
  readonly sasUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_linked_service_azure_blob_storage#service_endpoint DataFactoryLinkedServiceAzureBlobStorage#service_endpoint}
  */
  readonly serviceEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_linked_service_azure_blob_storage#service_principal_id DataFactoryLinkedServiceAzureBlobStorage#service_principal_id}
  */
  readonly servicePrincipalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_linked_service_azure_blob_storage#service_principal_key DataFactoryLinkedServiceAzureBlobStorage#service_principal_key}
  */
  readonly servicePrincipalKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_linked_service_azure_blob_storage#storage_kind DataFactoryLinkedServiceAzureBlobStorage#storage_kind}
  */
  readonly storageKind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_linked_service_azure_blob_storage#tenant_id DataFactoryLinkedServiceAzureBlobStorage#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_linked_service_azure_blob_storage#use_managed_identity DataFactoryLinkedServiceAzureBlobStorage#use_managed_identity}
  */
  readonly useManagedIdentity?: boolean | cdktf.IResolvable;
  /**
  * key_vault_sas_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_linked_service_azure_blob_storage#key_vault_sas_token DataFactoryLinkedServiceAzureBlobStorage#key_vault_sas_token}
  */
  readonly keyVaultSasToken?: DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken;
  /**
  * service_principal_linked_key_vault_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_linked_service_azure_blob_storage#service_principal_linked_key_vault_key DataFactoryLinkedServiceAzureBlobStorage#service_principal_linked_key_vault_key}
  */
  readonly servicePrincipalLinkedKeyVaultKey?: DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_linked_service_azure_blob_storage#timeouts DataFactoryLinkedServiceAzureBlobStorage#timeouts}
  */
  readonly timeouts?: DataFactoryLinkedServiceAzureBlobStorageTimeouts;
}
export interface DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_linked_service_azure_blob_storage#linked_service_name DataFactoryLinkedServiceAzureBlobStorage#linked_service_name}
  */
  readonly linkedServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_linked_service_azure_blob_storage#secret_name DataFactoryLinkedServiceAzureBlobStorage#secret_name}
  */
  readonly secretName: string;
}

export function dataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenToTerraform(struct?: DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference | DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linked_service_name: cdktf.stringToTerraform(struct!.linkedServiceName),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenToHclTerraform(struct?: DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference | DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    linked_service_name: {
      value: cdktf.stringToHclTerraform(struct!.linkedServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linkedServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkedServiceName = this._linkedServiceName;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._linkedServiceName = undefined;
      this._secretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._linkedServiceName = value.linkedServiceName;
      this._secretName = value.secretName;
    }
  }

  // linked_service_name - computed: false, optional: false, required: true
  private _linkedServiceName?: string; 
  public get linkedServiceName() {
    return this.getStringAttribute('linked_service_name');
  }
  public set linkedServiceName(value: string) {
    this._linkedServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedServiceNameInput() {
    return this._linkedServiceName;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_linked_service_azure_blob_storage#linked_service_name DataFactoryLinkedServiceAzureBlobStorage#linked_service_name}
  */
  readonly linkedServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_linked_service_azure_blob_storage#secret_name DataFactoryLinkedServiceAzureBlobStorage#secret_name}
  */
  readonly secretName: string;
}

export function dataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyToTerraform(struct?: DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference | DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linked_service_name: cdktf.stringToTerraform(struct!.linkedServiceName),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyToHclTerraform(struct?: DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference | DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    linked_service_name: {
      value: cdktf.stringToHclTerraform(struct!.linkedServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linkedServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkedServiceName = this._linkedServiceName;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._linkedServiceName = undefined;
      this._secretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._linkedServiceName = value.linkedServiceName;
      this._secretName = value.secretName;
    }
  }

  // linked_service_name - computed: false, optional: false, required: true
  private _linkedServiceName?: string; 
  public get linkedServiceName() {
    return this.getStringAttribute('linked_service_name');
  }
  public set linkedServiceName(value: string) {
    this._linkedServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedServiceNameInput() {
    return this._linkedServiceName;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataFactoryLinkedServiceAzureBlobStorageTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_linked_service_azure_blob_storage#create DataFactoryLinkedServiceAzureBlobStorage#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_linked_service_azure_blob_storage#delete DataFactoryLinkedServiceAzureBlobStorage#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_linked_service_azure_blob_storage#read DataFactoryLinkedServiceAzureBlobStorage#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_linked_service_azure_blob_storage#update DataFactoryLinkedServiceAzureBlobStorage#update}
  */
  readonly update?: string;
}

export function dataFactoryLinkedServiceAzureBlobStorageTimeoutsToTerraform(struct?: DataFactoryLinkedServiceAzureBlobStorageTimeouts | cdktf.IResolvable): any {
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


export function dataFactoryLinkedServiceAzureBlobStorageTimeoutsToHclTerraform(struct?: DataFactoryLinkedServiceAzureBlobStorageTimeouts | cdktf.IResolvable): any {
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

export class DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFactoryLinkedServiceAzureBlobStorageTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataFactoryLinkedServiceAzureBlobStorageTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_linked_service_azure_blob_storage azurerm_data_factory_linked_service_azure_blob_storage}
*/
export class DataFactoryLinkedServiceAzureBlobStorage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_data_factory_linked_service_azure_blob_storage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFactoryLinkedServiceAzureBlobStorage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFactoryLinkedServiceAzureBlobStorage to import
  * @param importFromId The id of the existing DataFactoryLinkedServiceAzureBlobStorage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_linked_service_azure_blob_storage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFactoryLinkedServiceAzureBlobStorage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_data_factory_linked_service_azure_blob_storage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_linked_service_azure_blob_storage azurerm_data_factory_linked_service_azure_blob_storage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryLinkedServiceAzureBlobStorageConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryLinkedServiceAzureBlobStorageConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_linked_service_azure_blob_storage',
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
    this._additionalProperties = config.additionalProperties;
    this._annotations = config.annotations;
    this._connectionString = config.connectionString;
    this._connectionStringInsecure = config.connectionStringInsecure;
    this._dataFactoryId = config.dataFactoryId;
    this._description = config.description;
    this._id = config.id;
    this._integrationRuntimeName = config.integrationRuntimeName;
    this._name = config.name;
    this._parameters = config.parameters;
    this._sasUri = config.sasUri;
    this._serviceEndpoint = config.serviceEndpoint;
    this._servicePrincipalId = config.servicePrincipalId;
    this._servicePrincipalKey = config.servicePrincipalKey;
    this._storageKind = config.storageKind;
    this._tenantId = config.tenantId;
    this._useManagedIdentity = config.useManagedIdentity;
    this._keyVaultSasToken.internalValue = config.keyVaultSasToken;
    this._servicePrincipalLinkedKeyVaultKey.internalValue = config.servicePrincipalLinkedKeyVaultKey;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string }; 
  public get additionalProperties() {
    return this.getStringMapAttribute('additional_properties');
  }
  public set additionalProperties(value: { [key: string]: string }) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: string[]; 
  public get annotations() {
    return this.getListAttribute('annotations');
  }
  public set annotations(value: string[]) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // connection_string - computed: false, optional: true, required: false
  private _connectionString?: string; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  public resetConnectionString() {
    this._connectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
  }

  // connection_string_insecure - computed: false, optional: true, required: false
  private _connectionStringInsecure?: string; 
  public get connectionStringInsecure() {
    return this.getStringAttribute('connection_string_insecure');
  }
  public set connectionStringInsecure(value: string) {
    this._connectionStringInsecure = value;
  }
  public resetConnectionStringInsecure() {
    this._connectionStringInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInsecureInput() {
    return this._connectionStringInsecure;
  }

  // data_factory_id - computed: false, optional: false, required: true
  private _dataFactoryId?: string; 
  public get dataFactoryId() {
    return this.getStringAttribute('data_factory_id');
  }
  public set dataFactoryId(value: string) {
    this._dataFactoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFactoryIdInput() {
    return this._dataFactoryId;
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

  // integration_runtime_name - computed: false, optional: true, required: false
  private _integrationRuntimeName?: string; 
  public get integrationRuntimeName() {
    return this.getStringAttribute('integration_runtime_name');
  }
  public set integrationRuntimeName(value: string) {
    this._integrationRuntimeName = value;
  }
  public resetIntegrationRuntimeName() {
    this._integrationRuntimeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationRuntimeNameInput() {
    return this._integrationRuntimeName;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // sas_uri - computed: false, optional: true, required: false
  private _sasUri?: string; 
  public get sasUri() {
    return this.getStringAttribute('sas_uri');
  }
  public set sasUri(value: string) {
    this._sasUri = value;
  }
  public resetSasUri() {
    this._sasUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sasUriInput() {
    return this._sasUri;
  }

  // service_endpoint - computed: false, optional: true, required: false
  private _serviceEndpoint?: string; 
  public get serviceEndpoint() {
    return this.getStringAttribute('service_endpoint');
  }
  public set serviceEndpoint(value: string) {
    this._serviceEndpoint = value;
  }
  public resetServiceEndpoint() {
    this._serviceEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEndpointInput() {
    return this._serviceEndpoint;
  }

  // service_principal_id - computed: false, optional: true, required: false
  private _servicePrincipalId?: string; 
  public get servicePrincipalId() {
    return this.getStringAttribute('service_principal_id');
  }
  public set servicePrincipalId(value: string) {
    this._servicePrincipalId = value;
  }
  public resetServicePrincipalId() {
    this._servicePrincipalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalIdInput() {
    return this._servicePrincipalId;
  }

  // service_principal_key - computed: false, optional: true, required: false
  private _servicePrincipalKey?: string; 
  public get servicePrincipalKey() {
    return this.getStringAttribute('service_principal_key');
  }
  public set servicePrincipalKey(value: string) {
    this._servicePrincipalKey = value;
  }
  public resetServicePrincipalKey() {
    this._servicePrincipalKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalKeyInput() {
    return this._servicePrincipalKey;
  }

  // storage_kind - computed: false, optional: true, required: false
  private _storageKind?: string; 
  public get storageKind() {
    return this.getStringAttribute('storage_kind');
  }
  public set storageKind(value: string) {
    this._storageKind = value;
  }
  public resetStorageKind() {
    this._storageKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageKindInput() {
    return this._storageKind;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // use_managed_identity - computed: false, optional: true, required: false
  private _useManagedIdentity?: boolean | cdktf.IResolvable; 
  public get useManagedIdentity() {
    return this.getBooleanAttribute('use_managed_identity');
  }
  public set useManagedIdentity(value: boolean | cdktf.IResolvable) {
    this._useManagedIdentity = value;
  }
  public resetUseManagedIdentity() {
    this._useManagedIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useManagedIdentityInput() {
    return this._useManagedIdentity;
  }

  // key_vault_sas_token - computed: false, optional: true, required: false
  private _keyVaultSasToken = new DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference(this, "key_vault_sas_token");
  public get keyVaultSasToken() {
    return this._keyVaultSasToken;
  }
  public putKeyVaultSasToken(value: DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken) {
    this._keyVaultSasToken.internalValue = value;
  }
  public resetKeyVaultSasToken() {
    this._keyVaultSasToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultSasTokenInput() {
    return this._keyVaultSasToken.internalValue;
  }

  // service_principal_linked_key_vault_key - computed: false, optional: true, required: false
  private _servicePrincipalLinkedKeyVaultKey = new DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference(this, "service_principal_linked_key_vault_key");
  public get servicePrincipalLinkedKeyVaultKey() {
    return this._servicePrincipalLinkedKeyVaultKey;
  }
  public putServicePrincipalLinkedKeyVaultKey(value: DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey) {
    this._servicePrincipalLinkedKeyVaultKey.internalValue = value;
  }
  public resetServicePrincipalLinkedKeyVaultKey() {
    this._servicePrincipalLinkedKeyVaultKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalLinkedKeyVaultKeyInput() {
    return this._servicePrincipalLinkedKeyVaultKey.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataFactoryLinkedServiceAzureBlobStorageTimeouts) {
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
      additional_properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._additionalProperties),
      annotations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._annotations),
      connection_string: cdktf.stringToTerraform(this._connectionString),
      connection_string_insecure: cdktf.stringToTerraform(this._connectionStringInsecure),
      data_factory_id: cdktf.stringToTerraform(this._dataFactoryId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      integration_runtime_name: cdktf.stringToTerraform(this._integrationRuntimeName),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameters),
      sas_uri: cdktf.stringToTerraform(this._sasUri),
      service_endpoint: cdktf.stringToTerraform(this._serviceEndpoint),
      service_principal_id: cdktf.stringToTerraform(this._servicePrincipalId),
      service_principal_key: cdktf.stringToTerraform(this._servicePrincipalKey),
      storage_kind: cdktf.stringToTerraform(this._storageKind),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      use_managed_identity: cdktf.booleanToTerraform(this._useManagedIdentity),
      key_vault_sas_token: dataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenToTerraform(this._keyVaultSasToken.internalValue),
      service_principal_linked_key_vault_key: dataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyToTerraform(this._servicePrincipalLinkedKeyVaultKey.internalValue),
      timeouts: dataFactoryLinkedServiceAzureBlobStorageTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._additionalProperties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      annotations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._annotations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      connection_string: {
        value: cdktf.stringToHclTerraform(this._connectionString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_string_insecure: {
        value: cdktf.stringToHclTerraform(this._connectionStringInsecure),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_factory_id: {
        value: cdktf.stringToHclTerraform(this._dataFactoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      integration_runtime_name: {
        value: cdktf.stringToHclTerraform(this._integrationRuntimeName),
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
      parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._parameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      sas_uri: {
        value: cdktf.stringToHclTerraform(this._sasUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_endpoint: {
        value: cdktf.stringToHclTerraform(this._serviceEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_principal_id: {
        value: cdktf.stringToHclTerraform(this._servicePrincipalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_principal_key: {
        value: cdktf.stringToHclTerraform(this._servicePrincipalKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_kind: {
        value: cdktf.stringToHclTerraform(this._storageKind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_managed_identity: {
        value: cdktf.booleanToHclTerraform(this._useManagedIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_vault_sas_token: {
        value: dataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenToHclTerraform(this._keyVaultSasToken.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenList",
      },
      service_principal_linked_key_vault_key: {
        value: dataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyToHclTerraform(this._servicePrincipalLinkedKeyVaultKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyList",
      },
      timeouts: {
        value: dataFactoryLinkedServiceAzureBlobStorageTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFactoryLinkedServiceAzureBlobStorageTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
