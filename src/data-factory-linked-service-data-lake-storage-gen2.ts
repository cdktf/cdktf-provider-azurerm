// https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_data_lake_storage_gen2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataFactoryLinkedServiceDataLakeStorageGen2Config extends TerraformMetaArguments {
  readonly additionalProperties?: { [key: string]: string };
  readonly annotations?: string[];
  readonly dataFactoryName: string;
  readonly description?: string;
  readonly integrationRuntimeName?: string;
  readonly name: string;
  readonly parameters?: { [key: string]: string };
  readonly resourceGroupName: string;
  readonly servicePrincipalId?: string;
  readonly servicePrincipalKey?: string;
  readonly tenant?: string;
  readonly url: string;
  readonly useManagedIdentity?: boolean;
  /** timeouts block */
  readonly timeouts?: DataFactoryLinkedServiceDataLakeStorageGen2Timeouts;
}
export interface DataFactoryLinkedServiceDataLakeStorageGen2Timeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class DataFactoryLinkedServiceDataLakeStorageGen2 extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataFactoryLinkedServiceDataLakeStorageGen2Config) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_linked_service_data_lake_storage_gen2',
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
    this._dataFactoryName = config.dataFactoryName;
    this._description = config.description;
    this._integrationRuntimeName = config.integrationRuntimeName;
    this._name = config.name;
    this._parameters = config.parameters;
    this._resourceGroupName = config.resourceGroupName;
    this._servicePrincipalId = config.servicePrincipalId;
    this._servicePrincipalKey = config.servicePrincipalKey;
    this._tenant = config.tenant;
    this._url = config.url;
    this._useManagedIdentity = config.useManagedIdentity;
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string;
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string ) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant
  }

  // url - computed: false, optional: false, required: true
  private _url: string;
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataFactoryLinkedServiceDataLakeStorageGen2Timeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataFactoryLinkedServiceDataLakeStorageGen2Timeouts ) {
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
      additional_properties: this._additionalProperties,
      annotations: this._annotations,
      data_factory_name: this._dataFactoryName,
      description: this._description,
      integration_runtime_name: this._integrationRuntimeName,
      name: this._name,
      parameters: this._parameters,
      resource_group_name: this._resourceGroupName,
      service_principal_id: this._servicePrincipalId,
      service_principal_key: this._servicePrincipalKey,
      tenant: this._tenant,
      url: this._url,
      use_managed_identity: this._useManagedIdentity,
      timeouts: this._timeouts,
    };
  }
}
