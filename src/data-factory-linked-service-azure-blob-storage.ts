// https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_blob_storage.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryLinkedServiceAzureBlobStorageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_blob_storage.html#additional_properties DataFactoryLinkedServiceAzureBlobStorage#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_blob_storage.html#annotations DataFactoryLinkedServiceAzureBlobStorage#annotations}
  */
  readonly annotations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_blob_storage.html#connection_string DataFactoryLinkedServiceAzureBlobStorage#connection_string}
  */
  readonly connectionString?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_blob_storage.html#data_factory_name DataFactoryLinkedServiceAzureBlobStorage#data_factory_name}
  */
  readonly dataFactoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_blob_storage.html#description DataFactoryLinkedServiceAzureBlobStorage#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_blob_storage.html#integration_runtime_name DataFactoryLinkedServiceAzureBlobStorage#integration_runtime_name}
  */
  readonly integrationRuntimeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_blob_storage.html#name DataFactoryLinkedServiceAzureBlobStorage#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_blob_storage.html#parameters DataFactoryLinkedServiceAzureBlobStorage#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_blob_storage.html#resource_group_name DataFactoryLinkedServiceAzureBlobStorage#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_blob_storage.html#sas_uri DataFactoryLinkedServiceAzureBlobStorage#sas_uri}
  */
  readonly sasUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_blob_storage.html#service_endpoint DataFactoryLinkedServiceAzureBlobStorage#service_endpoint}
  */
  readonly serviceEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_blob_storage.html#service_principal_id DataFactoryLinkedServiceAzureBlobStorage#service_principal_id}
  */
  readonly servicePrincipalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_blob_storage.html#service_principal_key DataFactoryLinkedServiceAzureBlobStorage#service_principal_key}
  */
  readonly servicePrincipalKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_blob_storage.html#tenant_id DataFactoryLinkedServiceAzureBlobStorage#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_blob_storage.html#use_managed_identity DataFactoryLinkedServiceAzureBlobStorage#use_managed_identity}
  */
  readonly useManagedIdentity?: boolean | cdktf.IResolvable;
  /**
  * key_vault_sas_token block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_blob_storage.html#key_vault_sas_token DataFactoryLinkedServiceAzureBlobStorage#key_vault_sas_token}
  */
  readonly keyVaultSasToken?: DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_blob_storage.html#timeouts DataFactoryLinkedServiceAzureBlobStorage#timeouts}
  */
  readonly timeouts?: DataFactoryLinkedServiceAzureBlobStorageTimeouts;
}
export interface DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_blob_storage.html#linked_service_name DataFactoryLinkedServiceAzureBlobStorage#linked_service_name}
  */
  readonly linkedServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_blob_storage.html#secret_name DataFactoryLinkedServiceAzureBlobStorage#secret_name}
  */
  readonly secretName: string;
}

function dataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenToTerraform(struct?: DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference | DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linked_service_name: cdktf.stringToTerraform(struct!.linkedServiceName),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}

export class DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._linkedServiceName
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
    return this._secretName
  }
}
export interface DataFactoryLinkedServiceAzureBlobStorageTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_blob_storage.html#create DataFactoryLinkedServiceAzureBlobStorage#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_blob_storage.html#delete DataFactoryLinkedServiceAzureBlobStorage#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_blob_storage.html#read DataFactoryLinkedServiceAzureBlobStorage#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_blob_storage.html#update DataFactoryLinkedServiceAzureBlobStorage#update}
  */
  readonly update?: string;
}

