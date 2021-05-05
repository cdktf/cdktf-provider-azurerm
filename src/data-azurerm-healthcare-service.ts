// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_healthcare_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermHealthcareServiceConfig extends cdktf.TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermHealthcareServiceTimeouts;
}
export class DataAzurermHealthcareServiceAuthenticationConfiguration extends cdktf.ComplexComputedList {

  // audience - computed: true, optional: false, required: false
  public get audience() {
    return this.getStringAttribute('audience');
  }

  // authority - computed: true, optional: false, required: false
  public get authority() {
    return this.getStringAttribute('authority');
  }

  // smart_proxy_enabled - computed: true, optional: false, required: false
  public get smartProxyEnabled() {
    return this.getBooleanAttribute('smart_proxy_enabled');
  }
}
export class DataAzurermHealthcareServiceCorsConfiguration extends cdktf.ComplexComputedList {

  // allow_credentials - computed: true, optional: false, required: false
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials');
  }

  // allowed_headers - computed: true, optional: false, required: false
  public get allowedHeaders() {
    return this.getListAttribute('allowed_headers');
  }

  // allowed_methods - computed: true, optional: false, required: false
  public get allowedMethods() {
    return this.getListAttribute('allowed_methods');
  }

  // allowed_origins - computed: true, optional: false, required: false
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }

  // max_age_in_seconds - computed: true, optional: false, required: false
  public get maxAgeInSeconds() {
    return this.getNumberAttribute('max_age_in_seconds');
  }
}
export interface DataAzurermHealthcareServiceTimeouts {
  readonly read?: string;
}

function dataAzurermHealthcareServiceTimeoutsToTerraform(struct?: DataAzurermHealthcareServiceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermHealthcareService extends cdktf.TerraformDataSource {

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

  // access_policy_object_ids - computed: true, optional: false, required: false
  public get accessPolicyObjectIds() {
    return this.getListAttribute('access_policy_object_ids');
  }

  // authentication_configuration - computed: true, optional: false, required: false
  public authenticationConfiguration(index: string) {
    return new DataAzurermHealthcareServiceAuthenticationConfiguration(this, 'authentication_configuration', index);
  }

  // cors_configuration - computed: true, optional: false, required: false
  public corsConfiguration(index: string) {
    return new DataAzurermHealthcareServiceCorsConfiguration(this, 'cors_configuration', index);
  }

  // cosmosdb_key_vault_key_versionless_id - computed: true, optional: false, required: false
  public get cosmosdbKeyVaultKeyVersionlessId() {
    return this.getStringAttribute('cosmosdb_key_vault_key_versionless_id');
  }

  // cosmosdb_throughput - computed: true, optional: false, required: false
  public get cosmosdbThroughput() {
    return this.getNumberAttribute('cosmosdb_throughput');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermHealthcareServiceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermHealthcareServiceTimeouts ) {
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
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermHealthcareServiceTimeoutsToTerraform(this._timeouts),
    };
  }
}
