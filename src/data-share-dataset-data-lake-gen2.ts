// https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_data_lake_gen2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataShareDatasetDataLakeGen2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_data_lake_gen2.html#file_path DataShareDatasetDataLakeGen2#file_path}
  */
  readonly filePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_data_lake_gen2.html#file_system_name DataShareDatasetDataLakeGen2#file_system_name}
  */
  readonly fileSystemName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_data_lake_gen2.html#folder_path DataShareDatasetDataLakeGen2#folder_path}
  */
  readonly folderPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_data_lake_gen2.html#name DataShareDatasetDataLakeGen2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_data_lake_gen2.html#share_id DataShareDatasetDataLakeGen2#share_id}
  */
  readonly shareId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_data_lake_gen2.html#storage_account_id DataShareDatasetDataLakeGen2#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_data_lake_gen2.html#timeouts DataShareDatasetDataLakeGen2#timeouts}
  */
  readonly timeouts?: DataShareDatasetDataLakeGen2Timeouts;
}
export interface DataShareDatasetDataLakeGen2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_data_lake_gen2.html#create DataShareDatasetDataLakeGen2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_data_lake_gen2.html#delete DataShareDatasetDataLakeGen2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_data_lake_gen2.html#read DataShareDatasetDataLakeGen2#read}
  */
  readonly read?: string;
}

function dataShareDatasetDataLakeGen2TimeoutsToTerraform(struct?: DataShareDatasetDataLakeGen2TimeoutsOutputReference | DataShareDatasetDataLakeGen2Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataShareDatasetDataLakeGen2TimeoutsOutputReference extends cdktf.ComplexObject {
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_data_lake_gen2.html azurerm_data_share_dataset_data_lake_gen2}
*/
export class DataShareDatasetDataLakeGen2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_data_share_dataset_data_lake_gen2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_data_lake_gen2.html azurerm_data_share_dataset_data_lake_gen2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataShareDatasetDataLakeGen2Config
  */
  public constructor(scope: Construct, id: string, config: DataShareDatasetDataLakeGen2Config) {
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
    this._filePath = config.filePath;
    this._fileSystemName = config.fileSystemName;
    this._folderPath = config.folderPath;
    this._name = config.name;
    this._shareId = config.shareId;
    this._storageAccountId = config.storageAccountId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // file_path - computed: false, optional: true, required: false
  private _filePath?: string | undefined; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string | undefined) {
    this._filePath = value;
  }
  public resetFilePath() {
    this._filePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath
  }

  // file_system_name - computed: false, optional: false, required: true
  private _fileSystemName?: string; 
  public get fileSystemName() {
    return this.getStringAttribute('file_system_name');
  }
  public set fileSystemName(value: string) {
    this._fileSystemName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemNameInput() {
    return this._fileSystemName
  }

  // folder_path - computed: false, optional: true, required: false
  private _folderPath?: string | undefined; 
  public get folderPath() {
    return this.getStringAttribute('folder_path');
  }
  public set folderPath(value: string | undefined) {
    this._folderPath = value;
  }
  public resetFolderPath() {
    this._folderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderPathInput() {
    return this._folderPath
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

  // storage_account_id - computed: false, optional: false, required: true
  private _storageAccountId?: string; 
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataShareDatasetDataLakeGen2Timeouts | undefined; 
  private __timeoutsOutput = new DataShareDatasetDataLakeGen2TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataShareDatasetDataLakeGen2Timeouts | undefined) {
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
      file_path: cdktf.stringToTerraform(this._filePath),
      file_system_name: cdktf.stringToTerraform(this._fileSystemName),
      folder_path: cdktf.stringToTerraform(this._folderPath),
      name: cdktf.stringToTerraform(this._name),
      share_id: cdktf.stringToTerraform(this._shareId),
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      timeouts: dataShareDatasetDataLakeGen2TimeoutsToTerraform(this._timeouts),
    };
  }
}
