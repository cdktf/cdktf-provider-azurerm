// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SynapseSparkPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool#cache_size SynapseSparkPool#cache_size}
  */
  readonly cacheSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool#compute_isolation_enabled SynapseSparkPool#compute_isolation_enabled}
  */
  readonly computeIsolationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool#dynamic_executor_allocation_enabled SynapseSparkPool#dynamic_executor_allocation_enabled}
  */
  readonly dynamicExecutorAllocationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool#id SynapseSparkPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool#max_executors SynapseSparkPool#max_executors}
  */
  readonly maxExecutors?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool#min_executors SynapseSparkPool#min_executors}
  */
  readonly minExecutors?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool#name SynapseSparkPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool#node_count SynapseSparkPool#node_count}
  */
  readonly nodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool#node_size SynapseSparkPool#node_size}
  */
  readonly nodeSize: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool#node_size_family SynapseSparkPool#node_size_family}
  */
  readonly nodeSizeFamily: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool#session_level_packages_enabled SynapseSparkPool#session_level_packages_enabled}
  */
  readonly sessionLevelPackagesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool#spark_events_folder SynapseSparkPool#spark_events_folder}
  */
  readonly sparkEventsFolder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool#spark_log_folder SynapseSparkPool#spark_log_folder}
  */
  readonly sparkLogFolder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool#spark_version SynapseSparkPool#spark_version}
  */
  readonly sparkVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool#synapse_workspace_id SynapseSparkPool#synapse_workspace_id}
  */
  readonly synapseWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool#tags SynapseSparkPool#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * auto_pause block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool#auto_pause SynapseSparkPool#auto_pause}
  */
  readonly autoPause?: SynapseSparkPoolAutoPause;
  /**
  * auto_scale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool#auto_scale SynapseSparkPool#auto_scale}
  */
  readonly autoScale?: SynapseSparkPoolAutoScale;
  /**
  * library_requirement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool#library_requirement SynapseSparkPool#library_requirement}
  */
  readonly libraryRequirement?: SynapseSparkPoolLibraryRequirement;
  /**
  * spark_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool#spark_config SynapseSparkPool#spark_config}
  */
  readonly sparkConfig?: SynapseSparkPoolSparkConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool#timeouts SynapseSparkPool#timeouts}
  */
  readonly timeouts?: SynapseSparkPoolTimeouts;
}
export interface SynapseSparkPoolAutoPause {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool#delay_in_minutes SynapseSparkPool#delay_in_minutes}
  */
  readonly delayInMinutes: number;
}

export function synapseSparkPoolAutoPauseToTerraform(struct?: SynapseSparkPoolAutoPauseOutputReference | SynapseSparkPoolAutoPause): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay_in_minutes: cdktf.numberToTerraform(struct!.delayInMinutes),
  }
}


export function synapseSparkPoolAutoPauseToHclTerraform(struct?: SynapseSparkPoolAutoPauseOutputReference | SynapseSparkPoolAutoPause): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.delayInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SynapseSparkPoolAutoPauseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SynapseSparkPoolAutoPause | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delayInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayInMinutes = this._delayInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SynapseSparkPoolAutoPause | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delayInMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delayInMinutes = value.delayInMinutes;
    }
  }

  // delay_in_minutes - computed: false, optional: false, required: true
  private _delayInMinutes?: number; 
  public get delayInMinutes() {
    return this.getNumberAttribute('delay_in_minutes');
  }
  public set delayInMinutes(value: number) {
    this._delayInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInMinutesInput() {
    return this._delayInMinutes;
  }
}
export interface SynapseSparkPoolAutoScale {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool#max_node_count SynapseSparkPool#max_node_count}
  */
  readonly maxNodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool#min_node_count SynapseSparkPool#min_node_count}
  */
  readonly minNodeCount: number;
}

