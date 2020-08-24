// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_api_management_api.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAzurermApiManagementApiConfig extends TerraformMetaArguments {
  readonly apiManagementName: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly revision: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermApiManagementApiTimeouts;
}
export class DataAzurermApiManagementApiSubscriptionKeyParameterNames extends ComplexComputedList {

  // header - computed: true, optional: false, required: true
  public get header() {
    return this.getStringAttribute('header');
  }

  // query - computed: true, optional: false, required: true
  public get query() {
    return this.getStringAttribute('query');
  }
}
export interface DataAzurermApiManagementApiTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermApiManagementApi extends TerraformDataSource {

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
    return this._apiManagementName;
  }
  public set apiManagementName(value: string) {
    this._apiManagementName = value;
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // is_current - computed: true, optional: false, required: true
  public get isCurrent() {
    return this.getBooleanAttribute('is_current');
  }

  // is_online - computed: true, optional: false, required: true
  public get isOnline() {
    return this.getBooleanAttribute('is_online');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // protocols - computed: true, optional: false, required: true
  public get protocols() {
    return this.getListAttribute('protocols');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // revision - computed: false, optional: false, required: true
  private _revision: string;
  public get revision() {
    return this._revision;
  }
  public set revision(value: string) {
    this._revision = value;
  }

  // service_url - computed: true, optional: false, required: true
  public get serviceUrl() {
    return this.getStringAttribute('service_url');
  }

  // soap_pass_through - computed: true, optional: false, required: true
  public get soapPassThrough() {
    return this.getBooleanAttribute('soap_pass_through');
  }

  // subscription_key_parameter_names - computed: true, optional: false, required: true
  public subscriptionKeyParameterNames(index: string) {
    return new DataAzurermApiManagementApiSubscriptionKeyParameterNames(this, 'subscription_key_parameter_names', index);
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }

  // version_set_id - computed: true, optional: false, required: true
  public get versionSetId() {
    return this.getStringAttribute('version_set_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermApiManagementApiTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermApiManagementApiTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_management_name: this._apiManagementName,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      revision: this._revision,
      timeouts: this._timeouts,
    };
  }
}
