// https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SynapseSqlPoolConfig extends cdktf.TerraformMetaArguments {
  readonly collation?: string;
  readonly createMode?: string;
  readonly dataEncrypted?: boolean;
  readonly name: string;
  readonly recoveryDatabaseId?: string;
  readonly skuName: string;
  readonly synapseWorkspaceId: string;
  readonly tags?: { [key: string]: string };
  /** restore block */
  readonly restore?: SynapseSqlPoolRestore[];
  /** timeouts block */
  readonly timeouts?: SynapseSqlPoolTimeouts;
}
export interface SynapseSqlPoolRestore {
  readonly pointInTime: string;
  readonly sourceDatabaseId: string;
}

function synapseSqlPoolRestoreToTerraform(struct?: SynapseSqlPoolRestore): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    point_in_time: cdktf.stringToTerraform(struct!.pointInTime),
    source_database_id: cdktf.stringToTerraform(struct!.sourceDatabaseId),
  }
}

export interface SynapseSqlPoolTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function synapseSqlPoolTimeoutsToTerraform(struct?: SynapseSqlPoolTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class SynapseSqlPool extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SynapseSqlPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_synapse_sql_pool',
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
    this._dataEncrypted = config.dataEncrypted;
    this._name = config.name;
    this._recoveryDatabaseId = config.recoveryDatabaseId;
    this._skuName = config.skuName;
    this._synapseWorkspaceId = config.synapseWorkspaceId;
    this._tags = config.tags;
    this._restore = config.restore;
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

  // data_encrypted - computed: false, optional: true, required: false
  private _dataEncrypted?: boolean;
  public get dataEncrypted() {
    return this.getBooleanAttribute('data_encrypted');
  }
  public set dataEncrypted(value: boolean ) {
    this._dataEncrypted = value;
  }
  public resetDataEncrypted() {
    this._dataEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEncryptedInput() {
    return this._dataEncrypted
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // recovery_database_id - computed: false, optional: true, required: false
  private _recoveryDatabaseId?: string;
  public get recoveryDatabaseId() {
    return this.getStringAttribute('recovery_database_id');
  }
  public set recoveryDatabaseId(value: string ) {
    this._recoveryDatabaseId = value;
  }
  public resetRecoveryDatabaseId() {
    this._recoveryDatabaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryDatabaseIdInput() {
    return this._recoveryDatabaseId
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

  // synapse_workspace_id - computed: false, optional: false, required: true
  private _synapseWorkspaceId: string;
  public get synapseWorkspaceId() {
    return this.getStringAttribute('synapse_workspace_id');
  }
  public set synapseWorkspaceId(value: string) {
    this._synapseWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get synapseWorkspaceIdInput() {
    return this._synapseWorkspaceId
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

  // restore - computed: false, optional: true, required: false
  private _restore?: SynapseSqlPoolRestore[];
  public get restore() {
    return this.interpolationForAttribute('restore') as any;
  }
  public set restore(value: SynapseSqlPoolRestore[] ) {
    this._restore = value;
  }
  public resetRestore() {
    this._restore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreInput() {
    return this._restore
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SynapseSqlPoolTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SynapseSqlPoolTimeouts ) {
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
      data_encrypted: cdktf.booleanToTerraform(this._dataEncrypted),
      name: cdktf.stringToTerraform(this._name),
      recovery_database_id: cdktf.stringToTerraform(this._recoveryDatabaseId),
      sku_name: cdktf.stringToTerraform(this._skuName),
      synapse_workspace_id: cdktf.stringToTerraform(this._synapseWorkspaceId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      restore: cdktf.listMapper(synapseSqlPoolRestoreToTerraform)(this._restore),
      timeouts: synapseSqlPoolTimeoutsToTerraform(this._timeouts),
    };
  }
}
