// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_healthcare_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermHealthcareServiceConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermHealthcareServiceTimeouts;
}
export class DataAzurermHealthcareServiceAuthenticationConfiguration extends ComplexComputedList {

  // audience - computed: true, optional: false, required: true
  public get audience() {
    return this.getStringAttribute('audience');
  }

  // authority - computed: true, optional: false, required: true
  public get authority() {
    return this.getStringAttribute('authority');
  }

  // smart_proxy_enabled - computed: true, optional: false, required: true
  public get smartProxyEnabled() {
    return this.getBooleanAttribute('smart_proxy_enabled');
  }
}
export class DataAzurermHealthcareServiceCorsConfiguration extends ComplexComputedList {

  // allow_credentials - computed: true, optional: false, required: true
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials');
  }

  // allowed_headers - computed: true, optional: false, required: true
  public get allowedHeaders() {
    return this.getListAttribute('allowed_headers');
  }

  // allowed_methods - computed: true, optional: false, required: true
  public get allowedMethods() {
    return this.getListAttribute('allowed_methods');
  }

  // allowed_origins - computed: true, optional: false, required: true
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }

  // max_age_in_seconds - computed: true, optional: false, required: true
  public get maxAgeInSeconds() {
    return this.getNumberAttribute('max_age_in_seconds');
  }
}
export interface DataAzurermHealthcareServiceTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermHealthcareService extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermHealthcareServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_healthcare_service',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy_object_ids - computed: true, optional: false, required: true
  public get accessPolicyObjectIds() {
    return this.getListAttribute('access_policy_object_ids');
  }

  // authentication_configuration - computed: true, optional: false, required: true
  public authenticationConfiguration(index: string) {
    return new DataAzurermHealthcareServiceAuthenticationConfiguration(this, 'authentication_configuration', index);
  }

  // cors_configuration - computed: true, optional: false, required: true
  public corsConfiguration(index: string) {
    return new DataAzurermHealthcareServiceCorsConfiguration(this, 'cors_configuration', index);
  }

  // cosmosdb_throughput - computed: true, optional: false, required: true
  public get cosmosdbThroughput() {
    return this.getNumberAttribute('cosmosdb_throughput');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kind - computed: true, optional: false, required: true
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // tags - computed: true, optional: false, required: true
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermHealthcareServiceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermHealthcareServiceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
