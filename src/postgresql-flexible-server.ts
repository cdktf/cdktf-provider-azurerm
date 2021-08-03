// https://www.terraform.io/docs/providers/azurerm/r/postgresql_flexible_server.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PostgresqlFlexibleServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_flexible_server.html#administrator_login PostgresqlFlexibleServer#administrator_login}
  */
  readonly administratorLogin?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_flexible_server.html#administrator_password PostgresqlFlexibleServer#administrator_password}
  */
  readonly administratorPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_flexible_server.html#backup_retention_days PostgresqlFlexibleServer#backup_retention_days}
  */
  readonly backupRetentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_flexible_server.html#create_mode PostgresqlFlexibleServer#create_mode}
  */
  readonly createMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_flexible_server.html#delegated_subnet_id PostgresqlFlexibleServer#delegated_subnet_id}
  */
  readonly delegatedSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_flexible_server.html#location PostgresqlFlexibleServer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_flexible_server.html#name PostgresqlFlexibleServer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_flexible_server.html#point_in_time_restore_time_in_utc PostgresqlFlexibleServer#point_in_time_restore_time_in_utc}
  */
  readonly pointInTimeRestoreTimeInUtc?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_flexible_server.html#private_dns_zone_id PostgresqlFlexibleServer#private_dns_zone_id}
  */
  readonly privateDnsZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_flexible_server.html#resource_group_name PostgresqlFlexibleServer#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_flexible_server.html#sku_name PostgresqlFlexibleServer#sku_name}
  */
  readonly skuName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_flexible_server.html#source_server_id PostgresqlFlexibleServer#source_server_id}
  */
  readonly sourceServerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_flexible_server.html#storage_mb PostgresqlFlexibleServer#storage_mb}
  */
  readonly storageMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_flexible_server.html#tags PostgresqlFlexibleServer#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_flexible_server.html#version PostgresqlFlexibleServer#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_flexible_server.html#zone PostgresqlFlexibleServer#zone}
  */
  readonly zone?: string;
  /**
  * high_availability block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_flexible_server.html#high_availability PostgresqlFlexibleServer#high_availability}
  */
  readonly highAvailability?: PostgresqlFlexibleServerHighAvailability[];
  /**
  * maintenance_window block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_flexible_server.html#maintenance_window PostgresqlFlexibleServer#maintenance_window}
  */
  readonly maintenanceWindow?: PostgresqlFlexibleServerMaintenanceWindow[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_flexible_server.html#timeouts PostgresqlFlexibleServer#timeouts}
  */
  readonly timeouts?: PostgresqlFlexibleServerTimeouts;
}
export interface PostgresqlFlexibleServerHighAvailability {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_flexible_server.html#mode PostgresqlFlexibleServer#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_flexible_server.html#standby_availability_zone PostgresqlFlexibleServer#standby_availability_zone}
  */
  readonly standbyAvailabilityZone?: string;
}

function postgresqlFlexibleServerHighAvailabilityToTerraform(struct?: PostgresqlFlexibleServerHighAvailability): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    standby_availability_zone: cdktf.stringToTerraform(struct!.standbyAvailabilityZone),
  }
}

export interface PostgresqlFlexibleServerMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_flexible_server.html#day_of_week PostgresqlFlexibleServer#day_of_week}
  */
  readonly dayOfWeek?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_flexible_server.html#start_hour PostgresqlFlexibleServer#start_hour}
  */
  readonly startHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_flexible_server.html#start_minute PostgresqlFlexibleServer#start_minute}
  */
  readonly startMinute?: number;
}

function postgresqlFlexibleServerMaintenanceWindowToTerraform(struct?: PostgresqlFlexibleServerMaintenanceWindow): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    day_of_week: cdktf.numberToTerraform(struct!.dayOfWeek),
    start_hour: cdktf.numberToTerraform(struct!.startHour),
    start_minute: cdktf.numberToTerraform(struct!.startMinute),
  }
}

