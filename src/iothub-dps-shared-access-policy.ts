// https://www.terraform.io/docs/providers/azurerm/r/iothub_dps_shared_access_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IothubDpsSharedAccessPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps_shared_access_policy.html#enrollment_read IothubDpsSharedAccessPolicy#enrollment_read}
  */
  readonly enrollmentRead?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps_shared_access_policy.html#enrollment_write IothubDpsSharedAccessPolicy#enrollment_write}
  */
  readonly enrollmentWrite?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps_shared_access_policy.html#iothub_dps_name IothubDpsSharedAccessPolicy#iothub_dps_name}
  */
  readonly iothubDpsName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps_shared_access_policy.html#name IothubDpsSharedAccessPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps_shared_access_policy.html#registration_read IothubDpsSharedAccessPolicy#registration_read}
  */
  readonly registrationRead?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps_shared_access_policy.html#registration_write IothubDpsSharedAccessPolicy#registration_write}
  */
  readonly registrationWrite?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps_shared_access_policy.html#resource_group_name IothubDpsSharedAccessPolicy#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps_shared_access_policy.html#service_config IothubDpsSharedAccessPolicy#service_config}
  */
  readonly serviceConfig?: boolean;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps_shared_access_policy.html#timeouts IothubDpsSharedAccessPolicy#timeouts}
  */
  readonly timeouts?: IothubDpsSharedAccessPolicyTimeouts;
}
export interface IothubDpsSharedAccessPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps_shared_access_policy.html#create IothubDpsSharedAccessPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps_shared_access_policy.html#delete IothubDpsSharedAccessPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps_shared_access_policy.html#read IothubDpsSharedAccessPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps_shared_access_policy.html#update IothubDpsSharedAccessPolicy#update}
  */
  readonly update?: string;
}

function iothubDpsSharedAccessPolicyTimeoutsToTerraform(struct?: IothubDpsSharedAccessPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps_shared_access_policy.html azurerm_iothub_dps_shared_access_policy}
*/
export class IothubDpsSharedAccessPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_dps_shared_access_policy.html azurerm_iothub_dps_shared_access_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IothubDpsSharedAccessPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: IothubDpsSharedAccessPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_iothub_dps_shared_access_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enrollmentRead = config.enrollmentRead;
    this._enrollmentWrite = config.enrollmentWrite;
    this._iothubDpsName = config.iothubDpsName;
    this._name = config.name;
    this._registrationRead = config.registrationRead;
    this._registrationWrite = config.registrationWrite;
    this._resourceGroupName = config.resourceGroupName;
    this._serviceConfig = config.serviceConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enrollment_read - computed: false, optional: true, required: false
  private _enrollmentRead?: boolean;
  public get enrollmentRead() {
    return this.getBooleanAttribute('enrollment_read');
  }
  public set enrollmentRead(value: boolean ) {
    this._enrollmentRead = value;
  }
  public resetEnrollmentRead() {
    this._enrollmentRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollmentReadInput() {
    return this._enrollmentRead
  }

  // enrollment_write - computed: false, optional: true, required: false
  private _enrollmentWrite?: boolean;
  public get enrollmentWrite() {
    return this.getBooleanAttribute('enrollment_write');
  }
  public set enrollmentWrite(value: boolean ) {
    this._enrollmentWrite = value;
  }
  public resetEnrollmentWrite() {
    this._enrollmentWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollmentWriteInput() {
    return this._enrollmentWrite
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iothub_dps_name - computed: false, optional: false, required: true
  private _iothubDpsName: string;
  public get iothubDpsName() {
    return this.getStringAttribute('iothub_dps_name');
  }
  public set iothubDpsName(value: string) {
    this._iothubDpsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iothubDpsNameInput() {
    return this._iothubDpsName
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
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

  // registration_read - computed: false, optional: true, required: false
  private _registrationRead?: boolean;
  public get registrationRead() {
    return this.getBooleanAttribute('registration_read');
  }
  public set registrationRead(value: boolean ) {
    this._registrationRead = value;
  }
  public resetRegistrationRead() {
    this._registrationRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationReadInput() {
    return this._registrationRead
  }

  // registration_write - computed: false, optional: true, required: false
  private _registrationWrite?: boolean;
  public get registrationWrite() {
    return this.getBooleanAttribute('registration_write');
  }
  public set registrationWrite(value: boolean ) {
    this._registrationWrite = value;
  }
  public resetRegistrationWrite() {
    this._registrationWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationWriteInput() {
    return this._registrationWrite
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
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

  // service_config - computed: false, optional: true, required: false
  private _serviceConfig?: boolean;
  public get serviceConfig() {
    return this.getBooleanAttribute('service_config');
  }
  public set serviceConfig(value: boolean ) {
    this._serviceConfig = value;
  }
  public resetServiceConfig() {
    this._serviceConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigInput() {
    return this._serviceConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IothubDpsSharedAccessPolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: IothubDpsSharedAccessPolicyTimeouts ) {
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
      enrollment_read: cdktf.booleanToTerraform(this._enrollmentRead),
      enrollment_write: cdktf.booleanToTerraform(this._enrollmentWrite),
      iothub_dps_name: cdktf.stringToTerraform(this._iothubDpsName),
      name: cdktf.stringToTerraform(this._name),
      registration_read: cdktf.booleanToTerraform(this._registrationRead),
      registration_write: cdktf.booleanToTerraform(this._registrationWrite),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      service_config: cdktf.booleanToTerraform(this._serviceConfig),
      timeouts: iothubDpsSharedAccessPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
