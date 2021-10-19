// https://www.terraform.io/docs/providers/azurerm/d/mssql_database.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermMssqlDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/mssql_database.html#name DataAzurermMssqlDatabase#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/mssql_database.html#server_id DataAzurermMssqlDatabase#server_id}
  */
  readonly serverId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/mssql_database.html#timeouts DataAzurermMssqlDatabase#timeouts}
  */
  readonly timeouts?: DataAzurermMssqlDatabaseTimeouts;
}
export interface DataAzurermMssqlDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/mssql_database.html#read DataAzurermMssqlDatabase#read}
  */
  readonly read?: string;
}

function dataAzurermMssqlDatabaseTimeoutsToTerraform(struct?: DataAzurermMssqlDatabaseTimeoutsOutputReference | DataAzurermMssqlDatabaseTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermMssqlDatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/mssql_database.html azurerm_mssql_database}
*/
export class DataAzurermMssqlDatabase extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_mssql_database";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/mssql_database.html azurerm_mssql_database} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermMssqlDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermMssqlDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mssql_database',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._serverId = config.serverId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collation - computed: true, optional: false, required: false
  public get collation() {
    return this.getStringAttribute('collation');
  }

  // elastic_pool_id - computed: true, optional: false, required: false
  public get elasticPoolId() {
    return this.getStringAttribute('elastic_pool_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // license_type - computed: true, optional: false, required: false
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }

  // max_size_gb - computed: true, optional: false, required: false
  public get maxSizeGb() {
    return this.getNumberAttribute('max_size_gb');
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

  // read_replica_count - computed: true, optional: false, required: false
  public get readReplicaCount() {
    return this.getNumberAttribute('read_replica_count');
  }

  // read_scale - computed: true, optional: false, required: false
  public get readScale() {
    return this.getBooleanAttribute('read_scale') as any;
  }

  // server_id - computed: false, optional: false, required: true
  private _serverId?: string; 
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId
  }

  // sku_name - computed: true, optional: false, required: false
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }

  // storage_account_type - computed: true, optional: false, required: false
  public get storageAccountType() {
    return this.getStringAttribute('storage_account_type');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // zone_redundant - computed: true, optional: false, required: false
  public get zoneRedundant() {
    return this.getBooleanAttribute('zone_redundant') as any;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermMssqlDatabaseTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermMssqlDatabaseTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermMssqlDatabaseTimeouts | undefined) {
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
      name: cdktf.stringToTerraform(this._name),
      server_id: cdktf.stringToTerraform(this._serverId),
      timeouts: dataAzurermMssqlDatabaseTimeoutsToTerraform(this._timeouts),
    };
  }
}
