// https://www.terraform.io/docs/providers/azurerm/d/storage_table_entity.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermStorageTableEntityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_table_entity.html#partition_key DataAzurermStorageTableEntity#partition_key}
  */
  readonly partitionKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_table_entity.html#row_key DataAzurermStorageTableEntity#row_key}
  */
  readonly rowKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_table_entity.html#storage_account_name DataAzurermStorageTableEntity#storage_account_name}
  */
  readonly storageAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_table_entity.html#table_name DataAzurermStorageTableEntity#table_name}
  */
  readonly tableName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_table_entity.html#timeouts DataAzurermStorageTableEntity#timeouts}
  */
  readonly timeouts?: DataAzurermStorageTableEntityTimeouts;
}
export interface DataAzurermStorageTableEntityTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/storage_table_entity.html#read DataAzurermStorageTableEntity#read}
  */
  readonly read?: string;
}

function dataAzurermStorageTableEntityTimeoutsToTerraform(struct?: DataAzurermStorageTableEntityTimeoutsOutputReference | DataAzurermStorageTableEntityTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermStorageTableEntityTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/storage_table_entity.html azurerm_storage_table_entity}
*/
export class DataAzurermStorageTableEntity extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_storage_table_entity";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/storage_table_entity.html azurerm_storage_table_entity} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermStorageTableEntityConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermStorageTableEntityConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_table_entity',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._partitionKey = config.partitionKey;
    this._rowKey = config.rowKey;
    this._storageAccountName = config.storageAccountName;
    this._tableName = config.tableName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entity - computed: true, optional: false, required: false
  public entity(key: string): string {
    return new cdktf.StringMap(this, 'entity').lookup(key);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // partition_key - computed: false, optional: false, required: true
  private _partitionKey?: string; 
  public get partitionKey() {
    return this.getStringAttribute('partition_key');
  }
  public set partitionKey(value: string) {
    this._partitionKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeyInput() {
    return this._partitionKey
  }

  // row_key - computed: false, optional: false, required: true
  private _rowKey?: string; 
  public get rowKey() {
    return this.getStringAttribute('row_key');
  }
  public set rowKey(value: string) {
    this._rowKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowKeyInput() {
    return this._rowKey
  }

  // storage_account_name - computed: false, optional: false, required: true
  private _storageAccountName?: string; 
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermStorageTableEntityTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermStorageTableEntityTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermStorageTableEntityTimeouts | undefined) {
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
      partition_key: cdktf.stringToTerraform(this._partitionKey),
      row_key: cdktf.stringToTerraform(this._rowKey),
      storage_account_name: cdktf.stringToTerraform(this._storageAccountName),
      table_name: cdktf.stringToTerraform(this._tableName),
      timeouts: dataAzurermStorageTableEntityTimeoutsToTerraform(this._timeouts),
    };
  }
}
