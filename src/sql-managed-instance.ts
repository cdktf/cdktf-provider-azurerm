// https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlManagedInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance.html#administrator_login SqlManagedInstance#administrator_login}
  */
  readonly administratorLogin: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance.html#administrator_login_password SqlManagedInstance#administrator_login_password}
  */
  readonly administratorLoginPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance.html#collation SqlManagedInstance#collation}
  */
  readonly collation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance.html#license_type SqlManagedInstance#license_type}
  */
  readonly licenseType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance.html#location SqlManagedInstance#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance.html#minimum_tls_version SqlManagedInstance#minimum_tls_version}
  */
  readonly minimumTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance.html#name SqlManagedInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance.html#proxy_override SqlManagedInstance#proxy_override}
  */
  readonly proxyOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance.html#public_data_endpoint_enabled SqlManagedInstance#public_data_endpoint_enabled}
  */
  readonly publicDataEndpointEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance.html#resource_group_name SqlManagedInstance#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance.html#sku_name SqlManagedInstance#sku_name}
  */
  readonly skuName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance.html#storage_size_in_gb SqlManagedInstance#storage_size_in_gb}
  */
  readonly storageSizeInGb: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance.html#subnet_id SqlManagedInstance#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance.html#tags SqlManagedInstance#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance.html#timezone_id SqlManagedInstance#timezone_id}
  */
  readonly timezoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance.html#vcores SqlManagedInstance#vcores}
  */
  readonly vcores: number;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance.html#timeouts SqlManagedInstance#timeouts}
  */
  readonly timeouts?: SqlManagedInstanceTimeouts;
}
export interface SqlManagedInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance.html#create SqlManagedInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance.html#delete SqlManagedInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance.html#read SqlManagedInstance#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance.html#update SqlManagedInstance#update}
  */
  readonly update?: string;
}

function sqlManagedInstanceTimeoutsToTerraform(struct?: SqlManagedInstanceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance.html azurerm_sql_managed_instance}
*/
export class SqlManagedInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_sql_managed_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance.html azurerm_sql_managed_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlManagedInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: SqlManagedInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sql_managed_instance',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._administratorLogin = config.administratorLogin;
    this._administratorLoginPassword = config.administratorLoginPassword;
    this._collation = config.collation;
    this._licenseType = config.licenseType;
    this._location = config.location;
    this._minimumTlsVersion = config.minimumTlsVersion;
    this._name = config.name;
    this._proxyOverride = config.proxyOverride;
    this._publicDataEndpointEnabled = config.publicDataEndpointEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._storageSizeInGb = config.storageSizeInGb;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._timezoneId = config.timezoneId;
    this._vcores = config.vcores;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administrator_login - computed: false, optional: false, required: true
  private _administratorLogin: string;
  public get administratorLogin() {
    return this.getStringAttribute('administrator_login');
  }
  public set administratorLogin(value: string) {
    this._administratorLogin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorLoginInput() {
    return this._administratorLogin
  }

  // administrator_login_password - computed: false, optional: false, required: true
  private _administratorLoginPassword: string;
  public get administratorLoginPassword() {
    return this.getStringAttribute('administrator_login_password');
  }
  public set administratorLoginPassword(value: string) {
    this._administratorLoginPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorLoginPasswordInput() {
    return this._administratorLoginPassword
  }

  // collation - computed: false, optional: true, required: false
  private _collation?: string;
  public get collation() {
    return this.getStringAttribute('collation');
  }
  public set collation(value: string ) {
    this._collation = value;
  }
  public resetCollation() {
    this._collation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationInput() {
    return this._collation
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // license_type - computed: false, optional: false, required: true
  private _licenseType: string;
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType
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

  // minimum_tls_version - computed: false, optional: true, required: false
  private _minimumTlsVersion?: string;
  public get minimumTlsVersion() {
    return this.getStringAttribute('minimum_tls_version');
  }
  public set minimumTlsVersion(value: string ) {
    this._minimumTlsVersion = value;
  }
  public resetMinimumTlsVersion() {
    this._minimumTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumTlsVersionInput() {
    return this._minimumTlsVersion
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

  // proxy_override - computed: false, optional: true, required: false
  private _proxyOverride?: string;
  public get proxyOverride() {
    return this.getStringAttribute('proxy_override');
  }
  public set proxyOverride(value: string ) {
    this._proxyOverride = value;
  }
  public resetProxyOverride() {
    this._proxyOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyOverrideInput() {
    return this._proxyOverride
  }

  // public_data_endpoint_enabled - computed: false, optional: true, required: false
  private _publicDataEndpointEnabled?: boolean | cdktf.IResolvable;
  public get publicDataEndpointEnabled() {
    return this.getBooleanAttribute('public_data_endpoint_enabled');
  }
  public set publicDataEndpointEnabled(value: boolean | cdktf.IResolvable ) {
    this._publicDataEndpointEnabled = value;
  }
  public resetPublicDataEndpointEnabled() {
    this._publicDataEndpointEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicDataEndpointEnabledInput() {
    return this._publicDataEndpointEnabled
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

  // sku_name - computed: false, optional: false, required: true
  private _skuName: string;
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName
  }

  // storage_size_in_gb - computed: false, optional: false, required: true
  private _storageSizeInGb: number;
  public get storageSizeInGb() {
    return this.getNumberAttribute('storage_size_in_gb');
  }
  public set storageSizeInGb(value: number) {
    this._storageSizeInGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeInGbInput() {
    return this._storageSizeInGb
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId: string;
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
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

  // timezone_id - computed: false, optional: true, required: false
  private _timezoneId?: string;
  public get timezoneId() {
    return this.getStringAttribute('timezone_id');
  }
  public set timezoneId(value: string ) {
    this._timezoneId = value;
  }
  public resetTimezoneId() {
    this._timezoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneIdInput() {
    return this._timezoneId
  }

  // vcores - computed: false, optional: false, required: true
  private _vcores: number;
  public get vcores() {
    return this.getNumberAttribute('vcores');
  }
  public set vcores(value: number) {
    this._vcores = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcoresInput() {
    return this._vcores
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SqlManagedInstanceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SqlManagedInstanceTimeouts ) {
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
      administrator_login: cdktf.stringToTerraform(this._administratorLogin),
      administrator_login_password: cdktf.stringToTerraform(this._administratorLoginPassword),
      collation: cdktf.stringToTerraform(this._collation),
      license_type: cdktf.stringToTerraform(this._licenseType),
      location: cdktf.stringToTerraform(this._location),
      minimum_tls_version: cdktf.stringToTerraform(this._minimumTlsVersion),
      name: cdktf.stringToTerraform(this._name),
      proxy_override: cdktf.stringToTerraform(this._proxyOverride),
      public_data_endpoint_enabled: cdktf.booleanToTerraform(this._publicDataEndpointEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku_name: cdktf.stringToTerraform(this._skuName),
      storage_size_in_gb: cdktf.numberToTerraform(this._storageSizeInGb),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timezone_id: cdktf.stringToTerraform(this._timezoneId),
      vcores: cdktf.numberToTerraform(this._vcores),
      timeouts: sqlManagedInstanceTimeoutsToTerraform(this._timeouts),
    };
  }
}
