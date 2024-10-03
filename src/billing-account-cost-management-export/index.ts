// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/billing_account_cost_management_export
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BillingAccountCostManagementExportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/billing_account_cost_management_export#active BillingAccountCostManagementExport#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/billing_account_cost_management_export#billing_account_id BillingAccountCostManagementExport#billing_account_id}
  */
  readonly billingAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/billing_account_cost_management_export#id BillingAccountCostManagementExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/billing_account_cost_management_export#name BillingAccountCostManagementExport#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/billing_account_cost_management_export#recurrence_period_end_date BillingAccountCostManagementExport#recurrence_period_end_date}
  */
  readonly recurrencePeriodEndDate: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/billing_account_cost_management_export#recurrence_period_start_date BillingAccountCostManagementExport#recurrence_period_start_date}
  */
  readonly recurrencePeriodStartDate: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/billing_account_cost_management_export#recurrence_type BillingAccountCostManagementExport#recurrence_type}
  */
  readonly recurrenceType: string;
  /**
  * export_data_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/billing_account_cost_management_export#export_data_options BillingAccountCostManagementExport#export_data_options}
  */
  readonly exportDataOptions: BillingAccountCostManagementExportExportDataOptions;
  /**
  * export_data_storage_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/billing_account_cost_management_export#export_data_storage_location BillingAccountCostManagementExport#export_data_storage_location}
  */
  readonly exportDataStorageLocation: BillingAccountCostManagementExportExportDataStorageLocation;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/billing_account_cost_management_export#timeouts BillingAccountCostManagementExport#timeouts}
  */
  readonly timeouts?: BillingAccountCostManagementExportTimeouts;
}
export interface BillingAccountCostManagementExportExportDataOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/billing_account_cost_management_export#time_frame BillingAccountCostManagementExport#time_frame}
  */
  readonly timeFrame: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/billing_account_cost_management_export#type BillingAccountCostManagementExport#type}
  */
  readonly type: string;
}

export function billingAccountCostManagementExportExportDataOptionsToTerraform(struct?: BillingAccountCostManagementExportExportDataOptionsOutputReference | BillingAccountCostManagementExportExportDataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_frame: cdktf.stringToTerraform(struct!.timeFrame),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function billingAccountCostManagementExportExportDataOptionsToHclTerraform(struct?: BillingAccountCostManagementExportExportDataOptionsOutputReference | BillingAccountCostManagementExportExportDataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_frame: {
      value: cdktf.stringToHclTerraform(struct!.timeFrame),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BillingAccountCostManagementExportExportDataOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BillingAccountCostManagementExportExportDataOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFrame = this._timeFrame;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BillingAccountCostManagementExportExportDataOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeFrame = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeFrame = value.timeFrame;
      this._type = value.type;
    }
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
    return this._timeFrame;
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
    return this._type;
  }
}
export interface BillingAccountCostManagementExportExportDataStorageLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/billing_account_cost_management_export#container_id BillingAccountCostManagementExport#container_id}
  */
  readonly containerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/billing_account_cost_management_export#root_folder_path BillingAccountCostManagementExport#root_folder_path}
  */
  readonly rootFolderPath: string;
}

export function billingAccountCostManagementExportExportDataStorageLocationToTerraform(struct?: BillingAccountCostManagementExportExportDataStorageLocationOutputReference | BillingAccountCostManagementExportExportDataStorageLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_id: cdktf.stringToTerraform(struct!.containerId),
    root_folder_path: cdktf.stringToTerraform(struct!.rootFolderPath),
  }
}


