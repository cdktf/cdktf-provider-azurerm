// https://www.terraform.io/docs/providers/azurerm/d/image.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/image.html#name DataAzurermImage#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/image.html#name_regex DataAzurermImage#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/image.html#resource_group_name DataAzurermImage#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/image.html#sort_descending DataAzurermImage#sort_descending}
  */
  readonly sortDescending?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/image.html#timeouts DataAzurermImage#timeouts}
  */
  readonly timeouts?: DataAzurermImageTimeouts;
}
export class DataAzurermImageDataDisk extends cdktf.ComplexComputedList {

  // blob_uri - computed: true, optional: false, required: false
  public get blobUri() {
    return this.getStringAttribute('blob_uri');
  }

  // caching - computed: true, optional: false, required: false
  public get caching() {
    return this.getStringAttribute('caching');
  }

  // lun - computed: true, optional: false, required: false
  public get lun() {
    return this.getNumberAttribute('lun');
  }

  // managed_disk_id - computed: true, optional: false, required: false
  public get managedDiskId() {
    return this.getStringAttribute('managed_disk_id');
  }

  // size_gb - computed: true, optional: false, required: false
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
}
export class DataAzurermImageOsDisk extends cdktf.ComplexComputedList {

  // blob_uri - computed: true, optional: false, required: false
  public get blobUri() {
    return this.getStringAttribute('blob_uri');
  }

  // caching - computed: true, optional: false, required: false
  public get caching() {
    return this.getStringAttribute('caching');
  }

  // managed_disk_id - computed: true, optional: false, required: false
  public get managedDiskId() {
    return this.getStringAttribute('managed_disk_id');
  }

  // os_state - computed: true, optional: false, required: false
  public get osState() {
    return this.getStringAttribute('os_state');
  }

  // os_type - computed: true, optional: false, required: false
  public get osType() {
    return this.getStringAttribute('os_type');
  }

  // size_gb - computed: true, optional: false, required: false
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
}
export interface DataAzurermImageTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/image.html#read DataAzurermImage#read}
  */
  readonly read?: string;
}

function dataAzurermImageTimeoutsToTerraform(struct?: DataAzurermImageTimeoutsOutputReference | DataAzurermImageTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermImageTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/image.html azurerm_image}
*/
export class DataAzurermImage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_image";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/image.html azurerm_image} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermImageConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermImageConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_image',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._nameRegex = config.nameRegex;
    this._resourceGroupName = config.resourceGroupName;
    this._sortDescending = config.sortDescending;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_disk - computed: true, optional: false, required: false
  public dataDisk(index: string) {
    return new DataAzurermImageDataDisk(this, 'data_disk', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string | undefined; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string | undefined) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex
  }

  // os_disk - computed: true, optional: false, required: false
  public osDisk(index: string) {
    return new DataAzurermImageOsDisk(this, 'os_disk', index);
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
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

  // sort_descending - computed: false, optional: true, required: false
  private _sortDescending?: boolean | cdktf.IResolvable | undefined; 
  public get sortDescending() {
    return this.getBooleanAttribute('sort_descending') as any;
  }
  public set sortDescending(value: boolean | cdktf.IResolvable | undefined) {
    this._sortDescending = value;
  }
  public resetSortDescending() {
    this._sortDescending = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortDescendingInput() {
    return this._sortDescending
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // zone_resilient - computed: true, optional: false, required: false
  public get zoneResilient() {
    return this.getBooleanAttribute('zone_resilient') as any;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermImageTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermImageTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermImageTimeouts | undefined) {
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
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sort_descending: cdktf.booleanToTerraform(this._sortDescending),
      timeouts: dataAzurermImageTimeoutsToTerraform(this._timeouts),
    };
  }
}
