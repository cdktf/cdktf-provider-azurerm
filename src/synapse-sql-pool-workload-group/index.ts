// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_sql_pool_workload_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SynapseSqlPoolWorkloadGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_sql_pool_workload_group#id SynapseSqlPoolWorkloadGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_sql_pool_workload_group#importance SynapseSqlPoolWorkloadGroup#importance}
  */
  readonly importance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_sql_pool_workload_group#max_resource_percent SynapseSqlPoolWorkloadGroup#max_resource_percent}
  */
  readonly maxResourcePercent: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_sql_pool_workload_group#max_resource_percent_per_request SynapseSqlPoolWorkloadGroup#max_resource_percent_per_request}
  */
  readonly maxResourcePercentPerRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_sql_pool_workload_group#min_resource_percent SynapseSqlPoolWorkloadGroup#min_resource_percent}
  */
  readonly minResourcePercent: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_sql_pool_workload_group#min_resource_percent_per_request SynapseSqlPoolWorkloadGroup#min_resource_percent_per_request}
  */
  readonly minResourcePercentPerRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_sql_pool_workload_group#name SynapseSqlPoolWorkloadGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_sql_pool_workload_group#query_execution_timeout_in_seconds SynapseSqlPoolWorkloadGroup#query_execution_timeout_in_seconds}
  */
  readonly queryExecutionTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_sql_pool_workload_group#sql_pool_id SynapseSqlPoolWorkloadGroup#sql_pool_id}
  */
  readonly sqlPoolId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_sql_pool_workload_group#timeouts SynapseSqlPoolWorkloadGroup#timeouts}
  */
  readonly timeouts?: SynapseSqlPoolWorkloadGroupTimeouts;
}
export interface SynapseSqlPoolWorkloadGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_sql_pool_workload_group#create SynapseSqlPoolWorkloadGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_sql_pool_workload_group#delete SynapseSqlPoolWorkloadGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_sql_pool_workload_group#read SynapseSqlPoolWorkloadGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_sql_pool_workload_group#update SynapseSqlPoolWorkloadGroup#update}
  */
  readonly update?: string;
}

