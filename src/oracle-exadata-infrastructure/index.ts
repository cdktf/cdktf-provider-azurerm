/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OracleExadataInfrastructureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#compute_count OracleExadataInfrastructure#compute_count}
  */
  readonly computeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#customer_contacts OracleExadataInfrastructure#customer_contacts}
  */
  readonly customerContacts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#display_name OracleExadataInfrastructure#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#id OracleExadataInfrastructure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#location OracleExadataInfrastructure#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#name OracleExadataInfrastructure#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#resource_group_name OracleExadataInfrastructure#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#shape OracleExadataInfrastructure#shape}
  */
  readonly shape: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#storage_count OracleExadataInfrastructure#storage_count}
  */
  readonly storageCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#tags OracleExadataInfrastructure#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#zones OracleExadataInfrastructure#zones}
  */
  readonly zones: string[];
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#maintenance_window OracleExadataInfrastructure#maintenance_window}
  */
  readonly maintenanceWindow?: OracleExadataInfrastructureMaintenanceWindow[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#timeouts OracleExadataInfrastructure#timeouts}
  */
  readonly timeouts?: OracleExadataInfrastructureTimeouts;
}
export interface OracleExadataInfrastructureMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#days_of_week OracleExadataInfrastructure#days_of_week}
  */
  readonly daysOfWeek?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#hours_of_day OracleExadataInfrastructure#hours_of_day}
  */
  readonly hoursOfDay?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#lead_time_in_weeks OracleExadataInfrastructure#lead_time_in_weeks}
  */
  readonly leadTimeInWeeks?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#months OracleExadataInfrastructure#months}
  */
  readonly months?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#patching_mode OracleExadataInfrastructure#patching_mode}
  */
  readonly patchingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#preference OracleExadataInfrastructure#preference}
  */
  readonly preference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#weeks_of_month OracleExadataInfrastructure#weeks_of_month}
  */
  readonly weeksOfMonth?: number[];
}

export function oracleExadataInfrastructureMaintenanceWindowToTerraform(struct?: OracleExadataInfrastructureMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.daysOfWeek),
    hours_of_day: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.hoursOfDay),
    lead_time_in_weeks: cdktf.numberToTerraform(struct!.leadTimeInWeeks),
    months: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.months),
    patching_mode: cdktf.stringToTerraform(struct!.patchingMode),
    preference: cdktf.stringToTerraform(struct!.preference),
    weeks_of_month: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.weeksOfMonth),
  }
}


