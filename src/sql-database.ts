// https://www.terraform.io/docs/providers/azurerm/r/sql_database.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlDatabaseConfig extends cdktf.TerraformMetaArguments {
  readonly collation?: string;
  readonly createMode?: string;
  readonly edition?: string;
  readonly elasticPoolName?: string;
  readonly extendedAuditingPolicy?: SqlDatabaseExtendedAuditingPolicy[];
  readonly location: string;
  readonly maxSizeBytes?: string;
  readonly maxSizeGb?: string;
  readonly name: string;
  readonly readScale?: boolean;
  readonly requestedServiceObjectiveId?: string;
  readonly requestedServiceObjectiveName?: string;
  readonly resourceGroupName: string;
  readonly restorePointInTime?: string;
  readonly serverName: string;
  readonly sourceDatabaseDeletionDate?: string;
  readonly sourceDatabaseId?: string;
  readonly tags?: { [key: string]: string };
  readonly zoneRedundant?: boolean;
  /** import block */
  readonly import?: SqlDatabaseImport[];
  /** threat_detection_policy block */
  readonly threatDetectionPolicy?: SqlDatabaseThreatDetectionPolicy[];
  /** timeouts block */
  readonly timeouts?: SqlDatabaseTimeouts;
}
export interface SqlDatabaseExtendedAuditingPolicy {
  readonly retentionInDays?: number;
  readonly storageAccountAccessKey?: string;
  readonly storageAccountAccessKeyIsSecondary?: boolean;
  readonly storageEndpoint?: string;
}

function sqlDatabaseExtendedAuditingPolicyToTerraform(struct?: SqlDatabaseExtendedAuditingPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    retention_in_days: cdktf.numberToTerraform(struct!.retentionInDays),
    storage_account_access_key: cdktf.stringToTerraform(struct!.storageAccountAccessKey),
    storage_account_access_key_is_secondary: cdktf.booleanToTerraform(struct!.storageAccountAccessKeyIsSecondary),
    storage_endpoint: cdktf.stringToTerraform(struct!.storageEndpoint),
  }
}

export interface SqlDatabaseImport {
  readonly administratorLogin: string;
  readonly administratorLoginPassword: string;
  readonly authenticationType: string;
  readonly operationMode?: string;
  readonly storageKey: string;
  readonly storageKeyType: string;
  readonly storageUri: string;
}

function sqlDatabaseImportToTerraform(struct?: SqlDatabaseImport): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    administrator_login: cdktf.stringToTerraform(struct!.administratorLogin),
    administrator_login_password: cdktf.stringToTerraform(struct!.administratorLoginPassword),
    authentication_type: cdktf.stringToTerraform(struct!.authenticationType),
    operation_mode: cdktf.stringToTerraform(struct!.operationMode),
    storage_key: cdktf.stringToTerraform(struct!.storageKey),
    storage_key_type: cdktf.stringToTerraform(struct!.storageKeyType),
    storage_uri: cdktf.stringToTerraform(struct!.storageUri),
  }
}

export interface SqlDatabaseThreatDetectionPolicy {
  readonly disabledAlerts?: string[];
  readonly emailAccountAdmins?: string;
  readonly emailAddresses?: string[];
  readonly retentionDays?: number;
  readonly state?: string;
  readonly storageAccountAccessKey?: string;
  readonly storageEndpoint?: string;
  readonly useServerDefault?: string;
}

function sqlDatabaseThreatDetectionPolicyToTerraform(struct?: SqlDatabaseThreatDetectionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disabled_alerts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.disabledAlerts),
    email_account_admins: cdktf.stringToTerraform(struct!.emailAccountAdmins),
    email_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.emailAddresses),
    retention_days: cdktf.numberToTerraform(struct!.retentionDays),
    state: cdktf.stringToTerraform(struct!.state),
    storage_account_access_key: cdktf.stringToTerraform(struct!.storageAccountAccessKey),
    storage_endpoint: cdktf.stringToTerraform(struct!.storageEndpoint),
    use_server_default: cdktf.stringToTerraform(struct!.useServerDefault),
  }
}