export interface PostgresqlFlexibleServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_flexible_server.html#create PostgresqlFlexibleServer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_flexible_server.html#delete PostgresqlFlexibleServer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_flexible_server.html#read PostgresqlFlexibleServer#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_flexible_server.html#update PostgresqlFlexibleServer#update}
  */
  readonly update?: string;
}

function postgresqlFlexibleServerTimeoutsToTerraform(struct?: PostgresqlFlexibleServerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_flexible_server.html azurerm_postgresql_flexible_server}
*/
export class PostgresqlFlexibleServer extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/postgresql_flexible_server.html azurerm_postgresql_flexible_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostgresqlFlexibleServerConfig
  */
  public constructor(scope: Construct, id: string, config: PostgresqlFlexibleServerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_postgresql_flexible_server',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._administratorLogin = config.administratorLogin;
    this._administratorPassword = config.administratorPassword;
    this._backupRetentionDays = config.backupRetentionDays;
    this._createMode = config.createMode;
    this._delegatedSubnetId = config.delegatedSubnetId;
    this._location = config.location;
    this._name = config.name;
    this._pointInTimeRestoreTimeInUtc = config.pointInTimeRestoreTimeInUtc;
    this._privateDnsZoneId = config.privateDnsZoneId;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._sourceServerId = config.sourceServerId;
    this._storageMb = config.storageMb;
    this._tags = config.tags;
    this._version = config.version;
    this._zone = config.zone;
    this._highAvailability = config.highAvailability;
    this._maintenanceWindow = config.maintenanceWindow;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administrator_login - computed: true, optional: true, required: false
  private _administratorLogin?: string;
  public get administratorLogin() {
    return this.getStringAttribute('administrator_login');
  }
  public set administratorLogin(value: string) {
    this._administratorLogin = value;
  }
  public resetAdministratorLogin() {
    this._administratorLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorLoginInput() {
    return this._administratorLogin
  }

  // administrator_password - computed: false, optional: true, required: false
  private _administratorPassword?: string;
  public get administratorPassword() {
    return this.getStringAttribute('administrator_password');
  }
  public set administratorPassword(value: string ) {
    this._administratorPassword = value;
  }
  public resetAdministratorPassword() {
    this._administratorPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorPasswordInput() {
    return this._administratorPassword
  }

  // backup_retention_days - computed: true, optional: true, required: false
  private _backupRetentionDays?: number;
  public get backupRetentionDays() {
    return this.getNumberAttribute('backup_retention_days');
  }
  public set backupRetentionDays(value: number) {
    this._backupRetentionDays = value;
  }
  public resetBackupRetentionDays() {
    this._backupRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionDaysInput() {
    return this._backupRetentionDays
  }

  // cmk_enabled - computed: true, optional: false, required: false
  public get cmkEnabled() {
    return this.getStringAttribute('cmk_enabled');
  }

  // create_mode - computed: false, optional: true, required: false
  private _createMode?: string;
  public get createMode() {
    return this.getStringAttribute('create_mode');
  }
  public set createMode(value: string ) {
    this._createMode = value;
  }
  public resetCreateMode() {
    this._createMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createModeInput() {
    return this._createMode
  }

  // delegated_subnet_id - computed: false, optional: true, required: false
  private _delegatedSubnetId?: string;
  public get delegatedSubnetId() {
    return this.getStringAttribute('delegated_subnet_id');
  }
  public set delegatedSubnetId(value: string ) {
    this._delegatedSubnetId = value;
  }
  public resetDelegatedSubnetId() {
    this._delegatedSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedSubnetIdInput() {
    return this._delegatedSubnetId
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // point_in_time_restore_time_in_utc - computed: false, optional: true, required: false
  private _pointInTimeRestoreTimeInUtc?: string;
  public get pointInTimeRestoreTimeInUtc() {
    return this.getStringAttribute('point_in_time_restore_time_in_utc');
  }
  public set pointInTimeRestoreTimeInUtc(value: string ) {
    this._pointInTimeRestoreTimeInUtc = value;
  }
  public resetPointInTimeRestoreTimeInUtc() {
    this._pointInTimeRestoreTimeInUtc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointInTimeRestoreTimeInUtcInput() {
    return this._pointInTimeRestoreTimeInUtc
  }

  // private_dns_zone_id - computed: true, optional: true, required: false
  private _privateDnsZoneId?: string;
  public get privateDnsZoneId() {
    return this.getStringAttribute('private_dns_zone_id');
  }
  public set privateDnsZoneId(value: string) {
    this._privateDnsZoneId = value;
  }
  public resetPrivateDnsZoneId() {
    this._privateDnsZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateDnsZoneIdInput() {
    return this._privateDnsZoneId
  }

  // public_network_access_enabled - computed: true, optional: false, required: false
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled');
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

  // sku_name - computed: true, optional: true, required: false
  private _skuName?: string;
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  public resetSkuName() {
    this._skuName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName
  }

  // source_server_id - computed: false, optional: true, required: false
  private _sourceServerId?: string;
  public get sourceServerId() {
    return this.getStringAttribute('source_server_id');
  }
  public set sourceServerId(value: string ) {
    this._sourceServerId = value;
  }
  public resetSourceServerId() {
    this._sourceServerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceServerIdInput() {
    return this._sourceServerId
  }

  // storage_mb - computed: true, optional: true, required: false
  private _storageMb?: number;
  public get storageMb() {
    return this.getNumberAttribute('storage_mb');
  }
  public set storageMb(value: number) {
    this._storageMb = value;
  }
  public resetStorageMb() {
    this._storageMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageMbInput() {
    return this._storageMb
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

  // version - computed: true, optional: true, required: false
  private _version?: string;
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string;
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone
  }

  // high_availability - computed: false, optional: true, required: false
  private _highAvailability?: PostgresqlFlexibleServerHighAvailability[];
  public get highAvailability() {
    return this.interpolationForAttribute('high_availability') as any;
  }
  public set highAvailability(value: PostgresqlFlexibleServerHighAvailability[] ) {
    this._highAvailability = value;
  }
  public resetHighAvailability() {
    this._highAvailability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highAvailabilityInput() {
    return this._highAvailability
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow?: PostgresqlFlexibleServerMaintenanceWindow[];
  public get maintenanceWindow() {
    return this.interpolationForAttribute('maintenance_window') as any;
  }
  public set maintenanceWindow(value: PostgresqlFlexibleServerMaintenanceWindow[] ) {
    this._maintenanceWindow = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PostgresqlFlexibleServerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: PostgresqlFlexibleServerTimeouts ) {
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
      administrator_password: cdktf.stringToTerraform(this._administratorPassword),
      backup_retention_days: cdktf.numberToTerraform(this._backupRetentionDays),
      create_mode: cdktf.stringToTerraform(this._createMode),
      delegated_subnet_id: cdktf.stringToTerraform(this._delegatedSubnetId),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      point_in_time_restore_time_in_utc: cdktf.stringToTerraform(this._pointInTimeRestoreTimeInUtc),
      private_dns_zone_id: cdktf.stringToTerraform(this._privateDnsZoneId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku_name: cdktf.stringToTerraform(this._skuName),
      source_server_id: cdktf.stringToTerraform(this._sourceServerId),
      storage_mb: cdktf.numberToTerraform(this._storageMb),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      version: cdktf.stringToTerraform(this._version),
      zone: cdktf.stringToTerraform(this._zone),
      high_availability: cdktf.listMapper(postgresqlFlexibleServerHighAvailabilityToTerraform)(this._highAvailability),
      maintenance_window: cdktf.listMapper(postgresqlFlexibleServerMaintenanceWindowToTerraform)(this._maintenanceWindow),
      timeouts: postgresqlFlexibleServerTimeoutsToTerraform(this._timeouts),
    };
  }
}