export function oracleExadataInfrastructureMaintenanceWindowToHclTerraform(struct?: OracleExadataInfrastructureMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_of_week: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.daysOfWeek),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hours_of_day: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.hoursOfDay),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    lead_time_in_weeks: {
      value: cdktf.numberToHclTerraform(struct!.leadTimeInWeeks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    months: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.months),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    patching_mode: {
      value: cdktf.stringToHclTerraform(struct!.patchingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preference: {
      value: cdktf.stringToHclTerraform(struct!.preference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weeks_of_month: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.weeksOfMonth),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleExadataInfrastructureMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OracleExadataInfrastructureMaintenanceWindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek;
    }
    if (this._hoursOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.hoursOfDay = this._hoursOfDay;
    }
    if (this._leadTimeInWeeks !== undefined) {
      hasAnyValues = true;
      internalValueResult.leadTimeInWeeks = this._leadTimeInWeeks;
    }
    if (this._months !== undefined) {
      hasAnyValues = true;
      internalValueResult.months = this._months;
    }
    if (this._patchingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchingMode = this._patchingMode;
    }
    if (this._preference !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference;
    }
    if (this._weeksOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeksOfMonth = this._weeksOfMonth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleExadataInfrastructureMaintenanceWindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daysOfWeek = undefined;
      this._hoursOfDay = undefined;
      this._leadTimeInWeeks = undefined;
      this._months = undefined;
      this._patchingMode = undefined;
      this._preference = undefined;
      this._weeksOfMonth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daysOfWeek = value.daysOfWeek;
      this._hoursOfDay = value.hoursOfDay;
      this._leadTimeInWeeks = value.leadTimeInWeeks;
      this._months = value.months;
      this._patchingMode = value.patchingMode;
      this._preference = value.preference;
      this._weeksOfMonth = value.weeksOfMonth;
    }
  }

  // days_of_week - computed: true, optional: true, required: false
  private _daysOfWeek?: string[]; 
  public get daysOfWeek() {
    return this.getListAttribute('days_of_week');
  }
  public set daysOfWeek(value: string[]) {
    this._daysOfWeek = value;
  }
  public resetDaysOfWeek() {
    this._daysOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfWeekInput() {
    return this._daysOfWeek;
  }

  // hours_of_day - computed: true, optional: true, required: false
  private _hoursOfDay?: number[]; 
  public get hoursOfDay() {
    return this.getNumberListAttribute('hours_of_day');
  }
  public set hoursOfDay(value: number[]) {
    this._hoursOfDay = value;
  }
  public resetHoursOfDay() {
    this._hoursOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursOfDayInput() {
    return this._hoursOfDay;
  }

  // lead_time_in_weeks - computed: true, optional: true, required: false
  private _leadTimeInWeeks?: number; 
  public get leadTimeInWeeks() {
    return this.getNumberAttribute('lead_time_in_weeks');
  }
  public set leadTimeInWeeks(value: number) {
    this._leadTimeInWeeks = value;
  }
  public resetLeadTimeInWeeks() {
    this._leadTimeInWeeks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leadTimeInWeeksInput() {
    return this._leadTimeInWeeks;
  }

  // months - computed: true, optional: true, required: false
  private _months?: string[]; 
  public get months() {
    return this.getListAttribute('months');
  }
  public set months(value: string[]) {
    this._months = value;
  }
  public resetMonths() {
    this._months = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsInput() {
    return this._months;
  }

  // patching_mode - computed: true, optional: true, required: false
  private _patchingMode?: string; 
  public get patchingMode() {
    return this.getStringAttribute('patching_mode');
  }
  public set patchingMode(value: string) {
    this._patchingMode = value;
  }
  public resetPatchingMode() {
    this._patchingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchingModeInput() {
    return this._patchingMode;
  }

  // preference - computed: true, optional: true, required: false
  private _preference?: string; 
  public get preference() {
    return this.getStringAttribute('preference');
  }
  public set preference(value: string) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }

  // weeks_of_month - computed: true, optional: true, required: false
  private _weeksOfMonth?: number[]; 
  public get weeksOfMonth() {
    return this.getNumberListAttribute('weeks_of_month');
  }
  public set weeksOfMonth(value: number[]) {
    this._weeksOfMonth = value;
  }
  public resetWeeksOfMonth() {
    this._weeksOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeksOfMonthInput() {
    return this._weeksOfMonth;
  }
}

export class OracleExadataInfrastructureMaintenanceWindowList extends cdktf.ComplexList {
  public internalValue? : OracleExadataInfrastructureMaintenanceWindow[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OracleExadataInfrastructureMaintenanceWindowOutputReference {
    return new OracleExadataInfrastructureMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OracleExadataInfrastructureTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#create OracleExadataInfrastructure#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#delete OracleExadataInfrastructure#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#read OracleExadataInfrastructure#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#update OracleExadataInfrastructure#update}
  */
  readonly update?: string;
}

export function oracleExadataInfrastructureTimeoutsToTerraform(struct?: OracleExadataInfrastructureTimeouts | cdktf.IResolvable): any {
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


export function oracleExadataInfrastructureTimeoutsToHclTerraform(struct?: OracleExadataInfrastructureTimeouts | cdktf.IResolvable): any {
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

export class OracleExadataInfrastructureTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OracleExadataInfrastructureTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OracleExadataInfrastructureTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure azurerm_oracle_exadata_infrastructure}
*/
export class OracleExadataInfrastructure extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_oracle_exadata_infrastructure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OracleExadataInfrastructure resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OracleExadataInfrastructure to import
  * @param importFromId The id of the existing OracleExadataInfrastructure that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OracleExadataInfrastructure to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_oracle_exadata_infrastructure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure azurerm_oracle_exadata_infrastructure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OracleExadataInfrastructureConfig
  */
  public constructor(scope: Construct, id: string, config: OracleExadataInfrastructureConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_oracle_exadata_infrastructure',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.20.0',
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
    this._computeCount = config.computeCount;
    this._customerContacts = config.customerContacts;
    this._displayName = config.displayName;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._shape = config.shape;
    this._storageCount = config.storageCount;
    this._tags = config.tags;
    this._zones = config.zones;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compute_count - computed: false, optional: false, required: true
  private _computeCount?: number; 
  public get computeCount() {
    return this.getNumberAttribute('compute_count');
  }
  public set computeCount(value: number) {
    this._computeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeCountInput() {
    return this._computeCount;
  }

  // customer_contacts - computed: true, optional: true, required: false
  private _customerContacts?: string[]; 
  public get customerContacts() {
    return this.getListAttribute('customer_contacts');
  }
  public set customerContacts(value: string[]) {
    this._customerContacts = value;
  }
  public resetCustomerContacts() {
    this._customerContacts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerContactsInput() {
    return this._customerContacts;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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
    return this._resourceGroupName;
  }

  // shape - computed: false, optional: false, required: true
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }

  // storage_count - computed: false, optional: false, required: true
  private _storageCount?: number; 
  public get storageCount() {
    return this.getNumberAttribute('storage_count');
  }
  public set storageCount(value: number) {
    this._storageCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCountInput() {
    return this._storageCount;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // zones - computed: false, optional: false, required: true
  private _zones?: string[]; 
  public get zones() {
    return cdktf.Fn.tolist(this.getListAttribute('zones'));
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new OracleExadataInfrastructureMaintenanceWindowList(this, "maintenance_window", false);
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: OracleExadataInfrastructureMaintenanceWindow[] | cdktf.IResolvable) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OracleExadataInfrastructureTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OracleExadataInfrastructureTimeouts) {
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
      compute_count: cdktf.numberToTerraform(this._computeCount),
      customer_contacts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customerContacts),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      shape: cdktf.stringToTerraform(this._shape),
      storage_count: cdktf.numberToTerraform(this._storageCount),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zones),
      maintenance_window: cdktf.listMapper(oracleExadataInfrastructureMaintenanceWindowToTerraform, true)(this._maintenanceWindow.internalValue),
      timeouts: oracleExadataInfrastructureTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compute_count: {
        value: cdktf.numberToHclTerraform(this._computeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      customer_contacts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customerContacts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shape: {
        value: cdktf.stringToHclTerraform(this._shape),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_count: {
        value: cdktf.numberToHclTerraform(this._storageCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._zones),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      maintenance_window: {
        value: cdktf.listMapperHcl(oracleExadataInfrastructureMaintenanceWindowToHclTerraform, true)(this._maintenanceWindow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OracleExadataInfrastructureMaintenanceWindowList",
      },
      timeouts: {
        value: oracleExadataInfrastructureTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OracleExadataInfrastructureTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
