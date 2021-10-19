// https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CostManagementExportResourceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group.html#active CostManagementExportResourceGroup#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group.html#name CostManagementExportResourceGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group.html#recurrence_period_end CostManagementExportResourceGroup#recurrence_period_end}
  */
  readonly recurrencePeriodEnd: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group.html#recurrence_period_start CostManagementExportResourceGroup#recurrence_period_start}
  */
  readonly recurrencePeriodStart: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group.html#recurrence_type CostManagementExportResourceGroup#recurrence_type}
  */
  readonly recurrenceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group.html#resource_group_id CostManagementExportResourceGroup#resource_group_id}
  */
  readonly resourceGroupId: string;
  /**
  * delivery_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group.html#delivery_info CostManagementExportResourceGroup#delivery_info}
  */
  readonly deliveryInfo: CostManagementExportResourceGroupDeliveryInfo;
  /**
  * query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group.html#query CostManagementExportResourceGroup#query}
  */
  readonly query: CostManagementExportResourceGroupQuery;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group.html#timeouts CostManagementExportResourceGroup#timeouts}
  */
  readonly timeouts?: CostManagementExportResourceGroupTimeouts;
}
export interface CostManagementExportResourceGroupDeliveryInfo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group.html#container_name CostManagementExportResourceGroup#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group.html#root_folder_path CostManagementExportResourceGroup#root_folder_path}
  */
  readonly rootFolderPath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group.html#storage_account_id CostManagementExportResourceGroup#storage_account_id}
  */
  readonly storageAccountId: string;
}

function costManagementExportResourceGroupDeliveryInfoToTerraform(struct?: CostManagementExportResourceGroupDeliveryInfoOutputReference | CostManagementExportResourceGroupDeliveryInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    root_folder_path: cdktf.stringToTerraform(struct!.rootFolderPath),
    storage_account_id: cdktf.stringToTerraform(struct!.storageAccountId),
  }
}

export class CostManagementExportResourceGroupDeliveryInfoOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName
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
}
export interface CostManagementExportResourceGroupQuery {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group.html#time_frame CostManagementExportResourceGroup#time_frame}
  */
  readonly timeFrame: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group.html#type CostManagementExportResourceGroup#type}
  */
  readonly type: string;
}

function costManagementExportResourceGroupQueryToTerraform(struct?: CostManagementExportResourceGroupQueryOutputReference | CostManagementExportResourceGroupQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_frame: cdktf.stringToTerraform(struct!.timeFrame),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class CostManagementExportResourceGroupQueryOutputReference extends cdktf.ComplexObject {
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
export interface CostManagementExportResourceGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group.html#create CostManagementExportResourceGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group.html#delete CostManagementExportResourceGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group.html#read CostManagementExportResourceGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group.html#update CostManagementExportResourceGroup#update}
  */
  readonly update?: string;
}

function costManagementExportResourceGroupTimeoutsToTerraform(struct?: CostManagementExportResourceGroupTimeoutsOutputReference | CostManagementExportResourceGroupTimeouts): any {
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

export class CostManagementExportResourceGroupTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group.html azurerm_cost_management_export_resource_group}
*/
export class CostManagementExportResourceGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_cost_management_export_resource_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/cost_management_export_resource_group.html azurerm_cost_management_export_resource_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CostManagementExportResourceGroupConfig
  */
  public constructor(scope: Construct, id: string, config: CostManagementExportResourceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cost_management_export_resource_group',
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
    this._recurrencePeriodEnd = config.recurrencePeriodEnd;
    this._recurrencePeriodStart = config.recurrencePeriodStart;
    this._recurrenceType = config.recurrenceType;
    this._resourceGroupId = config.resourceGroupId;
    this._deliveryInfo = config.deliveryInfo;
    this._query = config.query;
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

  // recurrence_period_end - computed: false, optional: false, required: true
  private _recurrencePeriodEnd?: string; 
  public get recurrencePeriodEnd() {
    return this.getStringAttribute('recurrence_period_end');
  }
  public set recurrencePeriodEnd(value: string) {
    this._recurrencePeriodEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrencePeriodEndInput() {
    return this._recurrencePeriodEnd
  }

  // recurrence_period_start - computed: false, optional: false, required: true
  private _recurrencePeriodStart?: string; 
  public get recurrencePeriodStart() {
    return this.getStringAttribute('recurrence_period_start');
  }
  public set recurrencePeriodStart(value: string) {
    this._recurrencePeriodStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrencePeriodStartInput() {
    return this._recurrencePeriodStart
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

  // delivery_info - computed: false, optional: false, required: true
  private _deliveryInfo?: CostManagementExportResourceGroupDeliveryInfo; 
  private __deliveryInfoOutput = new CostManagementExportResourceGroupDeliveryInfoOutputReference(this as any, "delivery_info", true);
  public get deliveryInfo() {
    return this.__deliveryInfoOutput;
  }
  public putDeliveryInfo(value: CostManagementExportResourceGroupDeliveryInfo) {
    this._deliveryInfo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryInfoInput() {
    return this._deliveryInfo
  }

  // query - computed: false, optional: false, required: true
  private _query?: CostManagementExportResourceGroupQuery; 
  private __queryOutput = new CostManagementExportResourceGroupQueryOutputReference(this as any, "query", true);
  public get query() {
    return this.__queryOutput;
  }
  public putQuery(value: CostManagementExportResourceGroupQuery) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CostManagementExportResourceGroupTimeouts | undefined; 
  private __timeoutsOutput = new CostManagementExportResourceGroupTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: CostManagementExportResourceGroupTimeouts | undefined) {
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
      recurrence_period_end: cdktf.stringToTerraform(this._recurrencePeriodEnd),
      recurrence_period_start: cdktf.stringToTerraform(this._recurrencePeriodStart),
      recurrence_type: cdktf.stringToTerraform(this._recurrenceType),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      delivery_info: costManagementExportResourceGroupDeliveryInfoToTerraform(this._deliveryInfo),
      query: costManagementExportResourceGroupQueryToTerraform(this._query),
      timeouts: costManagementExportResourceGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
