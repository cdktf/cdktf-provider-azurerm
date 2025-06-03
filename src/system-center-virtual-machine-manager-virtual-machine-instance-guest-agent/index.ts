/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#id SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#password SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#provisioning_action SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#provisioning_action}
  */
  readonly provisioningAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#scoped_resource_id SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#scoped_resource_id}
  */
  readonly scopedResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#username SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#username}
  */
  readonly username: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#timeouts SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#timeouts}
  */
  readonly timeouts?: SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts;
}
export interface SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#create SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#delete SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#read SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent#read}
  */
  readonly read?: string;
}

export function systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsToTerraform(struct?: SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts | cdktf.IResolvable): any {
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


export function systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsToHclTerraform(struct?: SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts | cdktf.IResolvable): any {
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

export class SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent azurerm_system_center_virtual_machine_manager_virtual_machine_instance_guest_agent}
*/
export class SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_system_center_virtual_machine_manager_virtual_machine_instance_guest_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent to import
  * @param importFromId The id of the existing SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_system_center_virtual_machine_manager_virtual_machine_instance_guest_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance_guest_agent azurerm_system_center_virtual_machine_manager_virtual_machine_instance_guest_agent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig
  */
  public constructor(scope: Construct, id: string, config: SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_system_center_virtual_machine_manager_virtual_machine_instance_guest_agent',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.31.0',
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
    this._password = config.password;
    this._provisioningAction = config.provisioningAction;
    this._scopedResourceId = config.scopedResourceId;
    this._username = config.username;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // provisioning_action - computed: false, optional: true, required: false
  private _provisioningAction?: string; 
  public get provisioningAction() {
    return this.getStringAttribute('provisioning_action');
  }
  public set provisioningAction(value: string) {
    this._provisioningAction = value;
  }
  public resetProvisioningAction() {
    this._provisioningAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningActionInput() {
    return this._provisioningAction;
  }

  // scoped_resource_id - computed: false, optional: false, required: true
  private _scopedResourceId?: string; 
  public get scopedResourceId() {
    return this.getStringAttribute('scoped_resource_id');
  }
  public set scopedResourceId(value: string) {
    this._scopedResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopedResourceIdInput() {
    return this._scopedResourceId;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts) {
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
      password: cdktf.stringToTerraform(this._password),
      provisioning_action: cdktf.stringToTerraform(this._provisioningAction),
      scoped_resource_id: cdktf.stringToTerraform(this._scopedResourceId),
      username: cdktf.stringToTerraform(this._username),
      timeouts: systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsToTerraform(this._timeouts.internalValue),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioning_action: {
        value: cdktf.stringToHclTerraform(this._provisioningAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scoped_resource_id: {
        value: cdktf.stringToHclTerraform(this._scopedResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: systemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SystemCenterVirtualMachineManagerVirtualMachineInstanceGuestAgentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
