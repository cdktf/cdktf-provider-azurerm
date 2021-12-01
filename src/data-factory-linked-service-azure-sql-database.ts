// https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_sql_database.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryLinkedServiceAzureSqlDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_sql_database.html#additional_properties DataFactoryLinkedServiceAzureSqlDatabase#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_sql_database.html#annotations DataFactoryLinkedServiceAzureSqlDatabase#annotations}
  */
  readonly annotations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_sql_database.html#connection_string DataFactoryLinkedServiceAzureSqlDatabase#connection_string}
  */
  readonly connectionString?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_sql_database.html#data_factory_name DataFactoryLinkedServiceAzureSqlDatabase#data_factory_name}
  */
  readonly dataFactoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_sql_database.html#description DataFactoryLinkedServiceAzureSqlDatabase#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_sql_database.html#integration_runtime_name DataFactoryLinkedServiceAzureSqlDatabase#integration_runtime_name}
  */
  readonly integrationRuntimeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_sql_database.html#name DataFactoryLinkedServiceAzureSqlDatabase#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_sql_database.html#parameters DataFactoryLinkedServiceAzureSqlDatabase#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_sql_database.html#resource_group_name DataFactoryLinkedServiceAzureSqlDatabase#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_sql_database.html#service_principal_id DataFactoryLinkedServiceAzureSqlDatabase#service_principal_id}
  */
  readonly servicePrincipalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_sql_database.html#service_principal_key DataFactoryLinkedServiceAzureSqlDatabase#service_principal_key}
  */
  readonly servicePrincipalKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_sql_database.html#tenant_id DataFactoryLinkedServiceAzureSqlDatabase#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_sql_database.html#use_managed_identity DataFactoryLinkedServiceAzureSqlDatabase#use_managed_identity}
  */
  readonly useManagedIdentity?: boolean | cdktf.IResolvable;
  /**
  * key_vault_connection_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_sql_database.html#key_vault_connection_string DataFactoryLinkedServiceAzureSqlDatabase#key_vault_connection_string}
  */
  readonly keyVaultConnectionString?: DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString;
  /**
  * key_vault_password block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_sql_database.html#key_vault_password DataFactoryLinkedServiceAzureSqlDatabase#key_vault_password}
  */
  readonly keyVaultPassword?: DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_sql_database.html#timeouts DataFactoryLinkedServiceAzureSqlDatabase#timeouts}
  */
  readonly timeouts?: DataFactoryLinkedServiceAzureSqlDatabaseTimeouts;
}
export interface DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_sql_database.html#linked_service_name DataFactoryLinkedServiceAzureSqlDatabase#linked_service_name}
  */
  readonly linkedServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_sql_database.html#secret_name DataFactoryLinkedServiceAzureSqlDatabase#secret_name}
  */
  readonly secretName: string;
}

export function dataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringToTerraform(struct?: DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference | DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linked_service_name: cdktf.stringToTerraform(struct!.linkedServiceName),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}

export class DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._linkedServiceName) {
      hasAnyValues = true;
      internalValueResult.linkedServiceName = this._linkedServiceName;
    }
    if (this._secretName) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString | undefined) {
    if (value === undefined) {
      this._linkedServiceName = undefined;
      this._secretName = undefined;
    }
    else {
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
export interface DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_sql_database.html#linked_service_name DataFactoryLinkedServiceAzureSqlDatabase#linked_service_name}
  */
  readonly linkedServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_sql_database.html#secret_name DataFactoryLinkedServiceAzureSqlDatabase#secret_name}
  */
  readonly secretName: string;
}

export function dataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordToTerraform(struct?: DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference | DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linked_service_name: cdktf.stringToTerraform(struct!.linkedServiceName),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}

export class DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._linkedServiceName) {
      hasAnyValues = true;
      internalValueResult.linkedServiceName = this._linkedServiceName;
    }
    if (this._secretName) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword | undefined) {
    if (value === undefined) {
      this._linkedServiceName = undefined;
      this._secretName = undefined;
    }
    else {
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
export interface DataFactoryLinkedServiceAzureSqlDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_sql_database.html#create DataFactoryLinkedServiceAzureSqlDatabase#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_sql_database.html#delete DataFactoryLinkedServiceAzureSqlDatabase#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_sql_database.html#read DataFactoryLinkedServiceAzureSqlDatabase#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_sql_database.html#update DataFactoryLinkedServiceAzureSqlDatabase#update}
  */
  readonly update?: string;
}

export function dataFactoryLinkedServiceAzureSqlDatabaseTimeoutsToTerraform(struct?: DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference | DataFactoryLinkedServiceAzureSqlDatabaseTimeouts): any {
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

export class DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataFactoryLinkedServiceAzureSqlDatabaseTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryLinkedServiceAzureSqlDatabaseTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_sql_database.html azurerm_data_factory_linked_service_azure_sql_database}
*/
export class DataFactoryLinkedServiceAzureSqlDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_data_factory_linked_service_azure_sql_database";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_sql_database.html azurerm_data_factory_linked_service_azure_sql_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryLinkedServiceAzureSqlDatabaseConfig
  */
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
    this._keyVaultConnectionString.internalValue = config.keyVaultConnectionString;
    this._keyVaultPassword.internalValue = config.keyVaultPassword;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string } | cdktf.IResolvable; 
  public get additionalProperties() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('additional_properties') as any;
  }
  public set additionalProperties(value: { [key: string]: string } | cdktf.IResolvable) {
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
    return this._dataFactoryName;
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
  public get id() {
    return this.getStringAttribute('id');
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
  private _parameters?: { [key: string]: string } | cdktf.IResolvable; 
  public get parameters() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } | cdktf.IResolvable) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
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
    return this.getBooleanAttribute('use_managed_identity') as any;
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

  // key_vault_connection_string - computed: false, optional: true, required: false
  private _keyVaultConnectionString = new DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference(this as any, "key_vault_connection_string", true);
  public get keyVaultConnectionString() {
    return this._keyVaultConnectionString;
  }
  public putKeyVaultConnectionString(value: DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString) {
    this._keyVaultConnectionString.internalValue = value;
  }
  public resetKeyVaultConnectionString() {
    this._keyVaultConnectionString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultConnectionStringInput() {
    return this._keyVaultConnectionString.internalValue;
  }

  // key_vault_password - computed: false, optional: true, required: false
  private _keyVaultPassword = new DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference(this as any, "key_vault_password", true);
  public get keyVaultPassword() {
    return this._keyVaultPassword;
  }
  public putKeyVaultPassword(value: DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword) {
    this._keyVaultPassword.internalValue = value;
  }
  public resetKeyVaultPassword() {
    this._keyVaultPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultPasswordInput() {
    return this._keyVaultPassword.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataFactoryLinkedServiceAzureSqlDatabaseTimeouts) {
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
      key_vault_connection_string: dataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringToTerraform(this._keyVaultConnectionString.internalValue),
      key_vault_password: dataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordToTerraform(this._keyVaultPassword.internalValue),
      timeouts: dataFactoryLinkedServiceAzureSqlDatabaseTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
