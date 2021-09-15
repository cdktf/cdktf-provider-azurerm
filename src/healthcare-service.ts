// https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthcareServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#access_policy_object_ids HealthcareService#access_policy_object_ids}
  */
  readonly accessPolicyObjectIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#cosmosdb_key_vault_key_versionless_id HealthcareService#cosmosdb_key_vault_key_versionless_id}
  */
  readonly cosmosdbKeyVaultKeyVersionlessId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#cosmosdb_throughput HealthcareService#cosmosdb_throughput}
  */
  readonly cosmosdbThroughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#kind HealthcareService#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#location HealthcareService#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#name HealthcareService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#public_network_access_enabled HealthcareService#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#resource_group_name HealthcareService#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#tags HealthcareService#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * authentication_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#authentication_configuration HealthcareService#authentication_configuration}
  */
  readonly authenticationConfiguration?: HealthcareServiceAuthenticationConfiguration[];
  /**
  * cors_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#cors_configuration HealthcareService#cors_configuration}
  */
  readonly corsConfiguration?: HealthcareServiceCorsConfiguration[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#timeouts HealthcareService#timeouts}
  */
  readonly timeouts?: HealthcareServiceTimeouts;
}
export interface HealthcareServiceAuthenticationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#audience HealthcareService#audience}
  */
  readonly audience?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#authority HealthcareService#authority}
  */
  readonly authority?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#smart_proxy_enabled HealthcareService#smart_proxy_enabled}
  */
  readonly smartProxyEnabled?: boolean | cdktf.IResolvable;
}

function healthcareServiceAuthenticationConfigurationToTerraform(struct?: HealthcareServiceAuthenticationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    authority: cdktf.stringToTerraform(struct!.authority),
    smart_proxy_enabled: cdktf.booleanToTerraform(struct!.smartProxyEnabled),
  }
}

export interface HealthcareServiceCorsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#allow_credentials HealthcareService#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#allowed_headers HealthcareService#allowed_headers}
  */
  readonly allowedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#allowed_methods HealthcareService#allowed_methods}
  */
  readonly allowedMethods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#allowed_origins HealthcareService#allowed_origins}
  */
  readonly allowedOrigins?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#max_age_in_seconds HealthcareService#max_age_in_seconds}
  */
  readonly maxAgeInSeconds?: number;
}

function healthcareServiceCorsConfigurationToTerraform(struct?: HealthcareServiceCorsConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_credentials: cdktf.booleanToTerraform(struct!.allowCredentials),
    allowed_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedHeaders),
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedMethods),
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedOrigins),
    max_age_in_seconds: cdktf.numberToTerraform(struct!.maxAgeInSeconds),
  }
}

export interface HealthcareServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#create HealthcareService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#delete HealthcareService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#read HealthcareService#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html#update HealthcareService#update}
  */
  readonly update?: string;
}

function healthcareServiceTimeoutsToTerraform(struct?: HealthcareServiceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html azurerm_healthcare_service}
*/
export class HealthcareService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_healthcare_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/healthcare_service.html azurerm_healthcare_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthcareServiceConfig
  */
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
    this._cosmosdbKeyVaultKeyVersionlessId = config.cosmosdbKeyVaultKeyVersionlessId;
    this._cosmosdbThroughput = config.cosmosdbThroughput;
    this._kind = config.kind;
    this._location = config.location;
    this._name = config.name;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
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

  // cosmosdb_key_vault_key_versionless_id - computed: false, optional: true, required: false
  private _cosmosdbKeyVaultKeyVersionlessId?: string;
  public get cosmosdbKeyVaultKeyVersionlessId() {
    return this.getStringAttribute('cosmosdb_key_vault_key_versionless_id');
  }
  public set cosmosdbKeyVaultKeyVersionlessId(value: string ) {
    this._cosmosdbKeyVaultKeyVersionlessId = value;
  }
  public resetCosmosdbKeyVaultKeyVersionlessId() {
    this._cosmosdbKeyVaultKeyVersionlessId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosmosdbKeyVaultKeyVersionlessIdInput() {
    return this._cosmosdbKeyVaultKeyVersionlessId
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

  // public_network_access_enabled - computed: false, optional: true, required: false
  private _publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled');
  }
  public set publicNetworkAccessEnabled(value: boolean | cdktf.IResolvable ) {
    this._publicNetworkAccessEnabled = value;
  }
  public resetPublicNetworkAccessEnabled() {
    this._publicNetworkAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessEnabledInput() {
    return this._publicNetworkAccessEnabled
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
      access_policy_object_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._accessPolicyObjectIds),
      cosmosdb_key_vault_key_versionless_id: cdktf.stringToTerraform(this._cosmosdbKeyVaultKeyVersionlessId),
      cosmosdb_throughput: cdktf.numberToTerraform(this._cosmosdbThroughput),
      kind: cdktf.stringToTerraform(this._kind),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      authentication_configuration: cdktf.listMapper(healthcareServiceAuthenticationConfigurationToTerraform)(this._authenticationConfiguration),
      cors_configuration: cdktf.listMapper(healthcareServiceCorsConfigurationToTerraform)(this._corsConfiguration),
      timeouts: healthcareServiceTimeoutsToTerraform(this._timeouts),
    };
  }
}
