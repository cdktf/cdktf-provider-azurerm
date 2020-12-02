// https://www.terraform.io/docs/providers/azurerm/r/mssql_database_extended_auditing_policy_a.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface MssqlDatabaseExtendedAuditingPolicyAConfig extends TerraformMetaArguments {
  readonly databaseId: string;
  readonly retentionInDays?: number;
  readonly storageAccountAccessKey?: string;
  readonly storageAccountAccessKeyIsSecondary?: boolean;
  readonly storageEndpoint: string;
  /** timeouts block */
  readonly timeouts?: MssqlDatabaseExtendedAuditingPolicyTimeouts;
}
export interface MssqlDatabaseExtendedAuditingPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class MssqlDatabaseExtendedAuditingPolicyA extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MssqlDatabaseExtendedAuditingPolicyAConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mssql_database_extended_auditing_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._databaseId = config.databaseId;
    this._retentionInDays = config.retentionInDays;
    this._storageAccountAccessKey = config.storageAccountAccessKey;
    this._storageAccountAccessKeyIsSecondary = config.storageAccountAccessKeyIsSecondary;
    this._storageEndpoint = config.storageEndpoint;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_id - computed: false, optional: false, required: true
  private _databaseId: string;
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // retention_in_days - computed: false, optional: true, required: false
  private _retentionInDays?: number;
  public get retentionInDays() {
    return this.getNumberAttribute('retention_in_days');
  }
  public set retentionInDays(value: number ) {
    this._retentionInDays = value;
  }
  public resetRetentionInDays() {
    this._retentionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInDaysInput() {
    return this._retentionInDays
  }

  // storage_account_access_key - computed: false, optional: true, required: false
  private _storageAccountAccessKey?: string;
  public get storageAccountAccessKey() {
    return this.getStringAttribute('storage_account_access_key');
  }
  public set storageAccountAccessKey(value: string ) {
    this._storageAccountAccessKey = value;
  }
  public resetStorageAccountAccessKey() {
    this._storageAccountAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountAccessKeyInput() {
    return this._storageAccountAccessKey
  }

  // storage_account_access_key_is_secondary - computed: false, optional: true, required: false
  private _storageAccountAccessKeyIsSecondary?: boolean;
  public get storageAccountAccessKeyIsSecondary() {
    return this.getBooleanAttribute('storage_account_access_key_is_secondary');
  }
  public set storageAccountAccessKeyIsSecondary(value: boolean ) {
    this._storageAccountAccessKeyIsSecondary = value;
  }
  public resetStorageAccountAccessKeyIsSecondary() {
    this._storageAccountAccessKeyIsSecondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountAccessKeyIsSecondaryInput() {
    return this._storageAccountAccessKeyIsSecondary
  }

  // storage_endpoint - computed: false, optional: false, required: true
  private _storageEndpoint: string;
  public get storageEndpoint() {
    return this.getStringAttribute('storage_endpoint');
  }
  public set storageEndpoint(value: string) {
    this._storageEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageEndpointInput() {
    return this._storageEndpoint
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MssqlDatabaseExtendedAuditingPolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MssqlDatabaseExtendedAuditingPolicyTimeouts ) {
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
      database_id: this._databaseId,
      retention_in_days: this._retentionInDays,
      storage_account_access_key: this._storageAccountAccessKey,
      storage_account_access_key_is_secondary: this._storageAccountAccessKeyIsSecondary,
      storage_endpoint: this._storageEndpoint,
      timeouts: this._timeouts,
    };
  }
}
