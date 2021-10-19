// https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SynapseSqlPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool.html#collation SynapseSqlPool#collation}
  */
  readonly collation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool.html#create_mode SynapseSqlPool#create_mode}
  */
  readonly createMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool.html#data_encrypted SynapseSqlPool#data_encrypted}
  */
  readonly dataEncrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool.html#name SynapseSqlPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool.html#recovery_database_id SynapseSqlPool#recovery_database_id}
  */
  readonly recoveryDatabaseId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool.html#sku_name SynapseSqlPool#sku_name}
  */
  readonly skuName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool.html#synapse_workspace_id SynapseSqlPool#synapse_workspace_id}
  */
  readonly synapseWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool.html#tags SynapseSqlPool#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * restore block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool.html#restore SynapseSqlPool#restore}
  */
  readonly restore?: SynapseSqlPoolRestore;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool.html#timeouts SynapseSqlPool#timeouts}
  */
  readonly timeouts?: SynapseSqlPoolTimeouts;
}
export interface SynapseSqlPoolRestore {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool.html#point_in_time SynapseSqlPool#point_in_time}
  */
  readonly pointInTime: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool.html#source_database_id SynapseSqlPool#source_database_id}
  */
  readonly sourceDatabaseId: string;
}

function synapseSqlPoolRestoreToTerraform(struct?: SynapseSqlPoolRestoreOutputReference | SynapseSqlPoolRestore): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    point_in_time: cdktf.stringToTerraform(struct!.pointInTime),
    source_database_id: cdktf.stringToTerraform(struct!.sourceDatabaseId),
  }
}

export class SynapseSqlPoolRestoreOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // point_in_time - computed: false, optional: false, required: true
  private _pointInTime?: string; 
  public get pointInTime() {
    return this.getStringAttribute('point_in_time');
  }
  public set pointInTime(value: string) {
    this._pointInTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pointInTimeInput() {
    return this._pointInTime
  }

  // source_database_id - computed: false, optional: false, required: true
  private _sourceDatabaseId?: string; 
  public get sourceDatabaseId() {
    return this.getStringAttribute('source_database_id');
  }
  public set sourceDatabaseId(value: string) {
    this._sourceDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDatabaseIdInput() {
    return this._sourceDatabaseId
  }
}
export interface SynapseSqlPoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool.html#create SynapseSqlPool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool.html#delete SynapseSqlPool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool.html#read SynapseSqlPool#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool.html#update SynapseSqlPool#update}
  */
  readonly update?: string;
}

function synapseSqlPoolTimeoutsToTerraform(struct?: SynapseSqlPoolTimeoutsOutputReference | SynapseSqlPoolTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class SynapseSqlPoolTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool.html azurerm_synapse_sql_pool}
*/
export class SynapseSqlPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_synapse_sql_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_sql_pool.html azurerm_synapse_sql_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SynapseSqlPoolConfig
  */
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
  private _collation?: string | undefined; 
  public get collation() {
    return this.getStringAttribute('collation');
  }
  public set collation(value: string | undefined) {
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
  private _createMode?: string | undefined; 
  public get createMode() {
    return this.getStringAttribute('create_mode');
  }
  public set createMode(value: string | undefined) {
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
  private _dataEncrypted?: boolean | cdktf.IResolvable | undefined; 
  public get dataEncrypted() {
    return this.getBooleanAttribute('data_encrypted') as any;
  }
  public set dataEncrypted(value: boolean | cdktf.IResolvable | undefined) {
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
  private _name?: string; 
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
  private _recoveryDatabaseId?: string | undefined; 
  public get recoveryDatabaseId() {
    return this.getStringAttribute('recovery_database_id');
  }
  public set recoveryDatabaseId(value: string | undefined) {
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
  private _skuName?: string; 
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
  private _synapseWorkspaceId?: string; 
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
  private _restore?: SynapseSqlPoolRestore | undefined; 
  private __restoreOutput = new SynapseSqlPoolRestoreOutputReference(this as any, "restore", true);
  public get restore() {
    return this.__restoreOutput;
  }
  public putRestore(value: SynapseSqlPoolRestore | undefined) {
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
  private _timeouts?: SynapseSqlPoolTimeouts | undefined; 
  private __timeoutsOutput = new SynapseSqlPoolTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: SynapseSqlPoolTimeouts | undefined) {
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
      restore: synapseSqlPoolRestoreToTerraform(this._restore),
      timeouts: synapseSqlPoolTimeoutsToTerraform(this._timeouts),
    };
  }
}
