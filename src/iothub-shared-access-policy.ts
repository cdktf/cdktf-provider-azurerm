// https://www.terraform.io/docs/providers/azurerm/r/iothub_shared_access_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IothubSharedAccessPolicyAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_shared_access_policy.html#device_connect IothubSharedAccessPolicyA#device_connect}
  */
  readonly deviceConnect?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_shared_access_policy.html#iothub_name IothubSharedAccessPolicyA#iothub_name}
  */
  readonly iothubName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_shared_access_policy.html#name IothubSharedAccessPolicyA#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_shared_access_policy.html#registry_read IothubSharedAccessPolicyA#registry_read}
  */
  readonly registryRead?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_shared_access_policy.html#registry_write IothubSharedAccessPolicyA#registry_write}
  */
  readonly registryWrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_shared_access_policy.html#resource_group_name IothubSharedAccessPolicyA#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_shared_access_policy.html#service_connect IothubSharedAccessPolicyA#service_connect}
  */
  readonly serviceConnect?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_shared_access_policy.html#timeouts IothubSharedAccessPolicyA#timeouts}
  */
  readonly timeouts?: IothubSharedAccessPolicyTimeouts;
}
export interface IothubSharedAccessPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_shared_access_policy.html#create IothubSharedAccessPolicyA#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_shared_access_policy.html#delete IothubSharedAccessPolicyA#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_shared_access_policy.html#read IothubSharedAccessPolicyA#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_shared_access_policy.html#update IothubSharedAccessPolicyA#update}
  */
  readonly update?: string;
}

function iothubSharedAccessPolicyTimeoutsToTerraform(struct?: IothubSharedAccessPolicyTimeoutsOutputReference | IothubSharedAccessPolicyTimeouts): any {
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

export class IothubSharedAccessPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_shared_access_policy.html azurerm_iothub_shared_access_policy}
*/
export class IothubSharedAccessPolicyA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_iothub_shared_access_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_shared_access_policy.html azurerm_iothub_shared_access_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IothubSharedAccessPolicyAConfig
  */
  public constructor(scope: Construct, id: string, config: IothubSharedAccessPolicyAConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_iothub_shared_access_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deviceConnect = config.deviceConnect;
    this._iothubName = config.iothubName;
    this._name = config.name;
    this._registryRead = config.registryRead;
    this._registryWrite = config.registryWrite;
    this._resourceGroupName = config.resourceGroupName;
    this._serviceConnect = config.serviceConnect;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_connect - computed: false, optional: true, required: false
  private _deviceConnect?: boolean | cdktf.IResolvable | undefined; 
  public get deviceConnect() {
    return this.getBooleanAttribute('device_connect') as any;
  }
  public set deviceConnect(value: boolean | cdktf.IResolvable | undefined) {
    this._deviceConnect = value;
  }
  public resetDeviceConnect() {
    this._deviceConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceConnectInput() {
    return this._deviceConnect
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iothub_name - computed: false, optional: false, required: true
  private _iothubName?: string; 
  public get iothubName() {
    return this.getStringAttribute('iothub_name');
  }
  public set iothubName(value: string) {
    this._iothubName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iothubNameInput() {
    return this._iothubName
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

  // primary_connection_string - computed: true, optional: false, required: false
  public get primaryConnectionString() {
    return this.getStringAttribute('primary_connection_string');
  }

  // primary_key - computed: true, optional: false, required: false
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }

  // registry_read - computed: false, optional: true, required: false
  private _registryRead?: boolean | cdktf.IResolvable | undefined; 
  public get registryRead() {
    return this.getBooleanAttribute('registry_read') as any;
  }
  public set registryRead(value: boolean | cdktf.IResolvable | undefined) {
    this._registryRead = value;
  }
  public resetRegistryRead() {
    this._registryRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryReadInput() {
    return this._registryRead
  }

  // registry_write - computed: false, optional: true, required: false
  private _registryWrite?: boolean | cdktf.IResolvable | undefined; 
  public get registryWrite() {
    return this.getBooleanAttribute('registry_write') as any;
  }
  public set registryWrite(value: boolean | cdktf.IResolvable | undefined) {
    this._registryWrite = value;
  }
  public resetRegistryWrite() {
    this._registryWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryWriteInput() {
    return this._registryWrite
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
    return this._resourceGroupName
  }

  // secondary_connection_string - computed: true, optional: false, required: false
  public get secondaryConnectionString() {
    return this.getStringAttribute('secondary_connection_string');
  }

  // secondary_key - computed: true, optional: false, required: false
  public get secondaryKey() {
    return this.getStringAttribute('secondary_key');
  }

  // service_connect - computed: false, optional: true, required: false
  private _serviceConnect?: boolean | cdktf.IResolvable | undefined; 
  public get serviceConnect() {
    return this.getBooleanAttribute('service_connect') as any;
  }
  public set serviceConnect(value: boolean | cdktf.IResolvable | undefined) {
    this._serviceConnect = value;
  }
  public resetServiceConnect() {
    this._serviceConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConnectInput() {
    return this._serviceConnect
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IothubSharedAccessPolicyTimeouts | undefined; 
  private __timeoutsOutput = new IothubSharedAccessPolicyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: IothubSharedAccessPolicyTimeouts | undefined) {
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
      device_connect: cdktf.booleanToTerraform(this._deviceConnect),
      iothub_name: cdktf.stringToTerraform(this._iothubName),
      name: cdktf.stringToTerraform(this._name),
      registry_read: cdktf.booleanToTerraform(this._registryRead),
      registry_write: cdktf.booleanToTerraform(this._registryWrite),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      service_connect: cdktf.booleanToTerraform(this._serviceConnect),
      timeouts: iothubSharedAccessPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
