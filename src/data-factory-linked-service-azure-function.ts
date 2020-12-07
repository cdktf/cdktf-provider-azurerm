// https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryLinkedServiceAzureFunctionConfig extends cdktf.TerraformMetaArguments {
  readonly additionalProperties?: { [key: string]: string };
  readonly annotations?: string[];
  readonly dataFactoryName: string;
  readonly description?: string;
  readonly integrationRuntimeName?: string;
  readonly key: string;
  readonly name: string;
  readonly parameters?: { [key: string]: string };
  readonly resourceGroupName: string;
  readonly url: string;
  /** timeouts block */
  readonly timeouts?: DataFactoryLinkedServiceAzureFunctionTimeouts;
}
export interface DataFactoryLinkedServiceAzureFunctionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function dataFactoryLinkedServiceAzureFunctionTimeoutsToTerraform(struct?: DataFactoryLinkedServiceAzureFunctionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class DataFactoryLinkedServiceAzureFunction extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataFactoryLinkedServiceAzureFunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_linked_service_azure_function',
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
    this._key = config.key;
    this._name = config.name;
    this._parameters = config.parameters;
    this._resourceGroupName = config.resourceGroupName;
    this._url = config.url;
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

  // key - computed: false, optional: false, required: true
  private _key: string;
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataFactoryLinkedServiceAzureFunctionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataFactoryLinkedServiceAzureFunctionTimeouts ) {
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
      data_factory_name: cdktf.stringToTerraform(this._dataFactoryName),
      description: cdktf.stringToTerraform(this._description),
      integration_runtime_name: cdktf.stringToTerraform(this._integrationRuntimeName),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      url: cdktf.stringToTerraform(this._url),
      timeouts: dataFactoryLinkedServiceAzureFunctionTimeoutsToTerraform(this._timeouts),
    };
  }
}