export function synapseSqlPoolWorkloadGroupTimeoutsToTerraform(struct?: SynapseSqlPoolWorkloadGroupTimeouts | cdktf.IResolvable): any {
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


export function synapseSqlPoolWorkloadGroupTimeoutsToHclTerraform(struct?: SynapseSqlPoolWorkloadGroupTimeouts | cdktf.IResolvable): any {
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

export class SynapseSqlPoolWorkloadGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SynapseSqlPoolWorkloadGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SynapseSqlPoolWorkloadGroupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_sql_pool_workload_group azurerm_synapse_sql_pool_workload_group}
*/
export class SynapseSqlPoolWorkloadGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_synapse_sql_pool_workload_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SynapseSqlPoolWorkloadGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SynapseSqlPoolWorkloadGroup to import
  * @param importFromId The id of the existing SynapseSqlPoolWorkloadGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_sql_pool_workload_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SynapseSqlPoolWorkloadGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_synapse_sql_pool_workload_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/synapse_sql_pool_workload_group azurerm_synapse_sql_pool_workload_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SynapseSqlPoolWorkloadGroupConfig
  */
  public constructor(scope: Construct, id: string, config: SynapseSqlPoolWorkloadGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_synapse_sql_pool_workload_group',
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
    this._importance = config.importance;
    this._maxResourcePercent = config.maxResourcePercent;
    this._maxResourcePercentPerRequest = config.maxResourcePercentPerRequest;
    this._minResourcePercent = config.minResourcePercent;
    this._minResourcePercentPerRequest = config.minResourcePercentPerRequest;
    this._name = config.name;
    this._queryExecutionTimeoutInSeconds = config.queryExecutionTimeoutInSeconds;
    this._sqlPoolId = config.sqlPoolId;
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

  // importance - computed: false, optional: true, required: false
  private _importance?: string; 
  public get importance() {
    return this.getStringAttribute('importance');
  }
  public set importance(value: string) {
    this._importance = value;
  }
  public resetImportance() {
    this._importance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importanceInput() {
    return this._importance;
  }

  // max_resource_percent - computed: false, optional: false, required: true
  private _maxResourcePercent?: number; 
  public get maxResourcePercent() {
    return this.getNumberAttribute('max_resource_percent');
  }
  public set maxResourcePercent(value: number) {
    this._maxResourcePercent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResourcePercentInput() {
    return this._maxResourcePercent;
  }

  // max_resource_percent_per_request - computed: false, optional: true, required: false
  private _maxResourcePercentPerRequest?: number; 
  public get maxResourcePercentPerRequest() {
    return this.getNumberAttribute('max_resource_percent_per_request');
  }
  public set maxResourcePercentPerRequest(value: number) {
    this._maxResourcePercentPerRequest = value;
  }
  public resetMaxResourcePercentPerRequest() {
    this._maxResourcePercentPerRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResourcePercentPerRequestInput() {
    return this._maxResourcePercentPerRequest;
  }

  // min_resource_percent - computed: false, optional: false, required: true
  private _minResourcePercent?: number; 
  public get minResourcePercent() {
    return this.getNumberAttribute('min_resource_percent');
  }
  public set minResourcePercent(value: number) {
    this._minResourcePercent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minResourcePercentInput() {
    return this._minResourcePercent;
  }

  // min_resource_percent_per_request - computed: false, optional: true, required: false
  private _minResourcePercentPerRequest?: number; 
  public get minResourcePercentPerRequest() {
    return this.getNumberAttribute('min_resource_percent_per_request');
  }
  public set minResourcePercentPerRequest(value: number) {
    this._minResourcePercentPerRequest = value;
  }
  public resetMinResourcePercentPerRequest() {
    this._minResourcePercentPerRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minResourcePercentPerRequestInput() {
    return this._minResourcePercentPerRequest;
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

  // query_execution_timeout_in_seconds - computed: false, optional: true, required: false
  private _queryExecutionTimeoutInSeconds?: number; 
  public get queryExecutionTimeoutInSeconds() {
    return this.getNumberAttribute('query_execution_timeout_in_seconds');
  }
  public set queryExecutionTimeoutInSeconds(value: number) {
    this._queryExecutionTimeoutInSeconds = value;
  }
  public resetQueryExecutionTimeoutInSeconds() {
    this._queryExecutionTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryExecutionTimeoutInSecondsInput() {
    return this._queryExecutionTimeoutInSeconds;
  }

  // sql_pool_id - computed: false, optional: false, required: true
  private _sqlPoolId?: string; 
  public get sqlPoolId() {
    return this.getStringAttribute('sql_pool_id');
  }
  public set sqlPoolId(value: string) {
    this._sqlPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlPoolIdInput() {
    return this._sqlPoolId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SynapseSqlPoolWorkloadGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SynapseSqlPoolWorkloadGroupTimeouts) {
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
      importance: cdktf.stringToTerraform(this._importance),
      max_resource_percent: cdktf.numberToTerraform(this._maxResourcePercent),
      max_resource_percent_per_request: cdktf.numberToTerraform(this._maxResourcePercentPerRequest),
      min_resource_percent: cdktf.numberToTerraform(this._minResourcePercent),
      min_resource_percent_per_request: cdktf.numberToTerraform(this._minResourcePercentPerRequest),
      name: cdktf.stringToTerraform(this._name),
      query_execution_timeout_in_seconds: cdktf.numberToTerraform(this._queryExecutionTimeoutInSeconds),
      sql_pool_id: cdktf.stringToTerraform(this._sqlPoolId),
      timeouts: synapseSqlPoolWorkloadGroupTimeoutsToTerraform(this._timeouts.internalValue),
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
      importance: {
        value: cdktf.stringToHclTerraform(this._importance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_resource_percent: {
        value: cdktf.numberToHclTerraform(this._maxResourcePercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_resource_percent_per_request: {
        value: cdktf.numberToHclTerraform(this._maxResourcePercentPerRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_resource_percent: {
        value: cdktf.numberToHclTerraform(this._minResourcePercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_resource_percent_per_request: {
        value: cdktf.numberToHclTerraform(this._minResourcePercentPerRequest),
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
      query_execution_timeout_in_seconds: {
        value: cdktf.numberToHclTerraform(this._queryExecutionTimeoutInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sql_pool_id: {
        value: cdktf.stringToHclTerraform(this._sqlPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: synapseSqlPoolWorkloadGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SynapseSqlPoolWorkloadGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
