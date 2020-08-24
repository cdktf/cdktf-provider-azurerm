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
  readonly servicePrincipalId: string;
  readonly servicePrincipalKey: string;
  readonly tenant: string;
  readonly url: string;
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
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string };
  public get additionalProperties() {
    return this._additionalProperties;
  }
  public set additionalProperties(value: { [key: string]: string } | undefined) {
    this._additionalProperties = value;
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: string[];
  public get annotations() {
    return this._annotations;
  }
  public set annotations(value: string[] | undefined) {
    this._annotations = value;
  }

  // data_factory_name - computed: false, optional: false, required: true
  private _dataFactoryName: string;
  public get dataFactoryName() {
    return this._dataFactoryName;
  }
  public set dataFactoryName(value: string) {
    this._dataFactoryName = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // integration_runtime_name - computed: false, optional: true, required: false
  private _integrationRuntimeName?: string;
  public get integrationRuntimeName() {
    return this._integrationRuntimeName;
  }
  public set integrationRuntimeName(value: string | undefined) {
    this._integrationRuntimeName = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string };
  public get parameters() {
    return this._parameters;
  }
  public set parameters(value: { [key: string]: string } | undefined) {
    this._parameters = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // service_principal_id - computed: false, optional: false, required: true
  private _servicePrincipalId: string;
  public get servicePrincipalId() {
    return this._servicePrincipalId;
  }
  public set servicePrincipalId(value: string) {
    this._servicePrincipalId = value;
  }

  // service_principal_key - computed: false, optional: false, required: true
  private _servicePrincipalKey: string;
  public get servicePrincipalKey() {
    return this._servicePrincipalKey;
  }
  public set servicePrincipalKey(value: string) {
    this._servicePrincipalKey = value;
  }

  // tenant - computed: false, optional: false, required: true
  private _tenant: string;
  public get tenant() {
    return this._tenant;
  }
  public set tenant(value: string) {
    this._tenant = value;
  }

  // url - computed: false, optional: false, required: true
  private _url: string;
  public get url() {
    return this._url;
  }
  public set url(value: string) {
    this._url = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataFactoryLinkedServiceDataLakeStorageGen2Timeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataFactoryLinkedServiceDataLakeStorageGen2Timeouts | undefined) {
    this._timeouts = value;
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
      timeouts: this._timeouts,
    };
  }
}
