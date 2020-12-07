// https://www.terraform.io/docs/providers/azurerm/r/api_management_openid_connect_provider.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementOpenidConnectProviderConfig extends cdktf.TerraformMetaArguments {
  readonly apiManagementName: string;
  readonly clientId: string;
  readonly clientSecret: string;
  readonly description?: string;
  readonly displayName: string;
  readonly metadataEndpoint: string;
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: ApiManagementOpenidConnectProviderTimeouts;
}
export interface ApiManagementOpenidConnectProviderTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function apiManagementOpenidConnectProviderTimeoutsToTerraform(struct?: ApiManagementOpenidConnectProviderTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ApiManagementOpenidConnectProvider extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiManagementOpenidConnectProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_openid_connect_provider',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiManagementName = config.apiManagementName;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._description = config.description;
    this._displayName = config.displayName;
    this._metadataEndpoint = config.metadataEndpoint;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_management_name - computed: false, optional: false, required: true
  private _apiManagementName: string;
  public get apiManagementName() {
    return this.getStringAttribute('api_management_name');
  }
  public set apiManagementName(value: string) {
    this._apiManagementName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiManagementNameInput() {
    return this._apiManagementName
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId: string;
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret: string;
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret
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

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata_endpoint - computed: false, optional: false, required: true
  private _metadataEndpoint: string;
  public get metadataEndpoint() {
    return this.getStringAttribute('metadata_endpoint');
  }
  public set metadataEndpoint(value: string) {
    this._metadataEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataEndpointInput() {
    return this._metadataEndpoint
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementOpenidConnectProviderTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApiManagementOpenidConnectProviderTimeouts ) {
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
      api_management_name: cdktf.stringToTerraform(this._apiManagementName),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      metadata_endpoint: cdktf.stringToTerraform(this._metadataEndpoint),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: apiManagementOpenidConnectProviderTimeoutsToTerraform(this._timeouts),
    };
  }
}
