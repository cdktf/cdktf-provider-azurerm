/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint#id MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint#name MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint#service_resource_id MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint#service_resource_id}
  */
  readonly serviceResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint#spark_enabled MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint#spark_enabled}
  */
  readonly sparkEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint#sub_resource_target MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint#sub_resource_target}
  */
  readonly subResourceTarget: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint#workspace_id MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint#timeouts MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint#timeouts}
  */
  readonly timeouts?: MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeouts;
}
export interface MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint#create MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint#delete MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint#read MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint#read}
  */
  readonly read?: string;
}

export function machineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsToTerraform(struct?: MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function machineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsToHclTerraform(struct?: MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint azurerm_machine_learning_workspace_network_outbound_rule_private_endpoint}
*/
export class MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_machine_learning_workspace_network_outbound_rule_private_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint to import
  * @param importFromId The id of the existing MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MachineLearningWorkspaceNetworkOutboundRulePrivateEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_machine_learning_workspace_network_outbound_rule_private_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/machine_learning_workspace_network_outbound_rule_private_endpoint azurerm_machine_learning_workspace_network_outbound_rule_private_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_machine_learning_workspace_network_outbound_rule_private_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.45.0',
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
    this._serviceResourceId = config.serviceResourceId;
    this._sparkEnabled = config.sparkEnabled;
    this._subResourceTarget = config.subResourceTarget;
    this._workspaceId = config.workspaceId;
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

  // service_resource_id - computed: false, optional: false, required: true
  private _serviceResourceId?: string; 
  public get serviceResourceId() {
    return this.getStringAttribute('service_resource_id');
  }
  public set serviceResourceId(value: string) {
    this._serviceResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceResourceIdInput() {
    return this._serviceResourceId;
  }

  // spark_enabled - computed: false, optional: true, required: false
  private _sparkEnabled?: boolean | cdktf.IResolvable; 
  public get sparkEnabled() {
    return this.getBooleanAttribute('spark_enabled');
  }
  public set sparkEnabled(value: boolean | cdktf.IResolvable) {
    this._sparkEnabled = value;
  }
  public resetSparkEnabled() {
    this._sparkEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkEnabledInput() {
    return this._sparkEnabled;
  }

  // sub_resource_target - computed: false, optional: false, required: true
  private _subResourceTarget?: string; 
  public get subResourceTarget() {
    return this.getStringAttribute('sub_resource_target');
  }
  public set subResourceTarget(value: string) {
    this._subResourceTarget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subResourceTargetInput() {
    return this._subResourceTarget;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeouts) {
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
      service_resource_id: cdktf.stringToTerraform(this._serviceResourceId),
      spark_enabled: cdktf.booleanToTerraform(this._sparkEnabled),
      sub_resource_target: cdktf.stringToTerraform(this._subResourceTarget),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      timeouts: machineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsToTerraform(this._timeouts.internalValue),
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
      service_resource_id: {
        value: cdktf.stringToHclTerraform(this._serviceResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spark_enabled: {
        value: cdktf.booleanToHclTerraform(this._sparkEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sub_resource_target: {
        value: cdktf.stringToHclTerraform(this._subResourceTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: machineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MachineLearningWorkspaceNetworkOutboundRulePrivateEndpointTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
