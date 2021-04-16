// https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryLinkedServiceAzureDatabricksConfig extends cdktf.TerraformMetaArguments {
  readonly accessToken?: string;
  readonly adbDomain: string;
  readonly additionalProperties?: { [key: string]: string };
  readonly annotations?: string[];
  readonly dataFactoryName: string;
  readonly description?: string;
  readonly existingClusterId?: string;
  readonly integrationRuntimeName?: string;
  readonly msiWorkSpaceResourceId?: string;
  readonly name: string;
  readonly parameters?: { [key: string]: string };
  readonly resourceGroupName: string;
  /** instance_pool block */
  readonly instancePool?: DataFactoryLinkedServiceAzureDatabricksInstancePool[];
  /** key_vault_password block */
  readonly keyVaultPassword?: DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword[];
  /** new_cluster_config block */
  readonly newClusterConfig?: DataFactoryLinkedServiceAzureDatabricksNewClusterConfig[];
  /** timeouts block */
  readonly timeouts?: DataFactoryLinkedServiceAzureDatabricksTimeouts;
}
export interface DataFactoryLinkedServiceAzureDatabricksInstancePool {
  readonly clusterVersion: string;
  readonly instancePoolId: string;
  readonly maxNumberOfWorkers?: number;
  readonly minNumberOfWorkers?: number;
}

function dataFactoryLinkedServiceAzureDatabricksInstancePoolToTerraform(struct?: DataFactoryLinkedServiceAzureDatabricksInstancePool): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster_version: cdktf.stringToTerraform(struct!.clusterVersion),
    instance_pool_id: cdktf.stringToTerraform(struct!.instancePoolId),
    max_number_of_workers: cdktf.numberToTerraform(struct!.maxNumberOfWorkers),
    min_number_of_workers: cdktf.numberToTerraform(struct!.minNumberOfWorkers),
  }
}

export interface DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword {
  readonly linkedServiceName: string;
  readonly secretName: string;
}

function dataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordToTerraform(struct?: DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    linked_service_name: cdktf.stringToTerraform(struct!.linkedServiceName),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}

export interface DataFactoryLinkedServiceAzureDatabricksNewClusterConfig {
  readonly clusterVersion: string;
  readonly customTags?: { [key: string]: string };
  readonly driverNodeType?: string;
  readonly initScripts?: string[];
  readonly logDestination?: string;
  readonly maxNumberOfWorkers?: number;
  readonly minNumberOfWorkers?: number;
  readonly nodeType: string;
  readonly sparkConfig?: { [key: string]: string };
  readonly sparkEnvironmentVariables?: { [key: string]: string };
}

function dataFactoryLinkedServiceAzureDatabricksNewClusterConfigToTerraform(struct?: DataFactoryLinkedServiceAzureDatabricksNewClusterConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster_version: cdktf.stringToTerraform(struct!.clusterVersion),
    custom_tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.customTags),
    driver_node_type: cdktf.stringToTerraform(struct!.driverNodeType),
    init_scripts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.initScripts),
    log_destination: cdktf.stringToTerraform(struct!.logDestination),
    max_number_of_workers: cdktf.numberToTerraform(struct!.maxNumberOfWorkers),
    min_number_of_workers: cdktf.numberToTerraform(struct!.minNumberOfWorkers),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
    spark_config: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.sparkConfig),
    spark_environment_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.sparkEnvironmentVariables),
  }
}