export function synapseSparkPoolAutoScaleToTerraform(struct?: SynapseSparkPoolAutoScaleOutputReference | SynapseSparkPoolAutoScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_node_count: cdktf.numberToTerraform(struct!.maxNodeCount),
    min_node_count: cdktf.numberToTerraform(struct!.minNodeCount),
  }
}


export function synapseSparkPoolAutoScaleToHclTerraform(struct?: SynapseSparkPoolAutoScaleOutputReference | SynapseSparkPoolAutoScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_node_count: {
      value: cdktf.numberToHclTerraform(struct!.maxNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_node_count: {
      value: cdktf.numberToHclTerraform(struct!.minNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SynapseSparkPoolAutoScaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SynapseSparkPoolAutoScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodeCount = this._maxNodeCount;
    }
    if (this._minNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeCount = this._minNodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SynapseSparkPoolAutoScale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxNodeCount = undefined;
      this._minNodeCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxNodeCount = value.maxNodeCount;
      this._minNodeCount = value.minNodeCount;
    }
  }

  // max_node_count - computed: false, optional: false, required: true
  private _maxNodeCount?: number; 
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }
  public set maxNodeCount(value: number) {
    this._maxNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeCountInput() {
    return this._maxNodeCount;
  }

  // min_node_count - computed: false, optional: false, required: true
  private _minNodeCount?: number; 
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }
  public set minNodeCount(value: number) {
    this._minNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCountInput() {
    return this._minNodeCount;
  }
}
export interface SynapseSparkPoolLibraryRequirement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool#content SynapseSparkPool#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool#filename SynapseSparkPool#filename}
  */
  readonly filename: string;
}

export function synapseSparkPoolLibraryRequirementToTerraform(struct?: SynapseSparkPoolLibraryRequirementOutputReference | SynapseSparkPoolLibraryRequirement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    filename: cdktf.stringToTerraform(struct!.filename),
  }
}


export function synapseSparkPoolLibraryRequirementToHclTerraform(struct?: SynapseSparkPoolLibraryRequirementOutputReference | SynapseSparkPoolLibraryRequirement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SynapseSparkPoolLibraryRequirementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SynapseSparkPoolLibraryRequirement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SynapseSparkPoolLibraryRequirement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._filename = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._filename = value.filename;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }
}
export interface SynapseSparkPoolSparkConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool#content SynapseSparkPool#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool#filename SynapseSparkPool#filename}
  */
  readonly filename: string;
}

export function synapseSparkPoolSparkConfigToTerraform(struct?: SynapseSparkPoolSparkConfigOutputReference | SynapseSparkPoolSparkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    filename: cdktf.stringToTerraform(struct!.filename),
  }
}


export function synapseSparkPoolSparkConfigToHclTerraform(struct?: SynapseSparkPoolSparkConfigOutputReference | SynapseSparkPoolSparkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SynapseSparkPoolSparkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SynapseSparkPoolSparkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SynapseSparkPoolSparkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._filename = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._filename = value.filename;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }
}
export interface SynapseSparkPoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool#create SynapseSparkPool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool#delete SynapseSparkPool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool#read SynapseSparkPool#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool#update SynapseSparkPool#update}
  */
  readonly update?: string;
}

