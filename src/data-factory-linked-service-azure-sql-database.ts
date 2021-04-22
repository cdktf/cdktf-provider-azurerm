// https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_sql_database.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryLinkedServiceAzureSqlDatabaseConfig extends cdktf.TerraformMetaArguments {
  readonly additionalProperties?: { [key: string]: string };
  readonly annotations?: string[];
  readonly connectionString: string;
  readonly dataFactoryName: string;
  readonly description?: string;
  readonly integrationRuntimeName?: string;
  readonly name: string;
  readonly parameters?: { [key: string]: string };
  readonly resourceGroupName: string;
  readonly servicePrincipalId?: string;
  readonly servicePrincipalKey?: string;
  readonly tenantId?: string;
  readonly useManagedIdentity?: boolean;
  /** key_vault_password block */
  readonly keyVaultPassword?: DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword[];
  /** timeouts block */
  readonly timeouts?: DataFactoryLinkedServiceAzureSqlDatabaseTimeouts;
}
export interface DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword {
  readonly linkedServiceName: string;
  readonly secretName: string;
}

function dataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordToTerraform(struct?: DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    linked_service_name: cdktf.stringToTerraform(struct!.linkedServiceName),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}

export interface DataFactoryLinkedServiceAzureSqlDatabaseTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function dataFactoryLinkedServiceAzureSqlDatabaseTimeoutsToTerraform(struct?: DataFactoryLinkedServiceAzureSqlDatabaseTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class DataFactoryLinkedServiceAzureSqlDatabase extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataFactoryLinkedServiceAzureSqlDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_linked_service_azure_sql_database',
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
    this._servicePrincipalId = config.servicePrincipalId;
    this._servicePrincipalKey = config.servicePrincipalKey;
    this._tenantId = config.tenantId;
    this._useManagedIdentity = config.useManagedIdentity;
    this._keyVaultPassword = config.keyVaultPassword;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string };
  public get additionalProperties() {
    return this.interpolationForAttribute('additional_properties') as any;
  }
  public set additionalProperties(value: { [key: string]: string } ) {
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
  private _annotations?: string[];
  public get annotations() {
    return this.getListAttribute('annotations');
  }
  public set annotations(value: string[] ) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations
  }

  // connection_string - computed: false, optional: false, required: true
  private _connectionString: string;
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString
  }

  // data_factory_name - computed: false, optional: false, required: true
  private _dataFactoryName: string;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_runtime_name - computed: false, optional: true, required: false
  private _integrationRuntimeName?: string;
  public get integrationRuntimeName() {
    return this.getStringAttribute('integration_runtime_name');
  }
  public set integrationRuntimeName(value: string ) {
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string };
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } ) {
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

  // service_principal_id - computed: false, optional: true, required: false
  private _servicePrincipalId?: string;
  public get servicePrincipalId() {
    return this.getStringAttribute('service_principal_id');
  }
  public set servicePrincipalId(value: string ) {
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
  private _servicePrincipalKey?: string;
  public get servicePrincipalKey() {
    return this.getStringAttribute('service_principal_key');
  }
  public set servicePrincipalKey(value: string ) {
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
  private _tenantId?: string;
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string ) {
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
  private _useManagedIdentity?: boolean;
  public get useManagedIdentity() {
    return this.getBooleanAttribute('use_managed_identity');
  }
  public set useManagedIdentity(value: boolean ) {
    this._useManagedIdentity = value;
  }
  public resetUseManagedIdentity() {
    this._useManagedIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useManagedIdentityInput() {
    return this._useManagedIdentity
  }

  // key_vault_password - computed: false, optional: true, required: false
  private _keyVaultPassword?: DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword[];
  public get keyVaultPassword() {
    return this.interpolationForAttribute('key_vault_password') as any;
  }
  public set keyVaultPassword(value: DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword[] ) {
    this._keyVaultPassword = value;
  }
  public resetKeyVaultPassword() {
    this._keyVaultPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultPasswordInput() {
    return this._keyVaultPassword
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataFactoryLinkedServiceAzureSqlDatabaseTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataFactoryLinkedServiceAzureSqlDatabaseTimeouts ) {
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
      service_principal_id: cdktf.stringToTerraform(this._servicePrincipalId),
      service_principal_key: cdktf.stringToTerraform(this._servicePrincipalKey),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      use_managed_identity: cdktf.booleanToTerraform(this._useManagedIdentity),
      key_vault_password: cdktf.listMapper(dataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordToTerraform)(this._keyVaultPassword),
      timeouts: dataFactoryLinkedServiceAzureSqlDatabaseTimeoutsToTerraform(this._timeouts),
    };
  }
}
