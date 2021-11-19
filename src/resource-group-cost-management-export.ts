// https://www.terraform.io/docs/providers/azurerm/r/resource_group_cost_management_export.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceGroupCostManagementExportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_cost_management_export.html#active ResourceGroupCostManagementExport#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_cost_management_export.html#name ResourceGroupCostManagementExport#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_cost_management_export.html#recurrence_period_end_date ResourceGroupCostManagementExport#recurrence_period_end_date}
  */
  readonly recurrencePeriodEndDate: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_cost_management_export.html#recurrence_period_start_date ResourceGroupCostManagementExport#recurrence_period_start_date}
  */
  readonly recurrencePeriodStartDate: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_cost_management_export.html#recurrence_type ResourceGroupCostManagementExport#recurrence_type}
  */
  readonly recurrenceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_cost_management_export.html#resource_group_id ResourceGroupCostManagementExport#resource_group_id}
  */
  readonly resourceGroupId: string;
  /**
  * export_data_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_cost_management_export.html#export_data_options ResourceGroupCostManagementExport#export_data_options}
  */
  readonly exportDataOptions: ResourceGroupCostManagementExportExportDataOptions;
  /**
  * export_data_storage_location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_cost_management_export.html#export_data_storage_location ResourceGroupCostManagementExport#export_data_storage_location}
  */
  readonly exportDataStorageLocation: ResourceGroupCostManagementExportExportDataStorageLocation;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_cost_management_export.html#timeouts ResourceGroupCostManagementExport#timeouts}
  */
  readonly timeouts?: ResourceGroupCostManagementExportTimeouts;
}
export interface ResourceGroupCostManagementExportExportDataOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_cost_management_export.html#time_frame ResourceGroupCostManagementExport#time_frame}
  */
  readonly timeFrame: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_cost_management_export.html#type ResourceGroupCostManagementExport#type}
  */
  readonly type: string;
}

function resourceGroupCostManagementExportExportDataOptionsToTerraform(struct?: ResourceGroupCostManagementExportExportDataOptionsOutputReference | ResourceGroupCostManagementExportExportDataOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_frame: cdktf.stringToTerraform(struct!.timeFrame),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ResourceGroupCostManagementExportExportDataOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // time_frame - computed: false, optional: false, required: true
  private _timeFrame?: string; 
  public get timeFrame() {
    return this.getStringAttribute('time_frame');
  }
  public set timeFrame(value: string) {
    this._timeFrame = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFrameInput() {
    return this._timeFrame
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }
}
export interface ResourceGroupCostManagementExportExportDataStorageLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_cost_management_export.html#container_id ResourceGroupCostManagementExport#container_id}
  */
  readonly containerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_cost_management_export.html#root_folder_path ResourceGroupCostManagementExport#root_folder_path}
  */
  readonly rootFolderPath: string;
}

function resourceGroupCostManagementExportExportDataStorageLocationToTerraform(struct?: ResourceGroupCostManagementExportExportDataStorageLocationOutputReference | ResourceGroupCostManagementExportExportDataStorageLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_id: cdktf.stringToTerraform(struct!.containerId),
    root_folder_path: cdktf.stringToTerraform(struct!.rootFolderPath),
  }
}

export class ResourceGroupCostManagementExportExportDataStorageLocationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // container_id - computed: false, optional: false, required: true
  private _containerId?: string; 
  public get containerId() {
    return this.getStringAttribute('container_id');
  }
  public set containerId(value: string) {
    this._containerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerIdInput() {
    return this._containerId
  }

  // root_folder_path - computed: false, optional: false, required: true
  private _rootFolderPath?: string; 
  public get rootFolderPath() {
    return this.getStringAttribute('root_folder_path');
  }
  public set rootFolderPath(value: string) {
    this._rootFolderPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootFolderPathInput() {
    return this._rootFolderPath
  }
}
export interface ResourceGroupCostManagementExportTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_cost_management_export.html#create ResourceGroupCostManagementExport#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_cost_management_export.html#delete ResourceGroupCostManagementExport#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_cost_management_export.html#read ResourceGroupCostManagementExport#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_cost_management_export.html#update ResourceGroupCostManagementExport#update}
  */
  readonly update?: string;
}

