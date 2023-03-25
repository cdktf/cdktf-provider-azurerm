// https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteRecoveryReplicationRecoveryPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan#id SiteRecoveryReplicationRecoveryPlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan#recovery_vault_id SiteRecoveryReplicationRecoveryPlan#recovery_vault_id}
  */
  readonly recoveryVaultId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan#source_recovery_fabric_id SiteRecoveryReplicationRecoveryPlan#source_recovery_fabric_id}
  */
  readonly sourceRecoveryFabricId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan#target_recovery_fabric_id SiteRecoveryReplicationRecoveryPlan#target_recovery_fabric_id}
  */
  readonly targetRecoveryFabricId: string;
  /**
  * recovery_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan#recovery_group SiteRecoveryReplicationRecoveryPlan#recovery_group}
  */
  readonly recoveryGroup?: SiteRecoveryReplicationRecoveryPlanRecoveryGroup[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan#timeouts SiteRecoveryReplicationRecoveryPlan#timeouts}
  */
  readonly timeouts?: SiteRecoveryReplicationRecoveryPlanTimeouts;
}
export interface SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan#fabric_location SiteRecoveryReplicationRecoveryPlan#fabric_location}
  */
  readonly fabricLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan#fail_over_directions SiteRecoveryReplicationRecoveryPlan#fail_over_directions}
  */
  readonly failOverDirections: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan#fail_over_types SiteRecoveryReplicationRecoveryPlan#fail_over_types}
  */
  readonly failOverTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan#manual_action_instruction SiteRecoveryReplicationRecoveryPlan#manual_action_instruction}
  */
  readonly manualActionInstruction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan#runbook_id SiteRecoveryReplicationRecoveryPlan#runbook_id}
  */
  readonly runbookId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan#script_path SiteRecoveryReplicationRecoveryPlan#script_path}
  */
  readonly scriptPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}
  */
  readonly type: string;
}