export function billingAccountCostManagementExportExportDataStorageLocationToHclTerraform(struct?: BillingAccountCostManagementExportExportDataStorageLocationOutputReference | BillingAccountCostManagementExportExportDataStorageLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_id: {
      value: cdktf.stringToHclTerraform(struct!.containerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_folder_path: {
      value: cdktf.stringToHclTerraform(struct!.rootFolderPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BillingAccountCostManagementExportExportDataStorageLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BillingAccountCostManagementExportExportDataStorageLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerId = this._containerId;
    }
    if (this._rootFolderPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootFolderPath = this._rootFolderPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BillingAccountCostManagementExportExportDataStorageLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerId = undefined;
      this._rootFolderPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerId = value.containerId;
      this._rootFolderPath = value.rootFolderPath;
    }
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
    return this._containerId;
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
    return this._rootFolderPath;
  }
}
export interface BillingAccountCostManagementExportTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/billing_account_cost_management_export#create BillingAccountCostManagementExport#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/billing_account_cost_management_export#delete BillingAccountCostManagementExport#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/billing_account_cost_management_export#read BillingAccountCostManagementExport#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/billing_account_cost_management_export#update BillingAccountCostManagementExport#update}
  */
  readonly update?: string;
}

export function billingAccountCostManagementExportTimeoutsToTerraform(struct?: BillingAccountCostManagementExportTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function billingAccountCostManagementExportTimeoutsToHclTerraform(struct?: BillingAccountCostManagementExportTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BillingAccountCostManagementExportTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BillingAccountCostManagementExportTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BillingAccountCostManagementExportTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/billing_account_cost_management_export azurerm_billing_account_cost_management_export}
*/
export class BillingAccountCostManagementExport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_billing_account_cost_management_export";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BillingAccountCostManagementExport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BillingAccountCostManagementExport to import
  * @param importFromId The id of the existing BillingAccountCostManagementExport that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/billing_account_cost_management_export#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BillingAccountCostManagementExport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_billing_account_cost_management_export", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/billing_account_cost_management_export azurerm_billing_account_cost_management_export} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BillingAccountCostManagementExportConfig
  */
  public constructor(scope: Construct, id: string, config: BillingAccountCostManagementExportConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_billing_account_cost_management_export',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._billingAccountId = config.billingAccountId;
    this._id = config.id;
    this._name = config.name;
    this._recurrencePeriodEndDate = config.recurrencePeriodEndDate;
    this._recurrencePeriodStartDate = config.recurrencePeriodStartDate;
    this._recurrenceType = config.recurrenceType;
    this._exportDataOptions.internalValue = config.exportDataOptions;
    this._exportDataStorageLocation.internalValue = config.exportDataStorageLocation;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // billing_account_id - computed: false, optional: false, required: true
  private _billingAccountId?: string; 
  public get billingAccountId() {
    return this.getStringAttribute('billing_account_id');
  }
  public set billingAccountId(value: string) {
    this._billingAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingAccountIdInput() {
    return this._billingAccountId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
    return this._name;
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
    return this._recurrencePeriodEndDate;
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
    return this._recurrencePeriodStartDate;
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
    return this._recurrenceType;
  }

  // export_data_options - computed: false, optional: false, required: true
  private _exportDataOptions = new BillingAccountCostManagementExportExportDataOptionsOutputReference(this, "export_data_options");
  public get exportDataOptions() {
    return this._exportDataOptions;
  }
  public putExportDataOptions(value: BillingAccountCostManagementExportExportDataOptions) {
    this._exportDataOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportDataOptionsInput() {
    return this._exportDataOptions.internalValue;
  }

  // export_data_storage_location - computed: false, optional: false, required: true
  private _exportDataStorageLocation = new BillingAccountCostManagementExportExportDataStorageLocationOutputReference(this, "export_data_storage_location");
  public get exportDataStorageLocation() {
    return this._exportDataStorageLocation;
  }
  public putExportDataStorageLocation(value: BillingAccountCostManagementExportExportDataStorageLocation) {
    this._exportDataStorageLocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportDataStorageLocationInput() {
    return this._exportDataStorageLocation.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BillingAccountCostManagementExportTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BillingAccountCostManagementExportTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      billing_account_id: cdktf.stringToTerraform(this._billingAccountId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      recurrence_period_end_date: cdktf.stringToTerraform(this._recurrencePeriodEndDate),
      recurrence_period_start_date: cdktf.stringToTerraform(this._recurrencePeriodStartDate),
      recurrence_type: cdktf.stringToTerraform(this._recurrenceType),
      export_data_options: billingAccountCostManagementExportExportDataOptionsToTerraform(this._exportDataOptions.internalValue),
      export_data_storage_location: billingAccountCostManagementExportExportDataStorageLocationToTerraform(this._exportDataStorageLocation.internalValue),
      timeouts: billingAccountCostManagementExportTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      billing_account_id: {
        value: cdktf.stringToHclTerraform(this._billingAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recurrence_period_end_date: {
        value: cdktf.stringToHclTerraform(this._recurrencePeriodEndDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recurrence_period_start_date: {
        value: cdktf.stringToHclTerraform(this._recurrencePeriodStartDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recurrence_type: {
        value: cdktf.stringToHclTerraform(this._recurrenceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export_data_options: {
        value: billingAccountCostManagementExportExportDataOptionsToHclTerraform(this._exportDataOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BillingAccountCostManagementExportExportDataOptionsList",
      },
      export_data_storage_location: {
        value: billingAccountCostManagementExportExportDataStorageLocationToHclTerraform(this._exportDataStorageLocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BillingAccountCostManagementExportExportDataStorageLocationList",
      },
      timeouts: {
        value: billingAccountCostManagementExportTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BillingAccountCostManagementExportTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