function resourceGroupCostManagementExportTimeoutsToTerraform(struct?: ResourceGroupCostManagementExportTimeoutsOutputReference | ResourceGroupCostManagementExportTimeouts): any {
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

export class ResourceGroupCostManagementExportTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_cost_management_export.html azurerm_resource_group_cost_management_export}
*/
export class ResourceGroupCostManagementExport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_resource_group_cost_management_export";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_cost_management_export.html azurerm_resource_group_cost_management_export} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceGroupCostManagementExportConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceGroupCostManagementExportConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_resource_group_cost_management_export',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._active = config.active;
    this._name = config.name;
    this._recurrencePeriodEndDate = config.recurrencePeriodEndDate;
    this._recurrencePeriodStartDate = config.recurrencePeriodStartDate;
    this._recurrenceType = config.recurrenceType;
    this._resourceGroupId = config.resourceGroupId;
    this._exportDataOptions = config.exportDataOptions;
    this._exportDataStorageLocation = config.exportDataStorageLocation;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable | undefined; 
  public get active() {
    return this.getBooleanAttribute('active') as any;
  }
  public set active(value: boolean | cdktf.IResolvable | undefined) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active
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

  // recurrence_period_end_date - computed: false, optional: false, required: true
  private _recurrencePeriodEndDate?: string; 
  public get recurrencePeriodEndDate() {
    return this.getStringAttribute('recurrence_period_end_date');
  }
  public set recurrencePeriodEndDate(value: string) {
    this._recurrencePeriodEndDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrencePeriodEndDateInput() {
    return this._recurrencePeriodEndDate
  }

  // recurrence_period_start_date - computed: false, optional: false, required: true
  private _recurrencePeriodStartDate?: string; 
  public get recurrencePeriodStartDate() {
    return this.getStringAttribute('recurrence_period_start_date');
  }
  public set recurrencePeriodStartDate(value: string) {
    this._recurrencePeriodStartDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrencePeriodStartDateInput() {
    return this._recurrencePeriodStartDate
  }

  // recurrence_type - computed: false, optional: false, required: true
  private _recurrenceType?: string; 
  public get recurrenceType() {
    return this.getStringAttribute('recurrence_type');
  }
  public set recurrenceType(value: string) {
    this._recurrenceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceTypeInput() {
    return this._recurrenceType
  }

  // resource_group_id - computed: false, optional: false, required: true
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId
  }

  // export_data_options - computed: false, optional: false, required: true
  private _exportDataOptions?: ResourceGroupCostManagementExportExportDataOptions; 
  private __exportDataOptionsOutput = new ResourceGroupCostManagementExportExportDataOptionsOutputReference(this as any, "export_data_options", true);
  public get exportDataOptions() {
    return this.__exportDataOptionsOutput;
  }
  public putExportDataOptions(value: ResourceGroupCostManagementExportExportDataOptions) {
    this._exportDataOptions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportDataOptionsInput() {
    return this._exportDataOptions
  }

  // export_data_storage_location - computed: false, optional: false, required: true
  private _exportDataStorageLocation?: ResourceGroupCostManagementExportExportDataStorageLocation; 
  private __exportDataStorageLocationOutput = new ResourceGroupCostManagementExportExportDataStorageLocationOutputReference(this as any, "export_data_storage_location", true);
  public get exportDataStorageLocation() {
    return this.__exportDataStorageLocationOutput;
  }
  public putExportDataStorageLocation(value: ResourceGroupCostManagementExportExportDataStorageLocation) {
    this._exportDataStorageLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportDataStorageLocationInput() {
    return this._exportDataStorageLocation
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ResourceGroupCostManagementExportTimeouts | undefined; 
  private __timeoutsOutput = new ResourceGroupCostManagementExportTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ResourceGroupCostManagementExportTimeouts | undefined) {
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
      active: cdktf.booleanToTerraform(this._active),
      name: cdktf.stringToTerraform(this._name),
      recurrence_period_end_date: cdktf.stringToTerraform(this._recurrencePeriodEndDate),
      recurrence_period_start_date: cdktf.stringToTerraform(this._recurrencePeriodStartDate),
      recurrence_type: cdktf.stringToTerraform(this._recurrenceType),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      export_data_options: resourceGroupCostManagementExportExportDataOptionsToTerraform(this._exportDataOptions),
      export_data_storage_location: resourceGroupCostManagementExportExportDataStorageLocationToTerraform(this._exportDataStorageLocation),
      timeouts: resourceGroupCostManagementExportTimeoutsToTerraform(this._timeouts),
    };
  }
}
