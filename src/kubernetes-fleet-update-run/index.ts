// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_fleet_update_run
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesFleetUpdateRunConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_fleet_update_run#fleet_update_strategy_id KubernetesFleetUpdateRun#fleet_update_strategy_id}
  */
  readonly fleetUpdateStrategyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_fleet_update_run#id KubernetesFleetUpdateRun#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_fleet_update_run#kubernetes_fleet_manager_id KubernetesFleetUpdateRun#kubernetes_fleet_manager_id}
  */
  readonly kubernetesFleetManagerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_fleet_update_run#name KubernetesFleetUpdateRun#name}
  */
  readonly name: string;
  /**
  * managed_cluster_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_fleet_update_run#managed_cluster_update KubernetesFleetUpdateRun#managed_cluster_update}
  */
  readonly managedClusterUpdate: KubernetesFleetUpdateRunManagedClusterUpdate;
  /**
  * stage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_fleet_update_run#stage KubernetesFleetUpdateRun#stage}
  */
  readonly stage?: KubernetesFleetUpdateRunStage[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_fleet_update_run#timeouts KubernetesFleetUpdateRun#timeouts}
  */
  readonly timeouts?: KubernetesFleetUpdateRunTimeouts;
}
export interface KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_fleet_update_run#type KubernetesFleetUpdateRun#type}
  */
  readonly type: string;
}

