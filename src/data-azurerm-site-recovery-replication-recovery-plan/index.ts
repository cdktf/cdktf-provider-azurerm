// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/site_recovery_replication_recovery_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermSiteRecoveryReplicationRecoveryPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/site_recovery_replication_recovery_plan#id DataAzurermSiteRecoveryReplicationRecoveryPlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/site_recovery_replication_recovery_plan#name DataAzurermSiteRecoveryReplicationRecoveryPlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/site_recovery_replication_recovery_plan#recovery_vault_id DataAzurermSiteRecoveryReplicationRecoveryPlan#recovery_vault_id}
  */
  readonly recoveryVaultId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/site_recovery_replication_recovery_plan#timeouts DataAzurermSiteRecoveryReplicationRecoveryPlan#timeouts}
  */
  readonly timeouts?: DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts;
}
export interface DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettings {
}

export function dataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsToTerraform(struct?: DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsToHclTerraform(struct?: DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // primary_edge_zone - computed: true, optional: false, required: false
  public get primaryEdgeZone() {
    return this.getStringAttribute('primary_edge_zone');
  }

  // primary_zone - computed: true, optional: false, required: false
  public get primaryZone() {
    return this.getStringAttribute('primary_zone');
  }

  // recovery_edge_zone - computed: true, optional: false, required: false
  public get recoveryEdgeZone() {
    return this.getStringAttribute('recovery_edge_zone');
  }

  // recovery_zone - computed: true, optional: false, required: false
  public get recoveryZone() {
    return this.getStringAttribute('recovery_zone');
  }
}

export class DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference {
    return new DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction {
}

export function dataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionToTerraform(struct?: DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionToHclTerraform(struct?: DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fabric_location - computed: true, optional: false, required: false
  public get fabricLocation() {
    return this.getStringAttribute('fabric_location');
  }

  // fail_over_directions - computed: true, optional: false, required: false
  public get failOverDirections() {
    return cdktf.Fn.tolist(this.getListAttribute('fail_over_directions'));
  }

  // fail_over_types - computed: true, optional: false, required: false
  public get failOverTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('fail_over_types'));
  }

  // manual_action_instruction - computed: true, optional: false, required: false
  public get manualActionInstruction() {
    return this.getStringAttribute('manual_action_instruction');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // runbook_id - computed: true, optional: false, required: false
  public get runbookId() {
    return this.getStringAttribute('runbook_id');
  }

  // script_path - computed: true, optional: false, required: false
  public get scriptPath() {
    return this.getStringAttribute('script_path');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList extends cdktf.MapList {

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
  public get(index: number): DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList {
    return new DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList(this, `[${index}]`, false);
  }
}

export class DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference {
    return new DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction {
}

export function dataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionToTerraform(struct?: DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionToHclTerraform(struct?: DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fabric_location - computed: true, optional: false, required: false
  public get fabricLocation() {
    return this.getStringAttribute('fabric_location');
  }

  // fail_over_directions - computed: true, optional: false, required: false
  public get failOverDirections() {
    return cdktf.Fn.tolist(this.getListAttribute('fail_over_directions'));
  }

  // fail_over_types - computed: true, optional: false, required: false
  public get failOverTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('fail_over_types'));
  }

  // manual_action_instruction - computed: true, optional: false, required: false
  public get manualActionInstruction() {
    return this.getStringAttribute('manual_action_instruction');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // runbook_id - computed: true, optional: false, required: false
  public get runbookId() {
    return this.getStringAttribute('runbook_id');
  }

  // script_path - computed: true, optional: false, required: false
  public get scriptPath() {
    return this.getStringAttribute('script_path');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList extends cdktf.MapList {

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
  public get(index: number): DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList {
    return new DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList(this, `[${index}]`, false);
  }
}

export class DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference {
    return new DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroup {
}

export function dataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupToTerraform(struct?: DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupToHclTerraform(struct?: DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // post_action - computed: true, optional: false, required: false
  private _postAction = new DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionListList(this, "post_action", true);
  public get postAction() {
    return this._postAction;
  }

  // pre_action - computed: true, optional: false, required: false
  private _preAction = new DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionListList(this, "pre_action", true);
  public get preAction() {
    return this._preAction;
  }

  // replicated_protected_items - computed: true, optional: false, required: false
  public get replicatedProtectedItems() {
    return this.getListAttribute('replicated_protected_items');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference {
    return new DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/site_recovery_replication_recovery_plan#read DataAzurermSiteRecoveryReplicationRecoveryPlan#read}
  */
  readonly read?: string;
}

export function dataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsToTerraform(struct?: DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsToHclTerraform(struct?: DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/site_recovery_replication_recovery_plan azurerm_site_recovery_replication_recovery_plan}
*/
export class DataAzurermSiteRecoveryReplicationRecoveryPlan extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_site_recovery_replication_recovery_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzurermSiteRecoveryReplicationRecoveryPlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermSiteRecoveryReplicationRecoveryPlan to import
  * @param importFromId The id of the existing DataAzurermSiteRecoveryReplicationRecoveryPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/site_recovery_replication_recovery_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermSiteRecoveryReplicationRecoveryPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_site_recovery_replication_recovery_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/site_recovery_replication_recovery_plan azurerm_site_recovery_replication_recovery_plan} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermSiteRecoveryReplicationRecoveryPlanConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermSiteRecoveryReplicationRecoveryPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_site_recovery_replication_recovery_plan',
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
    this._id = config.id;
    this._name = config.name;
    this._recoveryVaultId = config.recoveryVaultId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_to_azure_settings - computed: true, optional: false, required: false
  private _azureToAzureSettings = new DataAzurermSiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList(this, "azure_to_azure_settings", false);
  public get azureToAzureSettings() {
    return this._azureToAzureSettings;
  }

  // failover_deployment_model - computed: true, optional: false, required: false
  public get failoverDeploymentModel() {
    return this.getStringAttribute('failover_deployment_model');
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

  // recovery_group - computed: true, optional: false, required: false
  private _recoveryGroup = new DataAzurermSiteRecoveryReplicationRecoveryPlanRecoveryGroupList(this, "recovery_group", true);
  public get recoveryGroup() {
    return this._recoveryGroup;
  }

  // recovery_vault_id - computed: false, optional: false, required: true
  private _recoveryVaultId?: string; 
  public get recoveryVaultId() {
    return this.getStringAttribute('recovery_vault_id');
  }
  public set recoveryVaultId(value: string) {
    this._recoveryVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryVaultIdInput() {
    return this._recoveryVaultId;
  }

  // source_recovery_fabric_id - computed: true, optional: false, required: false
  public get sourceRecoveryFabricId() {
    return this.getStringAttribute('source_recovery_fabric_id');
  }

  // target_recovery_fabric_id - computed: true, optional: false, required: false
  public get targetRecoveryFabricId() {
    return this.getStringAttribute('target_recovery_fabric_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      recovery_vault_id: cdktf.stringToTerraform(this._recoveryVaultId),
      timeouts: dataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      recovery_vault_id: {
        value: cdktf.stringToHclTerraform(this._recoveryVaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataAzurermSiteRecoveryReplicationRecoveryPlanTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermSiteRecoveryReplicationRecoveryPlanTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