export function siteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionToTerraform(struct?: SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fabric_location: cdktf.stringToTerraform(struct!.fabricLocation),
    fail_over_directions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.failOverDirections),
    fail_over_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.failOverTypes),
    manual_action_instruction: cdktf.stringToTerraform(struct!.manualActionInstruction),
    name: cdktf.stringToTerraform(struct!.name),
    runbook_id: cdktf.stringToTerraform(struct!.runbookId),
    script_path: cdktf.stringToTerraform(struct!.scriptPath),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fabricLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.fabricLocation = this._fabricLocation;
    }
    if (this._failOverDirections !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOverDirections = this._failOverDirections;
    }
    if (this._failOverTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOverTypes = this._failOverTypes;
    }
    if (this._manualActionInstruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualActionInstruction = this._manualActionInstruction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._runbookId !== undefined) {
      hasAnyValues = true;
      internalValueResult.runbookId = this._runbookId;
    }
    if (this._scriptPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptPath = this._scriptPath;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fabricLocation = undefined;
      this._failOverDirections = undefined;
      this._failOverTypes = undefined;
      this._manualActionInstruction = undefined;
      this._name = undefined;
      this._runbookId = undefined;
      this._scriptPath = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fabricLocation = value.fabricLocation;
      this._failOverDirections = value.failOverDirections;
      this._failOverTypes = value.failOverTypes;
      this._manualActionInstruction = value.manualActionInstruction;
      this._name = value.name;
      this._runbookId = value.runbookId;
      this._scriptPath = value.scriptPath;
      this._type = value.type;
    }
  }

  // fabric_location - computed: false, optional: true, required: false
  private _fabricLocation?: string; 
  public get fabricLocation() {
    return this.getStringAttribute('fabric_location');
  }
  public set fabricLocation(value: string) {
    this._fabricLocation = value;
  }
  public resetFabricLocation() {
    this._fabricLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricLocationInput() {
    return this._fabricLocation;
  }

  // fail_over_directions - computed: false, optional: false, required: true
  private _failOverDirections?: string[]; 
  public get failOverDirections() {
    return cdktf.Fn.tolist(this.getListAttribute('fail_over_directions'));
  }
  public set failOverDirections(value: string[]) {
    this._failOverDirections = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failOverDirectionsInput() {
    return this._failOverDirections;
  }

  // fail_over_types - computed: false, optional: false, required: true
  private _failOverTypes?: string[]; 
  public get failOverTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('fail_over_types'));
  }
  public set failOverTypes(value: string[]) {
    this._failOverTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failOverTypesInput() {
    return this._failOverTypes;
  }

  // manual_action_instruction - computed: false, optional: true, required: false
  private _manualActionInstruction?: string; 
  public get manualActionInstruction() {
    return this.getStringAttribute('manual_action_instruction');
  }
  public set manualActionInstruction(value: string) {
    this._manualActionInstruction = value;
  }
  public resetManualActionInstruction() {
    this._manualActionInstruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualActionInstructionInput() {
    return this._manualActionInstruction;
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

  // runbook_id - computed: false, optional: true, required: false
  private _runbookId?: string; 
  public get runbookId() {
    return this.getStringAttribute('runbook_id');
  }
  public set runbookId(value: string) {
    this._runbookId = value;
  }
  public resetRunbookId() {
    this._runbookId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookIdInput() {
    return this._runbookId;
  }

  // script_path - computed: false, optional: true, required: false
  private _scriptPath?: string; 
  public get scriptPath() {
    return this.getStringAttribute('script_path');
  }
  public set scriptPath(value: string) {
    this._scriptPath = value;
  }
  public resetScriptPath() {
    this._scriptPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptPathInput() {
    return this._scriptPath;
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

export class SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList extends cdktf.ComplexList {
  public internalValue? : SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction[] | cdktf.IResolvable

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
  public get(index: number): SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference {
    return new SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan#fabric_location SiteRecoveryReplicationRecoveryPlan#fabric_location}
  */
  readonly fabricLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan#fail_over_directions SiteRecoveryReplicationRecoveryPlan#fail_over_directions}
  */
  readonly failOverDirections: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan#fail_over_types SiteRecoveryReplicationRecoveryPlan#fail_over_types}
  */
  readonly failOverTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan#manual_action_instruction SiteRecoveryReplicationRecoveryPlan#manual_action_instruction}
  */
  readonly manualActionInstruction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan#runbook_id SiteRecoveryReplicationRecoveryPlan#runbook_id}
  */
  readonly runbookId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan#script_path SiteRecoveryReplicationRecoveryPlan#script_path}
  */
  readonly scriptPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}
  */
  readonly type: string;
}

export function siteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionToTerraform(struct?: SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fabric_location: cdktf.stringToTerraform(struct!.fabricLocation),
    fail_over_directions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.failOverDirections),
    fail_over_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.failOverTypes),
    manual_action_instruction: cdktf.stringToTerraform(struct!.manualActionInstruction),
    name: cdktf.stringToTerraform(struct!.name),
    runbook_id: cdktf.stringToTerraform(struct!.runbookId),
    script_path: cdktf.stringToTerraform(struct!.scriptPath),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fabricLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.fabricLocation = this._fabricLocation;
    }
    if (this._failOverDirections !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOverDirections = this._failOverDirections;
    }
    if (this._failOverTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOverTypes = this._failOverTypes;
    }
    if (this._manualActionInstruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualActionInstruction = this._manualActionInstruction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._runbookId !== undefined) {
      hasAnyValues = true;
      internalValueResult.runbookId = this._runbookId;
    }
    if (this._scriptPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptPath = this._scriptPath;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fabricLocation = undefined;
      this._failOverDirections = undefined;
      this._failOverTypes = undefined;
      this._manualActionInstruction = undefined;
      this._name = undefined;
      this._runbookId = undefined;
      this._scriptPath = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fabricLocation = value.fabricLocation;
      this._failOverDirections = value.failOverDirections;
      this._failOverTypes = value.failOverTypes;
      this._manualActionInstruction = value.manualActionInstruction;
      this._name = value.name;
      this._runbookId = value.runbookId;
      this._scriptPath = value.scriptPath;
      this._type = value.type;
    }
  }

  // fabric_location - computed: false, optional: true, required: false
  private _fabricLocation?: string; 
  public get fabricLocation() {
    return this.getStringAttribute('fabric_location');
  }
  public set fabricLocation(value: string) {
    this._fabricLocation = value;
  }
  public resetFabricLocation() {
    this._fabricLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricLocationInput() {
    return this._fabricLocation;
  }

  // fail_over_directions - computed: false, optional: false, required: true
  private _failOverDirections?: string[]; 
  public get failOverDirections() {
    return cdktf.Fn.tolist(this.getListAttribute('fail_over_directions'));
  }
  public set failOverDirections(value: string[]) {
    this._failOverDirections = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failOverDirectionsInput() {
    return this._failOverDirections;
  }

  // fail_over_types - computed: false, optional: false, required: true
  private _failOverTypes?: string[]; 
  public get failOverTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('fail_over_types'));
  }
  public set failOverTypes(value: string[]) {
    this._failOverTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failOverTypesInput() {
    return this._failOverTypes;
  }

  // manual_action_instruction - computed: false, optional: true, required: false
  private _manualActionInstruction?: string; 
  public get manualActionInstruction() {
    return this.getStringAttribute('manual_action_instruction');
  }
  public set manualActionInstruction(value: string) {
    this._manualActionInstruction = value;
  }
  public resetManualActionInstruction() {
    this._manualActionInstruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualActionInstructionInput() {
    return this._manualActionInstruction;
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

  // runbook_id - computed: false, optional: true, required: false
  private _runbookId?: string; 
  public get runbookId() {
    return this.getStringAttribute('runbook_id');
  }
  public set runbookId(value: string) {
    this._runbookId = value;
  }
  public resetRunbookId() {
    this._runbookId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookIdInput() {
    return this._runbookId;
  }

  // script_path - computed: false, optional: true, required: false
  private _scriptPath?: string; 
  public get scriptPath() {
    return this.getStringAttribute('script_path');
  }
  public set scriptPath(value: string) {
    this._scriptPath = value;
  }
  public resetScriptPath() {
    this._scriptPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptPathInput() {
    return this._scriptPath;
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

export class SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList extends cdktf.ComplexList {
  public internalValue? : SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction[] | cdktf.IResolvable

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
  public get(index: number): SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference {
    return new SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteRecoveryReplicationRecoveryPlanRecoveryGroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan#replicated_protected_items SiteRecoveryReplicationRecoveryPlan#replicated_protected_items}
  */
  readonly replicatedProtectedItems?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}
  */
  readonly type: string;
  /**
  * post_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan#post_action SiteRecoveryReplicationRecoveryPlan#post_action}
  */
  readonly postAction?: SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction[] | cdktf.IResolvable;
  /**
  * pre_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan#pre_action SiteRecoveryReplicationRecoveryPlan#pre_action}
  */
  readonly preAction?: SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction[] | cdktf.IResolvable;
}

export function siteRecoveryReplicationRecoveryPlanRecoveryGroupToTerraform(struct?: SiteRecoveryReplicationRecoveryPlanRecoveryGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replicated_protected_items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.replicatedProtectedItems),
    type: cdktf.stringToTerraform(struct!.type),
    post_action: cdktf.listMapper(siteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionToTerraform, true)(struct!.postAction),
    pre_action: cdktf.listMapper(siteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionToTerraform, true)(struct!.preAction),
  }
}

export class SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteRecoveryReplicationRecoveryPlanRecoveryGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replicatedProtectedItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicatedProtectedItems = this._replicatedProtectedItems;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._postAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postAction = this._postAction?.internalValue;
    }
    if (this._preAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preAction = this._preAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteRecoveryReplicationRecoveryPlanRecoveryGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replicatedProtectedItems = undefined;
      this._type = undefined;
      this._postAction.internalValue = undefined;
      this._preAction.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replicatedProtectedItems = value.replicatedProtectedItems;
      this._type = value.type;
      this._postAction.internalValue = value.postAction;
      this._preAction.internalValue = value.preAction;
    }
  }

  // replicated_protected_items - computed: false, optional: true, required: false
  private _replicatedProtectedItems?: string[]; 
  public get replicatedProtectedItems() {
    return this.getListAttribute('replicated_protected_items');
  }
  public set replicatedProtectedItems(value: string[]) {
    this._replicatedProtectedItems = value;
  }
  public resetReplicatedProtectedItems() {
    this._replicatedProtectedItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicatedProtectedItemsInput() {
    return this._replicatedProtectedItems;
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

  // post_action - computed: false, optional: true, required: false
  private _postAction = new SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList(this, "post_action", true);
  public get postAction() {
    return this._postAction;
  }
  public putPostAction(value: SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction[] | cdktf.IResolvable) {
    this._postAction.internalValue = value;
  }
  public resetPostAction() {
    this._postAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postActionInput() {
    return this._postAction.internalValue;
  }

  // pre_action - computed: false, optional: true, required: false
  private _preAction = new SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList(this, "pre_action", true);
  public get preAction() {
    return this._preAction;
  }
  public putPreAction(value: SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction[] | cdktf.IResolvable) {
    this._preAction.internalValue = value;
  }
  public resetPreAction() {
    this._preAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preActionInput() {
    return this._preAction.internalValue;
  }
}

export class SiteRecoveryReplicationRecoveryPlanRecoveryGroupList extends cdktf.ComplexList {
  public internalValue? : SiteRecoveryReplicationRecoveryPlanRecoveryGroup[] | cdktf.IResolvable

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
  public get(index: number): SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference {
    return new SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteRecoveryReplicationRecoveryPlanTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan#create SiteRecoveryReplicationRecoveryPlan#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan#delete SiteRecoveryReplicationRecoveryPlan#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan#read SiteRecoveryReplicationRecoveryPlan#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan#update SiteRecoveryReplicationRecoveryPlan#update}
  */
  readonly update?: string;
}

export function siteRecoveryReplicationRecoveryPlanTimeoutsToTerraform(struct?: SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference | SiteRecoveryReplicationRecoveryPlanTimeouts | cdktf.IResolvable): any {
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

export class SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SiteRecoveryReplicationRecoveryPlanTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SiteRecoveryReplicationRecoveryPlanTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan azurerm_site_recovery_replication_recovery_plan}
*/
export class SiteRecoveryReplicationRecoveryPlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_site_recovery_replication_recovery_plan";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replication_recovery_plan azurerm_site_recovery_replication_recovery_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteRecoveryReplicationRecoveryPlanConfig
  */
  public constructor(scope: Construct, id: string, config: SiteRecoveryReplicationRecoveryPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_site_recovery_replication_recovery_plan',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.49.0',
        providerVersionConstraint: '~> 3.10'
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
    this._sourceRecoveryFabricId = config.sourceRecoveryFabricId;
    this._targetRecoveryFabricId = config.targetRecoveryFabricId;
    this._recoveryGroup.internalValue = config.recoveryGroup;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // source_recovery_fabric_id - computed: false, optional: false, required: true
  private _sourceRecoveryFabricId?: string; 
  public get sourceRecoveryFabricId() {
    return this.getStringAttribute('source_recovery_fabric_id');
  }
  public set sourceRecoveryFabricId(value: string) {
    this._sourceRecoveryFabricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRecoveryFabricIdInput() {
    return this._sourceRecoveryFabricId;
  }

  // target_recovery_fabric_id - computed: false, optional: false, required: true
  private _targetRecoveryFabricId?: string; 
  public get targetRecoveryFabricId() {
    return this.getStringAttribute('target_recovery_fabric_id');
  }
  public set targetRecoveryFabricId(value: string) {
    this._targetRecoveryFabricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRecoveryFabricIdInput() {
    return this._targetRecoveryFabricId;
  }

  // recovery_group - computed: false, optional: true, required: false
  private _recoveryGroup = new SiteRecoveryReplicationRecoveryPlanRecoveryGroupList(this, "recovery_group", true);
  public get recoveryGroup() {
    return this._recoveryGroup;
  }
  public putRecoveryGroup(value: SiteRecoveryReplicationRecoveryPlanRecoveryGroup[] | cdktf.IResolvable) {
    this._recoveryGroup.internalValue = value;
  }
  public resetRecoveryGroup() {
    this._recoveryGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryGroupInput() {
    return this._recoveryGroup.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SiteRecoveryReplicationRecoveryPlanTimeouts) {
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
      source_recovery_fabric_id: cdktf.stringToTerraform(this._sourceRecoveryFabricId),
      target_recovery_fabric_id: cdktf.stringToTerraform(this._targetRecoveryFabricId),
      recovery_group: cdktf.listMapper(siteRecoveryReplicationRecoveryPlanRecoveryGroupToTerraform, true)(this._recoveryGroup.internalValue),
      timeouts: siteRecoveryReplicationRecoveryPlanTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