export interface SqlDatabaseTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function sqlDatabaseTimeoutsToTerraform(struct?: SqlDatabaseTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class SqlDatabase extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SqlDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sql_database',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._collation = config.collation;
    this._createMode = config.createMode;
    this._edition = config.edition;
    this._elasticPoolName = config.elasticPoolName;
    this._extendedAuditingPolicy = config.extendedAuditingPolicy;
    this._location = config.location;
    this._maxSizeBytes = config.maxSizeBytes;
    this._maxSizeGb = config.maxSizeGb;
    this._name = config.name;
    this._readScale = config.readScale;
    this._requestedServiceObjectiveId = config.requestedServiceObjectiveId;
    this._requestedServiceObjectiveName = config.requestedServiceObjectiveName;
    this._resourceGroupName = config.resourceGroupName;
    this._restorePointInTime = config.restorePointInTime;
    this._serverName = config.serverName;
    this._sourceDatabaseDeletionDate = config.sourceDatabaseDeletionDate;
    this._sourceDatabaseId = config.sourceDatabaseId;
    this._tags = config.tags;
    this._zoneRedundant = config.zoneRedundant;
    this._import = config.import;
    this._threatDetectionPolicy = config.threatDetectionPolicy;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collation - computed: true, optional: true, required: false
  private _collation?: string;
  public get collation() {
    return this.getStringAttribute('collation');
  }
  public set collation(value: string) {
    this._collation = value;
  }
  public resetCollation() {
    this._collation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationInput() {
    return this._collation
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

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // default_secondary_location - computed: true, optional: false, required: false
  public get defaultSecondaryLocation() {
    return this.getStringAttribute('default_secondary_location');
  }

  // edition - computed: true, optional: true, required: false
  private _edition?: string;
  public get edition() {
    return this.getStringAttribute('edition');
  }
  public set edition(value: string) {
    this._edition = value;
  }
  public resetEdition() {
    this._edition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editionInput() {
    return this._edition
  }

  // elastic_pool_name - computed: true, optional: true, required: false
  private _elasticPoolName?: string;
  public get elasticPoolName() {
    return this.getStringAttribute('elastic_pool_name');
  }
  public set elasticPoolName(value: string) {
    this._elasticPoolName = value;
  }
  public resetElasticPoolName() {
    this._elasticPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticPoolNameInput() {
    return this._elasticPoolName
  }

  // encryption - computed: true, optional: false, required: false
  public get encryption() {
    return this.getStringAttribute('encryption');
  }

  // extended_auditing_policy - computed: true, optional: true, required: false
  private _extendedAuditingPolicy?: SqlDatabaseExtendedAuditingPolicy[]
  public get extendedAuditingPolicy(): SqlDatabaseExtendedAuditingPolicy[] {
    return this.interpolationForAttribute('extended_auditing_policy') as any; // Getting the computed value is not yet implemented
  }
  public set extendedAuditingPolicy(value: SqlDatabaseExtendedAuditingPolicy[]) {
    this._extendedAuditingPolicy = value;
  }
  public resetExtendedAuditingPolicy() {
    this._extendedAuditingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedAuditingPolicyInput() {
    return this._extendedAuditingPolicy
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

  // max_size_bytes - computed: true, optional: true, required: false
  private _maxSizeBytes?: string;
  public get maxSizeBytes() {
    return this.getStringAttribute('max_size_bytes');
  }
  public set maxSizeBytes(value: string) {
    this._maxSizeBytes = value;
  }
  public resetMaxSizeBytes() {
    this._maxSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeBytesInput() {
    return this._maxSizeBytes
  }

  // max_size_gb - computed: true, optional: true, required: false
  private _maxSizeGb?: string;
  public get maxSizeGb() {
    return this.getStringAttribute('max_size_gb');
  }
  public set maxSizeGb(value: string) {
    this._maxSizeGb = value;
  }
  public resetMaxSizeGb() {
    this._maxSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeGbInput() {
    return this._maxSizeGb
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

  // read_scale - computed: false, optional: true, required: false
  private _readScale?: boolean;
  public get readScale() {
    return this.getBooleanAttribute('read_scale');
  }
  public set readScale(value: boolean ) {
    this._readScale = value;
  }
  public resetReadScale() {
    this._readScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readScaleInput() {
    return this._readScale
  }

  // requested_service_objective_id - computed: true, optional: true, required: false
  private _requestedServiceObjectiveId?: string;
  public get requestedServiceObjectiveId() {
    return this.getStringAttribute('requested_service_objective_id');
  }
  public set requestedServiceObjectiveId(value: string) {
    this._requestedServiceObjectiveId = value;
  }
  public resetRequestedServiceObjectiveId() {
    this._requestedServiceObjectiveId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedServiceObjectiveIdInput() {
    return this._requestedServiceObjectiveId
  }

  // requested_service_objective_name - computed: true, optional: true, required: false
  private _requestedServiceObjectiveName?: string;
  public get requestedServiceObjectiveName() {
    return this.getStringAttribute('requested_service_objective_name');
  }
  public set requestedServiceObjectiveName(value: string) {
    this._requestedServiceObjectiveName = value;
  }
  public resetRequestedServiceObjectiveName() {
    this._requestedServiceObjectiveName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedServiceObjectiveNameInput() {
    return this._requestedServiceObjectiveName
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

  // restore_point_in_time - computed: true, optional: true, required: false
  private _restorePointInTime?: string;
  public get restorePointInTime() {
    return this.getStringAttribute('restore_point_in_time');
  }
  public set restorePointInTime(value: string) {
    this._restorePointInTime = value;
  }
  public resetRestorePointInTime() {
    this._restorePointInTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restorePointInTimeInput() {
    return this._restorePointInTime
  }

  // server_name - computed: false, optional: false, required: true
  private _serverName: string;
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName
  }

  // source_database_deletion_date - computed: true, optional: true, required: false
  private _sourceDatabaseDeletionDate?: string;
  public get sourceDatabaseDeletionDate() {
    return this.getStringAttribute('source_database_deletion_date');
  }
  public set sourceDatabaseDeletionDate(value: string) {
    this._sourceDatabaseDeletionDate = value;
  }
  public resetSourceDatabaseDeletionDate() {
    this._sourceDatabaseDeletionDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDatabaseDeletionDateInput() {
    return this._sourceDatabaseDeletionDate
  }

  // source_database_id - computed: true, optional: true, required: false
  private _sourceDatabaseId?: string;
  public get sourceDatabaseId() {
    return this.getStringAttribute('source_database_id');
  }
  public set sourceDatabaseId(value: string) {
    this._sourceDatabaseId = value;
  }
  public resetSourceDatabaseId() {
    this._sourceDatabaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDatabaseIdInput() {
    return this._sourceDatabaseId
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

  // zone_redundant - computed: false, optional: true, required: false
  private _zoneRedundant?: boolean;
  public get zoneRedundant() {
    return this.getBooleanAttribute('zone_redundant');
  }
  public set zoneRedundant(value: boolean ) {
    this._zoneRedundant = value;
  }
  public resetZoneRedundant() {
    this._zoneRedundant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneRedundantInput() {
    return this._zoneRedundant
  }

  // import - computed: false, optional: true, required: false
  private _import?: SqlDatabaseImport[];
  public get import() {
    return this.interpolationForAttribute('import') as any;
  }
  public set import(value: SqlDatabaseImport[] ) {
    this._import = value;
  }
  public resetImport() {
    this._import = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importInput() {
    return this._import
  }

  // threat_detection_policy - computed: false, optional: true, required: false
  private _threatDetectionPolicy?: SqlDatabaseThreatDetectionPolicy[];
  public get threatDetectionPolicy() {
    return this.interpolationForAttribute('threat_detection_policy') as any;
  }
  public set threatDetectionPolicy(value: SqlDatabaseThreatDetectionPolicy[] ) {
    this._threatDetectionPolicy = value;
  }
  public resetThreatDetectionPolicy() {
    this._threatDetectionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatDetectionPolicyInput() {
    return this._threatDetectionPolicy
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SqlDatabaseTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SqlDatabaseTimeouts ) {
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
      collation: cdktf.stringToTerraform(this._collation),
      create_mode: cdktf.stringToTerraform(this._createMode),
      edition: cdktf.stringToTerraform(this._edition),
      elastic_pool_name: cdktf.stringToTerraform(this._elasticPoolName),
      extended_auditing_policy: cdktf.listMapper(sqlDatabaseExtendedAuditingPolicyToTerraform)(this._extendedAuditingPolicy),
      location: cdktf.stringToTerraform(this._location),
      max_size_bytes: cdktf.stringToTerraform(this._maxSizeBytes),
      max_size_gb: cdktf.stringToTerraform(this._maxSizeGb),
      name: cdktf.stringToTerraform(this._name),
      read_scale: cdktf.booleanToTerraform(this._readScale),
      requested_service_objective_id: cdktf.stringToTerraform(this._requestedServiceObjectiveId),
      requested_service_objective_name: cdktf.stringToTerraform(this._requestedServiceObjectiveName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      restore_point_in_time: cdktf.stringToTerraform(this._restorePointInTime),
      server_name: cdktf.stringToTerraform(this._serverName),
      source_database_deletion_date: cdktf.stringToTerraform(this._sourceDatabaseDeletionDate),
      source_database_id: cdktf.stringToTerraform(this._sourceDatabaseId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      zone_redundant: cdktf.booleanToTerraform(this._zoneRedundant),
      import: cdktf.listMapper(sqlDatabaseImportToTerraform)(this._import),
      threat_detection_policy: cdktf.listMapper(sqlDatabaseThreatDetectionPolicyToTerraform)(this._threatDetectionPolicy),
      timeouts: sqlDatabaseTimeoutsToTerraform(this._timeouts),
    };
  }
}