export interface DataFactoryLinkedServiceAzureDatabricksTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function dataFactoryLinkedServiceAzureDatabricksTimeoutsToTerraform(struct?: DataFactoryLinkedServiceAzureDatabricksTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class DataFactoryLinkedServiceAzureDatabricks extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataFactoryLinkedServiceAzureDatabricksConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_linked_service_azure_databricks',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessToken = config.accessToken;
    this._adbDomain = config.adbDomain;
    this._additionalProperties = config.additionalProperties;
    this._annotations = config.annotations;
    this._dataFactoryName = config.dataFactoryName;
    this._description = config.description;
    this._existingClusterId = config.existingClusterId;
    this._integrationRuntimeName = config.integrationRuntimeName;
    this._msiWorkSpaceResourceId = config.msiWorkSpaceResourceId;
    this._name = config.name;
    this._parameters = config.parameters;
    this._resourceGroupName = config.resourceGroupName;
    this._instancePool = config.instancePool;
    this._keyVaultPassword = config.keyVaultPassword;
    this._newClusterConfig = config.newClusterConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string;
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string ) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken
  }

  // adb_domain - computed: false, optional: false, required: true
  private _adbDomain: string;
  public get adbDomain() {
    return this.getStringAttribute('adb_domain');
  }
  public set adbDomain(value: string) {
    this._adbDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adbDomainInput() {
    return this._adbDomain
  }

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

  // existing_cluster_id - computed: false, optional: true, required: false
  private _existingClusterId?: string;
  public get existingClusterId() {
    return this.getStringAttribute('existing_cluster_id');
  }
  public set existingClusterId(value: string ) {
    this._existingClusterId = value;
  }
  public resetExistingClusterId() {
    this._existingClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingClusterIdInput() {
    return this._existingClusterId
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

  // msi_work_space_resource_id - computed: false, optional: true, required: false
  private _msiWorkSpaceResourceId?: string;
  public get msiWorkSpaceResourceId() {
    return this.getStringAttribute('msi_work_space_resource_id');
  }
  public set msiWorkSpaceResourceId(value: string ) {
    this._msiWorkSpaceResourceId = value;
  }
  public resetMsiWorkSpaceResourceId() {
    this._msiWorkSpaceResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msiWorkSpaceResourceIdInput() {
    return this._msiWorkSpaceResourceId
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

  // instance_pool - computed: false, optional: true, required: false
  private _instancePool?: DataFactoryLinkedServiceAzureDatabricksInstancePool[];
  public get instancePool() {
    return this.interpolationForAttribute('instance_pool') as any;
  }
  public set instancePool(value: DataFactoryLinkedServiceAzureDatabricksInstancePool[] ) {
    this._instancePool = value;
  }
  public resetInstancePool() {
    this._instancePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePoolInput() {
    return this._instancePool
  }

  // key_vault_password - computed: false, optional: true, required: false
  private _keyVaultPassword?: DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword[];
  public get keyVaultPassword() {
    return this.interpolationForAttribute('key_vault_password') as any;
  }
  public set keyVaultPassword(value: DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword[] ) {
    this._keyVaultPassword = value;
  }
  public resetKeyVaultPassword() {
    this._keyVaultPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultPasswordInput() {
    return this._keyVaultPassword
  }

  // new_cluster_config - computed: false, optional: true, required: false
  private _newClusterConfig?: DataFactoryLinkedServiceAzureDatabricksNewClusterConfig[];
  public get newClusterConfig() {
    return this.interpolationForAttribute('new_cluster_config') as any;
  }
  public set newClusterConfig(value: DataFactoryLinkedServiceAzureDatabricksNewClusterConfig[] ) {
    this._newClusterConfig = value;
  }
  public resetNewClusterConfig() {
    this._newClusterConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newClusterConfigInput() {
    return this._newClusterConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataFactoryLinkedServiceAzureDatabricksTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataFactoryLinkedServiceAzureDatabricksTimeouts ) {
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
      access_token: cdktf.stringToTerraform(this._accessToken),
      adb_domain: cdktf.stringToTerraform(this._adbDomain),
      additional_properties: cdktf.hashMapper(cdktf.anyToTerraform)(this._additionalProperties),
      annotations: cdktf.listMapper(cdktf.stringToTerraform)(this._annotations),
      data_factory_name: cdktf.stringToTerraform(this._dataFactoryName),
      description: cdktf.stringToTerraform(this._description),
      existing_cluster_id: cdktf.stringToTerraform(this._existingClusterId),
      integration_runtime_name: cdktf.stringToTerraform(this._integrationRuntimeName),
      msi_work_space_resource_id: cdktf.stringToTerraform(this._msiWorkSpaceResourceId),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      instance_pool: cdktf.listMapper(dataFactoryLinkedServiceAzureDatabricksInstancePoolToTerraform)(this._instancePool),
      key_vault_password: cdktf.listMapper(dataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordToTerraform)(this._keyVaultPassword),
      new_cluster_config: cdktf.listMapper(dataFactoryLinkedServiceAzureDatabricksNewClusterConfigToTerraform)(this._newClusterConfig),
      timeouts: dataFactoryLinkedServiceAzureDatabricksTimeoutsToTerraform(this._timeouts),
    };
  }
}