export function synapseSparkPoolTimeoutsToTerraform(struct?: SynapseSparkPoolTimeouts | cdktf.IResolvable): any {
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


export function synapseSparkPoolTimeoutsToHclTerraform(struct?: SynapseSparkPoolTimeouts | cdktf.IResolvable): any {
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

export class SynapseSparkPoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SynapseSparkPoolTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SynapseSparkPoolTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool azurerm_synapse_spark_pool}
*/
export class SynapseSparkPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_synapse_spark_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SynapseSparkPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SynapseSparkPool to import
  * @param importFromId The id of the existing SynapseSparkPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SynapseSparkPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_synapse_spark_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_spark_pool azurerm_synapse_spark_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SynapseSparkPoolConfig
  */
  public constructor(scope: Construct, id: string, config: SynapseSparkPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_synapse_spark_pool',
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
    this._cacheSize = config.cacheSize;
    this._computeIsolationEnabled = config.computeIsolationEnabled;
    this._dynamicExecutorAllocationEnabled = config.dynamicExecutorAllocationEnabled;
    this._id = config.id;
    this._maxExecutors = config.maxExecutors;
    this._minExecutors = config.minExecutors;
    this._name = config.name;
    this._nodeCount = config.nodeCount;
    this._nodeSize = config.nodeSize;
    this._nodeSizeFamily = config.nodeSizeFamily;
    this._sessionLevelPackagesEnabled = config.sessionLevelPackagesEnabled;
    this._sparkEventsFolder = config.sparkEventsFolder;
    this._sparkLogFolder = config.sparkLogFolder;
    this._sparkVersion = config.sparkVersion;
    this._synapseWorkspaceId = config.synapseWorkspaceId;
    this._tags = config.tags;
    this._autoPause.internalValue = config.autoPause;
    this._autoScale.internalValue = config.autoScale;
    this._libraryRequirement.internalValue = config.libraryRequirement;
    this._sparkConfig.internalValue = config.sparkConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_size - computed: false, optional: true, required: false
  private _cacheSize?: number; 
  public get cacheSize() {
    return this.getNumberAttribute('cache_size');
  }
  public set cacheSize(value: number) {
    this._cacheSize = value;
  }
  public resetCacheSize() {
    this._cacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheSizeInput() {
    return this._cacheSize;
  }

  // compute_isolation_enabled - computed: false, optional: true, required: false
  private _computeIsolationEnabled?: boolean | cdktf.IResolvable; 
  public get computeIsolationEnabled() {
    return this.getBooleanAttribute('compute_isolation_enabled');
  }
  public set computeIsolationEnabled(value: boolean | cdktf.IResolvable) {
    this._computeIsolationEnabled = value;
  }
  public resetComputeIsolationEnabled() {
    this._computeIsolationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeIsolationEnabledInput() {
    return this._computeIsolationEnabled;
  }

  // dynamic_executor_allocation_enabled - computed: false, optional: true, required: false
  private _dynamicExecutorAllocationEnabled?: boolean | cdktf.IResolvable; 
  public get dynamicExecutorAllocationEnabled() {
    return this.getBooleanAttribute('dynamic_executor_allocation_enabled');
  }
  public set dynamicExecutorAllocationEnabled(value: boolean | cdktf.IResolvable) {
    this._dynamicExecutorAllocationEnabled = value;
  }
  public resetDynamicExecutorAllocationEnabled() {
    this._dynamicExecutorAllocationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicExecutorAllocationEnabledInput() {
    return this._dynamicExecutorAllocationEnabled;
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

  // max_executors - computed: false, optional: true, required: false
  private _maxExecutors?: number; 
  public get maxExecutors() {
    return this.getNumberAttribute('max_executors');
  }
  public set maxExecutors(value: number) {
    this._maxExecutors = value;
  }
  public resetMaxExecutors() {
    this._maxExecutors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxExecutorsInput() {
    return this._maxExecutors;
  }

  // min_executors - computed: false, optional: true, required: false
  private _minExecutors?: number; 
  public get minExecutors() {
    return this.getNumberAttribute('min_executors');
  }
  public set minExecutors(value: number) {
    this._minExecutors = value;
  }
  public resetMinExecutors() {
    this._minExecutors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minExecutorsInput() {
    return this._minExecutors;
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

  // node_count - computed: true, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // node_size - computed: false, optional: false, required: true
  private _nodeSize?: string; 
  public get nodeSize() {
    return this.getStringAttribute('node_size');
  }
  public set nodeSize(value: string) {
    this._nodeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSizeInput() {
    return this._nodeSize;
  }

  // node_size_family - computed: false, optional: false, required: true
  private _nodeSizeFamily?: string; 
  public get nodeSizeFamily() {
    return this.getStringAttribute('node_size_family');
  }
  public set nodeSizeFamily(value: string) {
    this._nodeSizeFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSizeFamilyInput() {
    return this._nodeSizeFamily;
  }

  // session_level_packages_enabled - computed: false, optional: true, required: false
  private _sessionLevelPackagesEnabled?: boolean | cdktf.IResolvable; 
  public get sessionLevelPackagesEnabled() {
    return this.getBooleanAttribute('session_level_packages_enabled');
  }
  public set sessionLevelPackagesEnabled(value: boolean | cdktf.IResolvable) {
    this._sessionLevelPackagesEnabled = value;
  }
  public resetSessionLevelPackagesEnabled() {
    this._sessionLevelPackagesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionLevelPackagesEnabledInput() {
    return this._sessionLevelPackagesEnabled;
  }

  // spark_events_folder - computed: false, optional: true, required: false
  private _sparkEventsFolder?: string; 
  public get sparkEventsFolder() {
    return this.getStringAttribute('spark_events_folder');
  }
  public set sparkEventsFolder(value: string) {
    this._sparkEventsFolder = value;
  }
  public resetSparkEventsFolder() {
    this._sparkEventsFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkEventsFolderInput() {
    return this._sparkEventsFolder;
  }

  // spark_log_folder - computed: false, optional: true, required: false
  private _sparkLogFolder?: string; 
  public get sparkLogFolder() {
    return this.getStringAttribute('spark_log_folder');
  }
  public set sparkLogFolder(value: string) {
    this._sparkLogFolder = value;
  }
  public resetSparkLogFolder() {
    this._sparkLogFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkLogFolderInput() {
    return this._sparkLogFolder;
  }

  // spark_version - computed: false, optional: false, required: true
  private _sparkVersion?: string; 
  public get sparkVersion() {
    return this.getStringAttribute('spark_version');
  }
  public set sparkVersion(value: string) {
    this._sparkVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkVersionInput() {
    return this._sparkVersion;
  }

  // synapse_workspace_id - computed: false, optional: false, required: true
  private _synapseWorkspaceId?: string; 
  public get synapseWorkspaceId() {
    return this.getStringAttribute('synapse_workspace_id');
  }
  public set synapseWorkspaceId(value: string) {
    this._synapseWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get synapseWorkspaceIdInput() {
    return this._synapseWorkspaceId;
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

  // auto_pause - computed: false, optional: true, required: false
  private _autoPause = new SynapseSparkPoolAutoPauseOutputReference(this, "auto_pause");
  public get autoPause() {
    return this._autoPause;
  }
  public putAutoPause(value: SynapseSparkPoolAutoPause) {
    this._autoPause.internalValue = value;
  }
  public resetAutoPause() {
    this._autoPause.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPauseInput() {
    return this._autoPause.internalValue;
  }

  // auto_scale - computed: false, optional: true, required: false
  private _autoScale = new SynapseSparkPoolAutoScaleOutputReference(this, "auto_scale");
  public get autoScale() {
    return this._autoScale;
  }
  public putAutoScale(value: SynapseSparkPoolAutoScale) {
    this._autoScale.internalValue = value;
  }
  public resetAutoScale() {
    this._autoScale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScaleInput() {
    return this._autoScale.internalValue;
  }

  // library_requirement - computed: false, optional: true, required: false
  private _libraryRequirement = new SynapseSparkPoolLibraryRequirementOutputReference(this, "library_requirement");
  public get libraryRequirement() {
    return this._libraryRequirement;
  }
  public putLibraryRequirement(value: SynapseSparkPoolLibraryRequirement) {
    this._libraryRequirement.internalValue = value;
  }
  public resetLibraryRequirement() {
    this._libraryRequirement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryRequirementInput() {
    return this._libraryRequirement.internalValue;
  }

  // spark_config - computed: false, optional: true, required: false
  private _sparkConfig = new SynapseSparkPoolSparkConfigOutputReference(this, "spark_config");
  public get sparkConfig() {
    return this._sparkConfig;
  }
  public putSparkConfig(value: SynapseSparkPoolSparkConfig) {
    this._sparkConfig.internalValue = value;
  }
  public resetSparkConfig() {
    this._sparkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkConfigInput() {
    return this._sparkConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SynapseSparkPoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SynapseSparkPoolTimeouts) {
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
      cache_size: cdktf.numberToTerraform(this._cacheSize),
      compute_isolation_enabled: cdktf.booleanToTerraform(this._computeIsolationEnabled),
      dynamic_executor_allocation_enabled: cdktf.booleanToTerraform(this._dynamicExecutorAllocationEnabled),
      id: cdktf.stringToTerraform(this._id),
      max_executors: cdktf.numberToTerraform(this._maxExecutors),
      min_executors: cdktf.numberToTerraform(this._minExecutors),
      name: cdktf.stringToTerraform(this._name),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      node_size: cdktf.stringToTerraform(this._nodeSize),
      node_size_family: cdktf.stringToTerraform(this._nodeSizeFamily),
      session_level_packages_enabled: cdktf.booleanToTerraform(this._sessionLevelPackagesEnabled),
      spark_events_folder: cdktf.stringToTerraform(this._sparkEventsFolder),
      spark_log_folder: cdktf.stringToTerraform(this._sparkLogFolder),
      spark_version: cdktf.stringToTerraform(this._sparkVersion),
      synapse_workspace_id: cdktf.stringToTerraform(this._synapseWorkspaceId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      auto_pause: synapseSparkPoolAutoPauseToTerraform(this._autoPause.internalValue),
      auto_scale: synapseSparkPoolAutoScaleToTerraform(this._autoScale.internalValue),
      library_requirement: synapseSparkPoolLibraryRequirementToTerraform(this._libraryRequirement.internalValue),
      spark_config: synapseSparkPoolSparkConfigToTerraform(this._sparkConfig.internalValue),
      timeouts: synapseSparkPoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_size: {
        value: cdktf.numberToHclTerraform(this._cacheSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compute_isolation_enabled: {
        value: cdktf.booleanToHclTerraform(this._computeIsolationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dynamic_executor_allocation_enabled: {
        value: cdktf.booleanToHclTerraform(this._dynamicExecutorAllocationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_executors: {
        value: cdktf.numberToHclTerraform(this._maxExecutors),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_executors: {
        value: cdktf.numberToHclTerraform(this._minExecutors),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_count: {
        value: cdktf.numberToHclTerraform(this._nodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_size: {
        value: cdktf.stringToHclTerraform(this._nodeSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_size_family: {
        value: cdktf.stringToHclTerraform(this._nodeSizeFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_level_packages_enabled: {
        value: cdktf.booleanToHclTerraform(this._sessionLevelPackagesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      spark_events_folder: {
        value: cdktf.stringToHclTerraform(this._sparkEventsFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spark_log_folder: {
        value: cdktf.stringToHclTerraform(this._sparkLogFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spark_version: {
        value: cdktf.stringToHclTerraform(this._sparkVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      synapse_workspace_id: {
        value: cdktf.stringToHclTerraform(this._synapseWorkspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      auto_pause: {
        value: synapseSparkPoolAutoPauseToHclTerraform(this._autoPause.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SynapseSparkPoolAutoPauseList",
      },
      auto_scale: {
        value: synapseSparkPoolAutoScaleToHclTerraform(this._autoScale.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SynapseSparkPoolAutoScaleList",
      },
      library_requirement: {
        value: synapseSparkPoolLibraryRequirementToHclTerraform(this._libraryRequirement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SynapseSparkPoolLibraryRequirementList",
      },
      spark_config: {
        value: synapseSparkPoolSparkConfigToHclTerraform(this._sparkConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SynapseSparkPoolSparkConfigList",
      },
      timeouts: {
        value: synapseSparkPoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SynapseSparkPoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
