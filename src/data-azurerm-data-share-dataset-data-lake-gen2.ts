// https://www.terraform.io/docs/providers/azurerm/d/data_share_dataset_data_lake_gen2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermDataShareDatasetDataLakeGen2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/data_share_dataset_data_lake_gen2.html#name DataAzurermDataShareDatasetDataLakeGen2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/data_share_dataset_data_lake_gen2.html#share_id DataAzurermDataShareDatasetDataLakeGen2#share_id}
  */
  readonly shareId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/data_share_dataset_data_lake_gen2.html#timeouts DataAzurermDataShareDatasetDataLakeGen2#timeouts}
  */
  readonly timeouts?: DataAzurermDataShareDatasetDataLakeGen2Timeouts;
}
export interface DataAzurermDataShareDatasetDataLakeGen2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/data_share_dataset_data_lake_gen2.html#read DataAzurermDataShareDatasetDataLakeGen2#read}
  */
  readonly read?: string;
}

function dataAzurermDataShareDatasetDataLakeGen2TimeoutsToTerraform(struct?: DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference | DataAzurermDataShareDatasetDataLakeGen2Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/data_share_dataset_data_lake_gen2.html azurerm_data_share_dataset_data_lake_gen2}
*/
export class DataAzurermDataShareDatasetDataLakeGen2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_data_share_dataset_data_lake_gen2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/data_share_dataset_data_lake_gen2.html azurerm_data_share_dataset_data_lake_gen2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermDataShareDatasetDataLakeGen2Config
  */
  public constructor(scope: Construct, id: string, config: DataAzurermDataShareDatasetDataLakeGen2Config) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_share_dataset_data_lake_gen2',
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

  // file_path - computed: true, optional: false, required: false
  public get filePath() {
    return this.getStringAttribute('file_path');
  }

  // file_system_name - computed: true, optional: false, required: false
  public get fileSystemName() {
    return this.getStringAttribute('file_system_name');
  }

  // folder_path - computed: true, optional: false, required: false
  public get folderPath() {
    return this.getStringAttribute('folder_path');
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

  // storage_account_id - computed: true, optional: false, required: false
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermDataShareDatasetDataLakeGen2Timeouts | undefined; 
  private __timeoutsOutput = new DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermDataShareDatasetDataLakeGen2Timeouts | undefined) {
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
      timeouts: dataAzurermDataShareDatasetDataLakeGen2TimeoutsToTerraform(this._timeouts),
    };
  }
}
