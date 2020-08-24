// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_function_app.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAzurermFunctionAppConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: DataAzurermFunctionAppTimeouts;
}
export class DataAzurermFunctionAppConnectionString extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataAzurermFunctionAppSiteCredential extends ComplexComputedList {

  // password - computed: true, optional: false, required: true
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: true
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataAzurermFunctionAppTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermFunctionApp extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermFunctionAppConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_function_app',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_service_plan_id - computed: true, optional: false, required: true
  public get appServicePlanId() {
    return this.getStringAttribute('app_service_plan_id');
  }

  // app_settings - computed: true, optional: false, required: true
  public appSettings(key: string): string {
    return new StringMap(this, 'app_settings').lookup(key);
  }

  // connection_string - computed: true, optional: false, required: true
  public connectionString(index: string) {
    return new DataAzurermFunctionAppConnectionString(this, 'connection_string', index);
  }

  // default_hostname - computed: true, optional: false, required: true
  public get defaultHostname() {
    return this.getStringAttribute('default_hostname');
  }

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // outbound_ip_addresses - computed: true, optional: false, required: true
  public get outboundIpAddresses() {
    return this.getStringAttribute('outbound_ip_addresses');
  }

  // possible_outbound_ip_addresses - computed: true, optional: false, required: true
  public get possibleOutboundIpAddresses() {
    return this.getStringAttribute('possible_outbound_ip_addresses');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // site_credential - computed: true, optional: false, required: true
  public siteCredential(index: string) {
    return new DataAzurermFunctionAppSiteCredential(this, 'site_credential', index);
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermFunctionAppTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermFunctionAppTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
