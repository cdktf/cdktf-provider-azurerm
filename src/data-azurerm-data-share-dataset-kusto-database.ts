// https://www.terraform.io/docs/providers/azurerm/d/data_share_dataset_kusto_database.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermDataShareDatasetKustoDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/data_share_dataset_kusto_database.html#name DataAzurermDataShareDatasetKustoDatabase#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/data_share_dataset_kusto_database.html#share_id DataAzurermDataShareDatasetKustoDatabase#share_id}
  */
  readonly shareId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/data_share_dataset_kusto_database.html#timeouts DataAzurermDataShareDatasetKustoDatabase#timeouts}
  */
  readonly timeouts?: DataAzurermDataShareDatasetKustoDatabaseTimeouts;
}
export interface DataAzurermDataShareDatasetKustoDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/data_share_dataset_kusto_database.html#read DataAzurermDataShareDatasetKustoDatabase#read}
  */
  readonly read?: string;
}

function dataAzurermDataShareDatasetKustoDatabaseTimeoutsToTerraform(struct?: DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference | DataAzurermDataShareDatasetKustoDatabaseTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/data_share_dataset_kusto_database.html azurerm_data_share_dataset_kusto_database}
*/
export class DataAzurermDataShareDatasetKustoDatabase extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_data_share_dataset_kusto_database";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/data_share_dataset_kusto_database.html azurerm_data_share_dataset_kusto_database} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermDataShareDatasetKustoDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermDataShareDatasetKustoDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_share_dataset_kusto_database',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._shareId = config.shareId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kusto_cluster_location - computed: true, optional: false, required: false
  public get kustoClusterLocation() {
    return this.getStringAttribute('kusto_cluster_location');
  }

  // kusto_database_id - computed: true, optional: false, required: false
  public get kustoDatabaseId() {
    return this.getStringAttribute('kusto_database_id');
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

  // share_id - computed: false, optional: false, required: true
  private _shareId?: string; 
  public get shareId() {
    return this.getStringAttribute('share_id');
  }
  public set shareId(value: string) {
    this._shareId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareIdInput() {
    return this._shareId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermDataShareDatasetKustoDatabaseTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermDataShareDatasetKustoDatabaseTimeouts | undefined) {
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
      share_id: cdktf.stringToTerraform(this._shareId),
      timeouts: dataAzurermDataShareDatasetKustoDatabaseTimeoutsToTerraform(this._timeouts),
    };
  }
}