function dataFactoryLinkedServiceAzureBlobStorageTimeoutsToTerraform(struct?: DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference | DataFactoryLinkedServiceAzureBlobStorageTimeouts): any {
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

export class DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_blob_storage.html azurerm_data_factory_linked_service_azure_blob_storage}
*/
export class DataFactoryLinkedServiceAzureBlobStorage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_data_factory_linked_service_azure_blob_storage";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_blob_storage.html azurerm_data_factory_linked_service_azure_blob_storage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryLinkedServiceAzureBlobStorageConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryLinkedServiceAzureBlobStorageConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_linked_service_azure_blob_storage',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._additionalProperties = config.additionalProperties;
    this._annotations = config.annotations;
    this._connectionString = config.connectionString;
    this._dataFactoryName = config.dataFactoryName;
    this._description = config.description;
    this._integrationRuntimeName = config.integrationRuntimeName;
    this._name = config.name;
    this._parameters = config.parameters;
    this._resourceGroupName = config.resourceGroupName;
    this._sasUri = config.sasUri;
    this._serviceEndpoint = config.serviceEndpoint;
    this._servicePrincipalId = config.servicePrincipalId;
    this._servicePrincipalKey = config.servicePrincipalKey;
    this._tenantId = config.tenantId;
    this._useManagedIdentity = config.useManagedIdentity;
    this._keyVaultSasToken = config.keyVaultSasToken;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get additionalProperties() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('additional_properties') as any;
  }
  public set additionalProperties(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: string[] | undefined; 
  public get annotations() {
    return this.getListAttribute('annotations');
  }
  public set annotations(value: string[] | undefined) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations
  }

  // connection_string - computed: false, optional: true, required: false
  private _connectionString?: string | undefined; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string | undefined) {
    this._connectionString = value;
  }
  public resetConnectionString() {
    this._connectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString
  }

  // data_factory_name - computed: false, optional: false, required: true
  private _dataFactoryName?: string; 
  public get dataFactoryName() {
    return this.getStringAttribute('data_factory_name');
  }
  public set dataFactoryName(value: string) {
    this._dataFactoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFactoryNameInput() {
    return this._dataFactoryName
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_runtime_name - computed: false, optional: true, required: false
  private _integrationRuntimeName?: string | undefined; 
  public get integrationRuntimeName() {
    return this.getStringAttribute('integration_runtime_name');
  }
  public set integrationRuntimeName(value: string | undefined) {
    this._integrationRuntimeName = value;
  }
  public resetIntegrationRuntimeName() {
    this._integrationRuntimeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationRuntimeNameInput() {
    return this._integrationRuntimeName
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get parameters() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
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

  // sas_uri - computed: false, optional: true, required: false
  private _sasUri?: string | undefined; 
  public get sasUri() {
    return this.getStringAttribute('sas_uri');
  }
  public set sasUri(value: string | undefined) {
    this._sasUri = value;
  }
  public resetSasUri() {
    this._sasUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sasUriInput() {
    return this._sasUri
  }

  // service_endpoint - computed: false, optional: true, required: false
  private _serviceEndpoint?: string | undefined; 
  public get serviceEndpoint() {
    return this.getStringAttribute('service_endpoint');
  }
  public set serviceEndpoint(value: string | undefined) {
    this._serviceEndpoint = value;
  }
  public resetServiceEndpoint() {
    this._serviceEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEndpointInput() {
    return this._serviceEndpoint
  }

  // service_principal_id - computed: false, optional: true, required: false
  private _servicePrincipalId?: string | undefined; 
  public get servicePrincipalId() {
    return this.getStringAttribute('service_principal_id');
  }
  public set servicePrincipalId(value: string | undefined) {
    this._servicePrincipalId = value;
  }
  public resetServicePrincipalId() {
    this._servicePrincipalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalIdInput() {
    return this._servicePrincipalId
  }

  // service_principal_key - computed: false, optional: true, required: false
  private _servicePrincipalKey?: string | undefined; 
  public get servicePrincipalKey() {
    return this.getStringAttribute('service_principal_key');
  }
  public set servicePrincipalKey(value: string | undefined) {
    this._servicePrincipalKey = value;
  }
  public resetServicePrincipalKey() {
    this._servicePrincipalKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalKeyInput() {
    return this._servicePrincipalKey
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string | undefined; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string | undefined) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId
  }

  // use_managed_identity - computed: false, optional: true, required: false
  private _useManagedIdentity?: boolean | cdktf.IResolvable | undefined; 
  public get useManagedIdentity() {
    return this.getBooleanAttribute('use_managed_identity') as any;
  }
  public set useManagedIdentity(value: boolean | cdktf.IResolvable | undefined) {
    this._useManagedIdentity = value;
  }
  public resetUseManagedIdentity() {
    this._useManagedIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useManagedIdentityInput() {
    return this._useManagedIdentity
  }

  // key_vault_sas_token - computed: false, optional: true, required: false
  private _keyVaultSasToken?: DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken | undefined; 
  private __keyVaultSasTokenOutput = new DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference(this as any, "key_vault_sas_token", true);
  public get keyVaultSasToken() {
    return this.__keyVaultSasTokenOutput;
  }
  public putKeyVaultSasToken(value: DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken | undefined) {
    this._keyVaultSasToken = value;
  }
  public resetKeyVaultSasToken() {
    this._keyVaultSasToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultSasTokenInput() {
    return this._keyVaultSasToken
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataFactoryLinkedServiceAzureBlobStorageTimeouts | undefined; 
  private __timeoutsOutput = new DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataFactoryLinkedServiceAzureBlobStorageTimeouts | undefined) {
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
      additional_properties: cdktf.hashMapper(cdktf.anyToTerraform)(this._additionalProperties),
      annotations: cdktf.listMapper(cdktf.stringToTerraform)(this._annotations),
      connection_string: cdktf.stringToTerraform(this._connectionString),
      data_factory_name: cdktf.stringToTerraform(this._dataFactoryName),
      description: cdktf.stringToTerraform(this._description),
      integration_runtime_name: cdktf.stringToTerraform(this._integrationRuntimeName),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sas_uri: cdktf.stringToTerraform(this._sasUri),
      service_endpoint: cdktf.stringToTerraform(this._serviceEndpoint),
      service_principal_id: cdktf.stringToTerraform(this._servicePrincipalId),
      service_principal_key: cdktf.stringToTerraform(this._servicePrincipalKey),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      use_managed_identity: cdktf.booleanToTerraform(this._useManagedIdentity),
      key_vault_sas_token: dataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenToTerraform(this._keyVaultSasToken),
      timeouts: dataFactoryLinkedServiceAzureBlobStorageTimeoutsToTerraform(this._timeouts),
    };
  }
}
