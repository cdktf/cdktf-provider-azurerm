// https://www.terraform.io/docs/providers/azurerm/r/sql_database.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SqlDatabaseConfig extends TerraformMetaArguments {
  readonly collation?: string;
  readonly createMode?: string;
  readonly edition?: string;
  readonly elasticPoolName?: string;
  readonly location: string;
  readonly maxSizeBytes?: string;
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
export interface SqlDatabaseImport {
  readonly administratorLogin: string;
  readonly administratorLoginPassword: string;
  readonly authenticationType: string;
  readonly operationMode?: string;
  readonly storageKey: string;
  readonly storageKeyType: string;
  readonly storageUri: string;
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
export interface SqlDatabaseTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class SqlDatabase extends TerraformResource {

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
    this._location = config.location;
    this._maxSizeBytes = config.maxSizeBytes;
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
    return this._collation ?? this.getStringAttribute('collation');
  }
  public set collation(value: string | undefined) {
    this._collation = value;
  }

  // create_mode - computed: false, optional: true, required: false
  private _createMode?: string;
  public get createMode() {
    return this._createMode;
  }
  public set createMode(value: string | undefined) {
    this._createMode = value;
  }

  // creation_date - computed: true, optional: false, required: true
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // default_secondary_location - computed: true, optional: false, required: true
  public get defaultSecondaryLocation() {
    return this.getStringAttribute('default_secondary_location');
  }

  // edition - computed: true, optional: true, required: false
  private _edition?: string;
  public get edition() {
    return this._edition ?? this.getStringAttribute('edition');
  }
  public set edition(value: string | undefined) {
    this._edition = value;
  }

  // elastic_pool_name - computed: true, optional: true, required: false
  private _elasticPoolName?: string;
  public get elasticPoolName() {
    return this._elasticPoolName ?? this.getStringAttribute('elastic_pool_name');
  }
  public set elasticPoolName(value: string | undefined) {
    this._elasticPoolName = value;
  }

  // encryption - computed: true, optional: false, required: true
  public get encryption() {
    return this.getStringAttribute('encryption');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // max_size_bytes - computed: true, optional: true, required: false
  private _maxSizeBytes?: string;
  public get maxSizeBytes() {
    return this._maxSizeBytes ?? this.getStringAttribute('max_size_bytes');
  }
  public set maxSizeBytes(value: string | undefined) {
    this._maxSizeBytes = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // read_scale - computed: false, optional: true, required: false
  private _readScale?: boolean;
  public get readScale() {
    return this._readScale;
  }
  public set readScale(value: boolean | undefined) {
    this._readScale = value;
  }

  // requested_service_objective_id - computed: true, optional: true, required: false
  private _requestedServiceObjectiveId?: string;
  public get requestedServiceObjectiveId() {
    return this._requestedServiceObjectiveId ?? this.getStringAttribute('requested_service_objective_id');
  }
  public set requestedServiceObjectiveId(value: string | undefined) {
    this._requestedServiceObjectiveId = value;
  }

  // requested_service_objective_name - computed: true, optional: true, required: false
  private _requestedServiceObjectiveName?: string;
  public get requestedServiceObjectiveName() {
    return this._requestedServiceObjectiveName ?? this.getStringAttribute('requested_service_objective_name');
  }
  public set requestedServiceObjectiveName(value: string | undefined) {
    this._requestedServiceObjectiveName = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // restore_point_in_time - computed: true, optional: true, required: false
  private _restorePointInTime?: string;
  public get restorePointInTime() {
    return this._restorePointInTime ?? this.getStringAttribute('restore_point_in_time');
  }
  public set restorePointInTime(value: string | undefined) {
    this._restorePointInTime = value;
  }

  // server_name - computed: false, optional: false, required: true
  private _serverName: string;
  public get serverName() {
    return this._serverName;
  }
  public set serverName(value: string) {
    this._serverName = value;
  }

  // source_database_deletion_date - computed: true, optional: true, required: false
  private _sourceDatabaseDeletionDate?: string;
  public get sourceDatabaseDeletionDate() {
    return this._sourceDatabaseDeletionDate ?? this.getStringAttribute('source_database_deletion_date');
  }
  public set sourceDatabaseDeletionDate(value: string | undefined) {
    this._sourceDatabaseDeletionDate = value;
  }

  // source_database_id - computed: true, optional: true, required: false
  private _sourceDatabaseId?: string;
  public get sourceDatabaseId() {
    return this._sourceDatabaseId ?? this.getStringAttribute('source_database_id');
  }
  public set sourceDatabaseId(value: string | undefined) {
    this._sourceDatabaseId = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // zone_redundant - computed: false, optional: true, required: false
  private _zoneRedundant?: boolean;
  public get zoneRedundant() {
    return this._zoneRedundant;
  }
  public set zoneRedundant(value: boolean | undefined) {
    this._zoneRedundant = value;
  }

  // import - computed: false, optional: true, required: false
  private _import?: SqlDatabaseImport[];
  public get import() {
    return this._import;
  }
  public set import(value: SqlDatabaseImport[] | undefined) {
    this._import = value;
  }

  // threat_detection_policy - computed: false, optional: true, required: false
  private _threatDetectionPolicy?: SqlDatabaseThreatDetectionPolicy[];
  public get threatDetectionPolicy() {
    return this._threatDetectionPolicy;
  }
  public set threatDetectionPolicy(value: SqlDatabaseThreatDetectionPolicy[] | undefined) {
    this._threatDetectionPolicy = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SqlDatabaseTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SqlDatabaseTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collation: this._collation,
      create_mode: this._createMode,
      edition: this._edition,
      elastic_pool_name: this._elasticPoolName,
      location: this._location,
      max_size_bytes: this._maxSizeBytes,
      name: this._name,
      read_scale: this._readScale,
      requested_service_objective_id: this._requestedServiceObjectiveId,
      requested_service_objective_name: this._requestedServiceObjectiveName,
      resource_group_name: this._resourceGroupName,
      restore_point_in_time: this._restorePointInTime,
      server_name: this._serverName,
      source_database_deletion_date: this._sourceDatabaseDeletionDate,
      source_database_id: this._sourceDatabaseId,
      tags: this._tags,
      zone_redundant: this._zoneRedundant,
      import: this._import,
      threat_detection_policy: this._threatDetectionPolicy,
      timeouts: this._timeouts,
    };
  }
}
