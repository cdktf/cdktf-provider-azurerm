// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_api_management_api.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermApiManagementApiConfig extends cdktf.TerraformMetaArguments {
  readonly apiManagementName: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly revision: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermApiManagementApiTimeouts;
}
export class DataAzurermApiManagementApiSubscriptionKeyParameterNames extends cdktf.ComplexComputedList {

  // header - computed: true, optional: false, required: false
  public get header() {
    return this.getStringAttribute('header');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }
}
export interface DataAzurermApiManagementApiTimeouts {
  readonly read?: string;
}

function dataAzurermApiManagementApiTimeoutsToTerraform(struct?: DataAzurermApiManagementApiTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermApiManagementApi extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermApiManagementApiConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_api',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiManagementName = config.apiManagementName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._revision = config.revision;
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_current - computed: true, optional: false, required: false
  public get isCurrent() {
    return this.getBooleanAttribute('is_current');
  }

  // is_online - computed: true, optional: false, required: false
  public get isOnline() {
    return this.getBooleanAttribute('is_online');
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

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // protocols - computed: true, optional: false, required: false
  public get protocols() {
    return this.getListAttribute('protocols');
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

  // revision - computed: false, optional: false, required: true
  private _revision: string;
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision
  }

  // service_url - computed: true, optional: false, required: false
  public get serviceUrl() {
    return this.getStringAttribute('service_url');
  }

  // soap_pass_through - computed: true, optional: false, required: false
  public get soapPassThrough() {
    return this.getBooleanAttribute('soap_pass_through');
  }

  // subscription_key_parameter_names - computed: true, optional: false, required: false
  public subscriptionKeyParameterNames(index: string) {
    return new DataAzurermApiManagementApiSubscriptionKeyParameterNames(this, 'subscription_key_parameter_names', index);
  }

  // subscription_required - computed: true, optional: false, required: false
  public get subscriptionRequired() {
    return this.getBooleanAttribute('subscription_required');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // version_set_id - computed: true, optional: false, required: false
  public get versionSetId() {
    return this.getStringAttribute('version_set_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermApiManagementApiTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermApiManagementApiTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      revision: cdktf.stringToTerraform(this._revision),
      timeouts: dataAzurermApiManagementApiTimeoutsToTerraform(this._timeouts),
    };
  }
}