export function kubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionToTerraform(struct?: KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference | KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function kubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionToHclTerraform(struct?: KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference | KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
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
export interface KubernetesFleetUpdateRunManagedClusterUpdateUpgrade {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_fleet_update_run#kubernetes_version KubernetesFleetUpdateRun#kubernetes_version}
  */
  readonly kubernetesVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_fleet_update_run#type KubernetesFleetUpdateRun#type}
  */
  readonly type: string;
}

export function kubernetesFleetUpdateRunManagedClusterUpdateUpgradeToTerraform(struct?: KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference | KubernetesFleetUpdateRunManagedClusterUpdateUpgrade): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kubernetes_version: cdktf.stringToTerraform(struct!.kubernetesVersion),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function kubernetesFleetUpdateRunManagedClusterUpdateUpgradeToHclTerraform(struct?: KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference | KubernetesFleetUpdateRunManagedClusterUpdateUpgrade): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kubernetes_version: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesVersion),
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

export class KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesFleetUpdateRunManagedClusterUpdateUpgrade | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kubernetesVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesVersion = this._kubernetesVersion;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesFleetUpdateRunManagedClusterUpdateUpgrade | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kubernetesVersion = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kubernetesVersion = value.kubernetesVersion;
      this._type = value.type;
    }
  }

  // kubernetes_version - computed: false, optional: true, required: false
  private _kubernetesVersion?: string; 
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }
  public set kubernetesVersion(value: string) {
    this._kubernetesVersion = value;
  }
  public resetKubernetesVersion() {
    this._kubernetesVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesVersionInput() {
    return this._kubernetesVersion;
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
export interface KubernetesFleetUpdateRunManagedClusterUpdate {
  /**
  * node_image_selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_fleet_update_run#node_image_selection KubernetesFleetUpdateRun#node_image_selection}
  */
  readonly nodeImageSelection?: KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection;
  /**
  * upgrade block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_fleet_update_run#upgrade KubernetesFleetUpdateRun#upgrade}
  */
  readonly upgrade: KubernetesFleetUpdateRunManagedClusterUpdateUpgrade;
}

export function kubernetesFleetUpdateRunManagedClusterUpdateToTerraform(struct?: KubernetesFleetUpdateRunManagedClusterUpdateOutputReference | KubernetesFleetUpdateRunManagedClusterUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_image_selection: kubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionToTerraform(struct!.nodeImageSelection),
    upgrade: kubernetesFleetUpdateRunManagedClusterUpdateUpgradeToTerraform(struct!.upgrade),
  }
}


export function kubernetesFleetUpdateRunManagedClusterUpdateToHclTerraform(struct?: KubernetesFleetUpdateRunManagedClusterUpdateOutputReference | KubernetesFleetUpdateRunManagedClusterUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_image_selection: {
      value: kubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionToHclTerraform(struct!.nodeImageSelection),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionList",
    },
    upgrade: {
      value: kubernetesFleetUpdateRunManagedClusterUpdateUpgradeToHclTerraform(struct!.upgrade),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesFleetUpdateRunManagedClusterUpdateUpgradeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesFleetUpdateRunManagedClusterUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesFleetUpdateRunManagedClusterUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeImageSelection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeImageSelection = this._nodeImageSelection?.internalValue;
    }
    if (this._upgrade?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgrade = this._upgrade?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesFleetUpdateRunManagedClusterUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeImageSelection.internalValue = undefined;
      this._upgrade.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeImageSelection.internalValue = value.nodeImageSelection;
      this._upgrade.internalValue = value.upgrade;
    }
  }

  // node_image_selection - computed: false, optional: true, required: false
  private _nodeImageSelection = new KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference(this, "node_image_selection");
  public get nodeImageSelection() {
    return this._nodeImageSelection;
  }
  public putNodeImageSelection(value: KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection) {
    this._nodeImageSelection.internalValue = value;
  }
  public resetNodeImageSelection() {
    this._nodeImageSelection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeImageSelectionInput() {
    return this._nodeImageSelection.internalValue;
  }

  // upgrade - computed: false, optional: false, required: true
  private _upgrade = new KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference(this, "upgrade");
  public get upgrade() {
    return this._upgrade;
  }
  public putUpgrade(value: KubernetesFleetUpdateRunManagedClusterUpdateUpgrade) {
    this._upgrade.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeInput() {
    return this._upgrade.internalValue;
  }
}
export interface KubernetesFleetUpdateRunStageGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_fleet_update_run#name KubernetesFleetUpdateRun#name}
  */
  readonly name: string;
}

export function kubernetesFleetUpdateRunStageGroupToTerraform(struct?: KubernetesFleetUpdateRunStageGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function kubernetesFleetUpdateRunStageGroupToHclTerraform(struct?: KubernetesFleetUpdateRunStageGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesFleetUpdateRunStageGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesFleetUpdateRunStageGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesFleetUpdateRunStageGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class KubernetesFleetUpdateRunStageGroupList extends cdktf.ComplexList {
  public internalValue? : KubernetesFleetUpdateRunStageGroup[] | cdktf.IResolvable

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
  public get(index: number): KubernetesFleetUpdateRunStageGroupOutputReference {
    return new KubernetesFleetUpdateRunStageGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesFleetUpdateRunStage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_fleet_update_run#after_stage_wait_in_seconds KubernetesFleetUpdateRun#after_stage_wait_in_seconds}
  */
  readonly afterStageWaitInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_fleet_update_run#name KubernetesFleetUpdateRun#name}
  */
  readonly name: string;
  /**
  * group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_fleet_update_run#group KubernetesFleetUpdateRun#group}
  */
  readonly group: KubernetesFleetUpdateRunStageGroup[] | cdktf.IResolvable;
}

export function kubernetesFleetUpdateRunStageToTerraform(struct?: KubernetesFleetUpdateRunStage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after_stage_wait_in_seconds: cdktf.numberToTerraform(struct!.afterStageWaitInSeconds),
    name: cdktf.stringToTerraform(struct!.name),
    group: cdktf.listMapper(kubernetesFleetUpdateRunStageGroupToTerraform, true)(struct!.group),
  }
}


export function kubernetesFleetUpdateRunStageToHclTerraform(struct?: KubernetesFleetUpdateRunStage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after_stage_wait_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.afterStageWaitInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.listMapperHcl(kubernetesFleetUpdateRunStageGroupToHclTerraform, true)(struct!.group),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesFleetUpdateRunStageGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesFleetUpdateRunStageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesFleetUpdateRunStage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._afterStageWaitInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.afterStageWaitInSeconds = this._afterStageWaitInSeconds;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._group?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesFleetUpdateRunStage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._afterStageWaitInSeconds = undefined;
      this._name = undefined;
      this._group.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._afterStageWaitInSeconds = value.afterStageWaitInSeconds;
      this._name = value.name;
      this._group.internalValue = value.group;
    }
  }

  // after_stage_wait_in_seconds - computed: false, optional: true, required: false
  private _afterStageWaitInSeconds?: number; 
  public get afterStageWaitInSeconds() {
    return this.getNumberAttribute('after_stage_wait_in_seconds');
  }
  public set afterStageWaitInSeconds(value: number) {
    this._afterStageWaitInSeconds = value;
  }
  public resetAfterStageWaitInSeconds() {
    this._afterStageWaitInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterStageWaitInSecondsInput() {
    return this._afterStageWaitInSeconds;
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

  // group - computed: false, optional: false, required: true
  private _group = new KubernetesFleetUpdateRunStageGroupList(this, "group", false);
  public get group() {
    return this._group;
  }
  public putGroup(value: KubernetesFleetUpdateRunStageGroup[] | cdktf.IResolvable) {
    this._group.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }
}

export class KubernetesFleetUpdateRunStageList extends cdktf.ComplexList {
  public internalValue? : KubernetesFleetUpdateRunStage[] | cdktf.IResolvable

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
  public get(index: number): KubernetesFleetUpdateRunStageOutputReference {
    return new KubernetesFleetUpdateRunStageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesFleetUpdateRunTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_fleet_update_run#create KubernetesFleetUpdateRun#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_fleet_update_run#delete KubernetesFleetUpdateRun#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_fleet_update_run#read KubernetesFleetUpdateRun#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_fleet_update_run#update KubernetesFleetUpdateRun#update}
  */
  readonly update?: string;
}

export function kubernetesFleetUpdateRunTimeoutsToTerraform(struct?: KubernetesFleetUpdateRunTimeouts | cdktf.IResolvable): any {
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


export function kubernetesFleetUpdateRunTimeoutsToHclTerraform(struct?: KubernetesFleetUpdateRunTimeouts | cdktf.IResolvable): any {
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

export class KubernetesFleetUpdateRunTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KubernetesFleetUpdateRunTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubernetesFleetUpdateRunTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_fleet_update_run azurerm_kubernetes_fleet_update_run}
*/
export class KubernetesFleetUpdateRun extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_kubernetes_fleet_update_run";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesFleetUpdateRun resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesFleetUpdateRun to import
  * @param importFromId The id of the existing KubernetesFleetUpdateRun that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_fleet_update_run#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesFleetUpdateRun to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_kubernetes_fleet_update_run", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_fleet_update_run azurerm_kubernetes_fleet_update_run} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesFleetUpdateRunConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesFleetUpdateRunConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kubernetes_fleet_update_run',
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
    this._fleetUpdateStrategyId = config.fleetUpdateStrategyId;
    this._id = config.id;
    this._kubernetesFleetManagerId = config.kubernetesFleetManagerId;
    this._name = config.name;
    this._managedClusterUpdate.internalValue = config.managedClusterUpdate;
    this._stage.internalValue = config.stage;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fleet_update_strategy_id - computed: false, optional: true, required: false
  private _fleetUpdateStrategyId?: string; 
  public get fleetUpdateStrategyId() {
    return this.getStringAttribute('fleet_update_strategy_id');
  }
  public set fleetUpdateStrategyId(value: string) {
    this._fleetUpdateStrategyId = value;
  }
  public resetFleetUpdateStrategyId() {
    this._fleetUpdateStrategyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetUpdateStrategyIdInput() {
    return this._fleetUpdateStrategyId;
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

  // kubernetes_fleet_manager_id - computed: false, optional: false, required: true
  private _kubernetesFleetManagerId?: string; 
  public get kubernetesFleetManagerId() {
    return this.getStringAttribute('kubernetes_fleet_manager_id');
  }
  public set kubernetesFleetManagerId(value: string) {
    this._kubernetesFleetManagerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesFleetManagerIdInput() {
    return this._kubernetesFleetManagerId;
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

  // managed_cluster_update - computed: false, optional: false, required: true
  private _managedClusterUpdate = new KubernetesFleetUpdateRunManagedClusterUpdateOutputReference(this, "managed_cluster_update");
  public get managedClusterUpdate() {
    return this._managedClusterUpdate;
  }
  public putManagedClusterUpdate(value: KubernetesFleetUpdateRunManagedClusterUpdate) {
    this._managedClusterUpdate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedClusterUpdateInput() {
    return this._managedClusterUpdate.internalValue;
  }

  // stage - computed: false, optional: true, required: false
  private _stage = new KubernetesFleetUpdateRunStageList(this, "stage", false);
  public get stage() {
    return this._stage;
  }
  public putStage(value: KubernetesFleetUpdateRunStage[] | cdktf.IResolvable) {
    this._stage.internalValue = value;
  }
  public resetStage() {
    this._stage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageInput() {
    return this._stage.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KubernetesFleetUpdateRunTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KubernetesFleetUpdateRunTimeouts) {
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
      fleet_update_strategy_id: cdktf.stringToTerraform(this._fleetUpdateStrategyId),
      id: cdktf.stringToTerraform(this._id),
      kubernetes_fleet_manager_id: cdktf.stringToTerraform(this._kubernetesFleetManagerId),
      name: cdktf.stringToTerraform(this._name),
      managed_cluster_update: kubernetesFleetUpdateRunManagedClusterUpdateToTerraform(this._managedClusterUpdate.internalValue),
      stage: cdktf.listMapper(kubernetesFleetUpdateRunStageToTerraform, true)(this._stage.internalValue),
      timeouts: kubernetesFleetUpdateRunTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fleet_update_strategy_id: {
        value: cdktf.stringToHclTerraform(this._fleetUpdateStrategyId),
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
      kubernetes_fleet_manager_id: {
        value: cdktf.stringToHclTerraform(this._kubernetesFleetManagerId),
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
      managed_cluster_update: {
        value: kubernetesFleetUpdateRunManagedClusterUpdateToHclTerraform(this._managedClusterUpdate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesFleetUpdateRunManagedClusterUpdateList",
      },
      stage: {
        value: cdktf.listMapperHcl(kubernetesFleetUpdateRunStageToHclTerraform, true)(this._stage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesFleetUpdateRunStageList",
      },
      timeouts: {
        value: kubernetesFleetUpdateRunTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KubernetesFleetUpdateRunTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
