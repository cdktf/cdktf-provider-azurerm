// https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface HealthcareServiceConfig extends TerraformMetaArguments {
  readonly accessPolicyObjectIds?: string[];
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

  // access_policy_object_ids - computed: false, optional: true, required: false
  private _accessPolicyObjectIds?: string[];
  public get accessPolicyObjectIds() {
    return this.getListAttribute('access_policy_object_ids');
  }
  public set accessPolicyObjectIds(value: string[] ) {
    this._accessPolicyObjectIds = value;
  }
  public resetAccessPolicyObjectIds() {
    this._accessPolicyObjectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyObjectIdsInput() {
    return this._accessPolicyObjectIds
  }

  // cosmosdb_throughput - computed: false, optional: true, required: false
  private _cosmosdbThroughput?: number;
  public get cosmosdbThroughput() {
    return this.getNumberAttribute('cosmosdb_throughput');
  }
  public set cosmosdbThroughput(value: number ) {
    this._cosmosdbThroughput = value;
  }
  public resetCosmosdbThroughput() {
    this._cosmosdbThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosmosdbThroughputInput() {
    return this._cosmosdbThroughput
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string;
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string ) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // authentication_configuration - computed: false, optional: true, required: false
  private _authenticationConfiguration?: HealthcareServiceAuthenticationConfiguration[];
  public get authenticationConfiguration() {
    return this.interpolationForAttribute('authentication_configuration') as any;
  }
  public set authenticationConfiguration(value: HealthcareServiceAuthenticationConfiguration[] ) {
    this._authenticationConfiguration = value;
  }
  public resetAuthenticationConfiguration() {
    this._authenticationConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationConfigurationInput() {
    return this._authenticationConfiguration
  }

  // cors_configuration - computed: false, optional: true, required: false
  private _corsConfiguration?: HealthcareServiceCorsConfiguration[];
  public get corsConfiguration() {
    return this.interpolationForAttribute('cors_configuration') as any;
  }
  public set corsConfiguration(value: HealthcareServiceCorsConfiguration[] ) {
    this._corsConfiguration = value;
  }
  public resetCorsConfiguration() {
    this._corsConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsConfigurationInput() {
    return this._corsConfiguration
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: HealthcareServiceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: HealthcareServiceTimeouts ) {
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
