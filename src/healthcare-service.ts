// https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface HealthcareServiceConfig extends TerraformMetaArguments {
  readonly accessPolicyObjectIds: string[];
  readonly cosmosdbThroughput?: number;
  readonly kind?: string;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** authentication_configuration block */
  readonly authenticationConfiguration?: HealthcareServiceAuthenticationConfiguration[];
  /** cors_configuration block */
  readonly corsConfiguration?: HealthcareServiceCorsConfiguration[];
  /** timeouts block */
  readonly timeouts?: HealthcareServiceTimeouts;
}
export interface HealthcareServiceAuthenticationConfiguration {
  readonly audience?: string;
  readonly authority?: string;
  readonly smartProxyEnabled?: boolean;
}
export interface HealthcareServiceCorsConfiguration {
  readonly allowCredentials?: boolean;
  readonly allowedHeaders?: string[];
  readonly allowedMethods?: string[];
  readonly allowedOrigins?: string[];
  readonly maxAgeInSeconds?: number;
}
export interface HealthcareServiceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class HealthcareService extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: HealthcareServiceConfig) {
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
    this._accessPolicyObjectIds = config.accessPolicyObjectIds;
    this._cosmosdbThroughput = config.cosmosdbThroughput;
    this._kind = config.kind;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._authenticationConfiguration = config.authenticationConfiguration;
    this._corsConfiguration = config.corsConfiguration;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy_object_ids - computed: false, optional: false, required: true
  private _accessPolicyObjectIds: string[];
  public get accessPolicyObjectIds() {
    return this._accessPolicyObjectIds;
  }
  public set accessPolicyObjectIds(value: string[]) {
    this._accessPolicyObjectIds = value;
  }

  // cosmosdb_throughput - computed: false, optional: true, required: false
  private _cosmosdbThroughput?: number;
  public get cosmosdbThroughput() {
    return this._cosmosdbThroughput;
  }
  public set cosmosdbThroughput(value: number | undefined) {
    this._cosmosdbThroughput = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string;
  public get kind() {
    return this._kind;
  }
  public set kind(value: string | undefined) {
    this._kind = value;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // authentication_configuration - computed: false, optional: true, required: false
  private _authenticationConfiguration?: HealthcareServiceAuthenticationConfiguration[];
  public get authenticationConfiguration() {
    return this._authenticationConfiguration;
  }
  public set authenticationConfiguration(value: HealthcareServiceAuthenticationConfiguration[] | undefined) {
    this._authenticationConfiguration = value;
  }

  // cors_configuration - computed: false, optional: true, required: false
  private _corsConfiguration?: HealthcareServiceCorsConfiguration[];
  public get corsConfiguration() {
    return this._corsConfiguration;
  }
  public set corsConfiguration(value: HealthcareServiceCorsConfiguration[] | undefined) {
    this._corsConfiguration = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: HealthcareServiceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: HealthcareServiceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_policy_object_ids: this._accessPolicyObjectIds,
      cosmosdb_throughput: this._cosmosdbThroughput,
      kind: this._kind,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      authentication_configuration: this._authenticationConfiguration,
      cors_configuration: this._corsConfiguration,
      timeouts: this._timeouts,
    };
  }
}
